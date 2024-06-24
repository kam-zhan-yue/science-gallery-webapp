import {Scene} from 'phaser';

export class Boot extends Scene {
    constructor() {
        super({ key: 'Boot' });
    }

    preload() {
        this.load.bitmapFont('pixelFont', 'fonts/pixelFont.png', 'fonts/pixelFont.fnt');

        this.load.spritesheet('earth', 'atlas/earth.png', {
            frameWidth:33,
            frameHeight: 33
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