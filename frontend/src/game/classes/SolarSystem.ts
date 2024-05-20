import ArcadePhysics = Phaser.Physics.Arcade.ArcadePhysics;

import Sun from "./Sun.ts";
import Planet from "./Planet.ts";

export default class SolarSystem {
    private sun: Sun;
    private planet: Planet;

    constructor(physics: ArcadePhysics, x: number, y: number) {
        this.sun = new Sun(physics, x, y, 'earth');
        this.planet = new Planet(physics, x, y, 'earth');
    }

    public centre(): Phaser.Types.Physics.Arcade.SpriteWithDynamicBody {
        return this.sun.body;
    }
}