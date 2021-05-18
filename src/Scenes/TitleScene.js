import Button from '../Models/Buttons';

export default class TitleScene extends Phaser.Scene {
	constructor() {
		super('Title');
	}

	preload() {
		this.load.image('logo', 'assets/bootTitle.png');
	}

	create() {
		this.add.image(400, 300, 'logo');
		const startButton = new Button(400, 500, 'Start Game', this, () => {
			this.scene.start('Puzzle1');
		});
	}
}
