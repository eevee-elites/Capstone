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
		//bg
		this.add.rectangle(400, 300, 800, 600, 0xffffff);
		//top and bottom wall
		let wall1 = this.add.rectangle(400, 50, 800, 100, 0x2f4f4f);
		let wall2 = this.add.rectangle(400, 550, 800, 100, 0x2f4f4f);
		this.physics.add.existing(wall1, true);
		this.physics.add.existing(wall2, true);
		//carpet
		this.add.rectangle(400, 300, 800, 350, 0x6c2a2a);
		//reset, exit, star
		let resetBox = this.add.rectangle(0, 200, 20, 20, 0xa93226);
		let exitBox = this.add.rectangle(0, 400, 20, 20, 0xffffff);
		this.add.rectangle(0, 400, 10, 10, 0x000000);
		this.stars = this.physics.add.sprite(760, 410, 'star');
		//music
		var music = this.sound.add('bg', true);
		music.setLoop(true);
		music.play();
		music.setVolume(0.3);
		//player
		this.man = this.physics.add
			.existing(new Player(this, 50, 300, 'man'))
			.setOrigin(0.5, 0.5);
		Animate(this, 'man', 4, 7, 8, 11, 12, 15, 0, 3, 0);

		//puzzle
		makePuzzle(this);
		//collisions
		this.man.setCollideWorldBounds(true);

		//exit
		this.physics.add.existing(exitBox, true);
		this.physics.add.overlap(this.man, exitBox, exitRoom, null, this);
		//collection
		this.physics.add.overlap(this.man, this.stars, collectBox, null, this);
		// reset
		this.physics.add.existing(resetBox, true);
		this.physics.add.overlap(this.man, resetBox, reset, null, this);
		// wall
		this.physics.add.collider(wall1, this.man);
		this.physics.add.collider(wall2, this.man);
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
function makePuzzle(key) {
	//puzzle
	//row1
	const staticRow1 = key.physics.add.staticGroup({
		key: 'table',
		repeat: 2,
		setXY: {x: 150, y: 120, stepY: 160},
		immovable: true,
	});
	const movableRow1 = key.physics.add.group({
		key: 'table',
		repeat: 1,
		setXY: {x: 150, y: 200, stepY: 160},
		collideWorldBounds: true,
		allowDrag: true,
		dragX: 10000,
		dragY: 10000,
	});
	key.physics.add.collider(staticRow1, key.man);
	key.physics.add.collider(movableRow1, key.man);
	//row 2
	const movableRow2Set1 = key.physics.add.group({
		key: 'table',
		repeat: 1,
		setXY: {x: 250, y: 120, stepY: 80},
		collideWorldBounds: true,
		allowDrag: true,
		dragX: 10000,
		dragY: 10000,
	});
	const movableRow2Set2 = key.physics.add.group({
		key: 'table',
		repeat: 1,
		setXY: {x: 250, y: 360, stepY: 80},
		collideWorldBounds: true,
		allowDrag: true,
		dragX: 10000,
		dragY: 10000,
	});
	const staticRow2B3 = key.physics.add.staticSprite(250, 280, 'table');
	key.physics.add.collider(movableRow2Set1, key.man);
	key.physics.add.collider(movableRow2Set2, key.man);
	key.physics.add.collider(staticRow2B3, key.man);
	// row 3
	const staticRow3 = key.physics.add.staticGroup({
		key: 'table',
		repeat: 1,
		setXY: {x: 350, y: 280, stepY: 80},
		immovable: true,
	});
	const movableRow3Set1 = key.physics.add.group({
		key: 'table',
		repeat: 1,
		setXY: {x: 350, y: 120, stepY: 80},
		collideWorldBounds: true,
		allowDrag: true,
		dragX: 10000,
		dragY: 10000,
	});
	const movableRow3B5 = key.physics.add.sprite(350, 440, 'table');
	movableRow3B5.body.setDrag(10000, 10000);
	key.physics.add.collider(staticRow3, key.man);
	key.physics.add.collider(movableRow3Set1, key.man);
	key.physics.add.collider(movableRow3B5, key.man);

	//row 4
	const staticRow4 = key.physics.add.staticGroup({
		key: 'table',
		repeat: 1,
		setXY: {x: 450, y: 200, stepY: 80},
		immovable: true,
	});
	const movableRow4Set1 = key.physics.add.group({
		key: 'table',
		repeat: 2,
		setXY: {x: 450, y: 280, stepY: 80},
		collideWorldBounds: true,
		allowDrag: true,
		dragX: 10000,
		dragY: 10000,
	});
	const movableRow4B2 = key.physics.add.sprite(450, 120, 'table');
	movableRow4B2.body.setDrag(10000, 10000);
	key.physics.add.collider(staticRow4, key.man);
	key.physics.add.collider(movableRow4B2, key.man);
	key.physics.add.collider(movableRow4Set1, key.man);
	//row5
	const movableRow5Set1 = key.physics.add.group({
		key: 'table',
		repeat: 1,
		setXY: {x: 550, y: 120, stepY: 240},
		collideWorldBounds: true,
		allowDrag: true,
		dragX: 10000,
		dragY: 10000,
	});
	const staticRow5 = key.physics.add.staticGroup({
		key: 'table',
		repeat: 1,
		setXY: {x: 550, y: 200, stepY: 240},
		immovable: true,
	});
	const movableRow5B3 = key.physics.add.sprite(550, 280, 'table');
	movableRow5B3.body.setDrag(10000, 10000);
	key.physics.add.collider(movableRow5B3, key.man);
	key.physics.add.collider(movableRow5Set1, key.man);
	key.physics.add.collider(staticRow5, key.man);
	//row 6
	const staticRow6 = key.physics.add.staticGroup({
		key: 'table',
		repeat: 1,
		setXY: {x: 650, y: 120, stepY: 80},
		immovable: true,
	});
	const movableRow6Set1 = key.physics.add.group({
		key: 'table',
		repeat: 1,
		setXY: {x: 650, y: 280, stepY: 80},
		collideWorldBounds: true,
		allowDrag: true,
		dragX: 10000,
		dragY: 10000,
	});
	const staticRow6B3 = key.physics.add.staticSprite(650, 440, 'table');
	key.physics.add.collider(staticRow6, key.man);
	key.physics.add.collider(staticRow6B3, key.man);
	key.physics.add.collider(movableRow6Set1, key.man);
}
