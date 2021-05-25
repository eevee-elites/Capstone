import "phaser";
import Player from "../Models/Player";
import Animate from "../Models/Animate";
import TextBoxWithoutIcon, {TextBoxWithIcon} from "../Utilities/TextBox";
const openingLine =
	"Sophie, help! We're stuck in this cage! I think you have to solve the puzzle to let us out.";
const note =
	"Find the living among the dead. The answer will be revealed when blood is shed.";
let textOpen = false;
let wrongCounter = 0;
var yesButton;
var noButton;
var blueButton;
var greenButton;
var redButton;
let wrongClicked = false;
let rightClicked = false;
let dollsCut = false;
let light;
let nurse;
let once = false;
let blue;
let red;
let green;
let blueDoll;
let redDoll;
let greenDoll;
let employee1;
let employee2;
let employee3;
let friend;
let exitdoor;
let music;
let nurseDollImg;
let deco; 
let deco2;
let deco3;
let deco4;
let deco5;
let deco6;
let deco7;
let deco8;
let deco9;
let deco10;
let deco11;
let deco12;
let deco13;
let deco14;
let deco15;
let monster, wall1, wall2, wall3, wall4;
let decoflipped;
let decoflipped2;
let decoflipped3;
let decoflipped4;
let decoflipped5;
let decoflipped6;
let counter = 0;




export default class Puzzle2 extends Phaser.Scene {
  constructor() {
    super("Puzzle2");
    // let yesButton;
    // let noButton;
  }
  initialize() {
    function switchInventory() {
      Phaser.Scene.call(this, "Inventory");
    }
  }

  preload() {
    this.load.scenePlugin({
      key: "rexuiplugin",
      url: "https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js",
      sceneKey: "rexUI",
    });

    this.load.plugin(
      "rextexttypingplugin",
      "https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rextexttypingplugin.min.js",
      true
    );
  }

