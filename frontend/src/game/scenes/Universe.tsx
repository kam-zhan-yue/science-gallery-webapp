import {Scene} from 'phaser';
import SolarSystem from "../classes/SolarSystem.ts";
import {EventBus} from "../../EventBus.tsx";

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
        EventBus.emit('test', 'yes')
    }

    goToPlanet(planetName: string) {
        const planet = this.solarSystem?.getPlanet(planetName)
        if(planet === undefined) return;

        console.log(`going to planet: ${planetName}`);
        const zoomOutTime: number = 500;
        const zoomInTime: number = 1000;
        const tweenTime = zoomOutTime + zoomInTime;
        // Get the position at the future time
        const position = planet.getPosition(tweenTime);
        const timeline = this.add.timeline([
            {
                // Zoom out and start panning
                at: 0,
                run: () => {
                    this.cameras.main.zoomTo(2, zoomOutTime);
                },
            },
            {
                // Zoom back in at half of the tween and pan the camera
                at: zoomOutTime+10,
                run: () => {
                    this.cameras.main.zoomTo(10, zoomInTime);
                    this.cameras.main.pan(position.x, position.y, zoomInTime, 'Power2');
                }
            },
            {
                // Start following the planet's body at the end of the tween
                at: tweenTime,
                run: () => {
                    this.cameras.main.startFollow(planet.body);
                }
            }
        ]);
        timeline.play();
    }

    create() {
        this.cameras.main.zoom = 3;
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