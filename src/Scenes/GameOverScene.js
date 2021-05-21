import "phaser";
import Button from "../Models/Buttons";

export default class GameOverScene extends Phaser.Scene {
  constructor() {
    super("GameOver");
  }

  preload() {}

  create() {
    this.add.text(350, 350, "Game Over!");
    const restartButton = new Button(400, 500, "Restart Game", this, () => {
      this.scene.start("StartScene");
    });
  }
}
