import 'phaser';
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
	}

	create() {
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
	}

	update() {
		this.man.update(this);
	}
}
