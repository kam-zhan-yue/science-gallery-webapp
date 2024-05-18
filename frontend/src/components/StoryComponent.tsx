import React, { useState, useEffect } from 'react';
import { Story } from 'inkjs/engine/Story';
import { Compiler } from 'inkjs/compiler/Compiler';

const StoryComponent: React.FC = () => {
  const [story, setStory] = useState<Story | null>(null);
  const [storyText, setStoryText] = useState('');
  const [choices, setChoices] = useState<any[]>([]);

  useEffect(() => {
    const loadStory = async () => {
      const response = await fetch('/ink/story.ink');
      const storyContent = await response.text();
      console.log(storyContent);
      const storyCompiled = new Compiler(storyContent).Compile();
      console.log(storyCompiled);
      setStory(storyCompiled);
      const initialStoryText = storyCompiled.Continue() ?? ''; // Fallback to empty string if null
      setStoryText(initialStoryText);
      setChoices(storyCompiled.currentChoices);
    };

    loadStory();
  }, []);

  const handleChoiceClick = (choiceIndex: number) => {
    if (story) {
      story.ChooseChoiceIndex(choiceIndex);
      const newStoryText = story.Continue() ?? ''; // Fallback to empty string if null
      setStoryText(newStoryText);
      setChoices(story.currentChoices);
    }
  };


  return (
    <div>
      <p>{storyText}</p>
      <div>
        {choices.map((choice, index) => (
          <button key={index} onClick={() => handleChoiceClick(index)}>
            {choice.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default StoryComponent;