// src/Game.tsx
import React, {useEffect, useRef} from 'react';
import Phaser from 'phaser';
import {Boot} from "./scenes/Boot.tsx";
import {Universe} from "./scenes/Universe.tsx";

const Game: React.FC = () => {
  const gameRef = useRef<HTMLDivElement>(null);
  const universeRef = useRef<Universe | null>(null);

  // Game Initiation
  useEffect(() => {
    const bootScene: Boot = new Boot();
    const universeScene: Universe = new Universe();
    universeRef.current = universeScene;
    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      backgroundColor: '#1f1137',
      scale: {
        mode: Phaser.Scale.RESIZE,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        zoom: 10
      },
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { x: 0, y: 0 },
        },
      },
      scene: [bootScene, universeScene],
    };

    const game = new Phaser.Game(config);
    gameRef.current!.appendChild(game.canvas);

    return () => {
      game.destroy(true);
    };
  }, []);

  // Event Listeners
  useEffect(() => {
    // EventBus.on('planet_changed', (planet: string) => {
    //   console.log(`game is going to ${planet}`);
    // })

  }, []);

  const planetChanged = (planet: string) => {

  }

  return <div ref={gameRef} />;
};

export default Game;