export default class TitleScene extends Phaser.Scene {
	constructor() {
		super('Title');
	}

	preload() {
		// load images
		this.load.image('logo', 'assets/logo.png');
	}

	create() {
		this.add.image(400, 300, 'logo');
	}
}
