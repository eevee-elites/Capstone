export default class TitleScene extends Phaser.Scene {
	constructor() {
		super('Title');
	}

	preload() {
		this.load.image('logo', 'assets/logo.png');
		this.load.audio('title', 'assets/title.mp3');
	}

	create() {
		var music = this.sound.add('title',true)
		music.setLoop(true)
		music.setVolume(0.1)
		 music.play()
		this.add.image(400, 300, 'logo');
	}
}
