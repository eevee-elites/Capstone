import Button from "../Models/Buttons";

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super("Title");
  }

  preload() {
    this.load.image("titleImage", "assets/logo.png");
  }

  create() {
    this.add.image(400, 300, "titleImage");

    const startButton = new Button(400, 500, "Start Game", this, () => {
      this.scene.start("Tutorial");
    });
  }
}
