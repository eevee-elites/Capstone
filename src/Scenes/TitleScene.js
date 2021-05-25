import Button from "../Models/Buttons";

export default class TitleScene extends Phaser.Scene {
	constructor() {
		super("Title");
	}
  preload() {}

  create() {
    this.add.image(400, 300, "title");
    const tutorialButton = new Button(200, 450, "Play Intro", this, () => {
      this.scene.start("Tutorial");
    });
    const startButton = new Button(600, 450, "Skip Intro", this, () => {
      this.scene.start("StartScene", {
        completed: { puzzle1: false, puzzle2: false },
      });
    });
  }
}
