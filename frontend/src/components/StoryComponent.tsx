import React, { useState, useEffect } from 'react';
// @ts-ignore
import {Story, Choice, InkObject} from "inkjs";
import styled from 'styled-components';
import DialogueComponent from "./DialogueComponent.tsx";
import ChoiceComponent from "./ChoiceComponent.tsx";
import CharacterComponent from "./CharacterComponent.tsx";
import Player from "../classes/Player.ts";
import KeypadComponent from "./KeypadComponent.tsx";

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

const StoryComponent: React.FC = () => {
  const [story, setStory] = useState<Story | null>(null);
  const [storyText, setStoryText] = useState<string>('');
  const [showingChoices, setShowingChoices] = useState<boolean>(false);
  const [choices, setChoices] = useState<Choice[]>([]);
  const [player, setPlayer] = useState<Player>(new Player());
  const [state, setState] = useState<string>('');

  useEffect(() => {
    const loadStory = async () => {
      const response: Response = await fetch('/ink/game.json');
      const storyContent: string = await response.text();
      // console.log(storyContent);
      const inkStory = new Story(storyContent);

      // TODO: Fix this to avoid having to always use a json
      // const response: Response = await fetch('/ink/game.ink');
      // const storyContent: string = await response.text();
      // console.log(storyContent);
      // // Define the compiler options, ensuring all necessary properties are included
      //
      // const jsonFileHandler: JsonFileHandler = new JsonFileHandler('/ink/');
      // const posixFileHandler: PosixFileHandler = new PosixFileHandler(`./ink`);
      //
      // const compilerOptions: CompilerOptions = {
      //   fileHandler: posixFileHandler
      // };
      // const inkStory: Story | null = new Compiler(storyContent, compilerOptions).Compile();


      setStory(inkStory);
      advance(inkStory);
    };

    loadStory();
  }, []);

  useEffect(() => {
    if (story) {
      story.variablesState.ObserveVariableChange((variableName: string, value: InkObject) => {
        // Update the character state whenever 'class' variable changes
        console.log(`VARIABLE ${variableName} changed to ${value}`)
        switch(variableName) {
          case 'class':
            player.class = value.toString();
            break;
          case 'finesse':
            player.finesse = Number(value.toString());
            break;
          case 'intuition':
            player.intuition = Number(value.toString());
            break;
          case 'persuasion':
            player.persuasion = Number(value.toString());
            break;
          case 'health':
            player.health = Number(value.toString());
            break;
          case 'game_state':
            gameStateChanged(value.toString());
            break;
        }
        setPlayer(player);
      });
    }
  }, [story]);

  const gameStateChanged = (newState: string) => {
    // if(newState === "planet_selection") {
    //   advance(story);
    // }
    // if planet selection (and character selection, need to advance to populate the choices!
    setState(newState);
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
    } else if (!showingChoices) {
      // If the choices are not showing, check whether there are choices
      const choices: Choice[] = story.currentChoices;
      if (choices.length > 0) {
        // If there are choices, then show them!
        console.log('has choices, display them!!');
        showChoices(choices);
      } else {
        // If there are no choices, and we are not showing the choices, then the story has ended
        console.log('story has ended!');
      }
    } else {
      console.log('pick a damn choice!');
    }
  }

  const showChoices = (choices: Choice[]) => {
    setChoices(choices);
    setShowingChoices(true);
  }

  const handleOverlayClick = () => {
    advance(story);
  };

  const handleChoiceClick = (choiceIndex: number) => {
    if (story) {
      console.log(`choosing ${choiceIndex}`);
      story.ChooseChoiceIndex(choiceIndex);
      setShowingChoices(false);
      advance(story);
    }
  };

  return (
      <>
        <CharacterComponent player={player}></CharacterComponent>
        <DialogueComponent text={storyText}></DialogueComponent>

        <Overlay onClick={handleOverlayClick}>
        </Overlay>

        {state == "planet_selection" &&
        <>
        <KeypadComponent
            choices={choices}
            handleCodeInput={handleChoiceClick}
          />
        </>}
        {state != "planet_selection" && showingChoices &&
        <ChoiceComponent
            choices={choices}
            handleChoiceClick={handleChoiceClick}
            />
        }
      </>
  );
};

export default StoryComponent;
