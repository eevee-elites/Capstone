import "phaser";
import { Game } from "phaser";
import Player from "../Models/Player";

export default class Puzzle1 extends Phaser.Scene {
  constructor() {
    super("Puzzle1");
    let man;
    var anims;
  }

  preload() {
    this.load.spritesheet("man", "assets/man.png", {
      frameWidth: 64,
      frameHeight: 64,
    });
    this.load.audio("bg", "assets/bg.wav");
    this.load.image("star", "assets/star.png");
  }

  create() {
    let plat = this.add.rectangle(590, 400, 450, 310, 0x6e4340);

    this.stars = this.physics.add.sprite(100, 450, "star");
    var music = this.sound.add("bg", true);
    music.setLoop(true);
    music.play();
    music.setVolume(0.3);
    this.man = this.physics.add
      .existing(new Player(this, 400, 300, "man"))
      .setOrigin(0.5, 0.5);

    this.anims.create({
      key: "left",
      frames: this.anims.generateFrameNumbers("man", {
        start: 4,
        end: 7,
      }),
      frameRate: 10,
    });

    this.anims.create({
      key: "right",
      frames: this.anims.generateFrameNumbers("man", {
        start: 8,
        end: 11,
      }),
      frameRate: 10,
    });

    this.anims.create({
      key: "up",
      frames: this.anims.generateFrameNumbers("man", {
        start: 12,
        end: 15,
      }),
      frameRate: 10,
    });
    this.anims.create({
      key: "down",
      frames: this.anims.generateFrameNumbers("man", {
        start: 0,
        end: 3,
      }),
      frameRate: 10,
    });
    this.anims.create({
      key: "still",
      frames: [{ key: "man", frame: 0 }],
      frameRate: 10,
    });

    let testBox = this.add.rectangle(100, 110, 100, 100, 0xffffff);
    let puzzleBox = this.add.rectangle(500, 320, 45, 45, "0xa6cedd");
    let puzzleBox2 = this.add.rectangle(500, 380, 45, 45, "0xa6cedd");
    let puzzleBox3 = this.add.rectangle(500, 440, 45, 45, "0xa6cedd");
    let puzzleBox4 = this.add.rectangle(560, 440, 45, 45, "0xa6cedd");
    let puzzleBox5 = this.add.rectangle(560, 320, 45, 45, "0xa6cedd");
    let puzzleBox6 = this.add.rectangle(620, 380, 45, 45, "0xa6cedd");
    let border1 = this.add.rectangle(590, 230, 450, 50, "0xFf3efdd");
    let border2 = this.add.rectangle(590, 530, 450, 50, "0xFf3efdd");

    this.man.setCollideWorldBounds(true);

    //this adds collision to given object, and sets static to true so it can't be moved
    this.physics.add.existing(testBox, true);
    this.physics.add.existing(puzzleBox, true);
    this.physics.add.existing(puzzleBox2);
    this.physics.add.existing(puzzleBox3, true);

    this.physics.add.existing(puzzleBox4, true);
    this.physics.add.existing(puzzleBox5);
    this.physics.add.existing(puzzleBox6, true);
    this.physics.add.existing(border1, true);
    this.physics.add.existing(border2, true);

    puzzleBox2.body.drag.setTo(10000);
    puzzleBox5.body.drag.setTo(10000);

    this.physics.add.overlap(this.man, this.stars, collectBox, null, this);
	this.physics.add.collider(testBox, this.man);
    this.physics.add.collider(border1, this.man);
    this.physics.add.collider(border2, this.man);

    this.physics.add.collider([puzzleBox, puzzleBox2,puzzleBox3,puzzleBox4,puzzleBox5,puzzleBox6], this.man);
    this.physics.add.collider(puzzleBox, testBox);

    this.physics.add.collider(puzzleBox2, this.man);
    this.physics.add.collider(puzzleBox3, this.man);
    this.physics.add.collider(puzzleBox4, this.man);
    this.physics.add.collider(puzzleBox5, this.man);
    this.physics.add.collider(puzzleBox6, this.man);

    this.physics.add.collider(puzzleBox);
    this.physics.add.collider(puzzleBox, puzzleBox3);
    this.physics.add.collider(puzzleBox, puzzleBox4);
    this.physics.add.collider(puzzleBox, puzzleBox5);
    this.physics.add.collider(puzzleBox, puzzleBox6);

    this.physics.add.collider(puzzleBox2, puzzleBox3);
    this.physics.add.collider(puzzleBox2, puzzleBox4);
    this.physics.add.collider(puzzleBox2, puzzleBox5);
    this.physics.add.collider(puzzleBox2, puzzleBox6);

    this.physics.add.collider(puzzleBox3, puzzleBox4);
    this.physics.add.collider(puzzleBox3, puzzleBox5);
    this.physics.add.collider(puzzleBox3, puzzleBox6);

    this.physics.add.collider(puzzleBox4, puzzleBox5);
    this.physics.add.collider(puzzleBox4, puzzleBox6);

    this.physics.add.collider(puzzleBox5, puzzleBox6);

    this.physics.add.collider(border1, puzzleBox);
    this.physics.add.collider(border1, puzzleBox2);
    this.physics.add.collider(border1, puzzleBox3);
    this.physics.add.collider(border1, puzzleBox4);
    this.physics.add.collider(border1, puzzleBox5);
    this.physics.add.collider(border1, puzzleBox6);

    this.physics.add.collider(border2, puzzleBox);
    this.physics.add.collider(border2, puzzleBox2);
    this.physics.add.collider(border2, puzzleBox3);
    this.physics.add.collider(border2, puzzleBox4);
    this.physics.add.collider(border2, puzzleBox5);
    this.physics.add.collider(border2, puzzleBox6);
  }

  update() {
    this.man.update(this);
  }
}
function collectBox(man, item) {
  item.disableBody(true, true);
}
