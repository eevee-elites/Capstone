import 'phaser';
import {Game} from 'phaser';
import Player from '../Models/Player';
import NPC from '../Models/NPC';
import Animate from '../Models/Animate';
import NPCAnimate from '../Models/NPCAnimate';

export default class GameScene extends Phaser.Scene {
	constructor() {
		super('Game');
		let man, NPC;
		var anims;
		var music;
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
		this.load.spritesheet('NPC', 'assets/NPC.png', {
			frameWidth: 80,
			frameHeight: 130,
		});
		this.load.audio('bg', 'assets/bg.wav');
		this.load.image('star', 'assets/star.png');
	}

	create() {
		let hitBox = this.add.rectangle(100, 400, 40, 40, 0x000000);
		this.man = this.physics.add.existing(new Player(this, 400, 300, 'man'));
		this.npc = this.physics.add.existing(
			new NPC(this, 100, 400, 'NPC'),
			true
		);
		this.stars = this.physics.add.sprite(100, 460, 'star');
		this.music = this.sound.add('bg', true);
		this.music.play();
		this.music.setLoop(true);
		this.music.setVolume(0.3);

			
		this.npc.body.setSize(30, 90, true);

		// hitBox.setInteractive();
		Animate(this, 'man', 4, 7, 8, 11, 12, 15, 0, 3, 0);
		// NPCAnimate(this, 'NPC', 2, 3, 6, -1);

		let testBox = this.add.rectangle(100, 100, 100, 100, 0xffffff);

		this.man.setCollideWorldBounds(true);

		//this adds collision to given object, and sets static to true so it can't be moved
		this.physics.add.existing(testBox, true);
		this.physics.add.existing(hitBox, true);

		this.physics.add.overlap(testBox, this.man, this.enterPuzzle1, null, this);
		this.physics.add.collider(this.npc, this.man);
		this.physics.add.overlap(this.man, this.stars, collectBox, null, this);
		this.physics.add.overlap(this.man, hitBox, this.sayHello, null, this);
	}
	enterPuzzle1() {
		this.scene.start('Puzzle1');
	}
	sayHello(man, npc) {
		let enter = this.input.keyboard.addKey('ENTER');
		if (enter.isDown) {
			const dialog = this.rexUI.add
				.dialog({
					x: 400,
					y: 500,
					height: 10,
					width: 10,

					background: this.rexUI.add.roundRectangle(0, 0, 0, 0, 0, 0xddd7d6),
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
			dialog.on(
				'button.click',
				function (button, groupName, index) {
					if (button.text === 'Yes') return dialog.destroy();
					this.print.text += index + ': ' + button.text + '\n';
					if (button.text === 'No') {this.music.stop(); this.scene.start('Title'); } // can say what to do in button
				},
				this
			);
		}
	}

	update() {
		this.npc.update(this.npc, 'NPC');
		this.man.update(this);
	}
}
function collectBox(man, item) {
	item.disableBody(true, true);
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
