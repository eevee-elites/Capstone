import 'phaser';
import Player from '../Models/Player';
import NPC from '../Models/NPC';
import Animate from '../Models/Animate';
import NPCAnimate from '../Models/NPCAnimate';

var content =
	'test dialogue array blaksjdflkasjfalkdsjfalksd falsd fasdfkljasd flkad fasd flkasdjflaksd fa sdf asdlkfj asdkljf asdkljf';
const COLOR_PRIMARY = 0x4e342e;
const COLOR_LIGHT = 0x7b5e57;
const COLOR_DARK = 0x260e04;
let textOpen = false;
let last = false;

export default class StartScene extends Phaser.Scene {
	constructor() {
		super('StartScene');
		let man, npc;
		var anims;
	}
	init(data) {
		console.log(data);
	}
	preload() {
		this.load.spritesheet('man', 'assets/man.png', {
			frameWidth: 64,
			frameHeight: 64,
		});

		this.load.spritesheet('NPC', 'assets/NPC.png', {
			frameWidth: 80,
			frameHeight: 130,
		});

		this.load.scenePlugin({
			key: 'rexuiplugin',
			url: 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js',
			sceneKey: 'rexUI',
		});
		this.load.image('nextPage', 'assets/next.png');
		this.load.image('tiles', '../assets/Room spritesheet.png');
		this.load.tilemapTiledJSON('map', '../assets/HallwayRoom.json');
		this.load.image('icon', 'assets/iconnpc.png');
	}

	create(data) {
		console.log(data);
		let npcHitBox = this.add.rectangle(100, 400, 40, 40, 0x000000);
		const tutorialRoom = this.add.rectangle(450, 300, 120, 40, 0x000000);
		// if (data) this.finishedTutorial = data.finishedTutorial || false;
		this.finishedTutorial = true;
		this.physics.add.existing(tutorialRoom, true);
		//map
		const map = this.make.tilemap({key: 'map'});

		const tileset = map.addTilesetImage('Hallway', 'tiles');

		const belowLayer = map.createLayer('Below', tileset, 0, 0);
		const collidingLayer = map.createLayer('Colliding', tileset, 0, 0);

		collidingLayer.setCollisionByProperty({collides: true});
		const puzzle1Room = this.add.rectangle(840, 300, 120, 40, 0x000000);
		this.physics.add.existing(puzzle1Room, true);
		this.man = this.physics.add
			.existing(new Player(this, 400, 300, 'man'))
			.setOrigin(0.5, -3);

		this.npc = this.physics.add.existing(new NPC(this, 100, 400, 'NPC'), true);

		this.npc.body.setSize(30, 90, true);

		this.physics.add.existing(npcHitBox, true);
		this.physics.add.collider(this.npc, this.man);
		this.physics.add.overlap(this.man, npcHitBox, this.sayHello, null, this);
		this.physics.add.collider(this.man, collidingLayer);

		Animate(this, 'man', 4, 7, 8, 11, 12, 15, 0, 3, 0);
		// NPCAnimate(this, 'NPC', 0, 0, 1);
		if (!this.finishedTutorial) this.man.setCollideWorldBounds(true);

		this.physics.add.collider(this.man, collidingLayer);
		this.physics.add.overlap(
			this.man,
			tutorialRoom,
			this.enterTutorialRoom,
			null,
			this
		);
		this.physics.add.overlap(
			this.man,
			puzzle1Room,
			this.enterPuzzle1Room,
			null,
			this
		);
		this.cameras.main.setBounds(0, 0, 3000, 700);
		this.cameras.main.startFollow(this.man);
	}

	update() {
		this.man.update(this);
		// this.npc.update(this.npc, 'NPC');
	}

	sayHello(man, pika) {
		let enter = this.input.keyboard.addKey('ENTER');
		if (enter.isDown && textOpen === false && last === false) {
			textOpen = true;
			createTextBox(this, 100, 400, {
				wrapWidth: 500,
				fixedWidth: 500,
				fixedHeight: 65,
			}).start(content, 50);
		}
	}
	enterTutorialRoom() {
		if (!this.finishedTutorial) return this.scene.start('Tutorial');
	}
	enterPuzzle1Room() {
		this.scene.start('Puzzle1');
	}
}

const GetValue = Phaser.Utils.Objects.GetValue;
var createTextBox = function (scene, x, y, config) {
	var wrapWidth = GetValue(config, 'wrapWidth', 0);
	var fixedWidth = GetValue(config, 'fixedWidth', 0);
	var fixedHeight = GetValue(config, 'fixedHeight', 0);

	var textBox = scene.rexUI.add
		.textBox({
			x: x,
			y: y,

			background: scene.rexUI.add
				.roundRectangle(0, 0, 2, 2, 20, COLOR_PRIMARY)
				.setStrokeStyle(2, COLOR_LIGHT)
				.setVisible(true),

			icon: scene.add.image(0, 0, 'icon'),

			// text: getBuiltInText(scene, wrapWidth, fixedWidth, fixedHeight),
			text: getBBcodeText(scene, wrapWidth, fixedWidth, fixedHeight),

			action: scene.add.image(0, 0, 'nextPage').setTint(COLOR_LIGHT),

			space: {
				left: 20,
				right: 20,
				top: 20,
				bottom: 20,
				icon: 10,
				text: 10,
			},
		})
		.setOrigin(0)
		.layout();

	scene.input.keyboard.on(
		'keydown-ENTER',
		function (event) {
			if (this.isTyping) {
				this.stop(true);
			} else {
				this.typeNextPage();
			}
		},
		textBox
	);

	textBox.setInteractive().on(
		'pageend',
		function () {
			if (this.isLastPage) {
				scene.input.keyboard.on('keyup-ENTER', () => {
					textBox.setVisible(false);
					last = false;
				});
				textOpen = !textOpen;

				last = true;
			}
		},
		textBox
	);
	// setTimeout(() => {last = false;  textOpen = !textOpen;}, 1000)

	return textBox;
};

var getBuiltInText = function (scene, wrapWidth, fixedWidth, fixedHeight) {
	return scene.add
		.text(0, 0, '', {
			fontSize: '20px',
			wordWrap: {
				width: wrapWidth,
			},
			maxLines: 3,
		})
		.setFixedSize(fixedWidth, fixedHeight);
};

var getBBcodeText = function (scene, wrapWidth, fixedWidth, fixedHeight) {
	return scene.rexUI.add.BBCodeText(0, 0, '', {
		fixedWidth: fixedWidth,
		fixedHeight: fixedHeight,

		fontSize: '20px',
		wrap: {
			mode: 'word',
			width: wrapWidth,
		},
		maxLines: 3,
	});
};
