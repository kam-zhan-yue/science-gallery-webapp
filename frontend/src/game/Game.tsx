// src/Game.tsx
import React, { useEffect, useRef } from 'react';
import Phaser from 'phaser';

const Game: React.FC = () => {
  const gameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      backgroundColor: '#1f1137',
      scale: {
        mode: Phaser.Scale.RESIZE,
        autoCenter: Phaser.Scale.CENTER_BOTH,
      },
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { x: 0, y: 0 },
        },
      },
      scene: {
        preload,
        create,
      },
    };

    const game = new Phaser.Game(config);
    gameRef.current!.appendChild(game.canvas);

    return () => {
      game.destroy(true);
    };
  }, []);

  const preload = function (this: Phaser.Scene) {
    // this.load.image('logo', 'logo.png');
  };

  const create = function (this: Phaser.Scene) {
    // const logo = this.add.image(400, 300, 'logo');
    // logo.setScale(0.5);
  };

  return <div ref={gameRef} />;
};

export default Game;