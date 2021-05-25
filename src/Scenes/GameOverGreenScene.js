import "phaser";
import Button from "../Models/Buttons";

export default class GameOverGreenScene extends Phaser.Scene {
  constructor() {
    super("GameOverGreen");
  }

  preload() {}

  create() {
    this.add.image(400, 300, "GameoverGreen");
    this.add.text(550, 0, "Game Over!").setFontSize(30);
    const restartButton = new Button(630, 800, "Restart Game", this, () => {
      this.scene.start("StartScene", {
        complete: { puzzle1: false, puzzle2: false },
      });
    });
  }
}
