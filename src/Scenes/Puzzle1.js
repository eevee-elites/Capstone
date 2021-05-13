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
		let exitBox = this.add.rectangle(0, 400, 20, 20, 0xffffff);
		this.stars = this.physics.add.sprite(760, 510, 'star');
		var music = this.sound.add('bg', true);
		music.setLoop(true);
		music.play();
		music.setVolume(0.3);
		this.man = this.physics.add
			.existing(new Player(this, 50, 300, 'man'))
			.setOrigin(0.5, 0.5);
		this.puzzleBoxRow2 = this.physics.add.group({
			key: 'table',
			repeat: 4,
			setXY: {x: 120, y: 80, stepY: 120},
			collideWorldBounds: true,
			immovable: true,
		});
		this.puzzleBoxRow1 = this.physics.add.group({
			key: 'table',
			repeat: 3,
			setXY: {x: 180, y: 140, stepY: 120},
			collideWorldBounds: true,
			allowDrag: true,
			dragX: 100000,
			dragY: 100000,
		});
		this.puzzleBoxRow3 = this.physics.add.group({
			key: 'table',
			repeat: 4,
			setXY: {x: 240, y: 80, stepY: 120},
			collideWorldBounds: true,
			immovable: true,
		});
		this.puzzleBoxRow4 = this.physics.add.group({
			key: 'table',
			repeat: 3,
			setXY: {x: 300, y: 140, stepY: 120},
			collideWorldBounds: true,
			allowDrag: true,
			dragX: 100000,
			dragY: 100000,
		});
		this.puzzleBoxRow5 = this.physics.add.group({
			key: 'table',
			repeat: 4,
			setXY: {x: 360, y: 80, stepY: 120},
			collideWorldBounds: true,
			immovable: true,
		});
		this.puzzleBoxRow6 = this.physics.add.group({
			key: 'table',
			repeat: 3,
			setXY: {x: 420, y: 140, stepY: 120},
			collideWorldBounds: true,
			allowDrag: true,
			dragX: 100000,
			dragY: 100000,
		});
		this.puzzleBoxRow7 = this.physics.add.group({
			key: 'table',
			repeat: 4,
			setXY: {x: 480, y: 80, stepY: 120},
			collideWorldBounds: true,
			immovable: true,
		});
		this.puzzleBoxRow8 = this.physics.add.group({
			key: 'table',
			repeat: 3,
			setXY: {x: 540, y: 140, stepY: 120},
			collideWorldBounds: true,
			allowDrag: true,
			dragX: 100000,
			dragY: 100000,
		});
		this.puzzleBoxRow9 = this.physics.add.group({
			key: 'table',
			repeat: 4,
			setXY: {x: 600, y: 80, stepY: 120},
			collideWorldBounds: true,
			immovable: true,
		});
		Animate(this, 'man', 4, 7, 8, 11, 12, 15, 0, 3, 0);
		this.physics.add.existing(exitBox, true);
		this.physics.add.overlap(this.man, exitBox, exitRoom, null, this);

		this.man.setCollideWorldBounds(true);

		//this adds collision to given object, and sets static to true so it can't be moved
		this.physics.add.existing(testBox, true);
		this.physics.add.overlap(this.man, this.stars, collectBox, null, this);

		// this.physics.add.collider(this.puzzleBoxRow2, this.man);
		this.physics.add.collider(this.puzzleBoxRow1, this.man);
		this.physics.add.collider(this.puzzleBoxRow1, this.puzzleBoxRow2);
		this.physics.add.collider(this.puzzleBoxRow2, this.puzzleBoxRow3);
		this.physics.add.collider(this.puzzleBoxRow3, [
			this.puzzleBoxRow1,
			this.puzzleBoxRow2,
			this.puzzleBoxRow4,
			this.puzzleBoxRow5,
			this.puzzleBoxRow6,
			this.puzzleBoxRow7,
			this.puzzleBoxRow8,
			this.puzzleBoxRow9,
		]);
		this.physics.add.collider(this.puzzleBoxRow4, [
			this.puzzleBoxRow1,
			this.puzzleBoxRow2,
			this.puzzleBoxRow3,
			this.puzzleBoxRow5,
			this.puzzleBoxRow6,
			this.puzzleBoxRow7,
			this.puzzleBoxRow8,
			this.puzzleBoxRow9,
		]);
		this.physics.add.collider(this.puzzleBoxRow5, [
			this.puzzleBoxRow1,
			this.puzzleBoxRow2,
			this.puzzleBoxRow3,
			this.puzzleBoxRow4,
			this.puzzleBoxRow6,
			this.puzzleBoxRow7,
			this.puzzleBoxRow8,
			this.puzzleBoxRow9,
		]);
		this.physics.add.collider(this.puzzleBoxRow6, [
			this.puzzleBoxRow1,
			this.puzzleBoxRow2,
			this.puzzleBoxRow3,
			this.puzzleBoxRow4,
			this.puzzleBoxRow5,
			this.puzzleBoxRow7,
			this.puzzleBoxRow8,
			this.puzzleBoxRow9,
		]);
		this.physics.add.collider(this.puzzleBoxRow7, [
			this.puzzleBoxRow1,
			this.puzzleBoxRow2,
			this.puzzleBoxRow3,
			this.puzzleBoxRow4,
			this.puzzleBoxRow5,
			this.puzzleBoxRow6,
			this.puzzleBoxRow8,
			this.puzzleBoxRow9,
		]);
		this.physics.add.collider(this.puzzleBoxRow8, [
			this.puzzleBoxRow1,
			this.puzzleBoxRow2,
			this.puzzleBoxRow3,
			this.puzzleBoxRow4,
			this.puzzleBoxRow5,
			this.puzzleBoxRow6,
			this.puzzleBoxRow7,
			this.puzzleBoxRow9,
		]);
		this.physics.add.collider(this.puzzleBoxRow9, [
			this.puzzleBoxRow1,
			this.puzzleBoxRow2,
			this.puzzleBoxRow3,
			this.puzzleBoxRow4,
			this.puzzleBoxRow5,
			this.puzzleBoxRow6,
			this.puzzleBoxRow7,
			this.puzzleBoxRow8,
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
	this.scene.start('Puzzle1');
}
