import "phaser";

export default class BootScene extends Phaser.Scene {
  constructor() {
    super("Boot");
  }

  preload() {
    this.load.image("logo", "assets/bootTitle.png");
  }

  create() {
    // brings up to Preloader scene
    this.scene.start("Preloader");
  }
}
