import React, {useState, useEffect, useContext} from 'react';
// @ts-ignore
import {Story, Choice, InkObject} from "inkjs";
import DialogueComponent from "./DialogueComponent.tsx";
import ChoiceComponent from "./ChoiceComponent.tsx";
import CharacterComponent from "./CharacterComponent.tsx";
import Player from "../classes/Player.ts";
import KeypadComponent from "./KeypadComponent.tsx";
import {Universe} from "../game/scenes/Universe.tsx";
import {EventBus} from "../EventBus.tsx";
import main from "../assets/audio/main.mp3";
import {GameContext, GameContextType} from "../contexts/GameContext.tsx";
import PlanetComponent from "./PlanetComponent.tsx";

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
  const [player, setPlayer] = useState<Player>(new Player());
  const [inkState, setInkState] = useState<string>('');
  const [storyState, setStoryState] = useState<StoryState>(StoryState.Dialogue);
  const {debug} = useContext(GameContext) as GameContextType;

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
          case 'game_state':
            setInkState(value.toString());
            if(value.toString() === 'planet_selection') {
              console.log('set universe interactive')
              setStoryState(StoryState.Choosing);
              universeRef?.reset();
            }
            break;
          case 'planet':
            selectPlanet(value.toString());
            break;
        }
      });
    }
  }, [story]);

  // Game listeners
  useEffect(() => {
    universeRef?.start();

    // Inspecting a planet will trigger the travelling state due to animations
    EventBus.on('inspect', (planet: string) => {
      setStoryState(StoryState.Travelling);
      console.log(`inspect ${planet}`);
      universeRef?.inspect(planet);
    });

    // Once landed, should show UI options
    EventBus.on('landed', (planet: string) => {
      setStoryState(StoryState.Inspecting);
      console.log(`Landed on ${planet}`);
    });

    // Once reset, should go  back to choosing a planet
    EventBus.on('reset', () => {
      setStoryState(StoryState.Choosing);
      console.log(`Choosing a planet`);
    });

    return () => {
      EventBus.removeListener('inspect');
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
      } else {
        // console.log('story has ended!');
      }
    } else {
      // console.log('pick a damn choice!');
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

  const selectPlanet = (planet: string) => {
    console.log(`planet changed from ink ${planet}`);
    setStoryState(StoryState.Dialogue);
  }

  const inspectYes = () => {
    setStoryState(StoryState.Keypad);
  }

  const inspectNo = () => {
    setStoryState(StoryState.Travelling);
    universeRef?.reset();
  }

  const keypadBack = () => {
    setStoryState(StoryState.Inspecting);
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
              <CharacterComponent player={player}></CharacterComponent>
            </>
        }

        {storyState === StoryState.Inspecting &&
            <>
              <PlanetComponent
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
          />
        </>}
        {inkState != "planet_selection" && inkState != 'travelling' && showingChoices &&
        <ChoiceComponent
            choices={choices}
            handleChoiceClick={handleChoiceClick}
            />
        }
      </>
  );
};

export default StoryComponent;
