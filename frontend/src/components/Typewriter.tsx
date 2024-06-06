import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

interface TypewriterProps {
    text: string;
    delay: number;
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

const Typewriter: React.FC<TypewriterProps> = ({ text, delay }) => {
    const [currentText, setCurrentText] = useState<string[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        setCurrentIndex(0);
        setCurrentText([]);
    }, [text]);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setCurrentText((prevText) => [...prevText, text[currentIndex]]);
                setCurrentIndex((prevIndex) => prevIndex + 1);
            }, delay);

            return () => clearTimeout(timeout);
        }
    }, [currentIndex, text, delay]);

    // Wrap each character in a span with the fade-in animation
    const animatedText = currentText.map((char, index) => (
        <CharacterSpan key={index}>{char}</CharacterSpan>
    ));

    return <DialogueText>{animatedText}</DialogueText>;
};

export default Typewriter;
