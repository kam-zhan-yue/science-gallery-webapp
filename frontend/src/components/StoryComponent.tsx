import React, {useContext, useEffect, useRef, useState} from 'react';
// @ts-ignore
import {Choice, InkObject, Story, EvaluateFunction} from "inkjs";
import DialogueComponent from "./DialogueComponent.tsx";
import ChoiceComponent from "./choices/ChoiceComponent.tsx";
import Planet from "../classes/Planet.ts";
import KeypadComponent from "./KeypadComponent.tsx";
import {Universe, UniverseState} from "../game/scenes/Universe.tsx";
import {EventBus} from "../EventBus.tsx";
import main from "../assets/audio/main.mp3";
import {GameContext, GameContextType} from "../contexts/GameContext.tsx";
import PlanetComponent from "./PlanetComponent.tsx";
import GuideComponent from "./GuideComponent.tsx";
import BackgroundComponent from "./BackgroundComponent.tsx";
import NotificationComponent from "./NotificationComponent.tsx";
import PlayerComponent, {PlayerComponentHandle} from './player/PlayerComponent.tsx';
import MirrorComponent from "./MirrorComponent.tsx";
import NameSelectComponent from "./NameComponent.tsx";
import styled from "styled-components";
import {TextStyle} from "./styled/Text.tsx";
import EndingComponent from "./EndingComponent.tsx";
import { achievements } from '../setup/Achievements.ts';
import { updateDatabase } from './statistics/firestore.tsx';

interface StoryComponentProps {
  universeRef: Universe | null;
}

enum StoryState {
  Dialogue,
  Choosing,
  Travelling,
  Inspecting,
  Keypad,
  End,
}

const DebugPanel = styled(TextStyle)`
  position: absolute;
  top: 15px;
  right: 15px;
  display: flex;
  flex-direction: column;
  text-align: right;
  @media (max-width: 600px) {
    top: 120px;
  }
`

