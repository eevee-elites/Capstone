import 'phaser';
import Player from '../Models/Player';
import NPC from '../Models/NPC';
import Animate from '../Models/Animate';
import NPCAnimate from '../Models/NPCAnimate';
import Inventory from '../Helper/Inventory';

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
			inventory = undefined;
		this.input.keyboard.on(
			'keydown-I',
			function (pointer) {
				var x = pointer.x,
					y = pointer.y;

				if (inventory === undefined) {
					inventory = Inventory(
						this,
						x,
						y,
						this.man.inventory,
						function (color) {
							inventory.scaleDownDestroy(100);
							inventory = undefined;
						}
					);
				} else if (!inventory.isInTouching(pointer)) {
					inventory.scaleDownDestroy(100);
					inventory = undefined;
				}
			},
			this
		);
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
