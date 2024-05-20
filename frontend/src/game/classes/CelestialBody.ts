import ArcadePhysics = Phaser.Physics.Arcade.ArcadePhysics;

export default class CelestialBody {
    public body: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;

    constructor(physics: ArcadePhysics, x: number, y: number, key: string) {
        this.body = physics.add.sprite(x, y, key);
        this.body.play(`${key}_spin`, true);
    }
}