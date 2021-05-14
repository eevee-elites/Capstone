import 'phaser';
import config from './Config/config';
import StartScene from './Scenes/StartScene';
import BootScene from './Scenes/BootScene';
import PreloaderScene from './Scenes/PreloaderScene';
import TitleScene from './Scenes/TitleScene';
import OptionsScene from './Scenes/OptionsScene';
import CreditsScene from './Scenes/CreditsScene';
import Puzzle1 from './Scenes/Puzzle1';
import Puzzle2 from './Scenes/Puzzle2'
import TesterScene from './Scenes/TesterScene';
import Tester2 from './Scenes/Tester2';
import Inventory from './Scenes/Inventory';

class Game extends Phaser.Game {
	constructor() {
		super(config);
		this.scene.add('Boot', BootScene);
		this.scene.add('Puzzle1', Puzzle1);
		this.scene.add('Preloader', PreloaderScene);
		this.scene.add('Title', TitleScene);
		this.scene.add('Options', OptionsScene);
		this.scene.add('Credits', CreditsScene);
		this.scene.add('StartScene', StartScene);
		this.scene.add('Tester', TesterScene);
		this.scene.add('Tester2', Tester2);
		this.scene.add('Inventory', Inventory);
		this.scene.add('Puzzle2', Puzzle2)

		this.scene.start('Boot');
	}
}

window.game = new Game();
