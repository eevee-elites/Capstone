import "phaser";

export default class Player extends Phaser.Scene {
  constructor() {
    super("Player");
    var man;
  }

  preload() {
    this.load.spritesheet("man", "../assets/man.png", {
      frameWidth: 64,
      frameHeight: 64,
    });
  }

  create() {
    this.man = this.physics.add.sprite(400, 300, "man").setOrigin(0.5, 0.5);
  }

  update() {
    let cursors = this.input.keyboard.createCursorKeys();
    var keyObjW = this.input.keyboard.addKey("W");
    var keyObjA = this.input.keyboard.addKey("A");
    var keyObjS = this.input.keyboard.addKey("S");
    var keyObjD = this.input.keyboard.addKey("D");
    if (cursors.left.isDown || keyObjA.isDown) {
      this.man.setVelocityX(-160);
    } else if (cursors.right.isDown || keyObjD.isDown) {
      this.man.setVelocityX(160);

      // this.man.anims.play("right", true);
    } else if (cursors.up.isDown || keyObjW.isDown) {
      this.man.setVelocityY(-160);
    } else if (cursors.down.isDown || keyObjS.isDown) {
      this.man.setVelocityY(160);
    } else {
      this.man.setVelocityX(0);
      this.man.setVelocityY(0);
    }
  }
}
