import "phaser";

export default class BootScene extends Phaser.Scene {
  constructor() {
    super("Boot");
  }

  preload() {
    // change this logo to custom made one with huanted hopper
    //this is a place holder for now
    this.load.image("logo", "assets/zenva_logo.png");
  }

  create() {
    // brings up to Preloader scene
    this.scene.start("Preloader");
  }
}
