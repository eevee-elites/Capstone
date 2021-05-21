import "phaser";

export default class GameOverScene extends Phaser.Scene {
  constructor() {
    super("GameOver");
  }

  preload() {}

  create() {
    this.add.text(350, 350, "Game Over!");
  }
}
