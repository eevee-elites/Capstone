//for  non rexui
import 'phaser';
import {Game} from 'phaser';
import Player from '../Models/Player';
import NPC from '../Models/NPC';
import Animate from '../Models/Animate';
import NPCAnimate from '../Models/NPCAnimate';

export default class GameScene extends Phaser.Scene {
	constructor() {
		super('Game');
		let man, pika;
		var anims;
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
	}

	create() {
		let hitBox = this.add.rectangle(100, 400, 40, 40, 0x000000);
		this.man = this.physics.add.existing(new Player(this, 400, 300, 'man'));

		this.pika = this.physics.add.existing(
			new NPC(this, 100, 400, 'pika'),
			true
		);
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
		this.physics.add.overlap(this.man, hitBox, this.sayHello, null, this);
	}
	sayHello(man, pika) {
		let enter = this.input.keyboard.addKey('ENTER');
		if (enter.isDown) {
			// const dialogBox = this.add.container(0, 450);
			const dialogBox = this.add
				.rectangle(0, 450, this.scale.width, 150, 0xddd7d6)
				.setOrigin(0);
			const text = this.add
				.text(50, dialogBox.width * 0.6, 'text goes here', {
					color: 'black',
					fontSize: '24px',
				})
				.setWordWrapWidth(dialogBox.width * 0.6);

			const yesTest = this.add
				.text(text.x, dialogBox.width * 0.7, 'Yes!', {
					backgroundColor: '#ffffff',
					color: '#000000',
					fontSize: '24px',
				})
				.setInteractive()
				.on('pointerdown', function () {
					dialogBox.y = 800;
					yesTest.y = 800;
					noTest.y = 800;
					text.y = 800;
				});
			const noTest = this.add.text(
				text.x + dialogBox.y / 2,
				dialogBox.width * 0.7,
				'No >:(',
				{
					backgroundColor: '#ffffff',
					color: '#000000',
					fontSize: '24px',
				}
			);
			// const dialogBoxed = this.add.container(0, 450, [
			// 	dialogBox,
			// 	text,

			// 	yesTest,
			// 	noTest,
			// ]);
		}
	}

	update() {
		this.pika.update(this.pika, 'pika');
		this.man.update(this);
	}
}
