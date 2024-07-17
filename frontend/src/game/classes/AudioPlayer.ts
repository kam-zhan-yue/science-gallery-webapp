import { Scene } from "phaser";

export default class AudioPlayer {
  private scene: Scene;
  private bgm: Phaser.Sound.BaseSound | null = null;
  private currentBgmKey: string | null = null;

  constructor(scene: Scene) {
    this.scene = scene;
  }

  public playBGM(bgmKey: string) {
    // If the requested BGM is already playing, do nothing
    if (this.currentBgmKey === bgmKey && this.bgm && this.bgm.isPlaying) {
      return;
    }

    // Stop the current BGM if it's playing
    if (this.bgm && this.bgm.isPlaying) {
      this.bgm.stop();
    }

    // Add and play the new BGM
    this.bgm = this.scene.sound.add(bgmKey, { loop: true });
    this.bgm.play();
    this.currentBgmKey = bgmKey;
  }

  public playSFX(sfxKey: string) {
    const sfx = this.scene.sound.add(sfxKey);
    sfx.play();
  }

  public stopBGM() {
    if (this.bgm && this.bgm.isPlaying) {
      this.bgm.stop();
    }
    this.currentBgmKey = null;
  }
}
