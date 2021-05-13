import 'phaser';
import {Game} from 'phaser';
import Player from '../Models/Player';
import Animate from '../Models/Animate';

export default class Puzzle1 extends Phaser.Scene {
	constructor() {
		super('Puzzle1');
	}

	preload() {
		this.load.spritesheet('man', 'assets/man.png', {
			frameWidth: 64,
			frameHeight: 64,
		});
		this.load.audio('bg', 'assets/bg.wav');
		this.load.image('star', 'assets/star.png');
		this.load.image('table', 'assets/table.png');
		this.load.image('tiles', '../assets/Room spritesheet2.png');
		this.load.tilemapTiledJSON('PuzzleMap', '../assets/Puzzle1Room.json');
	}

	create() {
		//exit
		let exitBox = this.add.rectangle(20, 300, 50, 50, 0xffffff);
		//map
		const map = this.make.tilemap({key: 'PuzzleMap'});

		const tileset = map.addTilesetImage('PuzzleRoom', 'tiles');

		const belowLayer = map.createLayer('Below', tileset, 0, 0);
		const collidingLayer = map.createLayer('Colliding', tileset, 0, 0);

		collidingLayer.setCollisionByProperty({collides: true});

		//player
		this.man = this.physics.add
			.existing(new Player(this, 400, 300, 'man'))
			.setOrigin(5.5, 0.5);

		this.physics.add.collider(this.man, collidingLayer);

		Animate(this, 'man', 4, 7, 8, 11, 12, 15, 0, 3, 0);

		this.cameras.main.setBounds(48, 0, 800, 600);
		this.cameras.main.startFollow(this.man);
		let resetBox = this.add.rectangle(60, 200, 20, 20, 0xa93226);

		this.add.rectangle(0, 400, 10, 10, 0x000000);
		this.stars = this.physics.add.sprite(760, 410, 'star');
		this.collect = false;
		//music
		var music = this.sound.add('bg', true);
		music.setLoop(true);
		music.play();
		music.setVolume(0.3);

		//puzzle
		makePuzzle(this);
		//collisions
		this.man.setCollideWorldBounds(true);

		//exit
		this.physics.add.existing(exitBox, true);
		this.physics.add.overlap(this.man, exitBox, this.exitRoom, null, this);
		//collection
		this.physics.add.overlap(this.man, this.stars, collectBox, null, this);
		// reset
		this.physics.add.existing(resetBox, true);
		this.physics.add.overlap(this.man, resetBox, reset, null, this);
	}
	exitRoom() {
		console.log(this.collect);
		if (this.collect) return this.scene.start('StartScene');
	}
	update() {
		this.man.update(this);
	}
}
function collectBox(man, item) {
	item.disableBody(true, true);
	this.collect = true;
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
		setXY: {x: 190, y: 120, stepY: 160},
		immovable: true,
	});
	const movableRow1 = key.physics.add.group({
		key: 'table',
		repeat: 1,
		setXY: {x: 190, y: 200, stepY: 160},
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
		setXY: {x: 290, y: 120, stepY: 80},
		collideWorldBounds: true,
		allowDrag: true,
		dragX: 10000,
		dragY: 10000,
	});
	const movableRow2Set2 = key.physics.add.group({
		key: 'table',
		repeat: 1,
		setXY: {x: 290, y: 360, stepY: 80},
		collideWorldBounds: true,
		allowDrag: true,
		dragX: 10000,
		dragY: 10000,
	});
	const staticRow2B3 = key.physics.add.staticSprite(290, 280, 'table');
	key.physics.add.collider(movableRow2Set1, key.man);
	key.physics.add.collider(movableRow2Set2, key.man);
	key.physics.add.collider(staticRow2B3, key.man);
	// row 3
	const staticRow3 = key.physics.add.staticGroup({
		key: 'table',
		repeat: 1,
		setXY: {x: 390, y: 280, stepY: 80},
		immovable: true,
	});
	const movableRow3Set1 = key.physics.add.group({
		key: 'table',
		repeat: 1,
		setXY: {x: 390, y: 120, stepY: 80},
		collideWorldBounds: true,
		allowDrag: true,
		dragX: 10000,
		dragY: 10000,
	});
	const movableRow3B5 = key.physics.add.sprite(390, 440, 'table');
	movableRow3B5.body.setDrag(10000, 10000);
	key.physics.add.collider(staticRow3, key.man);
	key.physics.add.collider(movableRow3Set1, key.man);
	key.physics.add.collider(movableRow3B5, key.man);

	//row 4
	const staticRow4 = key.physics.add.staticGroup({
		key: 'table',
		repeat: 1,
		setXY: {x: 490, y: 200, stepY: 80},
		immovable: true,
	});
	const movableRow4Set1 = key.physics.add.group({
		key: 'table',
		repeat: 2,
		setXY: {x: 490, y: 280, stepY: 80},
		collideWorldBounds: true,
		allowDrag: true,
		dragX: 10000,
		dragY: 10000,
	});
	const movableRow4B2 = key.physics.add.sprite(490, 120, 'table');
	movableRow4B2.body.setDrag(10000, 10000);
	key.physics.add.collider(staticRow4, key.man);
	key.physics.add.collider(movableRow4B2, key.man);
	key.physics.add.collider(movableRow4Set1, key.man);
	//row5
	const movableRow5Set1 = key.physics.add.group({
		key: 'table',
		repeat: 1,
		setXY: {x: 590, y: 120, stepY: 240},
		collideWorldBounds: true,
		allowDrag: true,
		dragX: 10000,
		dragY: 10000,
	});
	const staticRow5 = key.physics.add.staticGroup({
		key: 'table',
		repeat: 1,
		setXY: {x: 590, y: 200, stepY: 240},
		immovable: true,
	});
	const movableRow5B3 = key.physics.add.sprite(590, 280, 'table');
	movableRow5B3.body.setDrag(10000, 10000);
	key.physics.add.collider(movableRow5B3, key.man);
	key.physics.add.collider(movableRow5Set1, key.man);
	key.physics.add.collider(staticRow5, key.man);
	//row 6
	const staticRow6 = key.physics.add.staticGroup({
		key: 'table',
		repeat: 1,
		setXY: {x: 690, y: 120, stepY: 80},
		immovable: true,
	});
	const movableRow6Set1 = key.physics.add.group({
		key: 'table',
		repeat: 1,
		setXY: {x: 690, y: 280, stepY: 80},
		collideWorldBounds: true,
		allowDrag: true,
		dragX: 10000,
		dragY: 10000,
	});
	const staticRow6B3 = key.physics.add.staticSprite(690, 440, 'table');
	key.physics.add.collider(staticRow6, key.man);
	key.physics.add.collider(staticRow6B3, key.man);
	key.physics.add.collider(movableRow6Set1, key.man);
	//last row
	const staticRow7 = key.physics.add.staticGroup({
		key: 'table',
		repeat: 5,
		setXY: {x: 190, y: 520, stepX: 100},
		immovable: true,
	});
	key.physics.add.collider(staticRow7, key.man);
}
