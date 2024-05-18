import {Scene} from 'phaser';

export class Universe extends Scene {
    private player?: Phaser.GameObjects.Sprite;
    constructor() {
        super({ key: 'Universe' });
    }

    create() {
        this.anims.create({
            key: 'spin',
            frames: this.anims.generateFrameNumbers('earth', {frames:[0,1,2,3,4,5]}),
            frameRate: 12,
            repeat: -1
        });

        this.cameras.main.zoom = 10;
        const centerX = this.cameras.main.centerX;
        const centerY = this.cameras.main.centerY;
        this.player = this.add.sprite(centerX, centerY, "earth");
        this.player.play('spin', true);

        // Make the camera follow the player
        this.cameras.main.startFollow(this.player);
    }
}