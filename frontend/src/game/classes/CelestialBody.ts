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
    private orbitalRing: Phaser.GameObjects.Graphics;

    constructor(physics: ArcadePhysics, graphics: Graphics, key: string, x: number, y: number, orbitalRadius: number = 0, orbitalPeriod: number = 0, clockwise: boolean = false) {
        this.parentPosition = new Vector2(x, y);
        this.body = physics.add.sprite(x, y, key);
        this.body.play(`${key}_spin`, true);
        this.orbitalRadius = orbitalRadius;
        this.orbitalPeriod = orbitalPeriod;
        this.clockwise = clockwise;
        this.angle = Random() * 360;
        this.orbitalRing = graphics.strokeCircle(x, y, orbitalRadius);
        this.orbitalRing.alpha = 0;
    }

    public fadeOut(duration: number) {
        this.body.alpha = 1;
        this.orbitalRing.alpha = 1;
        const fadeTween = this.body.scene.tweens.add({
            targets: [this.body, this.orbitalRing],
            alpha: 0,
            duration: duration
        })
        fadeTween.play();
    }
    public fadeIn(duration: number) {
        this.body.alpha = 0;
        this.orbitalRing.alpha = 0;
        const fadeTween = this.body.scene.tweens.add({
            targets: [this.body, this.orbitalRing],
            alpha: 1,
            duration: duration
        })
        fadeTween.play();
    }

    private getAngleStep(deltaTime: number) {
        return (360.0 / this.orbitalPeriod) * deltaTime;
    }

    private getAngle(deltaTime: number): number {
        return this.clockwise ? this.getAngleStep(deltaTime) : -this.getAngleStep(deltaTime);
    }

    public getPosition(timeInFuture: number): Vector2 {
        const deltaTime = timeInFuture / 1000;
        // Calculate the new angle
        const newAngle = this.angle + this.getAngle(deltaTime)
        // Convert angle to radians
        const radians = Phaser.Math.DegToRad(newAngle);
        // Calculate new position using Math.sin and Math.cos
        const newX = this.parentPosition.x + this.orbitalRadius * Math.cos(radians);
        const newY = this.parentPosition.y + this.orbitalRadius * Math.sin(radians);
        return new Vector2(newX, newY);
    }

    public simulate(_time: number, delta: number) {
        const position: Vector2 = this.getPosition(delta);
        // Simulate the angle
        const deltaTime: number = delta / 1000;
        this.angle += this.getAngle(deltaTime);
        this.angle = Phaser.Math.Wrap(this.angle, 0, 360); // Ensure the angle stays within 0-360 degrees

        this.body.setPosition(position.x, position.y);
    }
}