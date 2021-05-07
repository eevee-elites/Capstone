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
	}

	create() {
		this.man = this.physics.add
			.existing(new Player(this, 400, 300, 'man'))
			.setOrigin(0.5, 0.5);

		var dialog = this.rexUI.add
			.dialog({
				x: 400,
				y: 500,
				height: 10,
				width: 10,

				background: this.rexUI.add.roundRectangle(0, 0, 0, 0, 10, 0xddd7d6),
				content: this.add.text(0, 0, 'Do you want to build a snow man?', {
					fontSize: '24px',
					color: '0x00000',
				}),
				actions: [createLabel(this, 'Yes'), createLabel(this, 'No')],
				space: {
					title: 25,
					content: 25,
					action: 15,

					left: 20,
					right: 20,
					top: 20,
					bottom: 20,
				},

				align: {
					title: 'center', // 'center'|'left'|'right'
					actions: 'left',
				},

				expand: {
					content: false, // Content is a pure text object
				},
			})
			.layout();

		this.print = this.add.text(0, 0, '');
		dialog
			.on(
				'button.click',
				function (button, groupName, index) {
					this.print.text += index + ': ' + button.text + '\n';
					if (button.text === 'No') this.scene.start('Title'); // can say what to do in button
				},
				this
			)
			.on('button.over', function (button, groupName, index) {
				button.getElement('background').setStrokeStyle(1, 0xffffff);
			})
			.on('button.out', function (button, groupName, index) {
				button.getElement('background').setStrokeStyle();
			});

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
		this.physics.add.collider(testBox, this.man);
	}

	update() {
		this.man.update(this);
	}
}
var createLabel = function (scene, text) {
	return scene.rexUI.add.label({
		width: 40,
		height: 40,

		background: scene.rexUI.add.roundRectangle(10, 50, 10, 10, 30, 0x5e92f3),

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
