import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

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
  font-size: 30px;
`;

const CharacterSpan = styled.span`
  animation: ${fadeIn} 0.5s ease-in-out;
`;

const Typewriter: React.FC<TypewriterProps> = ({ text, delay, next }) => {
    const [currentText, setCurrentText] = useState<string[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [scrolling, setScrolling] = useState<boolean>(true);

    useEffect(() => {
        setScrolling(true);
        setCurrentIndex(0);
        setCurrentText([]);
    }, [text]);

    useEffect(() => {
        if (scrolling) {
            if (currentIndex < text.length) {
                const timeout = setTimeout(() => {
                    setCurrentText((prevText) => [...prevText, text[currentIndex]]);
                    setCurrentIndex((prevIndex) => prevIndex + 1);
                }, delay);

                return () => clearTimeout(timeout);
            } else {
                const timeout = setTimeout(() => {
                    setScrolling(false)
                }, delay*3);

                return () => clearTimeout(timeout);
            }
        }
    }, [currentIndex, text, delay, scrolling]);

    useEffect(() => {
        document.body.addEventListener('click', handleClick, true);
        return () => {
            document.body.removeEventListener('click', handleClick, true);
        };
    }, [scrolling, text]);

    const handleClick = () => {
        if (scrolling) {
            setCurrentText(text.split('')); // Populate entire text
            setScrolling(false);
        } else if (next) {
            next(); // Call next function
        }
    }

    // Wrap each character in a span with the fade-in animation
    const animatedText = currentText.map((char, index) => (
        <CharacterSpan key={index}>{char}</CharacterSpan>
    ));

    return (
        <>
            {scrolling && <DialogueText>{animatedText}</DialogueText>}
            {!scrolling && <DialogueText>{text}</DialogueText>}
        </>
        );
};

export default Typewriter;
