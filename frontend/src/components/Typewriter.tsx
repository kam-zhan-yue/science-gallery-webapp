import React, { useState, useEffect } from 'react';
import styled, {keyframes} from 'styled-components';

interface TypewriterProps {
    text: string;
    delay: number;
    next?: () => void;
}

// Define the keyframes for the fade-in animation
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const DialogueText = styled.div`
  font-size: 25px;
  font-family: "VT323", monospace;
  font-weight: 400;
  font-style: normal;
  line-height: 1em;
  overflow-wrap: break-word;
`;

const CharacterSpan = styled.span`
  animation: ${fadeIn} 0.5s ease-in-out;
`;

enum TypewriterState {
    Idle,
    Typing,
    Finished,
}

const Typewriter: React.FC<TypewriterProps> = ({ text, delay, next }) => {
    const [currentText, setCurrentText] = useState<string[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const [state, setState] = useState<TypewriterState>(TypewriterState.Idle);

    // Use Effect for setting text
    useEffect(() => {
        console.log(`Text set to ${text}`);
        setState(TypewriterState.Typing);
        setCurrentText([]);
        setCurrentIndex(0);
    }, [text]);

    // Use Effect for typewriter effect
    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setCurrentText((prevText) => [...prevText, text[currentIndex]]);
                setCurrentIndex((prevIndex) => prevIndex + 1);
            }, delay);
            return () => clearTimeout(timeout);
        }
    }, [currentIndex, text, delay]);

    // Use Effect for Click
    useEffect(() => {
        const handleClick = () => {
            if (currentText.length !== text.length) {
                setCurrentIndex(text.length);
                setCurrentText(text.split(''));
            } else if (next) {
                next();
                setState(TypewriterState.Finished);
            }
        }
        // Bind the event listener
        document.addEventListener("click", handleClick);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("click", handleClick);
        };
    }, [text, currentIndex, state]);

    // Wrap each character in a span with the fade-in animation
    const animatedText = () => {
        if(state === TypewriterState.Finished) {
            return text;
        } else {
            return currentText.map((char, index) => (
                <CharacterSpan key={index}>{char}</CharacterSpan>
            ));
        }
    }

    return (
        <>
            {<DialogueText>{animatedText()}</DialogueText>}
        </>
        );
};

export default Typewriter;
