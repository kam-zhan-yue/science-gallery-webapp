import {Scene} from 'phaser';
import SolarSystem from "../classes/SolarSystem.ts";

export class Universe extends Scene {
    private solarSystem?: SolarSystem;
    constructor() {
        super({ key: 'Universe' });
    }

    create() {
        this.anims.create({
            key: 'earth_spin',
            frames: this.anims.generateFrameNumbers('earth', {frames:[0,1,2,3,4,5]}),
            frameRate: 12,
            repeat: -1
        });

        this.cameras.main.zoom = 10;
        const centerX = this.cameras.main.centerX;
        const centerY = this.cameras.main.centerY;

        this.solarSystem = new SolarSystem(this.physics, centerX, centerY);
        this.cameras.main.startFollow(this.solarSystem.centre());
    }
}