  create(data) {
    music = this.sound.add("dollroom", true);
    music.play();
    music.setVolume(0.3);
    //tilemap
    //const exitdoor = this.add.rectangle(450, 800, 120, 40, 0x000000);
   
    let bluedollhitbox = this.add.rectangle(300, 400, 70, 132, 0x000000);
    let reddollhitbox = this.add.rectangle(400, 400, 70, 132, 0x000000);
    let greendollhitbox = this.add.rectangle(500, 400, 70, 132, 0x000000);
    let nurseDoll = this.add.rectangle(700, 600, 70, 70, 0xffffff);
    let note = this.add.rectangle(100, 600, 70, 70, 0x000000);
    exitdoor = this.add.rectangle(450, 800, 120, 40, 0x000000);
    exitdoor = this.add.rectangle(450, 800, 120, 40, 0x000000);

    const map = this.make.tilemap({ key: "Puzzle2" });

    const tileset = map.addTilesetImage("PuzzleRoom", "tiles");

    const belowLayer = map
      .createLayer("Below", tileset, 0, 0)
      .setPipeline("Light2D");
      wall1 = this.add.image(240, 224, "wall");
      employee1 = this.add.image(306, 224, "employee");
      wall2 = this.add.image(370, 224, "wall");
      employee2 = this.add.image(434, 224, "employee");
      wall3 = this.add.image(500, 224, "wall");
      employee3 = this.add.image(562, 224, "employee");
      wall4 = this.add.image(630, 224, "wall");
      monster = this.add.image(128, 224, "monster");
      friend = this.add.sprite(690, 224, "NPC3");
    
    const collidingLayer = map
      .createLayer("Colliding", tileset, 0, 0)
      .setPipeline("Light2D");

    collidingLayer.setCollisionByProperty({ collides: true });

    //items in room
    this.add.image(100, 600, "note");
    blueDoll = this.add.image(300, 400, "blueDoll");
    redDoll = this.add.image(400, 400, "redDoll");
    greenDoll = this.add.image(500, 400, "greenDoll");
    nurseDollImg = this.add.image(700, 600, "nurseDoll");
    
    //decorations
    decoflipped = this.add.image(420, 450, "decoflipped")   
    deco = this.add.image(389, 460, "deco3");
    deco2 = this.add.image(365, 450, "deco3")
    deco3 = this.add.image(385, 460, "deco");
    deco4 = this.add.image(405, 460, "deco2");
    deco4.flipX = true
    decoflipped2 = this.add.image(130, 660, "deco2flipped")
    decoflipped3 = this.add.image(130, 360, "deco3flipped")   
    decoflipped3.flipX = true

    decoflipped4 = this.add.image(710, 640, "decoflipped")   


    //cage
    this.lockedCage = this.physics.add.staticSprite(800, 256, "cage");
    this.physics.add.existing(this.lockedCage, true);

    //player
    this.man = this.physics.add
      .existing(new Player(this, 420, 700, "man"))
      .setOrigin(0, 0);

    this.man.body.setSize(30, 10);
    this.man.completed = data.completed;
    this.physics.add.collider(this.man, collidingLayer);
    this.physics.add.collider(this.man, blueDoll);
    this.physics.add.collider(this.man, greenDoll);
    this.physics.add.collider(this.man, redDoll);
    this.physics.add.collider(this.man, nurseDollImg);
    this.physics.add.collider(this.man, this.lockedCage);

    Animate(this, "man", 4, 7, 8, 11, 12, 15, 0, 3, 0);
    this.physics.add.overlap(this.man, exitdoor, exitPuzzleRoom2, null, this);
    //camera
    this.cameras.main.setBounds(48, 0, 800, 900);
    this.cameras.main.startFollow(this.man);

    //opening dialogue
    this.time.delayedCall(8000, this.openingDialogue(), this); // delay in ms

    //lights
    this.lights.enable();
    this.lights.setAmbientColor(0x7b5e57);
    light = this.lights.addLight(180, 80, 120);

    //player and item interactions
    this.physics.add.existing(greenDoll, true);
    this.physics.add.existing(redDoll, true);
    this.physics.add.existing(blueDoll, true);
    this.physics.add.existing(nurseDollImg, true);
    this.physics.add.existing(bluedollhitbox, true);
    this.physics.add.existing(greendollhitbox, true);
    this.physics.add.existing(reddollhitbox, true);
    this.physics.add.existing(nurseDoll, true);
    this.physics.add.existing(note, true);
    blue = this.physics.add.overlap(
      this.man,
      bluedollhitbox,
      this.choosedoll,
      null,
      this
    );
    green = this.physics.add.overlap(
      this.man,
      greendollhitbox,
      this.choosedoll,
      null,
      this
    );
    red = this.physics.add.overlap(
      this.man,
      reddollhitbox,
      this.choosedoll,
      null,
      this
    );
    this.physics.add.collider(
      this.man,
      nurseDoll,
      this.getScissors,
      null,
      this
    );

    this.physics.add.collider(this.man, note, this.readNote, null, this);

    //yes or no choices
    greenButton = this.add.image(400, 300, "greenButton");
    greenButton.visible = false;
    greenButton.setScrollFactor(0);
    greenButton.setInteractive();

    redButton = this.add.image(400, 200, "redButton");
    redButton.visible = false;
    redButton.setScrollFactor(0);
    redButton.setInteractive();

    blueButton = this.add.image(400, 100, "blueButton");
    blueButton.visible = false;
    blueButton.setScrollFactor(0);
    blueButton.setInteractive();

    yesButton = this.add.image(400, 200, "yesButton");
    yesButton.visible = false;
    yesButton.setScrollFactor(0);
    yesButton.setInteractive();

    noButton = this.add.image(400, 300, "noButton");
    noButton.visible = false;
    noButton.setScrollFactor(0);
    noButton.setInteractive();
    console.log("puzz2 man", this.man);
    this.input.keyboard.on(
      "keydown-I",
      function () {
        this.scene.transition({
          target: "Inventory",
          duration: 10,
          data: { inventory: this.man.inventory, scene: "Puzzle2" },
          sleep: true,
        });
      },
      this
    );

    this.events.on(
      Phaser.Scenes.Events.WAKE,
      function () {
        this.wake(this.input, this.scene);
      },
      this
    );
   
  }
  wake(input, scene) {
    this.input.keyboard.on(
      "keydown-I",
      function () {
        this.scene.transition({
          target: "Inventory",
          duration: 10,
          data: { inventory: this.man.inventory, scene: "Puzzle2" },
          sleep: true,
        });
      },
      this
    );
  }
 
  update() {
    this.man.update(this);
    if (wrongClicked) {
      this.penalty();
    }

    if (rightClicked) {
      this.lockedCage.disableBody(true, true);
    }
    light.x = this.man.x + 35;
    light.y = this.man.y + 35;
  }

  openingDialogue() {
    this.cameras.main.pan(140, 124, 3000);
    let opening = TextBoxWithIcon(this, "NPC3icon", true, false).start(
      openingLine,
      50
    );
  }

  readNote() {
    let readnote = TextBoxWithIcon(this, "note", true, false).start(note, 50);
  }

