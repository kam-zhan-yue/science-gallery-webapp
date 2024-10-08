import {Scene} from 'phaser';

export class Boot extends Scene {
    constructor() {
        super({ key: 'Boot' });
    }

    preload() {
      this.load.audio('bgm_main', 'audio/main.mp3')
      this.load.audio('bgm_band_1', 'audio/band_1.mp3')
      this.load.audio('bgm_band_2', 'audio/band_2.mp3')
      this.load.audio('bgm_band_3', 'audio/band_3.mp3')
      this.load.audio('bgm_end', 'audio/end.mp3')
      this.load.image('background', 'images/background-main.png')

      this.load.bitmapFont('pixelFont', 'fonts/pixelFont.png', 'fonts/pixelFont.fnt') ;

      this.load.spritesheet('earth', 'atlas/earth.png', {
          frameWidth:33,
          frameHeight: 33
      });

      this.load.spritesheet('planets', 'atlas/sprite_sheet_planets_100x100.png', {
          frameWidth:100,
          frameHeight:100
      });

      this.load.spritesheet('shangrila', 'atlas/shangrila_atlas_32.png', {
          frameWidth: 32,
          frameHeight: 32
      });

      this.load.spritesheet('jupiter', 'atlas/earth.png', {
          frameWidth:33,
          frameHeight: 33
      });

      this.load.spritesheet('sun', 'atlas/earth.png', {
          frameWidth:33,
          frameHeight: 33
      });
    }

    create() {
        this.scene.start('Universe');
    }
}
