import "phaser";

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super("Title");
    var man;
    var anims;
  }

  preload() {
    this.load.spritesheet("man", "assets/man.png", {
      frameWidth: 64,
      frameHeight: 64,
    });
  }

  create() {
    this.man = this.physics.add.sprite(400, 300, "man").setOrigin(0.5, 0.5);

    this.anims.create({
      key: "left",
      frames: this.anims.generateFrameNumbers("man", {
        start: 4,
        end: 7,
      }),
      frameRate: 10,
    }
    );

    this.anims.create({
      key: "right",
      frames: this.anims.generateFrameNumbers("man", {
        start: 8,
        end: 11,
      }),
      frameRate: 10,
    }
    );

    this.anims.create({
      key: "up",
      frames: this.anims.generateFrameNumbers("man", {
        start: 12,
        end: 15,
      }),
      frameRate: 10,
    }
    );
    this.anims.create({
      key: "down",
      frames: this.anims.generateFrameNumbers("man", {
        start: 0,
        end: 3,
      }),
      frameRate: 10,
    }
    );
    this.anims.create({
      key: "still",
      frames: [{ key: "man", frame: 0 }],
      frameRate: 10,
  });
  }

  update() {
    let cursors = this.input.keyboard.createCursorKeys();
    var keyObjW = this.input.keyboard.addKey("W");
    var keyObjA = this.input.keyboard.addKey("A");
    var keyObjS = this.input.keyboard.addKey("S");
    var keyObjD = this.input.keyboard.addKey("D");
    if (cursors.left.isDown || keyObjA.isDown) {
      this.man.setVelocityX(-160);
      this.man.anims.play("left", true);
    } else if (cursors.right.isDown || keyObjD.isDown) {
      this.man.setVelocityX(160);
      this.man.anims.play("right", true);

    } else if (cursors.up.isDown || keyObjW.isDown) {
      this.man.setVelocityY(-160);
      this.man.anims.play("up", true);

    } else if (cursors.down.isDown || keyObjS.isDown) {
      this.man.setVelocityY(160);
      this.man.anims.play("down", true);
    } else {
      this.man.setVelocityX(0);
      this.man.setVelocityY(0);
      this.man.anims.play("still", true);

    }
  }
}
