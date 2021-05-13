import Button from "../Models/Buttons";

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super("Title");
  }

  preload() {
    //already added to preload sceen be sure to delete for clean up
    // this.load.image("titleImage", "assets/logo.png");
    // this.load.audio("titleMusic", "assets/title.mp3");
  }

  create() {
    this.add.image(400, 300, "titleImage");
    var music = this.sound.add("titleMusic", true);
    music.setLoop(true);
    music.setVolume(0.1);
    music.play();

    const startButton = new Button(400, 500, "Start Game", this, () => {
      this.scene.start("Game");
      music.stop();
    });
  }
}
