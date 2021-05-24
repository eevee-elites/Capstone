import "phaser";
import Button from "../Models/Buttons";

export default class GameOverRedScene extends Phaser.Scene {
  constructor() {
    super("GameOverRed");
  }

  preload() {}

  create() {
    this.add.image(400, 300, "GameoverRed");
    this.add.text(350, 350, "Game Over!");
    const restartButton = new Button(400, 500, "Restart Game", this, () => {
      this.scene.start("StartScene", {
        complete: { puzzle1: false, puzzle2: false },
      });
    });
  }
}
