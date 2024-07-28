import React, { useEffect } from "react";
import { EventBus } from "../EventBus";

const AudioComponent: React.FC = () => {
  useEffect(() => {
    const buttonAudio = new Audio('/audio/button.ogg');
    const correctAudio = new Audio('/audio/keypad_correct.mp3');
    const incorrectAudio = new Audio('/audio/keypad_incorrect.mp3');
    const badShard = new Audio('/audio/bad_shard.mp3');
    const goodShard = new Audio('/audio/good_shard.mp3');
    const item = new Audio('/audio/item.mp3');
    const takeDamage = new Audio('/audio/take_damage.mp3');

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

      EventBus.on("get_shard", (shard: string) => {
        if(shard == 'good') {
          goodShard.currentTime = 0;
          goodShard.play();
        } else if(shard == 'bad') {
          badShard.currentTime = 0;
          badShard.play();
        }
      });

    EventBus.on("get_item", () => {
      item.currentTime = 0;
      item.play();
    });

    EventBus.on("on_damage", () =>  {
      takeDamage.currentTime = 0;
      takeDamage.play();
    })

      return () => {
        EventBus.removeListener("button");
        EventBus.removeListener("incorrect");
        EventBus.removeListener("correct");
        EventBus.removeListener("get_shard");
        EventBus.removeListener("get_item");
        EventBus.removeListener("on_damage");
      };
  }, []);
    return (
        <>
        </>
    );
};

export default AudioComponent;
