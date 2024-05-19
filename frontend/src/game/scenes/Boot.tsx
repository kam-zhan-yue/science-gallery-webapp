import {Scene} from 'phaser';

export class Boot extends Scene {
    constructor() {
        super({ key: 'Boot' });
    }

    preload() {
        this.load.spritesheet('earth', 'atlas/earth.png', {
            frameWidth:33,
            frameHeight: 33
        });
    }

    create() {
        this.scene.start('Universe');
    }
}