import 'phaser';
import {Game} from 'phaser';
import Player from '../Models/Player';
import Animate from '../Models/Animate';

export default class Puzzle1 extends Phaser.Scene {
	constructor() {
		super('Puzzle1');
		let man;
		var anims;
	}

	preload() {
		this.load.spritesheet('man', 'assets/man.png', {
			frameWidth: 64,
			frameHeight: 64,
		});
		this.load.audio('bg', 'assets/bg.wav');
		this.load.image('star', 'assets/star.png');
		this.load.image('table', 'assets/table.png');
	}

	create() {
		let plat = this.add.rectangle(400, 300, 800, 600, 0x2f4f4f);
		let testBox = this.add.rectangle(40, 10, 20, 10, 0xa93226);
		let exitBox = this.add.rectangle(0, 400, 50, 50, 0xffffff);
		this.stars = this.physics.add.sprite(760, 510, 'star');
		var music = this.sound.add('bg', true);
		music.setLoop(true);
		music.play();
		music.setVolume(0.3);
		this.man = this.physics.add
			.existing(new Player(this, 50, 300, 'man'))
			.setOrigin(0.5, 0.5);
		Animate(this, 'man', 4, 7, 8, 11, 12, 15, 0, 3, 0);
		this.physics.add.existing(exitBox, true);
		this.physics.add.overlap(this.man, exitBox, exitRoom, null, this);
		// let border1 = this.add.rectangle(400, 20, 800, 50, "0x5F9EA0");
		// let border2 = this.add.rectangle(400, 595, 800, 50, "0x5F9EA0");

		let puzzleBox = this.physics.add.sprite(120, 80, 'table');
		let puzzleBox2 = this.physics.add.sprite(120, 200, 'table');
		let puzzleBox3 = this.physics.add.sprite(120, 320, 'table');
		let puzzleBox4 = this.physics.add.sprite(120, 440, 'table');
		let puzzleBox5 = this.physics.add.sprite(120, 560, 'table');

		let puzzleBox6 = this.physics.add.sprite(180, 140, 'table');
		let puzzleBox7 = this.physics.add.sprite(180, 260, 'table');
		let puzzleBox8 = this.physics.add.sprite(180, 380, 'table');
		let puzzleBox9 = this.physics.add.sprite(180, 500, 'table');

		let puzzleBox10 = this.physics.add.sprite(240, 80, 'table');
		let puzzleBox11 = this.physics.add.sprite(240, 200, 'table');
		let puzzleBox12 = this.physics.add.sprite(240, 320, 'table');
		let puzzleBox13 = this.physics.add.sprite(240, 440, 'table');
		let puzzleBox14 = this.physics.add.sprite(240, 560, 'table');

		let puzzleBox15 = this.physics.add.sprite(300, 140, 'table');
		let puzzleBox16 = this.physics.add.sprite(300, 260, 'table');
		let puzzleBox17 = this.physics.add.sprite(300, 380, 'table');
		let puzzleBox18 = this.physics.add.sprite(300, 560, 'table');

		let puzzleBox19 = this.physics.add.sprite(360, 80, 'table');
		let puzzleBox20 = this.physics.add.sprite(360, 200, 'table');
		let puzzleBox21 = this.physics.add.sprite(360, 320, 'table');
		let puzzleBox22 = this.physics.add.sprite(360, 440, 'table');
		let puzzleBox23 = this.physics.add.sprite(360, 560, 'table');

		let puzzleBox24 = this.physics.add.sprite(420, 140, 'table');
		let puzzleBox25 = this.physics.add.sprite(420, 260, 'table');
		let puzzleBox26 = this.physics.add.sprite(420, 380, 'table');
		let puzzleBox27 = this.physics.add.sprite(420, 500, 'table');

		let puzzleBox28 = this.physics.add.sprite(480, 80, 'table');
		let puzzleBox29 = this.physics.add.sprite(480, 200, 'table');
		let puzzleBox30 = this.physics.add.sprite(480, 320, 'table');
		let puzzleBox31 = this.physics.add.sprite(480, 440, 'table');
		let puzzleBox32 = this.physics.add.sprite(480, 560, 'table');

		let puzzleBox33 = this.physics.add.sprite(540, 140, 'table');
		let puzzleBox34 = this.physics.add.sprite(540, 260, 'table');
		let puzzleBox35 = this.physics.add.sprite(540, 380, 'table');
		let puzzleBox36 = this.physics.add.sprite(540, 500, 'table');

		let puzzleBox38 = this.physics.add.sprite(600, 80, 'table');
		let puzzleBox39 = this.physics.add.sprite(600, 200, 'table');
		let puzzleBox40 = this.physics.add.sprite(600, 320, 'table');
		let puzzleBox41 = this.physics.add.sprite(600, 440, 'table');
		let puzzleBox42 = this.physics.add.sprite(600, 560, 'table');

		this.man.setCollideWorldBounds(true);

		puzzleBox.setCollideWorldBounds(true);
		puzzleBox2.setCollideWorldBounds(true);
		puzzleBox3.setCollideWorldBounds(true);
		puzzleBox4.setCollideWorldBounds(true);
		puzzleBox5.setCollideWorldBounds(true);
		puzzleBox6.setCollideWorldBounds(true);
		puzzleBox7.setCollideWorldBounds(true);
		puzzleBox8.setCollideWorldBounds(true);
		puzzleBox9.setCollideWorldBounds(true);
		puzzleBox10.setCollideWorldBounds(true);
		puzzleBox11.setCollideWorldBounds(true);
		puzzleBox12.setCollideWorldBounds(true);
		puzzleBox13.setCollideWorldBounds(true);
		puzzleBox14.setCollideWorldBounds(true);
		puzzleBox15.setCollideWorldBounds(true);
		puzzleBox16.setCollideWorldBounds(true);
		puzzleBox17.setCollideWorldBounds(true);
		puzzleBox18.setCollideWorldBounds(true);
		puzzleBox19.setCollideWorldBounds(true);
		puzzleBox20.setCollideWorldBounds(true);
		puzzleBox21.setCollideWorldBounds(true);
		puzzleBox22.setCollideWorldBounds(true);
		puzzleBox23.setCollideWorldBounds(true);
		puzzleBox24.setCollideWorldBounds(true);
		puzzleBox25.setCollideWorldBounds(true);
		puzzleBox26.setCollideWorldBounds(true);
		puzzleBox27.setCollideWorldBounds(true);
		puzzleBox28.setCollideWorldBounds(true);
		puzzleBox29.setCollideWorldBounds(true);
		puzzleBox30.setCollideWorldBounds(true);
		puzzleBox31.setCollideWorldBounds(true);
		puzzleBox32.setCollideWorldBounds(true);
		puzzleBox33.setCollideWorldBounds(true);
		puzzleBox34.setCollideWorldBounds(true);
		puzzleBox35.setCollideWorldBounds(true);
		puzzleBox36.setCollideWorldBounds(true);
		puzzleBox38.setCollideWorldBounds(true);
		puzzleBox39.setCollideWorldBounds(true);
		puzzleBox40.setCollideWorldBounds(true);
		puzzleBox41.setCollideWorldBounds(true);
		puzzleBox42.setCollideWorldBounds(true);

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
		this.physics.add.collider(this.man, [
			puzzleBox,
			puzzleBox2,
			puzzleBox3,
			puzzleBox4,
			puzzleBox5,
			puzzleBox6,
			puzzleBox7,
			puzzleBox8,
			puzzleBox9,
			puzzleBox10,
			puzzleBox11,
			puzzleBox12,
			puzzleBox13,
			puzzleBox14,
			puzzleBox15,
			puzzleBox16,
			puzzleBox17,
			puzzleBox18,
			puzzleBox19,
			puzzleBox20,
			puzzleBox21,
			puzzleBox22,
			puzzleBox23,
			puzzleBox24,
			puzzleBox25,
			puzzleBox26,
			puzzleBox27,
			puzzleBox28,
			puzzleBox29,
			puzzleBox30,
			puzzleBox31,
			puzzleBox32,
			puzzleBox33,
			puzzleBox34,
			puzzleBox35,
			puzzleBox36,
			puzzleBox42,
			puzzleBox38,
			puzzleBox39,
			puzzleBox40,
			puzzleBox41,
		]);

		this.physics.add.collider(puzzleBox, [
			puzzleBox2,
			puzzleBox3,
			puzzleBox4,
			puzzleBox5,
			puzzleBox6,
			puzzleBox7,
			puzzleBox8,
			puzzleBox9,
			puzzleBox10,
			puzzleBox11,
			puzzleBox12,
			puzzleBox13,
			puzzleBox14,
			puzzleBox15,
			puzzleBox16,
			puzzleBox17,
			puzzleBox18,
			puzzleBox19,
			puzzleBox20,
			puzzleBox21,
			puzzleBox22,
			puzzleBox23,
			puzzleBox24,
			puzzleBox25,
			puzzleBox26,
			puzzleBox27,
			puzzleBox28,
			puzzleBox29,
			puzzleBox30,
			puzzleBox31,
			puzzleBox32,
			puzzleBox33,
			puzzleBox34,
			puzzleBox35,
			puzzleBox36,
			puzzleBox42,
			puzzleBox38,
			puzzleBox39,
			puzzleBox40,
			puzzleBox41,
		]);
		this.physics.add.collider(puzzleBox2, [
			puzzleBox,
			puzzleBox3,
			puzzleBox4,
			puzzleBox5,
			puzzleBox6,
			puzzleBox7,
			puzzleBox8,
			puzzleBox9,
			puzzleBox10,
			puzzleBox11,
			puzzleBox12,
			puzzleBox13,
			puzzleBox14,
			puzzleBox15,
			puzzleBox16,
			puzzleBox17,
			puzzleBox18,
			puzzleBox19,
			puzzleBox20,
			puzzleBox21,
			puzzleBox22,
			puzzleBox23,
			puzzleBox24,
			puzzleBox25,
			puzzleBox26,
			puzzleBox27,
			puzzleBox28,
			puzzleBox29,
			puzzleBox30,
			puzzleBox31,
			puzzleBox32,
			puzzleBox33,
			puzzleBox34,
			puzzleBox35,
			puzzleBox36,
			puzzleBox42,
			puzzleBox38,
			puzzleBox39,
			puzzleBox40,
			puzzleBox41,
		]);
		this.physics.add.collider(puzzleBox3, [
			puzzleBox,
			puzzleBox2,
			puzzleBox4,
			puzzleBox5,
			puzzleBox6,
			puzzleBox7,
			puzzleBox8,
			puzzleBox9,
			puzzleBox10,
			puzzleBox11,
			puzzleBox12,
			puzzleBox13,
			puzzleBox14,
			puzzleBox15,
			puzzleBox16,
			puzzleBox17,
			puzzleBox18,
			puzzleBox19,
			puzzleBox20,
			puzzleBox21,
			puzzleBox22,
			puzzleBox23,
			puzzleBox24,
			puzzleBox25,
			puzzleBox26,
			puzzleBox27,
			puzzleBox28,
			puzzleBox29,
			puzzleBox30,
			puzzleBox31,
			puzzleBox32,
			puzzleBox33,
			puzzleBox34,
			puzzleBox35,
			puzzleBox36,
			puzzleBox42,
			puzzleBox38,
			puzzleBox39,
			puzzleBox40,
			puzzleBox41,
			puzzleBox42,
		]);

		this.physics.add.overlap(this.man, testBox, reset, null, this);
	}
	update() {
		this.man.update(this);
	}
}
function collectBox(man, item) {
	item.disableBody(true, true);
}
function exitRoom() {
	this.scene.start('Game');
}

function reset() {
	// location.reload()
	this.scene.start('Puzzle1');
}