const StoryComponent: React.FC<StoryComponentProps> = ({universeRef}) => {
  const [story, setStory] = useState<Story | null>(null);
  const [background, setBackground] = useState<string>('');
  const [storyText, setStoryText] = useState<string>('');
  const [tags, setTags] = useState<string[]>([]);
  const [showingChoices, setShowingChoices] = useState<boolean>(false);
  const [choices, setChoices] = useState<Choice[]>([]);
  const [planet, setPlanet] = useState<Planet>(new Planet());
  const [storyState, setStoryState] = useState<StoryState>(StoryState.Dialogue);
  const [ending, setEnding] = useState<string>('unknown');
  const {debug, inkState, setInkState, player, setPlayer} = useContext(GameContext) as GameContextType;
  const playerComponentRef = useRef<PlayerComponentHandle>(null);

  // Playing audio
  useEffect(() => {
    if (!debug) {
      const audio = new Audio(main);
      audio.loop = true;
      audio.play()
          .then(() => {
            // Audio started successfully
            console.log('Audio is playing');
          })
          .catch((error) => {
            // Handle the error
            console.error('Error playing audio:', error);
          });
    }
  }, []);

  const loadStory = async () => {
    setBackground('');
    setStoryState(StoryState.Dialogue);
    const response: Response = await fetch('/ink/game.json');
    const storyContent: string = await response.text();
    const inkStory = new Story(storyContent);
    setStory(inkStory);
    start(inkStory);
  };

  // Loading game.json for the story
  useEffect(() => {
    loadStory()
        .then(() => {
          console.log('Game loaded successfully');
        })
        .catch((error) => {
          // Handle the error
          console.error('Error loading game:', error);
        });
  }, []);

  // Handles variable changes
  useEffect(() => {
    if (story) {
      story.variablesState.ObserveVariableChange((variableName: string, value: InkObject) => {
        // Update the character inkState whenever 'class' variable changes
        // console.log(`VARIABLE ${variableName} changed to ${value}`)
        const valueString = value.toString();
        switch(variableName) {
          case 'name':
            player.name = valueString;
            setPlayer(player);
            break;
          case 'class':
            player.class = valueString;
            setPlayer(player);
            break;
          case 'finesse':
            player.finesse = Number(valueString);
            setPlayer(player);
            break;
          case 'intuition':
            player.intuition = Number(valueString);
            setPlayer(player);
            break;
          case 'persuasion':
            player.persuasion = Number(valueString);
            setPlayer(player);
            break;
          case 'health':
            player.health = Number(valueString);
            setPlayer(player);
            break;
          case 'inventory':
            player.inventory = valueString;
            setPlayer(player);
            break;
          case 'progress':
            player.inkProgress = Number(valueString);
            setPlayer(player);
            break;
          case 'ending':
            setEnding(valueString);
            break;
          case 'first_shard':
            player.firstShard = valueString;
            setPlayer(player);
            break;
          case 'second_shard':
            player.secondShard = valueString;
            setPlayer(player);
            break;
          case 'third_shard':
            player.thirdShard = valueString;
            setPlayer(player);
            break;
          case 'game_state':
            console.log(`game state is ${valueString}`)
            setInkState(valueString);
            if(valueString === 'planet_selection') {
              choosePlanets(story)
            }
            if(valueString === 'take_item') {
              if(playerComponentRef.current) {
                playerComponentRef.current.openInventory();
              }
            }
            break;
          case 'planet':
            selectPlanet(valueString);
            break;
          case 'background':
            setBackground(valueString);
            break;
          case 'achievement':
            if(valueString in achievements) {
              EventBus.emit('achievement', valueString);
              updateDatabase(valueString);
            }
            break;
        }
      });
    }
  }, [story]);

  const choosePlanets = (story: Story | null) => {
    // Reset the universe and state
    setStoryState(StoryState.Travelling);
    // Set the current planet from the current choices
    let interactivePlanets: string[] = [];
    for (let i= 0; i<story.currentChoices.length; ++i) {
      const choice: string = story.currentChoices[i].text;
      const values: string[] = choice.split(':');
      if(values.length > 0) {
        interactivePlanets.push(values[0]);
      }
    }
    if(universeRef?.state === UniverseState.Story) {
      universeRef?.setNavigation();
      universeRef?.updateOrbits(interactivePlanets);
    } else {
      universeRef?.reset(interactivePlanets);
    }
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

  }, [universeRef]);

  function start(story: Story | null) {
    if(!story) return;
    if(!story.canContinue) return;
    story.Continue();
    for(let i: number = 0; i<story.currentChoices.length; ++i) {
      const choice: string = story.currentChoices[i].text;
      if(debug && choice === 'debug') {
        story.ChooseChoiceIndex(i);
        advance(story);
        break;
      } else if(!debug && choice === 'game') {
        story.ChooseChoiceIndex(i);
        advance(story);
        break;
      }
    }
  }

  const advance = (story: Story | null) => {
    if (!story) return;
    // If the story can continue, it means there is new text!
    // If the story cannot continue, it means there might be choices.
    // If the choices are not showing, show the choices
    // If the choices are showing, do nothing
    if (story.canContinue) {
      const bodyText: string = story.Continue() ?? '';
      setStoryText(bodyText);
      setChoices(story.currentChoices);
      setTags(story.currentTags);
    } else if(!showingChoices) {
      setChoices(story.currentChoices);
      const choices: Choice[] = story.currentChoices;
      if (choices.length > 0) {
        // If there are choices, then show them!
        // console.log('has choices, display them!!');
        setShowingChoices(true);
      } else {
        // If there are no choices, and we are not showing the choices, then the story has ended
        // console.log('story has ended!');
        end();
      }
    }
  }

  function end(){
    setStoryState(StoryState.End);
    if(ending === 'sheep') {

    } else if(ending === 'unknown') {

    }
  }

  const selectCharacter = (character: string) => {
    chooseChoice(character);
  }

  function selectName(name: string) {
    story.EvaluateFunction('set_name', [name], true);
    chooseChoice('done');
  }

  function skipName() {
    chooseChoice('done');
  }

  const chooseChoice = (choice: string) => {
    if(story && choices) {
      for(let i: number = 0; i<story.currentChoices.length; ++i) {
        if(choices[i].text == choice) {
          story.ChooseChoiceIndex(i);
          advance(story);
          break;
        }
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
      universeRef?.setStory();
      setStoryState(StoryState.Dialogue);
      story.ChooseChoiceIndex(choiceIndex);
      setShowingChoices(false);
      // don't advance, wait for planet to change
      advance(story);
    }
  }

  const selectPlanet = (_planet: string) => {
    universeRef?.init(_planet);
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

  const onUseItem = (itemKey: string) => {
    if(inkState === "take_item" && story) {
      story.EvaluateFunction('take', [itemKey], true);

      for (let i= 0; i<story.currentChoices.length; ++i) {
        const choice: string = story.currentChoices[i].text;
        // check whether is direct equivalent, other, or in list
        if(choice === itemKey) {
          handleChoiceClick(i)
          break;
        } else if(choice === 'other') {
          handleChoiceClick(i)
          break;
        } else {
          const values: string[] = choice.split(',');
          for(let j=0; j<values.length; ++j) {
            if(values[j] === itemKey) {
              handleChoiceClick(i)
              break;
            }
          }
        }
      }
    }
  }

  function restart() {
    loadStory();
  }

  return (
      <>
        {storyState !== StoryState.End &&
          <>
            {inkState != "character_selection" && inkState != 'name_select' &&
                <>
                  <BackgroundComponent
                      backgroundKey={background}
                  />
                </>
            }

            {storyState === StoryState.Dialogue && inkState != "character_selection" && inkState != 'name_select' &&
                <>
                  <DialogueComponent text={storyText} tags={tags} next={next}></DialogueComponent>
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

            {inkState !== "planet_selection" && inkState !== "take_item" && inkState !== 'name_select' && storyState !== StoryState.Travelling && showingChoices &&
                <>
                  <ChoiceComponent
                      choices={choices}
                      handleChoiceClick={handleChoiceClick}
                  />
                </>
            }

            {storyState !== StoryState.Travelling && storyState !== StoryState.Inspecting && storyState !== StoryState.Keypad
                && inkState != "character_selection" && inkState != 'name_select' &&
                <>
                  <PlayerComponent ref={playerComponentRef} player={player} onUseItem={onUseItem}></PlayerComponent>
                </>
            }


            {inkState === "name_select" &&
                <>
                  <NameSelectComponent select={selectName} skip={skipName}/>
                </>
            }

            {inkState ===  "character_selection" &&
                <>
                  <MirrorComponent selectCharacter={selectCharacter}/>
                </>
            }
            <NotificationComponent/>
          </>
        }

        {debug &&
            <>
              <DebugPanel>
                <div>Ink State: {inkState}</div>
                <div>Story State: {StoryState[storyState]}</div>
              </DebugPanel>
            </>
        }
        {storyState === StoryState.End &&
            <>
              <EndingComponent ending={ending} restart={restart}/>
            </>
        }
      </>
  );
};

export default StoryComponent;
