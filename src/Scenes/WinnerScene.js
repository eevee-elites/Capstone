import "phaser";

export default class WinnerScene extends Phaser.Scene {
  constructor() {
    super("Winner");
  }

  preload() {}

  create() {
    this.add.image(400, 300, "win");
  }
}
