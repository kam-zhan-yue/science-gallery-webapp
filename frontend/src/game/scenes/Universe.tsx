import {Scene} from 'phaser';
import SolarSystem from "../classes/SolarSystem.ts";
import {EventBus} from "../../EventBus.tsx";

export enum UniverseState {
    Navigation = 0,
    Story = 1
}

export class Universe extends Scene {
    public started: boolean = false;
    private solarSystem?: SolarSystem;
    private centreX: number | undefined;
    private centreY: number | undefined;
    public state: UniverseState;
    private centre: string;

    constructor() {
        super({ key: 'Universe' });
        this.state = UniverseState.Story;
        this.centre = '';
    }

    preload() {
        this.load.glsl('stars', '/game/shaders/stars.glsl');
    }

    init(centre: string) {
        this.centre = centre;
    }

    updateOrbits(orbits: string[]) {
        if(this.centreX && this.centreY) {
            if(this.solarSystem && this.started) {
                this.solarSystemTransition(orbits, this.centreX, this.centreY);
            } else {
                this.started = true;
                this.solarSystemInit(orbits, this.centreX, this.centreY);
                this.reset(orbits);
            }
        }
    }

    private solarSystemTransition(orbits: string[], centreX: number, centreY: number) {
        const timeline = this.add.timeline([
            {
                // Fade out the existing solar system
                at: 0,
                run: () => {
                    this.solarSystem?.fadeOut(1000);
                }
            },
            {
                // Clean and fade in the new solar system
                at: 1500,
                run: () => {
                    this.solarSystemInit(orbits, centreX, centreY);
                    this.reset(orbits);
                }
            }
        ]);
        timeline.play();
    }

    private solarSystemInit(orbits: string[],  centreX: number, centreY: number) {
        this.solarSystem?.clean();
        this.solarSystem = new SolarSystem(this.centre, this.physics, this.add.graphics(), centreX, centreY);
        this.cameras.main.startFollow(this.solarSystem.centre().body);
        this.solarSystem?.setVisible(false);
        this.solarSystem?.updateOrbits(orbits);
        this.solarSystem?.setVisible(true);
        this.solarSystem?.fadeIn(1500);
    }

    create() {
        this.cameras.main.zoom = 2.5;
        this.centreX = this.cameras.main.centerX;
        this.centreY = this.cameras.main.centerY;

        this.add.shader('stars', this.centreX, this.centreY, 1000, 1000);
        this.anims.create({
            key: 'earth_spin',
            frames: this.anims.generateFrameNumbers('earth', {frames:[0,1,2,3,4,5]}),
            frameRate: 12,
            repeat: -1
        });


        this.anims.create({
            key: 'shangrila_spin',
            frames: this.anims.generateFrameNumbers('shangrila', {frames:[0,1,2,3,4,5,6,7,8,9,10]}),
            frameRate: 12,
            repeat: -1
        });


        // Crude fix for resizing shader
        this.solarSystem = new SolarSystem('shangrila', this.physics, this.add.graphics(), this.centreX, this.centreY);
        this.cameras.main.startFollow(this.solarSystem.centre().body);
        this.solarSystem?.setVisible(false);

    }

    inspect(planetName: string) {
        console.log(`inspecting ${planetName}`)
        // this.solarSystem?.setDrawNames(false);
        // this.solarSystem?.setInteractive([]);
        // const planet = this.solarSystem?.getPlanet(planetName)
        // if(planet === undefined) return;
        //
        // const zoomInTime: number = 1000;
        // const tweenTime = zoomInTime;
        // // Get the position at the future time
        // const position = planet.getPosition(tweenTime);
        // const timeline = this.add.timeline([
        //     {
        //         // Zoom back in at half of the tween and pan the camera
        //         at: 0,
        //         run: () => {
        //             this.cameras.main.zoomTo(10, zoomInTime);
        //             this.cameras.main.pan(position.x, position.y, zoomInTime, 'Power2');
        //         }
        //     },
        //     {
        //         // Start following the planet's body at the end of the tween
        //         at: tweenTime,
        //         run: () => {
        //             this.cameras.main.startFollow(planet.body);
        //             EventBus.emit('landed')
        //         }
        //     }
        // ]);
        // timeline.play();
    }

    reset(planets: string[]) {
        this.solarSystem?.setDrawNames(true);
        if(this.cameras.main.zoom === 2.5) {
            if(this.solarSystem?.centre())
                this.cameras.main.startFollow(this.solarSystem?.centre().body);
            this.solarSystem?.setInteractive(planets);
            EventBus.emit('reset');
        } else {
            const zoomOutTime: number = 1000;
            const timeline = this.add.timeline([
                {
                    at: 0,
                    run: () => {
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
                        this.solarSystem?.setInteractive(planets);
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

    setNavigation() {
        this.state = UniverseState.Navigation;
    }

    setStory() {
        this.state = UniverseState.Story;
    }
}