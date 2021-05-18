import 'phaser';
import Player from '../Models/Player';
import NPC from '../Models/NPC';
import Animate from '../Models/Animate';
import NPCAnimate from '../Models/NPCAnimate';

const Greet =
	'Hey! Come over here! Use your arrow keys of WASD to move and press the "enter" key to interact with me';
const TalkandPushingInstructions =
	"This is how you can talk to me. You can also keep pressing to finish and close out our conversations...                 Did you make sure to leave the door open?                                                                             …                                                                                                                       You didn't?! Oh no! Did you get trapped in here too? Go find the key! I'm not strong enough, but I'm sure you are!   You have to push those nightstands to get the key!";
const InventoryInstructions = 'Press " i " to see your inventory';
const Leave =
	'Now that you have the key, you can leave. Hurry and save your friends!';

const COLOR_PRIMARY = 0x4e342e;
const COLOR_LIGHT = 0x7b5e57;
const COLOR_DARK = 0x260e04;
let textOpen = false;
let last = false;
let madeBoxesAppear = false;

export default class TutorialScene extends Phaser.Scene {
	constructor() {
		super('Tutorial');
	}
	initialize() {
		function switchInventory() {
			Phaser.Scene.call(this, 'Inventory');
		}
	}

	preload() {
		this.load.spritesheet('man', 'assets/man.png', {
			frameWidth: 64,
			frameHeight: 128,
		});

		this.load.spritesheet('NPC', 'assets/NPC.png', {
			frameWidth: 80,
			frameHeight: 130,
		});

		this.load.spritesheet('room1Key', 'assets/key.png', {
			frameWidth: 28.5,
			frameHeight: 45,
		});
		this.load.scenePlugin({
			key: 'rexuiplugin',
			url: 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js',
			sceneKey: 'rexUI',
		});

		this.load.plugin(
			'rextexttypingplugin',
			'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rextexttypingplugin.min.js',
			true
		);
		this.load.image('nextPage', 'assets/next.png');
		this.load.image('tiles', '../assets/Room spritesheet.png');
		this.load.tilemapTiledJSON('tutorialRoom', '../assets/TutorialRoom.json');
		this.load.image('icon', 'assets/iconnpc.png');
		this.load.image('drawer', 'assets/drawer.png');
	}

	create() {
		let npcHitBox = this.add.rectangle(100, 400, 70, 100, 0x000000);
		let exitHitBox = this.add.rectangle(450, 600, 100, 20, 0x000000);

		//map
		const map = this.make.tilemap({key: 'tutorialRoom'});

		const tileset = map.addTilesetImage('PuzzleRoom', 'tiles');

		const belowLayer = map.createLayer('Below', tileset, 0, 0);
		this.collidingLayer = map.createLayer('Colliding', tileset, 0, 0);

		this.collidingLayer.setCollisionByProperty({collides: true});
		// man key & npc
		this.man = new Player(this, 400, 300, 'man').setOrigin(0.5, -3);

		Animate(this, 'man', 4, 7, 8, 11, 12, 15, 0, 3, 0);
		this.man.body.setSize(32, 32, true);
		this.npc = this.physics.add.existing(new NPC(this, 100, 400, 'NPC'), true);

		this.npc.body.setSize(30, 90, true);
		// NPCAnimate(this, 'NPC', 0, 0, 0);
		this.room1Key = this.physics.add.existing(
			new NPC(this, 750, 200, 'room1Key'),
			true
		);
		NPCAnimate(this, 'room1Key', 0, 9, 10, -1);
		this.collect = false;
		this.room1Key.setVisible(false);
		//collisions
		this.physics.add.existing(npcHitBox, true);
		this.physics.add.existing(exitHitBox, true);
		this.physics.add.collider(this.npc, this.man);
		this.physics.add.collider(this.man, this.collidingLayer);

		this.man.setCollideWorldBounds(true);
		this.physics.add.collider(this.man, this.collidingLayer);
		this.cameras.main.setBounds(48, 0, 500, 700);
		this.physics.add.overlap(
			this.man,
			this.room1Key,
			this.collectKey,
			null,
			this
		);
		// starting dialogue
		textOpen = true;
		createTextBox(this, 100, 400, {
			wrapWidth: 500,
			fixedWidth: 500,
			fixedHeight: 65,
		}).start(Greet, 50);

		this.physics.add.overlap(npcHitBox, this.man, this.sayHello, null, this);
		this.physics.add.overlap(exitHitBox, this.man, this.exitRoom, null, this);

		this.input.keyboard.on(
			'keydown-I',
			function () {
				this.scene.transition({
					target: 'Inventory',
					duration: 10,
					data: {inventory: this.man.inventory, scene: 'Tutorial'},
					sleep: true,
				});
			},
			this
		);

		this.events.on(
			Phaser.Scenes.Events.WAKE,
			function () {
				this.wake(this.input, this.scene);
				textOpen = true;
				createTextBox(this, 100, 400, {
					wrapWidth: 500,
					fixedWidth: 500,
					fixedHeight: 65,
				}).start(Leave, 50);
			},
			this
		);
	}
	wake(input, scene) {
		this.input.keyboard.on(
			'keydown-I',
			function () {
				this.scene.transition({
					target: 'Inventory',
					duration: 10,
					data: {inventory: this.man.inventory, scene: 'Tutorial'},
					sleep: true,
				});
			},
			this
		);
	}

	update() {
		this.man.update(this);
		this.room1Key.update(this.room1Key, 'room1Key');
	}
	exitRoom() {
		if (this.collect) {
			return this.scene.start('StartScene', {finishedTutorial: true});
		}
	}
	collectKey(man, item) {
		item.disableBody(true, true);
		man.pickupItem(item.texture.key);
		this.collect = true;
		textOpen = true;
		createTextBox(
			this,
			100,
			400,
			{
				wrapWidth: 500,
				fixedWidth: 500,
				fixedHeight: 65,
			},
			true
		).start(InventoryInstructions, 50);
	}

	sayHello() {
		let enter = this.input.keyboard.addKey('ENTER');
		if (enter.isDown && textOpen === false && last === false) {
			textOpen = true;
			createTextBox(
				this,
				100,
				400,
				{
					wrapWidth: 500,
					fixedWidth: 500,
					fixedHeight: 65,
				},
				true
			).start(TalkandPushingInstructions, 50);
		}
	}
}
const GetValue = Phaser.Utils.Objects.GetValue;
var createTextBox = function (scene, x, y, config, letBoxesAppear = false) {
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
					if (letBoxesAppear) {
						if (!madeBoxesAppear) {
							madeBoxesAppear = true;
							const staticRow6 = scene.physics.add.staticGroup({
								key: 'drawer',
								repeat: 4,
								setXY: {x: 650, y: 120, stepY: 80},
								immovable: true,
							});
							const movable = scene.physics.add.sprite(650, 520, 'drawer');
							scene.physics.add.collider(staticRow6, scene.man);
							scene.physics.add.collider(movable, scene.collidingLayer);
							scene.physics.add.collider(movable, scene.man);
							scene.room1Key.setVisible(true);
						}
					}
				});
				textOpen = !textOpen;

				last = true;
			}
		},
		textBox
	);

	return textBox;
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
