import ArcadePhysics = Phaser.Physics.Arcade.ArcadePhysics;
import Graphics = Phaser.GameObjects.Graphics;

import Sun from "./Sun.ts";
import Planet from "./Planet.ts";
import {galaxies, Galaxy} from "../../setup/Galaxy.ts";
import {planets} from "../../setup/PlanetData.ts";
type Dictionary<Key extends keyof any, Value> = {
    [key in Key]: Value; // Mapped types syntax
};

export default class SolarSystem {
    private galaxy: Galaxy;
    private sun: Sun;
    private drawNames: boolean;
    private orbits: Dictionary<string, Planet> = {};
    constructor(physics: ArcadePhysics, graphics: Graphics,  x: number, y: number) {
        this.galaxy = galaxies["start"];

        this.sun = new Sun(this.galaxy.centre, planets[this.galaxy.centre], physics, graphics, x, y);
        this.drawNames = true;
        // Instantiate Planets
        graphics.lineStyle(1, 0xffffff, 0.4);
        for(let planet of this.galaxy.planets) {
            console.log(`try find ${planet}`);
            this.orbits[planet] = new Planet(planet, planets[planet], physics, graphics, x, y);
        }
    }

    public centre(): Planet {
        return <Planet>this.sun;
    }

    public getPlanet(planet: string): Planet {
        if(this.orbits[planet] === null) {
            throw new Error(`Planet with key ${planet} does not exist!`);
        }
        return this.orbits[planet];
    }

    setDrawNames(draw: boolean) {
        this.drawNames = draw;
        this.sun.setNameVisible(draw);
        for(const key in this.orbits) {
            if(this.orbits.hasOwnProperty(key)) {
                this.orbits[key].setNameVisible(draw);
            }
        }
    }

    setInteractive(planets: string[]) {
        console.log(`set interactive ${planets}`);
        for(const key in this.orbits) {
            if(this.orbits.hasOwnProperty(key)) {
                this.orbits[key].setInteractive(false);
            }
        }
        for(const planet of planets) {
            if(this.orbits.hasOwnProperty(planet)) {
                this.orbits[planet].setInteractive(true);
            }
        }
    }

    public simulate(time: number, delta: number) {
        for(const key in this.orbits) {
            if(this.orbits.hasOwnProperty(key)) {
                this.orbits[key].simulate(time, delta);
            }
        }
        if(this.drawNames) {
            this.sun.drawName();
            for(const key in this.orbits) {
                if(this.orbits.hasOwnProperty(key)) {
                    this.orbits[key].drawName();
                }
            }
        }
    }

    public setVisible(visible: boolean) {
        this.sun.setVisible(visible);
        for(const key in this.orbits) {
            if(this.orbits.hasOwnProperty(key)) {
                this.orbits[key].setVisible(visible);
            }
        }
    }

    public fadeIn(duration: number) {
        this.sun.fadeIn(duration);
        for(const key in this.orbits) {
            if(this.orbits.hasOwnProperty(key)) {
                this.orbits[key].fadeIn(duration);
            }
        }
    }

    public fadeOut(duration: number) {
        this.sun.fadeOut(duration);
        for(const key in this.orbits) {
            if(this.orbits.hasOwnProperty(key)) {
                this.orbits[key].fadeOut(duration);
            }
        }
    }
}