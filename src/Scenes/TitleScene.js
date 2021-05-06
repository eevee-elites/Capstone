import Button from '../Models/Buttons';

export default class TitleScene extends Phaser.Scene {
	constructor() {
		super('Title');
	}

	preload() {
		// load images
		this.load.image('title', 'assets/logo.png');
		const button = new Button(400, 500, 'Start Game', this, () =>
			this.scene.start('Game')
		);
	}

	create() {
		this.add.image(400, 300, 'title');
	}
}
