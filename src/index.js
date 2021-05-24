import "phaser";
import config from "./Config/config";
import StartScene from "./Scenes/StartScene";
import BootScene from "./Scenes/BootScene";
import PreloaderScene from "./Scenes/PreloaderScene";
import TitleScene from "./Scenes/TitleScene";
import OptionsScene from "./Scenes/OptionsScene";
import CreditsScene from "./Scenes/CreditsScene";
import Puzzle1 from "./Scenes/Puzzle1";
import TesterScene from "./TestingEnvironment/TesterScene";
import Tester2 from "./TestingEnvironment/Tester2";
import Inventory from "./Scenes/Inventory";
import TutorialScene from "./Scenes/TutorialScene";
import Puzzle2 from "./Scenes/Puzzle2";
import IntroScene from "./Scenes/IntroScene";
import HallwayScene from "./Scenes/HallwayScene";
import OutsideScene from "./Scenes/OutsideScene";
import LobbyScene from "./Scenes/LobbyScene";
import EmptyRoom1 from "./Scenes/EmptyRoom1";
import GameOverRedScene from "./Scenes/GameOverRedScene";
import GameOverGreenScene from "./Scenes/GameOverGreenScene";

class Game extends Phaser.Game {
  constructor() {
    super(config);
    this.scene.add("Boot", BootScene);
    this.scene.add("Puzzle1", Puzzle1);
    this.scene.add("Preloader", PreloaderScene);
    this.scene.add("Title", TitleScene);
    this.scene.add("Options", OptionsScene);
    this.scene.add("Credits", CreditsScene);
    this.scene.add("StartScene", StartScene);
    this.scene.add("Tester", TesterScene);
    this.scene.add("Tester2", Tester2);
    this.scene.add("Inventory", Inventory);
    this.scene.add("Tutorial", TutorialScene);
    this.scene.add("Intro", IntroScene);
    this.scene.add("Hallway", HallwayScene);
    this.scene.add("Outside", OutsideScene);
    this.scene.add("Lobby", LobbyScene);
    this.scene.add("EmptyRoom1", EmptyRoom1);
    this.scene.add("Puzzle2", Puzzle2);
    this.scene.add("GameOverRed", GameOverRedScene);
    this.scene.add("GameOverGreen", GameOverGreenScene);

    this.scene.start("Boot");
  }
}

window.game = new Game();
