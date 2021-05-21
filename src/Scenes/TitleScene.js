import Button from "../Models/Buttons";

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super("Title");
  }

  preload() {
    this.load.image("logo", "assets/bootTitle.png");
  }

  create() {
    this.add.image(400, 300, "logo");
    const tutorialButton = new Button(400, 350, "Play Intro", this, () => {
      this.scene.start("Tutorial");
    });
    const startButton = new Button(400, 450, "Skip Intro", this, () => {
      this.scene.start("StartScene");
    });
  }
}
