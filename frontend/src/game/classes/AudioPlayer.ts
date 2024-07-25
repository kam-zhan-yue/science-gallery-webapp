import { Scene } from "phaser";

export default class AudioPlayer {
  private scene: Scene;
  private bgm: Phaser.Sound.BaseSound | null = null;
  private currentBgmKey: string | null = null;

  constructor(scene: Scene) {
    this.scene = scene;
  }

  public playBgm(bgmKey: string) {
    console.log(`play ${bgmKey}`)
    // If the requested BGM is already playing, do nothing
    if (this.currentBgmKey === bgmKey && this.bgm && this.bgm.isPlaying) {
      return;
    }

    // Stop the current BGM if it's playing
    if (this.bgm && this.bgm.isPlaying) {
      this.crossfade(bgmKey);
    } else {
      this.fade(bgmKey);
    }
  }

  public stop() {
    const bgm = this.bgm
    if (!bgm) return;
    this.scene.tweens.add({
      targets: bgm,
      volume: 0,
      duration: 2000,
      onComplete: () => {
        bgm.stop();
        this.bgm = null;
        this.currentBgmKey = null;
      }
    });
  }

  private crossfade(newKey: string) {
    console.log('crossfade');
    const oldBgm = this.bgm;
    if (!oldBgm) return;

    // Fade out the old BGM
    this.scene.tweens.add({
      targets: oldBgm,
      volume: 0,
      duration: 2000,
      onComplete: () => {
        console.log('fade in the new key');
        oldBgm.stop();
        this.fade(newKey);
      }
    });
  }

  private fade(bgm: string) {
    const newBgm = this.scene.sound.add(bgm, { loop: true, volume: 0 });
    newBgm.play();

    // Fade in the new BGM
    this.scene.tweens.add({
      targets: newBgm,
      volume: 1,
      duration: 2000,
    });

    this.bgm = newBgm;
    this.currentBgmKey = bgm;
  }

}
