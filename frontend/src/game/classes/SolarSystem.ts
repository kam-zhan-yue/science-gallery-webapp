import ArcadePhysics = Phaser.Physics.Arcade.ArcadePhysics;
import Graphics = Phaser.GameObjects.Graphics;

import Sun from "./Sun.ts";
import Planet from "./Planet.ts";
type Dictionary<Key extends keyof any, Value> = {
    [key in Key]: Value; // Mapped types syntax
};

export default class SolarSystem {
    private sun: Sun;
    private drawNames: boolean;
    private planets: Dictionary<string, Planet> = {};
    constructor(physics: ArcadePhysics, graphics: Graphics,  x: number, y: number) {
        this.sun = new Sun("Sun", physics, graphics,'sun', x, y);
        this.drawNames = true;
        // Instantiate Planets
        graphics.lineStyle(1, 0xffffff, 0.4);
        this.planets['Earth'] = new Planet("Earth", physics, graphics, 'earth', x, y, 50, 20);
        this.planets['Jupiter'] = new Planet("Jupiter", physics, graphics, 'jupiter', x, y, 100, 30);
    }

    public centre(): Planet {
        return <Planet>this.sun;
    }

    public getPlanet(planet: string): Planet {
        if(this.planets[planet] === null) {
            throw new Error(`Planet with key ${planet} does not exist!`);
        }
        return this.planets[planet];
    }

    setDrawNames(draw: boolean) {
        this.drawNames = draw;
        this.sun.setNameVisible(draw);
        for(const key in this.planets) {
            if(this.planets.hasOwnProperty(key)) {
                this.planets[key].setNameVisible(draw);
            }
        }
    }

    setInteractive(planets: string[]) {
        for(const key in this.planets) {
            if(this.planets.hasOwnProperty(key)) {
                this.planets[key].setInteractive(false);
            }
        }
        for(const planet of planets) {
            console.log(`Planet: ${planet}`);
            if(this.planets.hasOwnProperty(planet)) {
                console.log(`Setting ${planet} as interactive`)
                this.planets[planet].setInteractive(true);
            }
        }
    }

    public simulate(time: number, delta: number) {
        for(const key in this.planets) {
            if(this.planets.hasOwnProperty(key)) {
                this.planets[key].simulate(time, delta);
            }
        }
        if(this.drawNames) {
            this.sun.drawName();
            for(const key in this.planets) {
                if(this.planets.hasOwnProperty(key)) {
                    this.planets[key].drawName();
                }
            }
        }
    }

    public setVisible(visible: boolean) {
        this.sun.setVisible(visible);
        for(const key in this.planets) {
            if(this.planets.hasOwnProperty(key)) {
                this.planets[key].setVisible(visible);
            }
        }
    }

    public fadeIn(duration: number) {
        this.sun.fadeIn(duration);
        for(const key in this.planets) {
            if(this.planets.hasOwnProperty(key)) {
                this.planets[key].fadeIn(duration);
            }
        }
    }

    public fadeOut(duration: number) {
        this.sun.fadeOut(duration);
        for(const key in this.planets) {
            if(this.planets.hasOwnProperty(key)) {
                this.planets[key].fadeOut(duration);
            }
        }
    }
}