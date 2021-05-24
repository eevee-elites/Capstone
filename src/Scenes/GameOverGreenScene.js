import "phaser";
import Button from "../Models/Buttons";

export default class GameOverGreenScene extends Phaser.Scene {
  constructor() {
    super("GameOverGreen");
  }

  preload() {}

  create() {
    this.add.image(400, 300, "GameoverGreen");
    this.add.text(350, 350, "Game Over!");
    const restartButton = new Button(400, 500, "Restart Game", this, () => {
      this.scene.start("StartScene");
    });
  }
}
