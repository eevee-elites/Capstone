// stuff for dialogue. should be made into general file
import 'phaser'
export default class Dialogue extends Phaser.Scene{
	constructor() {
		super('Dialogue')
	}
	// goes in preload
	// preload() {
		// this.load.scenePlugin(
		// 	'rexuiplugin',
		// 	'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js',
		// 	'rexUI',
		// 	'rexUI'
		// );
	// }
		create(key) {
			var dialog = key.rexUI.add
				.dialog({
					x: 400,
					y: 500,
					height: 10,
					width: 10,
	
					background: key.rexUI.add.roundRectangle(0, 0, 0, 0, 10, 0xddd7d6),
	
					title: key.rexUI.add.label({
						background: key.rexUI.add.roundRectangle(
							400,
							800,
							100,
							40,
							20,
							0x003c8f
						),
						text: key.add.text(0, 0, 'Ash:', {
							fontSize: '24px',
						}),
						space: {
							left: 15,
							right: 15,
							top: 10,
							bottom: 10,
						},
					}),
	
					content: key.add.text(0, 0, 'Do you want to build a snow man?', {
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
	// .drawBounds(this.add.graphics(), 0xff0000);
	// .popUp(1000);

	this.print = this.add.text(0, 0, '');
	dialog
		.on(
			'button.click',
			function (button, groupName, index) {
						key.print.text += index + ': ' + button.text + '\n';
						// key.scene.start('Title'); can say what to do in button
					},
					key
				)
				.on('button.over', function (button, groupName, index) {
					button.getElement('background').setStrokeStyle(1, 0xffffff);
				})
				.on('button.out', function (button, groupName, index) {
					button.getElement('background').setStrokeStyle();
				});
		}
	}
	createLabel = function (scene, text) {
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
	}
