import 'phaser';
import config from './Config/config';

import BootScene from './Scenes/BootScene';
import PreloaderScene from './Scenes/PreloaderScene';
import TitleScene from './Scenes/TitleScene';
import OptionsScene from './Scenes/OptionsScene';
import CreditsScene from './Scenes/CreditsScene';
import Puzzle1 from './Scenes/Puzzle1';
import StartScene from './Scenes/StartScene'

class Game extends Phaser.Game {
	constructor() {
		super(config);
		this.scene.add('Boot', BootScene);
		this.scene.add('Puzzle1', Puzzle1);
		this.scene.add('Preloader', PreloaderScene);
		this.scene.add('Title', TitleScene);
		this.scene.add('Options', OptionsScene);
		this.scene.add('Credits', CreditsScene);
		this.scene.add('StartScene', StartScene)
		this.scene.start('Title');
	}
}

window.game = new Game();
