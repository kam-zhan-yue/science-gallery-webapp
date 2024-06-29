// src/Game.tsx
import {useEffect, useRef, forwardRef } from 'react';
import Phaser from 'phaser';
import { Boot } from './scenes/Boot.tsx';
import { Universe } from './scenes/Universe.tsx';

type GameProps = {};

const Game = forwardRef<Universe, GameProps>((_props, ref) => {
  const phaserGameRef = useRef<Phaser.Game>();

  // Game Initiation
  useEffect(() => {
    const bootScene: Boot = new Boot();
    const universeScene: Universe = new Universe();
    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      parent: 'game-container',
      backgroundColor: '#1f1137',
      scale: {
        mode: Phaser.Scale.RESIZE,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        zoom: 10
      },
      physics: {
        default: 'arcade',
        arcade: {
          // debug: true,
          gravity: { x: 0, y: 0 },
        },
      },
      scene: [bootScene, universeScene],
    };

    const game = new Phaser.Game(config);
    phaserGameRef.current = game;
    if(ref && universeScene) {
      if(typeof ref === 'function') {
        ref(universeScene);
      } else {
        ref.current = universeScene;
      }
    }

    return () => {
      game.destroy(true);
    };
  }, [ref]);

  return (
      <div id="game-container">
      </div>
  );
});

export default Game;
