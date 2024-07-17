import React, { useEffect } from "react";
import { EventBus } from "../EventBus";

const AudioComponent: React.FC = () => {
  useEffect(() => {
    const buttonAudio = new Audio('/public/audio/button.ogg');
    const correctAudio = new Audio('/public/audio/correct.ogg');
    const incorrectAudio = new Audio('/public/audio/incorrect.ogg');

      EventBus.on("button", () => {
        buttonAudio.currentTime = 0; // Reset to the start
        buttonAudio.play();
      });

      EventBus.on("incorrect", () => {
        incorrectAudio.currentTime = 0; // Reset to the start
        incorrectAudio.play();
      });
      EventBus.on("correct", () => {
        correctAudio.currentTime = 0; // Reset to the start
        correctAudio.play();
      });

      return () => {
        EventBus.removeListener("button");
        EventBus.removeListener("incorrect");
        EventBus.removeListener("correct");
      };
  }, []);
    return (
        <>
        </>
    );
};

export default AudioComponent;
