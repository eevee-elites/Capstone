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
	  
    let plat = this.add.rectangle(400, 300, 800, 600, 0x2F4F4F);
	let testBox = this.add.rectangle(40, 10, 20, 10, 0xA93226,);
    this.stars = this.physics.add.sprite(760, 510, "star");
    var music = this.sound.add("bg", true);
    music.setLoop(true);
    music.play();
    music.setVolume(0.3);
    this.man = this.physics.add
      .existing(new Player(this, 50, 300, "man"))
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

    
	// let border1 = this.add.rectangle(400, 20, 800, 50, "0x5F9EA0");
    // let border2 = this.add.rectangle(400, 595, 800, 50, "0x5F9EA0");

	let puzzleBox = this.add.rectangle(120, 80, 40, 40, "0xa6cedd");
    let puzzleBox2 = this.add.rectangle(120, 200, 40, 40, "0xa6cedd");
    let puzzleBox3 = this.add.rectangle(120, 320, 40, 40, "0xa6cedd");
    let puzzleBox4 = this.add.rectangle(120, 440, 40, 40, "0xa6cedd");
    let puzzleBox5 = this.add.rectangle(120, 560, 40, 40, "0xa6cedd");

    let puzzleBox6 = this.add.rectangle(180, 140, 40, 40, "0xa6cedd");
	let puzzleBox7 = this.add.rectangle(180, 260, 40, 40, "0xa6cedd");
    let puzzleBox8 = this.add.rectangle(180, 380, 40, 40, "0xa6cedd");
    let puzzleBox9 = this.add.rectangle(180, 500, 40, 40, "0xa6cedd");

    let puzzleBox10 = this.add.rectangle(240, 80, 40, 40, "0xa6cedd");
    let puzzleBox11 = this.add.rectangle(240, 200, 40, 40, "0xa6cedd");
    let puzzleBox12 = this.add.rectangle(240, 320, 40, 40, "0xa6cedd");
    let puzzleBox13 = this.add.rectangle(240, 440, 40, 40, "0xa6cedd");
	let puzzleBox14 = this.add.rectangle(240, 560, 40, 40, "0xa6cedd");

	let puzzleBox15 = this.add.rectangle(300, 140, 40, 40, "0xa6cedd");
    let puzzleBox16 = this.add.rectangle(300, 260, 40, 40, "0xa6cedd");
    let puzzleBox17 = this.add.rectangle(300, 380, 40, 40, "0xa6cedd");
    let puzzleBox18 = this.add.rectangle(300, 500, 40, 40, "0xa6cedd");
    
	let puzzleBox19 = this.add.rectangle(360, 80, 40, 40, "0xa6cedd");
	let puzzleBox20 = this.add.rectangle(360, 200, 40, 40, "0xa6cedd");
    let puzzleBox21 = this.add.rectangle(360, 320, 40, 40, "0xa6cedd");
    let puzzleBox22 = this.add.rectangle(360, 440, 40, 40, "0xa6cedd");
    let puzzleBox23 = this.add.rectangle(360, 560, 40, 40, "0xa6cedd");

    let puzzleBox24 = this.add.rectangle(420, 140, 40, 40, "0xa6cedd");
    let puzzleBox25 = this.add.rectangle(420, 260, 40, 40, "0xa6cedd");
    let puzzleBox26 = this.add.rectangle(420, 380, 40, 40, "0xa6cedd");
    let puzzleBox27 = this.add.rectangle(420, 500, 40, 40, "0xa6cedd");

	let puzzleBox28 = this.add.rectangle(480, 80, 40, 40, "0xa6cedd");
    let puzzleBox29 = this.add.rectangle(480, 200, 40, 40, "0xa6cedd");
    let puzzleBox30 = this.add.rectangle(480, 320, 40, 40, "0xa6cedd");
    let puzzleBox31 = this.add.rectangle(480, 440, 40, 40, "0xa6cedd");
    let puzzleBox32 = this.add.rectangle(480, 560, 40, 40, "0xa6cedd");

	let puzzleBox33 = this.add.rectangle(540, 140, 40, 40, "0xa6cedd");
    let puzzleBox34 = this.add.rectangle(540, 260, 40, 40, "0xa6cedd");
    let puzzleBox35 = this.add.rectangle(540, 380, 40, 40, "0xa6cedd");
    let puzzleBox36 = this.add.rectangle(540, 500, 40, 40, "0xa6cedd");

	let puzzleBox38 = this.add.rectangle(600, 80, 40, 40, "0xa6cedd");
    let puzzleBox39 = this.add.rectangle(600, 200, 40, 40, "0xa6cedd");
    let puzzleBox40 = this.add.rectangle(600, 320, 40, 40, "0xa6cedd");
    let puzzleBox41 = this.add.rectangle(600, 440, 40, 40, "0xa6cedd");
    let puzzleBox42 = this.add.rectangle(600, 560, 40, 40, "0xa6cedd");
	
    this.man.setCollideWorldBounds(true);

    //this adds collision to given object, and sets static to true so it can't be moved
    this.physics.add.existing(testBox, true);

    
	this.physics.add.existing(puzzleBox, true);
    this.physics.add.existing(puzzleBox2, true);
    this.physics.add.existing(puzzleBox3, true);
    this.physics.add.existing(puzzleBox4, true);
    this.physics.add.existing(puzzleBox5, true);
    this.physics.add.existing(puzzleBox6);
    this.physics.add.existing(puzzleBox7);
    this.physics.add.existing(puzzleBox8);
    this.physics.add.existing(puzzleBox9);
    this.physics.add.existing(puzzleBox10, true);
    this.physics.add.existing(puzzleBox11, true);
    this.physics.add.existing(puzzleBox12, true);
    this.physics.add.existing(puzzleBox13, true);
    this.physics.add.existing(puzzleBox14, true);
    this.physics.add.existing(puzzleBox15);
    this.physics.add.existing(puzzleBox16);
    this.physics.add.existing(puzzleBox17);
    this.physics.add.existing(puzzleBox18);
    this.physics.add.existing(puzzleBox19, true);
    this.physics.add.existing(puzzleBox20, true);
    this.physics.add.existing(puzzleBox21, true);
    this.physics.add.existing(puzzleBox22, true);
    this.physics.add.existing(puzzleBox23, true);
    this.physics.add.existing(puzzleBox24);
    this.physics.add.existing(puzzleBox25);
    this.physics.add.existing(puzzleBox26);
    this.physics.add.existing(puzzleBox27);
    this.physics.add.existing(puzzleBox28, true);
    this.physics.add.existing(puzzleBox29, true);
    this.physics.add.existing(puzzleBox30, true);
    this.physics.add.existing(puzzleBox31, true);
    this.physics.add.existing(puzzleBox32, true);
    this.physics.add.existing(puzzleBox33);
    this.physics.add.existing(puzzleBox34);
    this.physics.add.existing(puzzleBox35);
    this.physics.add.existing(puzzleBox36);
    this.physics.add.existing(puzzleBox38, true);
    this.physics.add.existing(puzzleBox39, true);
    this.physics.add.existing(puzzleBox40, true);
    this.physics.add.existing(puzzleBox41, true);
    this.physics.add.existing(puzzleBox42, true);


    puzzleBox6.body.drag.setTo(100000);
    puzzleBox7.body.drag.setTo(100000);
    puzzleBox8.body.drag.setTo(100000);
    puzzleBox9.body.drag.setTo(100000);

	puzzleBox15.body.drag.setTo(100000);
    puzzleBox16.body.drag.setTo(100000);
    puzzleBox17.body.drag.setTo(100000);
    puzzleBox18.body.drag.setTo(100000);

	puzzleBox24.body.drag.setTo(100000);
    puzzleBox25.body.drag.setTo(100000);
    puzzleBox26.body.drag.setTo(100000);
    puzzleBox27.body.drag.setTo(100000);

	puzzleBox33.body.drag.setTo(100000);
    puzzleBox34.body.drag.setTo(100000);
    puzzleBox35.body.drag.setTo(100000);
    puzzleBox36.body.drag.setTo(100000);

    this.physics.add.overlap(this.man, this.stars, collectBox, null, this);

    // this.physics.add.collider(border1, this.man);
    // this.physics.add.collider(border2, this.man);
    // this.physics.add.collider(testBox, this.man);

    this.physics.add.collider(puzzleBox, this.man);
    this.physics.add.collider(puzzleBox2, this.man);
    this.physics.add.collider(puzzleBox3, this.man);
    this.physics.add.collider(puzzleBox4, this.man);
    this.physics.add.collider(puzzleBox5, this.man);
    this.physics.add.collider(puzzleBox6, this.man);
    this.physics.add.collider(puzzleBox7, this.man);
    this.physics.add.collider(puzzleBox8, this.man);
    this.physics.add.collider(puzzleBox9, this.man);
    this.physics.add.collider(puzzleBox10, this.man);
    this.physics.add.collider(puzzleBox11, this.man);
    this.physics.add.collider(puzzleBox12, this.man);
    this.physics.add.collider(puzzleBox13, this.man);
    this.physics.add.collider(puzzleBox14, this.man);
    this.physics.add.collider(puzzleBox15, this.man);
    this.physics.add.collider(puzzleBox16, this.man);
    this.physics.add.collider(puzzleBox17, this.man);
    this.physics.add.collider(puzzleBox18, this.man);
    this.physics.add.collider(puzzleBox19, this.man);
    this.physics.add.collider(puzzleBox20, this.man);
    this.physics.add.collider(puzzleBox21, this.man);
    this.physics.add.collider(puzzleBox22, this.man);
    this.physics.add.collider(puzzleBox23, this.man);
    this.physics.add.collider(puzzleBox24, this.man);
    this.physics.add.collider(puzzleBox25, this.man);
    this.physics.add.collider(puzzleBox26, this.man);
    this.physics.add.collider(puzzleBox27, this.man);
    this.physics.add.collider(puzzleBox28, this.man);
    this.physics.add.collider(puzzleBox29, this.man);
    this.physics.add.collider(puzzleBox30, this.man);
    this.physics.add.collider(puzzleBox31, this.man);
    this.physics.add.collider(puzzleBox32, this.man);
    this.physics.add.collider(puzzleBox33, this.man);
    this.physics.add.collider(puzzleBox34, this.man);
    this.physics.add.collider(puzzleBox35, this.man);
    this.physics.add.collider(puzzleBox36, this.man);
    this.physics.add.collider(puzzleBox38, this.man);
    this.physics.add.collider(puzzleBox39, this.man);
    this.physics.add.collider(puzzleBox40, this.man);
    this.physics.add.collider(puzzleBox41, this.man);
    this.physics.add.collider(puzzleBox42, this.man);

	this.physics.add.overlap(this.man, testBox, reset, null, this);


}  update() {
    this.man.update(this);
	
  }
}
function collectBox(man, item) {
  item.disableBody(true, true);
}

function reset(){
	// location.reload()
	this.scene.start('Puzzle1')
}