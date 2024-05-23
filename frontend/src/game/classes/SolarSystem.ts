import ArcadePhysics = Phaser.Physics.Arcade.ArcadePhysics;
import Graphics = Phaser.GameObjects.Graphics;

import Sun from "./Sun.ts";
import Planet from "./Planet.ts";
type Dictionary<Key extends keyof any, Value> = {
    [key in Key]: Value; // Mapped types syntax
};

export default class SolarSystem {
    private sun: Sun;
    private planets: Dictionary<string, Planet> = {};
    constructor(physics: ArcadePhysics, graphics: Graphics,  x: number, y: number) {
        this.sun = new Sun(physics, graphics,'earth', x, y);

        // Instantiate Planets
        graphics.lineStyle(1, 0xffffff, 0.4);
        this.planets['earth'] = new Planet(physics, graphics, 'earth', x, y, 50, 20);
        this.planets['test'] = new Planet(physics, graphics, 'earth', x, y, 150, 50);
    }

    public centre(): Phaser.Types.Physics.Arcade.SpriteWithDynamicBody {
        return this.sun.body;
    }

    public simulate(time: number, delta: number) {
        this.planets['earth'].simulate(time, delta);
        this.planets['test'].simulate(time, delta);
    }
}