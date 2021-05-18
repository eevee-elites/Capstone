import 'phaser';
import {Game} from 'phaser';
import Player from '../Models/Player';
import Animate from '../Models/Animate';
import NPC from '../Models/NPC';
import NPCAnimate from '../Models/NPCAnimate';

let light;
export default class Puzzle1 extends Phaser.Scene {
	constructor() {
		super('Puzzle1');
	}

	preload() {
		this.load.spritesheet('man', 'assets/man.png', {
			frameWidth: 64,
			frameHeight: 64,
		});
		this.load.spritesheet('key', 'assets/key.png', {
			frameWidth: 28.5,
			frameHeight: 45,
		});
		this.load.audio('bg', 'assets/bg.wav');
		this.load.image('star', 'assets/star.png');
		this.load.image('table', 'assets/table.png');
		this.load.image('drawer', 'assets/drawer.png');
		this.load.image('tiles', '../assets/Room spritesheet.png');
		this.load.tilemapTiledJSON('PuzzleMap', '../assets/PuzzleRoom.json');
	}

	create() {
		//exit
		// let exitBox = this.add.rectangle(20, 300, 50, 50, 0xffffff);
		//map
		const map = this.make.tilemap({key: 'PuzzleMap'});

		const tileset = map.addTilesetImage('PuzzleRoom', 'tiles');

		const belowLayer = map
			.createLayer('Below', tileset, 0, 0)
			.setPipeline('Light2D');
		this.collidingLayer = map
			.createLayer('Colliding', tileset, 0, 0)
			.setPipeline('Light2D');

		this.collidingLayer.setCollisionByProperty({collides: true});

		//player
		this.man = this.physics.add
			.existing(new Player(this, 420, 750, 'man'))
			.setOrigin(0, 0);
		this.man.setSize(32, 32);
		this.physics.add.collider(this.man, this.collidingLayer);

		Animate(this, 'man', 4, 7, 8, 11, 12, 15, 0, 3, 0);
		//puzzle
		makePuzzle(this);
		//unlock square
		let lock1 = this.add.rectangle(100, 350, 32, 32, 0xffffff);
		let lock2 = this.add.rectangle(100, 542, 32, 32, 0xffffff);
		let lock3 = this.add.rectangle(548, 542, 32, 32, 0xffffff);
		//camera
		this.cameras.main.setBounds(48, 0, 800, 900);
		this.cameras.main.startFollow(this.man);
		//lights
		this.lights.enable();
		this.lights.setAmbientColor(0x7b5e57);
		light = this.lights.addLight(180, 80, 80);

		// NPCAnimate(this, 'NPC', 0, 0, 0);
		this.key = this.physics.add.existing(new NPC(this, 750, 120, 'key'), true);
		NPCAnimate(this, 'key', 0, 9, 10, -1);
		let resetBox = this.add.rectangle(60, 200, 20, 20, 0xa93226);
		this.collect = false;
		//music
		this.music = this.sound.add('bg', true);
		this.music.setLoop(true);
		this.music.play();
		this.music.setVolume(0.3);

		//exit
		// this.physics.add.existing(exitBox, true);
		// this.physics.add.overlap(this.man, exitBox, this.exitRoom, null, this);
		//collection
		this.physics.add.overlap(this.man, this.key, collectBox, null, this);
		// reset
		this.physics.add.existing(resetBox, true);
		this.physics.add.overlap(this.man, resetBox, reset, null, this);
	}
	exitRoom() {
		if (this.collect) {
			this.music.stop();
			return this.scene.start('StartScene');
		}
	}
	update() {
		this.man.update(this);
		this.key.update(this.key, 'key');
		light.x = this.man.x + 35;
		light.y = this.man.y + 35;
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
	const staticRow1S1 = key.physics.add
		.staticSprite(100, 414, 'table')
		.setPipeline('Light2D');
	const staticRow1S2 = key.physics.add
		.staticSprite(100, 606, 'table')
		.setPipeline('Light2D');
	//row 2
	const movableRow2B3 = key.physics.add.sprite(164, 478, 'drawer');
	const staticRow2S1 = key.physics.add
		.staticSprite(165, 606, 'table')
		.setPipeline('Light2D');
	key.physics.add.existing(movableRow2B3);
	key.physics.add.collider(movableRow2B3, staticRow1S1);
	key.physics.add.collider(movableRow2B3, staticRow1S2);
	key.physics.add.collider(movableRow2B3, key.collidingLayer);
	// row 3
	const movableRow3B2 = key.physics.add.sprite(228, 414, 'drawer');
	const staticRow3 = key.physics.add
		.staticSprite(228, 542, 'table')
		.setPipeline('Light2D');
	// key.physics.add.collider(movableRow3B2, key.man);
	// key.physics.add.collider(staticRow3, key.man);
	key.physics.add.existing(movableRow3B2);
	key.physics.add.collider(movableRow3B2, [staticRow1S1, staticRow1S2]);
	key.physics.add.collider(movableRow3B2, key.collidingLayer);
	// row 4
	const staticRow4 = key.physics.add
		.staticSprite(292, 360, 'table')
		.setPipeline('Light2D');
	const movableRow4 = key.physics.add.sprite(292, 606, 'drawer');
	key.physics.add.existing(movableRow4);
	key.physics.add.collider(staticRow4, movableRow4);
	key.physics.add.collider(staticRow4, movableRow3B2);
	// key.physics.add.collider(staticRow4, key.man);
	// key.physics.add.collider(movableRow4, key.man);
	key.physics.add.collider(movableRow4, key.collidingLayer);

	//row 5
	const staticRow5B5 = key.physics.add
		.staticSprite(358, 360, 'table')
		.setPipeline('Light2D');
	const staticRow5B3 = key.physics.add
		.staticSprite(358, 478, 'table')
		.setPipeline('Light2D');
	const staticRow5B2 = key.physics.add
		.staticSprite(358, 542, 'table')
		.setPipeline('Light2D');
	// key.physics.add.collider(staticRow5B5, key.man);
	// key.physics.add.collider(staticRow5B2, key.man);
	// key.physics.add.collider(staticRow5B3, key.man);
	//row6
	const staticRow6 = key.physics.add
		.staticSprite(420, 606, 'table')
		.setPipeline('Light2D');
	key.physics.add.collider(staticRow6, key.man);
	//row 7
	const movableRow7 = key.physics.add.sprite(484, 478, 'drawer');
	const staticRow7 = key.physics.add
		.staticSprite(484, 606, 'table')
		.setPipeline('Light2D');
	// key.physics.add.collider(staticRow7, key.man);
	// key.physics.add.collider(movableRow7, key.man);
	// key.physics.add.collider(movableRow7, key.collidingLayer);
	//row 8
	const staticRow8 = key.physics.add
		.staticSprite(548, 606, 'table')
		.setPipeline('Light2D');
	// key.physics.add.collider(staticRow8, key.man);
	//row 9
	const staticRow9 = key.physics.add
		.staticSprite(612, 542, 'table')
		.setPipeline('Light2D');
	// key.physics.add.collider(staticRow9, key.man);
	//row 10
	const staticRow10B1 = key.physics.add
		.staticSprite(676, 414, 'table')
		.setPipeline('Light2D');
	const staticRow10B2 = key.physics.add
		.staticSprite(676, 542, 'table')
		.setPipeline('Light2D');
	// key.physics.add.collider([staticRow10B1, staticRow10B2], key.man);
	//row 11
	const staticRow11 = key.physics.add
		.staticSprite(740, 542, 'table')
		.setPipeline('Light2D');
	// key.physics.add.collider(staticRow11, key.man);
	//row 12
	const staticRow12B1 = key.physics.add
		.staticSprite(740, 542, 'table')
		.setPipeline('Light2D');
	const staticRow12B2 = key.physics.add
		.staticSprite(740, 606, 'table')
		.setPipeline('Light2D');
	// key.physics.add.collider([staticRow12B1, staticRow12B2], key.man);

	// colliders
	key.physics.add.collider(
		[
			staticRow1S1,
			staticRow1S2,
			staticRow2S1,
			staticRow3,
			staticRow4,
			staticRow5B2,
			staticRow5B3,
			staticRow5B5,
			staticRow6,
			staticRow7,
			staticRow8,
			staticRow9,
			staticRow10B1,
			staticRow10B2,
			staticRow11,
			staticRow12B1,
			staticRow12B2,
		],
		key.man
	);
	key.physics.add.collider(
		[movableRow2B3, movableRow3B2, movableRow4, movableRow7],
		[
			key.man,
			movableRow2B3,
			movableRow3B2,
			movableRow4,
			movableRow7,
			staticRow1S1,
			staticRow1S2,
			staticRow2S1,
			staticRow3,
			staticRow4,
			staticRow5B2,
			staticRow5B3,
			staticRow5B5,
			staticRow6,
			staticRow7,
			staticRow8,
			staticRow9,
			staticRow10B1,
			staticRow10B2,
			staticRow11,
			staticRow12B1,
			staticRow12B2,
			key.collidingLayer,
		]
	);
}