  getScissors(man, doll) {
    console.log("text open?", textOpen);
    if (man.inventory.scissors === 0) {
      nurse = true;
      if (nurse) {
        yesButton.visible = true;
        noButton.visible = true;
        let needScissors = TextBoxWithIcon(
          this,
          "Protagicon",
          true,
          false
        ).start(
          "Hmmm this doll is clutching a pair of scissors... Do I take them?",
          50
        );
        if (once === false) {
          once = true;
          yesButton.on("pointerdown", function () {
            yesButton.visible = false;
            noButton.visible = false;
            nurseDollImg.setTexture("noSciz");
            man.pickupItem("scissors");
            textOpen = false;
          });
        }

        noButton.on("pointerdown", function () {
          yesButton.visible = false;
          noButton.visible = false;
        });
      }
    } else {
      if (!textOpen) {
        textOpen = true;
        let hasScissors = TextBoxWithIcon(this, "nurseDoll", true, false).start(
          "You took my scissors!",
          50
        );
      }
    }
    textOpen = false;
  }
  gotScissors() {
    let hasScissors = TextBoxWithoutIcon(this, true, false).start(
      "You took my scissors!",
      50
    );
    textOpen = false;
  }
  letsGo() {
    TextBoxWithIcon(this, "NPC3icon", true, false).start(
      "Alright you did it! We better get out of here quick!",
      50
    );
  }

  choosedoll(man, doll, scene) {
    let enter = this.input.keyboard.addKey("ENTER");
    if (enter.isDown && rightClicked) {
      this.letsGo();
    }
    if (
      enter.isDown &&
      (man.inventory.scissors === 0 || dollsCut) &&
      !rightClicked
    ) {
      this.seeButtons();
      let dollChoice = TextBoxWithIcon(this, "Protagicon", true, false).start(
        "Which doll do I choose?",
        50
      );

      blueButton.on("pointerdown", function () {
        counter += 1
        blueButton.visible = false;
        greenButton.visible = false;
        redButton.visible = false;
        this.scene.cameras.main.shake(500);
        wrongClicked = true;
      });

      greenButton.on("pointerdown", function () {
        counter+= 1
        this.scene.cameras.main.shake(500);
        blueButton.visible = false;
        greenButton.visible = false;
        redButton.visible = false;
        wrongClicked = true;
      });
      redButton.on("pointerdown", function () {
        blueButton.visible = false;
        greenButton.visible = false;
        redButton.visible = false;
        if (dollsCut) {
          rightClicked = true;
          this.scene.physics.add.existing(exitdoor, true);
          man.completed.puzzle2 = true;
        } else {
          this.scene.cameras.main.shake(500);
          wrongClicked = true;
          counter+=1
        }
      });
    } else if (
      enter.isDown &&
      this.man.inventory.scissors > 0 &&
      !rightClicked
    ) {
      yesButton.setVisible(true);
      noButton.setVisible(true);
      let cutOpen = TextBoxWithIcon(this, "Protagicon", true, false).start(
        "Should I cut open the dolls with the scissors?",
        50
      );
      yesButton.on("pointerdown", function () {
        dollsCut = true;
        if (red) {
          redDoll.setTexture("redDollCut");
        }
        if (blue) {
          blueDoll.setTexture("blueDollCut");
        }
        if (green) {
          greenDoll.setTexture("greenDollCut");
        }

        console.log("used the scissors");
        yesButton.visible = false;
        noButton.visible = false;
      });

      noButton.on("pointerdown", function () {
        yesButton.visible = false;
        noButton.visible = false;
      });
    }
  }

  seeButtons() {
    blueButton.visible = true;
    greenButton.visible = true;
    redButton.visible = true;
  }

  penalty() {
    wrongCounter++;
    wrongClicked = false;
    yesButton.visible = false;
    noButton.visible = false;

    if (wrongCounter === 1) {
      TextBoxWithIcon(this, "NPC3Scared", true, false).start("aaaaaaaaa", 50);
      employee1.setTexture("dead");
      wall1.setVisible(false)
      monster.x += 100
    } else if (wrongCounter === 2) {
      TextBoxWithIcon(this, "NPC3Scared", true, false).start(
        "aaaaa you have to be careful with the mistakes",
        50
      );
      monster.x += 100

      wall1.setVisible(false)
      wall2.setVisible(false)
      employee2.setTexture("dead");
    } else if (wrongCounter === 3) {
      TextBoxWithIcon(this, "NPC3Scared", true, false).start(
        "Oh no this is it for me one more wrong choice and I'm dead",
        50
      );
      monster.x += 100

      wall1.setVisible(false)
      wall2.setVisible(false)
      wall3.setVisible(false)

      employee3.setTexture("dead");
    } else if (wrongCounter === 4) {
      wall1.setVisible(false)
      wall2.setVisible(false)
      wall3.setVisible(false)
      wall4.setVisible(false)
      monster.x += 100

      wrongCounter = 0;
      dollsCut = false;
      once = false;
      nurse = false;
      textOpen = false;
      rightClicked = false;
      this.scene.start("GameOverRed");
    }
  }
}

function exitPuzzleRoom2() {
	music.stop();
	if (this.man.completed.puzzle1 && this.man.completed.puzzle2) {
		this.scene.start("Winner");
	} else {
		this.scene.start("StartScene", {
			x: 1200,
			y: 320,
			completed: this.man.completed,
		});
	}
}
