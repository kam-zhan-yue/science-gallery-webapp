import ArcadePhysics = Phaser.Physics.Arcade.ArcadePhysics;
import Graphics = Phaser.GameObjects.Graphics;
import Vector2 = Phaser.Math.Vector2;
import Random = Phaser.Math.Angle.Random;


export default class CelestialBody {
    public body: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;
    private angle: number = 0.0;
    private orbitalPeriod: number = 2.0;
    private orbitalRadius: number = 0;
    private clockwise: boolean = false;
    private parentPosition: Vector2 = new Vector2(0, 0);

    constructor(physics: ArcadePhysics, graphics: Graphics, key: string, x: number, y: number, orbitalRadius: number = 0, orbitalPeriod: number = 0, clockwise: boolean = false) {
        this.parentPosition = new Vector2(x, y);
        this.body = physics.add.sprite(x, y, key);
        this.body.play(`${key}_spin`, true);
        this.orbitalRadius = orbitalRadius;
        this.orbitalPeriod = orbitalPeriod;
        this.clockwise = clockwise;
        this.angle = Random() * 360;
        graphics.strokeCircle(x, y, orbitalRadius);
    }

    private getAngleStep(deltaTime: number) {
        return (360.0 / this.orbitalPeriod) * deltaTime;
    }

    public simulate(_time: number, delta: number) {
        const deltaTime = delta / 1000;
        this.angle += this.clockwise ? this.getAngleStep(deltaTime) : -this.getAngleStep(deltaTime);
        this.angle = Phaser.Math.Wrap(this.angle, 0, 360); // Ensure the angle stays within 0-360 degrees

        // Convert angle to radians
        const radians = Phaser.Math.DegToRad(this.angle);

        // Calculate new position using Math.sin and Math.cos
        const newX = this.parentPosition.x + this.orbitalRadius * Math.cos(radians);
        const newY = this.parentPosition.y + this.orbitalRadius * Math.sin(radians);

        this.body.setPosition(newX, newY);
    }
}