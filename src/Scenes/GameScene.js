import 'phaser';
import {Game} from 'phaser';
import Player from '../Models/Player';

export default class GameScene extends Phaser.Scene {
	constructor() {
		super('Game');
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
	}

	create() {
		this.stars = this.physics.add.sprite(100, 450, 'star');
		var music = this.sound.add('bg', true);
		music.setLoop(true);
		music.play();
		music.setVolume(0.3);
		this.man = this.physics.add
			.existing(new Player(this, 400, 300, 'man'))
			.setOrigin(0.5, 0.5);

		this.anims.create({
			key: 'left',
			frames: this.anims.generateFrameNumbers('man', {
				start: 4,
				end: 7,
			}),
			frameRate: 10,
		});

		this.anims.create({
			key: 'right',
			frames: this.anims.generateFrameNumbers('man', {
				start: 8,
				end: 11,
			}),
			frameRate: 10,
		});

		this.anims.create({
			key: 'up',
			frames: this.anims.generateFrameNumbers('man', {
				start: 12,
				end: 15,
			}),
			frameRate: 10,
		});
		this.anims.create({
			key: 'down',
			frames: this.anims.generateFrameNumbers('man', {
				start: 0,
				end: 3,
			}),
			frameRate: 10,
		});
		this.anims.create({
			key: 'still',
			frames: [{key: 'man', frame: 0}],
			frameRate: 10,
		});

		let testBox = this.add.rectangle(100, 100, 100, 100, 0xffffff);

		this.man.setCollideWorldBounds(true);

		//this adds collision to given object, and sets static to true so it can't be moved
		this.physics.add.existing(testBox, true);
		this.physics.add.overlap(this.man, this.stars, collectBox, null, this);
		this.physics.add.collider(testBox, this.man);
	}

	update() {
		this.man.update(this);
	}
}
function collectBox(man, item) {
	item.disableBody(true, true);
}
