import "phaser";

export default class PreloaderScene extends Phaser.Scene {
  constructor() {
    super("Preloader");
  }

  init() {
    this.readyCount = 0;
  }

  preload() {
    // add logo image
    this.add.image(400, 200, "logo");

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
      text: "Loading...",
      style: {
        font: "20px monospace",
        fill: "#ffffff",
      },
    });
    loadingText.setOrigin(0.5, 0.5);

    var percentText = this.make.text({
      x: width / 2,
      y: height / 2 - 5,
      text: "0%",
      style: {
        font: "18px monospace",
        fill: "#ffffff",
      },
    });
    percentText.setOrigin(0.5, 0.5);

    var assetText = this.make.text({
      x: width / 2,
      y: height / 2 + 50,
      text: "",
      style: {
        font: "18px monospace",
        fill: "#ffffff",
      },
    });
    assetText.setOrigin(0.5, 0.5);

    // update progress bar
    this.load.on("progress", function (value) {
      percentText.setText(parseInt(value * 100) + "%");
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(250, 280, 300 * value, 30);
    });

    // update file progress text
    this.load.on("fileprogress", function (file) {
      assetText.setText("Loading asset: " + file.key);
    });

    // remove progress bar when complete
    this.load.on(
      "complete",
      function () {
        progressBar.destroy();
        progressBox.destroy();
        loadingText.destroy();
        percentText.destroy();
        assetText.destroy();
        this.ready();
      }.bind(this)
    );

    this.timedEvent = this.time.delayedCall(1000, this.ready, [], this);

    // load assets needed in our game

    //load images
    this.load.image("GameoverRed", "assets/GameoverRed.png");
    this.load.image("GameoverGreen", "assets/GameoverGreen.png");
    this.load.image("NPC3Scared", "assets/NPC3Scared.png");
    this.load.image("NPC2Scared", "assets/NPC2Scared.png");
    this.load.image("Insidebag", "assets/Insidebag.png");
    this.load.image("blueButton1", "assets/ui/blue_button02.png");
    this.load.image("blueButton2", "assets/ui/blue_button03.png");
    this.load.image("phaserLogo", "assets/logo.png");
    this.load.image("star", "assets/star.png");
    this.load.image("cat", "assets/cat.png");
    this.load.image("scissors", "assets/scissors.png");
    this.load.image("pizza", "assets/pizza.png");
    this.load.image("table", "assets/table.png");
    this.load.image("titleImage", "assets/logo.png");
    this.load.image("greenDoll", "../assets/Green doll.png");
    this.load.image("greenDollCut", "../assets/Green doll cut.png");
    this.load.image("blueDoll", "../assets/Blue doll.png");
    this.load.image("blueDollCut", "../assets/Blue doll cut.png");
    this.load.image("redDoll", "../assets/Red doll.png");
    this.load.image("redDollCut", "../assets/Red doll cut.png");
    this.load.image("nurseDoll", "../assets/Nurse doll.png");
    this.load.image("noSciz", "../assets/noSciz.png");
    this.load.image("note", "../assets/Note.png");
    this.load.image("yesButton", "../assets/ui/Yes button.png");
    this.load.image("noButton", "../assets/ui/No button.png");
    this.load.image("blueButton", "../assets/ui/Blue button.png");
    this.load.image("greenButton", "../assets/ui/Green button.png");
    this.load.image("redButton", "../assets/ui/Red button.png");
    this.load.image("nextPage", "assets/next.png");
    this.load.image("tiles", "../assets/Room spritesheet.png");
    this.load.image("cage", "assets/LockedCage.png");
    this.load.image("icon", "assets/Iconnpc.png");
    this.load.image("deco", "assets/deco.png");
    this.load.image("deco2", "assets/deco2.png");
    this.load.image("drawer", "assets/drawer.png");
    this.load.image("NPC", "assets/NPC.png");
    this.load.image("NPC2", "assets/NPC2.png");
    this.load.image("NPC3", "assets/NPC3.png");
    this.load.image("NPC2icon", "assets/NPC2icon.png");
    this.load.image("NPC3icon", "assets/NPC3icon.png");
    this.load.image("Protagicon", "assets/Protagicon.png");
    this.load.image("car", "assets/car.png");
    this.load.image("arrow", "assets/arrow.png");
    this.load.image("employee", "assets/Hotel employee.png");
    this.load.image("dead", "assets/Dead.png");
    this.load.tilemapTiledJSON("Puzzle2", "../assets/PuzzleRoom.json");
    this.load.tilemapTiledJSON("tutorialRoom", "../assets/TutorialRoom.json");
    this.load.tilemapTiledJSON("map", "../assets/HallwayRoom.json");
    this.load.tilemapTiledJSON("PuzzleMap", "../assets/PuzzleRoom.json");
    this.load.image("HotelEmployee", "assets/HotelEmployee.png");
    this.load.image("dresser", "assets/dresser.png");
    this.load.tilemapTiledJSON("HotelRoom", "../assets/HotelRoom.json");
    this.load.tilemapTiledJSON("Lobby", "../assets/Convention.json");
    this.load.tilemapTiledJSON("Outside", "../assets/Outside.json");

    //load sprites
    this.load.spritesheet("man", "assets/man.png", {
      frameWidth: 64,
      frameHeight: 128,
    });
    this.load.spritesheet("room1Key", "assets/key.png", {
      frameWidth: 28.5,
      frameHeight: 45,
    });
    this.load.spritesheet("key", "assets/key.png", {
      frameWidth: 28.5,
      frameHeight: 45,
    });

    //load music or sound effects
    this.load.audio("bg", "assets/bg.wav");
    this.load.audio("titleMusic", "assets/title.mp3");
    this.load.audio("bg", "assets/bg.wav");
    this.load.audio("dollroom", "assets/dollroom.wav");

    // load other
    this.load.plugin(
      "rextexttypingplugin",
      "https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rextexttypingplugin.min.js",
      true
    );
  }

  ready() {
    // brings us to title scene hwen assests are done loading
    this.readyCount++;
    if (this.readyCount === 2) {
      this.scene.start("Title");
    }
  }
}
