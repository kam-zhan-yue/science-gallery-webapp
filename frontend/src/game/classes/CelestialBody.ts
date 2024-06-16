import ArcadePhysics = Phaser.Physics.Arcade.ArcadePhysics;
import Graphics = Phaser.GameObjects.Graphics;
import Vector2 = Phaser.Math.Vector2;
import Random = Phaser.Math.Angle.Random;
import {EventBus} from "../../EventBus.tsx";
import {PlanetData} from "./PlanetData.ts";


export default class CelestialBody {
    private data: PlanetData;
    public body: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;
    private angle: number = 0.0;
    private parentPosition: Vector2 = new Vector2(0, 0);
    private orbitalRing: Phaser.GameObjects.Graphics;
    private nameText: Phaser.GameObjects.BitmapText;

    constructor(data: PlanetData, physics: ArcadePhysics, graphics: Graphics, x: number, y: number) {
        this.data = data;
        this.parentPosition = new Vector2(x, y);
        this.body = physics.add.sprite(x, y, data.key);
        this.body.play(`${data.key}_spin`, true);
        this.angle = Random() * 360;
        this.orbitalRing = graphics.strokeCircle(x, y, this.data.orbitalRadius);
        // Initialize the name text
        this.nameText = this.body.scene.add.bitmapText(0, 0, 'pixelFont', this.data.name, 16);
    }

    public setNameVisible(visible: boolean) {
        this.nameText.setVisible(visible);
    }

    public setInteractive(interactive: boolean) {
        if (interactive) {
            // Make the body interactive
            this.body.setInteractive({ useHandCursor: true });

            // Add pointer events
            this.body.on('pointerover', this.onPointerOver, this);
            this.body.on('pointerout', this.onPointerOut, this);
            this.body.on('pointerdown', this.onClick, this);
        } else {
            // Remove interactive properties and pointer events
            this.body.disableInteractive();
            this.body.off('pointerover', this.onPointerOver, this);
            this.body.off('pointerout', this.onPointerOut, this);
            this.body.off('pointerdown', this.onClick, this);
        }
    }

    private onPointerOver() {
        // this.body.setTint(0x44ff44); // Change tint on hover
        this.body.scene.input.setDefaultCursor('pointer'); // Change cursor to pointer
    }

    private onPointerOut() {
        // this.body.clearTint(); // Clear tint when not hovering
        this.body.scene.input.setDefaultCursor('default'); // Change cursor back to default
    }

    private onClick() {
        EventBus.emit('inspect', this.data.name);
        // this.body.clearTint(); // Clear tint when not hovering
        this.body.scene.input.setDefaultCursor('default'); // Change cursor back to default
    }

    public setVisible(visible: boolean) {
        this.body.setVisible(visible);
        this.orbitalRing.setVisible(visible);
        this.nameText.setVisible(visible);
    }

    public fadeOut(duration: number) {
        const fadeTween = this.body.scene.tweens.add({
            targets: [this.body, this.orbitalRing],
            alpha: 0,
            duration: duration,
            onComplete: () => {
                this.setVisible(false);
            }
        })
        fadeTween.play();
    }
    public fadeIn(duration: number) {
        this.setVisible(true);
        const fadeTween = this.body.scene.tweens.add({
            targets: [this.body, this.orbitalRing],
            alpha: 1,
            duration: duration
        })
        fadeTween.play();
    }

    private getAngleStep(deltaTime: number) {
        return (360.0 / this.data.orbitalPeriod) * deltaTime;
    }

    private getAngle(deltaTime: number): number {
        return this.data.clockwiseOrbit ? this.getAngleStep(deltaTime) : -this.getAngleStep(deltaTime);
    }

    public getPosition(timeInFuture: number): Vector2 {
        const deltaTime = timeInFuture / 1000;
        // Calculate the new angle
        const newAngle = this.angle + this.getAngle(deltaTime)
        // Convert angle to radians
        const radians = Phaser.Math.DegToRad(newAngle);
        // Calculate new position using Math.sin and Math.cos
        const newX = this.parentPosition.x + this.data.orbitalRadius * Math.cos(radians);
        const newY = this.parentPosition.y + this.data.orbitalRadius * Math.sin(radians);
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

    public drawName() {
        const position = this.body.getBottomRight();
        const x = position.x-3;
        const y = position.y-3;
        this.nameText.setPosition(x, y);
    }
}