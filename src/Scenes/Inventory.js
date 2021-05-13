import 'phaser';

export default class Inventory extends Phaser.Scene {
	constructor() {
		super({
			key: 'Inventory',
		});
	}

	preload() {
		this.load.scenePlugin({
			key: 'rexuiplugin',
			url: 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js',
			sceneKey: 'rexUI',
		});
		this.load.plugin(
			'rexcirclemaskimageplugin',
			'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexcirclemaskimageplugin.min.js',
			true
		);
		this.load.image('cat', 'assets/cat.png');
		this.load.image('star', 'assets/star.png');
		this.load.image('pizza', 'assets/pizza.png');
	}

	create() {
		var scene = this,
			dialog = undefined;
		this.input.keyboard.on(
			'keydown-I',
			function (pointer) {
				var x = pointer.x,
					y = pointer.y;

				if (dialog === undefined) {
					dialog = this.createDialog(this, x, y, function (color) {
						dialog.scaleDownDestroy(100);
						dialog = undefined;
					});
				} else if (!dialog.isInTouching(pointer)) {
					dialog.scaleDownDestroy(100);
					dialog = undefined;
				}
			},
			this
		);
	}
	createDialog(scene, x, y, onClick) {
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
					scene.add.image(0, 0, 'pizza'),
					scene.add.image(0, 0, 'cat'),
					scene.add.image(0, 0, 'star'),
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

	update() {}
}
