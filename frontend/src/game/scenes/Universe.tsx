import {Scene} from 'phaser';
import SolarSystem from "../classes/SolarSystem.ts";
import {EventBus} from "../../EventBus.tsx";

export class Universe extends Scene {
    private solarSystem?: SolarSystem;
    constructor() {
        super({ key: 'Universe' });
    }
    preload() {
        this.load.glsl('stars', '/game/shaders/stars.glsl');
    }

    start() {
        this.solarSystem?.setVisible(true);
        this.solarSystem?.fadeIn(500);
    }

    setInteractive(interactive: boolean) {
        console.log('set solarsystem interactive')
        this.solarSystem?.setInteractive(interactive);
    }

    create() {
        this.cameras.main.zoom = 2.5;
        const centerX = this.cameras.main.centerX;
        const centerY = this.cameras.main.centerY;

        this.add.shader('stars', centerX, centerY, 1000, 1000);
        this.anims.create({
            key: 'earth_spin',
            frames: this.anims.generateFrameNumbers('earth', {frames:[0,1,2,3,4,5]}),
            frameRate: 12,
            repeat: -1
        });
        this.anims.create({
            key: 'jupiter_spin',
            frames: this.anims.generateFrameNumbers('jupiter', {frames:[0,1,2,3,4,5]}),
            frameRate: 12,
            repeat: -1
        });
        this.anims.create({
            key: 'sun_spin',
            frames: this.anims.generateFrameNumbers('sun', {frames:[0,1,2,3,4,5]}),
            frameRate: 12,
            repeat: -1
        });
        const graphics = this.add.graphics();
        this.solarSystem = new SolarSystem(this.physics, graphics, centerX, centerY);
        this.cameras.main.startFollow(this.solarSystem.centre().body);
        this.solarSystem.setVisible(false);
    }

    inspect(planetName: string) {
        this.solarSystem?.setInteractive(false);
        const planet = this.solarSystem?.getPlanet(planetName)
        if(planet === undefined) return;

        console.log(`going to planet: ${planetName}`);
        const zoomInTime: number = 1000;
        const tweenTime = zoomInTime;
        // Get the position at the future time
        const position = planet.getPosition(tweenTime);
        const timeline = this.add.timeline([
            {
                // Zoom back in at half of the tween and pan the camera
                at: 0,
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
                    EventBus.emit('landed')
                }
            }
        ]);
        timeline.play();
    }

    reset() {
        if(this.cameras.main.zoom === 2.5) {
            if(this.solarSystem?.centre())
                this.cameras.main.startFollow(this.solarSystem?.centre().body);
            this.solarSystem?.setInteractive(true);
            EventBus.emit('reset');
        } else {
            const zoomOutTime: number = 1000;
            const timeline = this.add.timeline([
                {
                    at: 0,
                    run: () => {
                        console.log('zoom out')
                        this.cameras.main.stopFollow();
                        this.cameras.main.zoomTo(2.5, zoomOutTime);
                        if(this.solarSystem !== undefined) {
                            const centre = this.solarSystem.centre();
                            this.cameras.main.pan(centre.body.x, centre.body.y, zoomOutTime, 'Linear');
                        }
                    },
                },
                {
                    at: zoomOutTime,
                    run: () => {
                        this.solarSystem?.setInteractive(true);
                        if(this.solarSystem?.centre())
                            this.cameras.main.startFollow(this.solarSystem?.centre().body);
                        EventBus.emit('reset');
                    }
                }
            ]);
            timeline.play();
        }
    }

    update(time: number, delta: number) {
        this.solarSystem?.simulate(time, delta);
    }
}