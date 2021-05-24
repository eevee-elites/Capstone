import "phaser";

export default class WinnerScene extends Phaser.Scene {
  constructor() {
    super("Winner");
  }

  preload() {}

  create() {
    this.add.text(350, 350, "YOU WIN!");
  }
}
