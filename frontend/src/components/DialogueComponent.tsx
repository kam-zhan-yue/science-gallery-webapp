import React, {useContext, useRef} from 'react';
import styled from 'styled-components';
import Typewriter, {TypewriterHandle} from "./Typewriter.tsx";
import DialogueBox from "./DialogueBox.tsx";
import {motion} from "framer-motion";
import {characters} from "../setup/Character.ts";
import {GameContext, GameContextType} from "../contexts/GameContext.tsx";

const TitleText = styled.div`
  font-size: 32px;
  font-family: "VT323", monospace;
  font-weight: 400;
  font-style: normal;
  line-height: 0.8em;
  margin-top: -5px;
`

const Separator = styled.div`
  border: none;
  border-top: 1px solid #ccc; /* Adjust color and style */
  margin: 2px 0; /* Adjust margin */
`

const CharacterContainer = styled(motion.div)`
  position: fixed;
  bottom: 150px;
  height: 60%;
  
  display: flex;
  flex-wrap: nowrap;

  & > * {
    flex: 1 1 auto; /* Flex-grow, flex-shrink, and flex-basis combined */
    min-width: 0; /* Ensure items can shrink below their content size */
  }
`

const Character = styled(motion.img)`
  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
  image-rendering: crisp-edges;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; // Ensures the image covers the area while maintaining aspect ratio
  z-index: -1;      // Make sure it is behind the overlay
`

interface DialogueComponentProps {
    text: string;
    tags: string[];
    next?: () => void;
}

// Styled component for the Overlay
const Blocker = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black overlay */
  display: block; /* Initially hidden */
`;

const InteractionOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  touch-action: none; /* Disable touch events */
`

const DialogueComponent: React.FC<DialogueComponentProps> = ({ text, tags, next }) => {
    // Splitting the text into character name and dialogue body if a colon exists
    const colonIndex = text.indexOf(':');
    const characterName = colonIndex !== -1 ? text.substring(0, colonIndex).trim() : '';
    const dialogueBody = colonIndex !== -1 ? text.substring(colonIndex + 1).trim() : text;
    const {player} = useContext(GameContext) as GameContextType;
    const typewriterRef = useRef<TypewriterHandle>(null);


    const prefix: string = '../assets/characters/';
    const getCharacterFullBody = (): string => {
        if(characterName === "Ship" || characterName == "You") {
            return prefix + characters[player.class].fullBody;
        } else if(characterName in characters) {
            return prefix + characters[characterName].fullBody;
        } else {
            return '';
        }
    }

    const getAnimationFromTag = (tag: string): string | null => {
        const split = tag.split(':');
        if (split.length > 1) {
            const name = split[0];
            const animationName = split[1];
            if (name in characters && animationName in characters[name].animations) {
                return characters[name].animations[animationName];
            }
        } else if (split.length > 0) {
            const name = split[0];
            if (name in characters) {
                const fullBody: string | undefined = characters[name].fullBody;
                if (fullBody) {
                    return fullBody;
                }
            }
        }
        return null;
    };

    const animations = (): string[] => {
        let anims: string[] = [];
        for (let tag of tags) {
            const animation = getAnimationFromTag(tag);
            if (animation) {
                anims.push(prefix + animation);
            }
        }
        return anims;
    };

    function touch() {
        if(typewriterRef.current) {
            typewriterRef.current.handleClick();
        }
    }

    const characterAnimations = animations(); // Get the animations once

    return (
        <>
            {(characterAnimations.length > 0 || (characterName && getCharacterFullBody()))&&
                <>
                    <Blocker/>
                    <CharacterContainer
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, transition: {duration: 0.8} }}
                        transition={{ duration: 0.2 }}>
                        {characterAnimations.length > 0 &&
                            <>
                                {characterAnimations.map((animation, index) => (
                                    <Character key={index} src={animation} alt='character'/>
                                ))}
                            </>
                        }
                        {characterAnimations.length == 0 &&
                            <>
                                <Character src={getCharacterFullBody()} alt='character'/>
                            </>
                        }
                    </CharacterContainer>
                </>
            }

            <InteractionOverlay onClick={touch}/>
            <DialogueBox handleClick={touch}>
                {/* Render character name, separator, and dialogue body separately if character name exists */}
                {characterName &&
                    <>
                        <TitleText>{characterName}</TitleText>
                        <Separator />
                    </>
                }
                <Typewriter ref={typewriterRef} text={dialogueBody} delay={15} next={next}/>
            </DialogueBox>
        </>
    );
};

export default DialogueComponent;
