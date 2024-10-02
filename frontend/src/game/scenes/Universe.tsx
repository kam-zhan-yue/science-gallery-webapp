import {Scene} from 'phaser';
import SolarSystem from "../classes/SolarSystem.ts";
import {EventBus} from "../../EventBus.tsx";
import AudioPlayer from '../classes/AudioPlayer.ts';

export enum UniverseState {
    Navigation = 0,
    Story = 1
}

const SCALE_FACTOR = 1.75
const BACKGROUND = true

export class Universe extends Scene {
    public started: boolean = false;
    private solarSystem?: SolarSystem;
    private centreX: number | undefined;
    private centreY: number | undefined;
    public state: UniverseState;
    private centre: string;
    private audioPlayer: AudioPlayer;
    private background: Phaser.GameObjects.Image | undefined;

    constructor() {
        super({ key: 'Universe' });
        this.state = UniverseState.Story;
        this.centre = '';
        this.audioPlayer = new AudioPlayer(this);
        this.background = undefined
    }

    preload() {
        this.load.glsl('stars', '/game/shaders/stars.glsl');
    }

    init(centre: string) {
        this.centre = centre;
    }

    play(track: string) {
      if(track === 'silent') {
        this.audioPlayer.stop();
      } else {
        this.audioPlayer.playBgm(track)
      }
    }

    end() {
      this.solarSystem?.fadeOut(1000);
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

        // Add the background
        if (BACKGROUND) {
          this.background = this.add.image(this.centreX, this.centreY, 'background')
          this.background.setScale(SCALE_FACTOR / this.cameras.main.zoom)
        }
        else {
          this.add.shader('stars', this.centreX, this.centreY, 1000, 1000);
        }

        this.anims.create({
            key: 'earth_spin',
            frames: this.anims.generateFrameNumbers('earth', {frames:[0,1,2,3,4,5]}),
            frameRate: 12,
            repeat: -1
        });

        this.anims.create({
            key: 'words_and_worlds_spin',
            frames: this.anims.generateFrameNumbers('planets', {frames:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]}),
            frameRate: 12,
            repeat: -1
        });

        this.anims.create({
            key: 'crafting_spin',
            frames: this.anims.generateFrameNumbers('planets', {frames:[18,19,20,21,22,23]}),
            frameRate: 12,
            repeat: -1
        });

        this.anims.create({
            key: 'folding_spin',
            frames: this.anims.generateFrameNumbers('planets', {frames:[36,37,38,39,40,41]}),
            frameRate: 12,
            repeat: -1
        });

        this.anims.create({
            key: 'feminine_spin',
            frames: this.anims.generateFrameNumbers('planets', {frames:[54,55,56,57,58,59,60,61,62,63,64,65]}),
            frameRate: 12,
            repeat: -1
        });

        this.anims.create({
          key: 'new_myths_spin',
          frames: this.anims.generateFrameNumbers('planets', {frames:[72,73,74,75,76,77]}),
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
        this.solarSystem?.setDrawNames(false);
        this.solarSystem?.setInteractive([]);
        const planet = this.solarSystem?.getPlanet(planetName)
        if(planet === undefined) return;

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
      if (this.background) {
        this.background.x = this.cameras.main.scrollX + this.cameras.main.centerX
        this.background.y = this.cameras.main.scrollY + this.cameras.main.centerY
        this.background.setScale(SCALE_FACTOR / this.cameras.main.zoom)
      }
        this.solarSystem?.simulate(time, delta);
    }

    setNavigation() {
        this.state = UniverseState.Navigation;
    }

    setStory() {
        this.state = UniverseState.Story;
    }
}
