import React, { useState, useEffect } from 'react';
import { Story } from 'inkjs/engine/Story';
import { Compiler } from 'inkjs/compiler/Compiler';
import styled from 'styled-components';

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
const DialogueBox = styled.div`
`

const DialogueText = styled.div`
`

const StoryComponent: React.FC = () => {
  const [story, setStory] = useState<Story | null>(null);
  const [storyText, setStoryText] = useState('');
  const [choices, setChoices] = useState<any[]>([]);
  const [showingChoices, setShowingChoices] = useState<boolean>(false);
  const [scrolling, setScrolling] = useState<boolean>(false);

  const advance = (story: Story | null) => {
    if (!story) return;
    // set the story text here
    if (story.canContinue) {
      console.log('advance');
      const initialStoryText: string = story.Continue() ?? ''; // Fallback to empty string if null
      setStoryText(initialStoryText);
    } else {
      console.log('cannot advance!');
    }
  }

  useEffect(() => {

    const loadStory = async () => {
      const response: Response = await fetch('/ink/story.ink');
      const storyContent: string = await response.text();
      const storyCompiled: Story | null = new Compiler(storyContent).Compile();
      setStory(storyCompiled);
      // set the story text here
      advance(storyCompiled);
    };
  
    loadStory();
  }, []); // Empty dependency array means this effect runs only once on mount

  const handleOverlayClick = () => {
    advance(story);
  };

  return (
    <>
    <Overlay onClick={() => handleOverlayClick()}>
        <DialogueBox>
            <DialogueText>
                {storyText}
            </DialogueText>
        </DialogueBox>
    </Overlay>
    </>
  );
};

export default StoryComponent;