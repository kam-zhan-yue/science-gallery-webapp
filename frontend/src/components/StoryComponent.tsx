import React, {useState, useEffect} from 'react';
// @ts-ignore
import {Story, Choice, InkObject} from "inkjs";
import styled from 'styled-components';
import DialogueComponent from "./DialogueComponent.tsx";
import ChoiceComponent from "./ChoiceComponent.tsx";
import CharacterComponent from "./CharacterComponent.tsx";
import Player from "../classes/Player.ts";
import KeypadComponent from "./KeypadComponent.tsx";
import {Universe} from "../game/scenes/Universe.tsx";
import {EventBus} from "../EventBus.tsx";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

interface StoryComponentProps {
  universeRef: Universe | null;
}

const StoryComponent: React.FC<StoryComponentProps> = ({universeRef}) => {
  const [story, setStory] = useState<Story | null>(null);
  const [storyText, setStoryText] = useState<string>('');
  const [showingChoices, setShowingChoices] = useState<boolean>(false);
  const [choices, setChoices] = useState<Choice[]>([]);
  const [player, setPlayer] = useState<Player>(new Player());
  const [gameState, setGameState] = useState<string>('');
  const [state, setState] = useState<string>('');

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
        // Update the character gameState whenever 'class' variable changes
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
            setGameState(value.toString());
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
    EventBus.on('landed', (planet: string) => {
      setState('landed');
      console.log(`Landed on ${planet}`);
    });

    return () => {
      EventBus.removeListener('landed');
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

  const handleOverlayClick = () => {
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
      story.ChooseChoiceIndex(choiceIndex);
      setShowingChoices(false);
      // don't advance, wait for planet to change
      advance(story);
    }
  }

  const selectPlanet = (planet: string) => {
    console.log(`planet changed from ink ${planet}`);
    setState('travelling');
    if(universeRef) {
      universeRef.goToPlanet(planet);
    }
  }

  return (
      <>
        {state !== 'travelling' &&
            <>
              <CharacterComponent player={player}></CharacterComponent>
              <DialogueComponent text={storyText}></DialogueComponent>
            </>
        }


        <Overlay onClick={handleOverlayClick}>
        </Overlay>

        {gameState == "planet_selection" &&
        <>
        <KeypadComponent
            choices={choices}
            handleCodeInput={handleCodeInput}
          />
        </>}
        {gameState != "planet_selection" && gameState != 'travelling' && showingChoices &&
        <ChoiceComponent
            choices={choices}
            handleChoiceClick={handleChoiceClick}
            />
        }
      </>
  );
};

export default StoryComponent;
