import "phaser";
import { Game } from "phaser";
import Player from "../Models/Player";
import Animate from "../Models/Animate";

const openingLine = "Player name, help!";
const note =
  "Find the living among the dead. The answer will be revealed when blood is spilled.";
const COLOR_PRIMARY = 0x4e342e;
const COLOR_LIGHT = 0x7b5e57;
const COLOR_DARK = 0x260e04;
let textOpen = false;
let last = false;
let wrongCounter = 0;
var yesButton;
var noButton;
let wrongClicked = false;
let rightClicked = false;
let haveScissors = false;
let dollsCut = false;

export default class Puzzle2 extends Phaser.Scene {
  constructor() {
    super("Puzzle2");
    // let yesButton;
    // let noButton;
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

  create() {
    //tilemap
    const map = this.make.tilemap({ key: "Puzzle2" });

    const tileset = map.addTilesetImage("PuzzleRoom", "tiles");

    const belowLayer = map.createLayer("Below", tileset, 0, 0);
    const collidingLayer = map.createLayer("Colliding", tileset, 0, 0);

    collidingLayer.setCollisionByProperty({ collides: true });

    //items in room
    let note = this.add.rectangle(100, 600, 40, 40, 0x000000);
    let wrongDoll = this.add.rectangle(300, 400, 40, 40, 0x000000);
    let rightDoll = this.add.rectangle(400, 400, 40, 40, 0x000000);
    let wrongDoll2 = this.add.rectangle(500, 400, 40, 40, 0x000000);
    let nurseDoll = this.add.rectangle(700, 600, 40, 40, 0x000000)

    //player
    this.man = this.physics.add
      .existing(new Player(this, 420, 800, "man"))
      .setOrigin(0.5, 0.5);

    this.physics.add.collider(this.man, collidingLayer);

    Animate(this, "man", 4, 7, 8, 11, 12, 15, 0, 3, 0);

    //camera
    this.cameras.main.setBounds(48, 0, 800, 900);
    this.cameras.main.startFollow(this.man);

    //opening dialogue
    this.time.delayedCall(8000, this.openingDialogue(), this); // delay in ms

    //player and item interactions
    this.physics.add.existing(note, true);
    this.physics.add.overlap(this.man, note, this.readNote, null, this);

    this.physics.add.existing(wrongDoll, true);
    this.physics.add.existing(wrongDoll2, true);
    this.physics.add.existing(rightDoll, true);
    this.physics.add.existing(nurseDoll, true)
    this.physics.add.overlap(this.man, wrongDoll, this.chooseWrong, null, this);
    this.physics.add.overlap(this.man, wrongDoll2, this.chooseWrong, null, this);
    this.physics.add.overlap(this.man, rightDoll, this.chooseRight, null, this);
    this.physics.add.overlap(this.man, nurseDoll, this.getScissors, null, this)

    //yes or no choices
    yesButton = this.add.rectangle(400, 300, 50, 50, 0x000000);
    yesButton.visible = false;
    yesButton.setInteractive();
    noButton = this.add.rectangle(400, 370, 50, 50, 0x000000);
    noButton.visible = false;
    noButton.setInteractive();
  }

  update() {
    this.man.update(this);
    if (wrongClicked) {
      this.penalty();
    }
  }

  openingDialogue() {
    textOpen = true;
    createTextBox(this, 100, 400, {
      wrapWidth: 500,
      fixedWidth: 500,
      fixedHeight: 65,
      imageName: 'npc2'
    }).start(openingLine, 50);
  }

  readNote() {
    let enter = this.input.keyboard.addKey("ENTER");
    if (enter.isDown && textOpen === false && last === false) {
      textOpen = true;
      createTextBox(this, 100, 400, {
        wrapWidth: 500,
        fixedWidth: 500,
        fixedHeight: 65,
      }).start(note, 50);
    }
  }

  getScissors() {
      let enter = this.input.keyboard.addKey("ENTER");
      if (enter.isDown) {
        yesButton.visible = true;
        noButton.visible = true;
        
        textOpen = true;
        const dialogue = createTextBox(this, 100, 400, {
          wrapWidth: 500,
          fixedWidth: 500,
          fixedHeight: 65,
        }).start("The doll is clutching a pair of scissors...take them?", 50);

        yesButton.on("pointerdown", function () {
            yesButton.visible = false;
            noButton.visible = false;
            haveScissors = true;
            dialogue.destroy();
          });
    
          noButton.on("pointerdown", function () {
            yesButton.visible = false;
            noButton.visible = false;
            dialogue.destroy();
          });
      }
  }

  chooseWrong() {
    let enter = this.input.keyboard.addKey("ENTER");
    if (enter.isDown) {
      yesButton.visible = true;
      noButton.visible = true;

      textOpen = true;
      const dialogue = createTextBox(this, 100, 400, {
        wrapWidth: 500,
        fixedWidth: 500,
        fixedHeight: 65,
      }).start("Choose this doll?", 50);

      yesButton.on("pointerdown", function () {
        wrongClicked = true;
        dialogue.destroy();
      });

      noButton.on("pointerdown", function () {
        yesButton.visible = false;
        noButton.visible = false;
        dialogue.destroy();
      });
    }
  }

  chooseRight() {
    let enter = this.input.keyboard.addKey("ENTER");
    if (enter.isDown && dollsCut) {
      yesButton.visible = true;
      noButton.visible = true;

      textOpen = true;
      const dialogue = createTextBox(this, 100, 400, {
        wrapWidth: 500,
        fixedWidth: 500,
        fixedHeight: 65,
      }).start("Choose this doll?", 50);

      yesButton.on("pointerdown", function () {
        rightClicked = true;
        yesButton.visible = false;
        noButton.visible = false;
        dialogue.destroy();
      });

      noButton.on("pointerdown", function () {
        yesButton.visible = false;
        noButton.visible = false;
        dialogue.destroy();
      });
    } else if (enter.isDown && !dollsCut){
      yesButton.visible = true;
      noButton.visible = true;

      textOpen = true;
      const dialogue = createTextBox(this, 100, 400, {
        wrapWidth: 500,
        fixedWidth: 500,
        fixedHeight: 65,
      }).start("Choose this doll?", 50);

      yesButton.on("pointerdown", function () {
        wrongClicked = true;
        dialogue.destroy();
      });

      noButton.on("pointerdown", function () {
        yesButton.visible = false;
        noButton.visible = false;
        dialogue.destroy();
      });
    }
  }

  penalty() {
    wrongCounter++;
    wrongClicked = false;
    yesButton.visible = false;
    noButton.visible = false;

    if (wrongCounter === 1) {
      console.log("strike one");
    } else if (wrongCounter === 2) {
      console.log("strike two");
    } else if (wrongCounter === 3) {
      console.log("strike three");
      this.scene.switch("Title");
    }
  }
}

const GetValue = Phaser.Utils.Objects.GetValue;
var createTextBox = function (scene, x, y, config) {
  var wrapWidth = GetValue(config, "wrapWidth", 0);
  var fixedWidth = GetValue(config, "fixedWidth", 0);
  var fixedHeight = GetValue(config, "fixedHeight", 0);

  var textBox = scene.rexUI.add
    .textBox({
      x: x,
      y: scene.cameras.main.height,

      background: scene.rexUI.add
        .roundRectangle(0, 0, 2, 2, 20, COLOR_PRIMARY)
        .setStrokeStyle(2, COLOR_LIGHT)
        .setVisible(true),

      icon: scene.add.image(0, 0, "icon"),

      text: getBBcodeText(scene, wrapWidth, fixedWidth, fixedHeight),

      action: scene.add.image(0, 0, "nextPage").setTint(COLOR_LIGHT),

      space: {
        left: 20,
        right: 20,
        top: 20,
        bottom: 20,
        icon: 10,
        text: 10,
      },
    })
    .setOrigin(0)
    .layout();

  scene.input.keyboard.on(
    "keydown-ENTER",
    function (event) {
      if (this.isTyping) {
        this.stop(true);
      } else {
        this.typeNextPage();
      }
    },
    textBox
  );

  textBox.setInteractive().on(
    "pageend",
    function () {
      if (this.isLastPage && !this.isTyping) {
        scene.input.keyboard.on("keyup-ENTER", () => {
          textBox.setVisible(false);
          last = false;
        });

        textOpen = !textOpen;

        last = true;
      }
    },
    textBox
  );

  return textBox;
};

var getBuiltInText = function (scene, wrapWidth, fixedWidth, fixedHeight) {
  return scene.add
    .text(0, 0, "", {
      fontSize: "20px",
      wordWrap: {
        width: wrapWidth,
      },
      maxLines: 3,
    })
    .setFixedSize(fixedWidth, fixedHeight);
};

var getBBcodeText = function (scene, wrapWidth, fixedWidth, fixedHeight) {
  return scene.rexUI.add.BBCodeText(0, 0, "", {
    fixedWidth: fixedWidth,
    fixedHeight: fixedHeight,

    fontSize: "20px",
    wrap: {
      mode: "word",
      width: wrapWidth,
    },
    maxLines: 3,
  });
};
