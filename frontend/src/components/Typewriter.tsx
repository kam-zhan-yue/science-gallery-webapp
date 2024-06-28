import {useState, useEffect, forwardRef, useImperativeHandle} from 'react';
import styled, {keyframes} from 'styled-components';
import {TextStyle} from "./styled/Text.tsx";

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

const DialogueText = styled(TextStyle)`
  font-size: 22px;
  font-weight: 400;
  font-style: normal;
  line-height: 1em;
  overflow-wrap: break-word;
`;

const CharacterSpan = styled.span`
  animation: ${fadeIn} 0.5s ease-in-out forwards;
`;

enum TypewriterState {
    Idle,
    Typing,
    Finished,
}

export interface TypewriterHandle {
    handleClick: () => void;
}

const Typewriter = forwardRef<TypewriterHandle, TypewriterProps>(({ text, delay, next }, ref) => {
    const [currentText, setCurrentText] = useState<string[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const [state, setState] = useState<TypewriterState>(TypewriterState.Idle);
    const fade: boolean = false;

    useImperativeHandle(ref, () => ({
        handleClick,
    }));


    // Use Effect for setting text
    useEffect(() => {
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

    const handleClick = () => {
        if (currentText.length !== text.length) {
            setCurrentIndex(text.length);
            setCurrentText(text.split(''));
        } else if (next) {
            next();
            setState(TypewriterState.Finished);
        }
    }

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
            {<DialogueText>{fade ? animatedText() : currentText}</DialogueText>}
        </>
        );
});

export default Typewriter;
