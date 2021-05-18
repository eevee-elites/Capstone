import 'phaser';

export default class PreloaderScene extends Phaser.Scene {
	constructor() {
		super('Preloader');
	}

	init() {
		this.readyCount = 0;
	}

	preload() {
		// add logo image
		this.add.image(400, 200, 'logo');

		// display progress bar
		var progressBar = this.add.graphics();
		var progressBox = this.add.graphics();
		progressBox.fillStyle(0x222222, 0.8);
		progressBox.fillRect(240, 270, 320, 50);

		var width = this.cameras.main.width;
		var height = this.cameras.main.height;
		var loadingText = this.make.text({
			x: width / 2,
			y: height / 2 - 50,
			text: 'Loading...',
			style: {
				font: '20px monospace',
				fill: '#ffffff',
			},
		});
		loadingText.setOrigin(0.5, 0.5);

		var percentText = this.make.text({
			x: width / 2,
			y: height / 2 - 5,
			text: '0%',
			style: {
				font: '18px monospace',
				fill: '#ffffff',
			},
		});
		percentText.setOrigin(0.5, 0.5);

		var assetText = this.make.text({
			x: width / 2,
			y: height / 2 + 50,
			text: '',
			style: {
				font: '18px monospace',
				fill: '#ffffff',
			},
		});
		assetText.setOrigin(0.5, 0.5);

		// update progress bar
		this.load.on('progress', function (value) {
			percentText.setText(parseInt(value * 100) + '%');
			progressBar.clear();
			progressBar.fillStyle(0xffffff, 1);
			progressBar.fillRect(250, 280, 300 * value, 30);
		});

		// update file progress text
		this.load.on('fileprogress', function (file) {
			assetText.setText('Loading asset: ' + file.key);
		});

		// remove progress bar when complete
		this.load.on(
			'complete',
			function () {
				progressBar.destroy();
				progressBox.destroy();
				loadingText.destroy();
				percentText.destroy();
				assetText.destroy();
				this.ready();
			}.bind(this)
		);

		this.timedEvent = this.time.delayedCall(3000, this.ready, [], this);

		// load assets needed in our game

		//load images
		this.load.image('blueButton1', 'assets/ui/blue_button02.png');
		this.load.image('blueButton2', 'assets/ui/blue_button03.png');
		this.load.image('phaserLogo', 'assets/logo.png');
		this.load.image('star', 'assets/star.png');
		this.load.image('cat', 'assets/cat.png');
		this.load.image('pizza', 'assets/pizza.png');
		this.load.image('table', 'assets/table.png');
		this.load.image('titleImage', 'assets/logo.png');
		this.load.image('nextPage', 'assets/next.png');
		this.load.image('icon', 'assets/iconnpc.png');
		this.load.image('tiles', '../assets/Room spritesheet.png');
		this.load.image('greenDoll', '../assets/Green doll.png');
		this.load.image('greenDollCut', '../assets/Green doll cut.png');
		this.load.image('blueDoll', '../assets/Blue doll.png');
		this.load.image('blueDollCut', '../assets/Blue doll cut.png');
		this.load.image('redDoll', '../assets/Red doll.png');
		this.load.image('redDollCut', '../assets/Red doll cut.png');
		this.load.image('nurseDoll', '../assets/Nurse doll.png');
		this.load.image('note', '../assets/Note.png');
		this.load.image('yesButton', '../assets/ui/Yes button.png');
		this.load.image('noButton', '../assets/ui/No button.png');
		this.load.tilemapTiledJSON('Puzzle2', '../assets/PuzzleRoom.json');

		//load sprites
		this.load.spritesheet('man', 'assets/man.png', {
			frameWidth: 64,
			frameHeight: 128,
		});
		this.load.spritesheet('pika', 'assets/pika.png', {
			frameWidth: 31,
			frameHeight: 31,
		});

		//load music or sound effects
		this.load.audio('bg', 'assets/bg.wav');
		this.load.audio('titleMusic', 'assets/title.mp3');

		// load other
	}

	ready() {
		// brings us to title scene hwen assests are done loading
		this.readyCount++;
		if (this.readyCount === 2) {
			this.scene.start('Puzzle2');
		}
	}
}
