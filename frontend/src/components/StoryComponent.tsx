import React, {useContext, useEffect, useState} from 'react';
// @ts-ignore
import {Choice, InkObject, Story, EvaluateFunction} from "inkjs";
import DialogueComponent from "./DialogueComponent.tsx";
import ChoiceComponent from "./ChoiceComponent.tsx";
import CharacterComponent from "./PlayerComponent.tsx";
import Player from "../classes/Player.ts";
import Planet from "../classes/Planet.ts";
import KeypadComponent from "./KeypadComponent.tsx";
import {Universe} from "../game/scenes/Universe.tsx";
import {EventBus} from "../EventBus.tsx";
import main from "../assets/audio/main.mp3";
import {GameContext, GameContextType} from "../contexts/GameContext.tsx";
import PlanetComponent from "./PlanetComponent.tsx";
import GuideComponent from "./GuideComponent.tsx";
import Item from "../classes/Item.ts";

interface StoryComponentProps {
  universeRef: Universe | null;
}

enum StoryState {
  Dialogue,
  Choosing,
  Travelling,
  Inspecting,
  Keypad,
}

const StoryComponent: React.FC<StoryComponentProps> = ({universeRef}) => {
  const [story, setStory] = useState<Story | null>(null);
  const [storyText, setStoryText] = useState<string>('');
  const [showingChoices, setShowingChoices] = useState<boolean>(false);
  const [choices, setChoices] = useState<Choice[]>([]);
  const [planet, setPlanet] = useState<Planet>(new Planet());
  const [player, setPlayer] = useState<Player>(new Player());
  const [storyState, setStoryState] = useState<StoryState>(StoryState.Dialogue);
  const {debug, inkState, setInkState} = useContext(GameContext) as GameContextType;

  // Playing audio
  useEffect(() =>{
    if(!debug) {
      const audio = new Audio(main);
      audio.play();
    }
  }, []);

  // Loading game.json for the story
  useEffect(() => {
    const loadStory = async () => {
      const response: Response = await fetch('/ink/game.json');
      const storyContent: string = await response.text();
      const inkStory = new Story(storyContent);
      setStory(inkStory);
      advance(inkStory);
    };

    loadStory();
  }, []);

  // Handles variable changes
  useEffect(() => {
    if (story) {
      story.variablesState.ObserveVariableChange((variableName: string, value: InkObject) => {
        // Update the character inkState whenever 'class' variable changes
        // console.log(`VARIABLE ${variableName} changed to ${value}`)
        switch(variableName) {
          case 'class':
            player.class = value.toString();
            setPlayer(player);
            break;
          case 'finesse':
            player.finesse = Number(value.toString());
            setPlayer(player);
            break;
          case 'intuition':
            player.intuition = Number(value.toString());
            setPlayer(player);
            break;
          case 'persuasion':
            player.persuasion = Number(value.toString());
            setPlayer(player);
            break;
          case 'health':
            player.health = Number(value.toString());
            setPlayer(player);
            break;
          case 'inventory':
            player.inventory = value.toString();
            setPlayer(player);
            break;
          case 'game_state':
            setInkState(value.toString());
            if(value.toString() === 'planet_selection') {
              choosePlanets(story)
            }
            break;
          case 'planet':
            selectPlanet(value.toString());
            break;
        }
      });
    }
  }, [story]);

  const choosePlanets = (story: Story | null) => {
    // Reset the universe and state
    setStoryState(StoryState.Travelling)
    // Set the current planet from the current choices
    let interactivePlanets: string[] = [];
    for (let i= 0; i<story.currentChoices.length; ++i) {
      const choice: string = story.currentChoices[i].text;
      const values: string[] = choice.split(':');
      if(values.length > 0) {
        interactivePlanets.push(values[0]);
      }
    }
    universeRef?.reset(interactivePlanets);

  }

  useEffect(() => {
    // Inspecting a planet will trigger the travelling state due to animations
    EventBus.on('inspect', (planet: string) => {
      setStoryState(StoryState.Travelling);
      universeRef?.inspect(planet);

      // Set the current planet from the current choices
      for (let i= 0; i<story.currentChoices.length; ++i) {
        const choice: string = story.currentChoices[i].text;
        const values: string[] = choice.split(':');
        if(values.length >= 2 && planet === values[0]) {
          const planetChoice = new Planet();
          planetChoice.name = values[0];
          planetChoice.code = values[1];
          planetChoice.choice = i;
          setPlanet(planetChoice);
        }
      }
    });

    return () => {
      EventBus.removeListener('inspect');
    }
  }, [universeRef, story])

  // Game listeners
  useEffect(() => {
    universeRef?.start();
    // Once landed, should show UI options
    EventBus.on('landed', (_planet: string) => {
      setStoryState(StoryState.Inspecting);
    });

    // Once reset, should go  back to choosing a planet
    EventBus.on('reset', () => {
      setStoryState(StoryState.Choosing);
    });

    return () => {
      EventBus.removeListener('landed');
      EventBus.removeListener('reset');
    }

  }, [universeRef])

  const advance = (story: Story | null) => {
    if (!story) return;
    if (story.canContinue) {
      const bodyText: string = story.Continue() ?? '';
      setStoryText(bodyText);
      setChoices(story.currentChoices)
    } else if (!showingChoices) {
      const choices: Choice[] = story.currentChoices;
      if (choices.length > 0) {
        setShowingChoices(true);
      }
    }
  }

  // Handle clicking
  const next = () => {
    advance(story);
  };

  const handleChoiceClick = (choiceIndex: number) => {
    if (story) {
      // console.log(`choosing ${choiceIndex}`);
      story.ChooseChoiceIndex(choiceIndex);
      setShowingChoices(false);
      advance(story);
    }
  };

  const handleCodeInput = (choiceIndex: number) => {
    if(story) {
      setStoryState(StoryState.Dialogue);
      story.ChooseChoiceIndex(choiceIndex);
      setShowingChoices(false);
      // don't advance, wait for planet to change
      advance(story);
    }
  }

  const selectPlanet = (_planet: string) => {
    setStoryState(StoryState.Dialogue);
  }

  const inspectYes = () => {
    setStoryState(StoryState.Keypad);
  }

  const inspectNo = () => {
    setStoryState(StoryState.Travelling);
    choosePlanets(story);
  }

  const keypadBack = () => {
    setStoryState(StoryState.Inspecting);
  }

  const onUseItem = (item: Item) => {
    if(inkState === "take_item" && story) {
      story.EvaluateFunction('take', [item.name], true);
      console.log(`try use ${item.name} from story component`)

      for (let i= 0; i<story.currentChoices.length; ++i) {
        const choice: string = story.currentChoices[i].text;
        // check whether is direct equivalent, other, or in list
        if(choice === item.name) {
          handleChoiceClick(i)
          break;
        } else if(choice === 'other') {
          handleChoiceClick(i)
          break;
        } else {
          const values: string[] = choice.split(',');
          for(let j=0; j<values.length; ++j) {
            if(values[j] === item.name) {
              handleChoiceClick(i)
              break;
            }
          }
        }
      }
    }
  }

  return (
      <>
        {storyState === StoryState.Dialogue &&
            <>
              <DialogueComponent text={storyText} next={next}></DialogueComponent>
            </>
        }

        {storyState !== StoryState.Travelling &&
            <>
              <CharacterComponent player={player} onUseItem={onUseItem}></CharacterComponent>
            </>
        }

        {storyState === StoryState.Choosing &&
            <>
              <GuideComponent/>
            </>
        }

        {storyState === StoryState.Inspecting &&
            <>
              <PlanetComponent
                  planet={planet}
                  onYesClicked={inspectYes}
                  onNoClicked={inspectNo}
              />
            </>
        }

        {storyState === StoryState.Keypad &&
          <>
            <KeypadComponent
                choices={choices}
                handleCodeInput={handleCodeInput}
                handleBackClicked={keypadBack}
                planet={planet}
            />
          </>
        }
        {inkState != "planet_selection" && inkState != "take_item" && storyState !== StoryState.Travelling && showingChoices &&
            <>
              <ChoiceComponent
                  choices={choices}
                  handleChoiceClick={handleChoiceClick}
              />
            </>
        }
      </>
  );
};

export default StoryComponent;
