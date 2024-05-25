import {Scene} from 'phaser';
import SolarSystem from "../classes/SolarSystem.ts";

export class Universe extends Scene {
    private solarSystem?: SolarSystem;

    constructor() {
        super({ key: 'Universe' });
    }

    preload() {
        this.load.glsl('starShader', '/game/shaders/starShader.glsl');
    }

    test() {
        console.log("TEST!");
    }

    create() {
        this.cameras.main.zoom = 2;
        const centerX = this.cameras.main.centerX;
        const centerY = this.cameras.main.centerY;

        this.add.shader('starShader', centerX, centerY, 1000, 1000);
        this.anims.create({
            key: 'earth_spin',
            frames: this.anims.generateFrameNumbers('earth', {frames:[0,1,2,3,4,5]}),
            frameRate: 12,
            repeat: -1
        });

        const graphics = this.add.graphics();
        this.solarSystem = new SolarSystem(this.physics, graphics, centerX, centerY);
        this.cameras.main.startFollow(this.solarSystem.centre());
    }

    update(time: number, delta: number) {
        this.solarSystem?.simulate(time, delta);
    }
}