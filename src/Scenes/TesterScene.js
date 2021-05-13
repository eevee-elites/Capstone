import 'phaser';
import Player from '../Models/Player';
import NPC from '../Models/NPC';
import Animate from '../Models/Animate';
import NPCAnimate from '../Models/NPCAnimate';

export default class TesterScene extends Phaser.Scene {
	constructor() {
		super('Tester');
	}

	preload() {
		this.load.scenePlugin(
			'rexuiplugin',
			'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js',
			'rexUI',
			'rexUI'
		);
		this.load.spritesheet('man', 'assets/man.png', {
			frameWidth: 64,
			frameHeight: 64,
		});
		this.load.spritesheet('pika', 'assets/pika.png', {
			frameWidth: 31,
			frameHeight: 31,
		});
		this.load.audio('bg', 'assets/bg.wav');
		this.load.image('star', 'assets/star.png');
		this.load.image('cat', 'assets/cat.png');
		this.load.image('pizza', 'assets/pizza.png');
	}

	create() {
		let hitBox = this.add.rectangle(100, 400, 40, 40, 0x000000);
		this.man = this.physics.add.existing(new Player(this, 400, 300, 'man'));
		this.pika = this.physics.add.existing(
			new NPC(this, 100, 400, 'pika'),
			true
		);
		this.stars = this.physics.add.sprite(100, 450, 'star');
		this.pizza = this.physics.add.sprite(333, 250, 'pizza');
		this.cat = this.physics.add.sprite(200, 350, 'cat');
		var music = this.sound.add('bg', true);
		music.setLoop(true);
		music.play();
		music.setVolume(0.3);

		this.pika.body.setSize(25, 25, true);

		// hitBox.setInteractive();
		Animate(this, 'man', 4, 7, 8, 11, 12, 15, 0, 3, 0);
		NPCAnimate(this, 'pika', 2, 3, 6, -1);

		let testBox = this.add.rectangle(100, 100, 100, 100, 0xffffff);

		this.man.setCollideWorldBounds(true);

		//this adds collision to given object, and sets static to true so it can't be moved
		this.physics.add.existing(testBox, true);
		this.physics.add.existing(hitBox, true);

		this.physics.add.collider(testBox, this.man);
		this.physics.add.collider(this.pika, this.man);
		this.physics.add.overlap(this.man, this.stars, collectItem, null, this);
		this.physics.add.overlap(this.man, this.pizza, collectItem, null, this);
		this.physics.add.overlap(this.man, this.cat, collectItem, null, this);

		var scene = this,
			dialog = undefined;
		this.input.keyboard.on(
			'keydown-I',
			function (pointer) {
				var x = pointer.x,
					y = pointer.y;

				if (dialog === undefined) {
					dialog = this.createDialog(
						this,
						x,
						y,
						this.man.inventory,
						function (color) {
							dialog.scaleDownDestroy(100);
							dialog = undefined;
						}
					);
				} else if (!dialog.isInTouching(pointer)) {
					dialog.scaleDownDestroy(100);
					dialog = undefined;
				}
			},
			this
		);
	}

	createDialog(scene, x, y, inventory, onClick) {
		console.log('SCENE INVENTORY', inventory);
		var dialog = scene.rexUI.add
			.dialog({
				x: 350,
				y: 0,

				background: scene.rexUI.add.roundRectangle(
					0,
					0,
					100,
					100,
					20,
					0xf57f17
				),

				title: scene.rexUI.add.label({
					background: scene.rexUI.add.roundRectangle(
						0,
						0,
						100,
						40,
						20,
						0xbc5100
					),
					text: scene.add.text(0, 0, 'Inventory', {
						fontSize: '20px',
					}),
					space: {
						left: 15,
						right: 15,
						top: 10,
						bottom: 10,
					},
				}),

				actions: [
					scene.add.image(0, 0, 10, 10, 'pizza'),
					scene.add.image(0, 0, 10, 10, 'cat'),
					scene.add.image(0, 0, 10, 10, 'star'),
					// scene.rexUI.add.image( "pizza"),
				],

				actionsAlign: 'left',

				space: {
					title: 10,
					action: 5,

					left: 10,
					right: 10,
					top: 10,
					bottom: 10,
				},
			})
			.layout()
			.pushIntoBounds()
			.popUp(500);

		dialog.on('button.click', function (button, groupName, index) {
			onClick(button.fillColor);
		});

		return dialog;
	}
	update() {
		this.pika.update(this.pika, 'pika');
		this.man.update(this);
	}
}
function collectItem(man, item) {
	man.pickupItem(item.texture.key);
	item.disableBody(true, true);
	console.log(man.inventory);
}
var createLabel = function (scene, text) {
	return scene.rexUI.add.label({
		width: 40,
		height: 40,

		background: scene.rexUI.add.roundRectangle(10, 50, 10, 0, 0, 0x5e92f3),

		text: scene.add.text(0, 0, text, {
			fontSize: '24px',
		}),

		space: {
			left: 80,
			right: 80,
			top: 10,
			bottom: 10,
		},
	});
};
