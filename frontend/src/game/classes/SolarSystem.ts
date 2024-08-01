import ArcadePhysics = Phaser.Physics.Arcade.ArcadePhysics;
import Graphics = Phaser.GameObjects.Graphics;

import Sun from "./Sun.ts";
import Planet from "./Planet.ts";
import {planets} from "../../setup/PlanetData.ts";
type Dictionary<Key extends keyof any, Value> = {
    [key in Key]: Value; // Mapped types syntax
};

export default class SolarSystem {
    private sun: Sun;
    private drawNames: boolean;
    private orbits: Dictionary<string, Planet> = {};
    private physics: ArcadePhysics;
    private graphics: Graphics;
    private x: number;
    private y: number;

    constructor(centre: string, physics: ArcadePhysics, graphics: Graphics,  x: number, y: number) {
        this.physics = physics;
        this.graphics = graphics;
        this.x = x;

        this.y = y;
        this.drawNames = true;
        // Instantiate Planets
        if(centre in planets) {
            this.sun = new Sun(centre, planets[centre], this.physics, this.graphics, this.x, this.y, planets[centre].offset);
        } else {
            this.sun = new Sun("shangrila", planets["shangrila"], this.physics, this.graphics, this.x, this.y, planets['shangrila'].offset);
        }
    }

    clean() {
        this.sun.clean();
        for(const key in this.orbits) {
            if(key in this.orbits) {
                this.orbits[key].clean();
            }
        }
    }

    updateOrbits(orbits: string[]) {
        this.orbits = {};
        for(const orbit of orbits) {
            if(orbit in planets) {
                this.orbits[orbit] = new Planet(orbit, planets[orbit], this.physics, this.graphics, this.x, this.y, planets[orbit].offset);
            }
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
            this.orbits[key].setNameVisible(draw);
        }
    }

    setInteractive(planets: string[]) {
        for(const key in this.orbits) {
          this.orbits[key].setInteractive(false);
        }
        for(const planet of planets) {
            if(planet in this.orbits) {
                this.orbits[planet].setInteractive(true);
            }
        }
    }

    public simulate(time: number, delta: number) {
        for(const key in this.orbits) {
          this.orbits[key].simulate(time, delta);
        }
        if(this.drawNames) {
            this.sun.drawName();
            for(const key in this.orbits) {
                this.orbits[key].drawName();
            }
        }
    }

    public setVisible(visible: boolean) {
        this.sun.setVisible(visible);
        for(const key in this.orbits) {
            this.orbits[key].setVisible(visible);
        }
    }

    public fadeIn(duration: number) {
        this.sun.fadeIn(duration);
        for(const key in this.orbits) {
            this.orbits[key].fadeIn(duration);
        }
    }

    public fadeOut(duration: number) {
        this.sun.fadeOut(duration);
        for(const key in this.orbits) {
            this.orbits[key].fadeOut(duration);
        }
    }
}
