import "phaser";
import { Game } from "phaser";
import Player from "../Models/Player";
import Animate from "../Models/Animate";
const openingLine =
  "Sophie, help! We're stuck in this cage! I think you have to solve the puzzle to let us out.";
const note =
  "Find the living among the dead. The answer will be revealed when blood is shed.";
const COLOR_PRIMARY = 0x4e342e;
const COLOR_LIGHT = 0x7b5e57;
const COLOR_DARK = 0x260e04;
let textOpen = false;
let last = false;
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

    const map = this.make.tilemap({ key: "Puzzle2" });

    const tileset = map.addTilesetImage("PuzzleRoom", "tiles");

    const belowLayer = map
      .createLayer("Below", tileset, 0, 0)
      .setPipeline("Light2D");

    employee1 = this.add.image(256, 224, "employee");
    employee2 = this.add.image(384, 224, "employee");
    employee3 = this.add.image(512, 224, "employee");
    friend = this.add.sprite(640, 224, "NPC");
    const collidingLayer = map
      .createLayer("Colliding", tileset, 0, 0)
      .setPipeline("Light2D");

    collidingLayer.setCollisionByProperty({ collides: true });

    //items in room
    this.add.image(100, 600, "note");
    blueDoll = this.add.image(300, 400, "blueDoll");
    redDoll = this.add.image(400, 400, "redDoll");
    greenDoll = this.add.image(500, 400, "greenDoll");
    let nurseDollImg = this.add.image(700, 600, "nurseDoll");

    //cage
    this.lockedCage = this.physics.add.staticSprite(800, 256, "cage");
    this.physics.add.existing(this.lockedCage, true);

    //player
    this.man = this.physics.add
      .existing(new Player(this, 420, 700, "man"))
      .setOrigin(0, 0);

    this.man.body.setSize(30, 10);

    this.physics.add.collider(this.man, collidingLayer);
    this.physics.add.collider(this.man, blueDoll);
    this.physics.add.collider(this.man, greenDoll);
    this.physics.add.collider(this.man, redDoll);
    this.physics.add.collider(this.man, nurseDollImg);
    this.physics.add.collider(this.man, this.lockedCage);
    // this.physics.add.collider(this.man, bluedollhitbox);
    // this.physics.add.collider(this.man, greendollhitbox);
    // this.physics.add.collider(this.man, reddollhitbox);

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
    this.physics.add.overlap(this.man, nurseDoll, this.getScissors, null, this);
    this.physics.add.overlap(this.man, note, this.readNote, null, this);

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
      this.correct(this);
    }
    light.x = this.man.x + 35;
    light.y = this.man.y + 35;
  }

  openingDialogue() {
    textOpen = true;
    this.man.body.setVelocity(0);
    createTextBox(this, 100, 400, {
      wrapWidth: 500,
      fixedWidth: 500,
      fixedHeight: 65,
      imageName: "npc2",
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

  getScissors(man, doll) {
    let enter = this.input.keyboard.addKey("ENTER");
    nurse = true;
    if (enter.isDown) {
      yesButton.visible = true;
      noButton.visible = true;

      textOpen = true;
      const dialogue = createTextBox(this, 100, 400, {
        wrapWidth: 500,
        fixedWidth: 500,
        fixedHeight: 65,
      }).start("The doll is clutching a pair of scissors...take them?", 50);
      if (once === false) {
        once = true;
        yesButton.on("pointerdown", function () {
          dialogue.destroy();
          yesButton.visible = false;
          noButton.visible = false;

          man.pickupItem("scissors");
        });
      }

      noButton.on("pointerdown", function () {
        yesButton.visible = false;
        noButton.visible = false;
        dialogue.destroy();
      });
    }
  }
  //   bluefunc (){
  // 	let enter = this.input.keyboard.addKey("ENTER");

  // 	  if(enter.isDown){
  // 		blue = true}

  //   }
  //  greenfunc (){
  // 	let enter = this.input.keyboard.addKey("ENTER");

  // 	if(enter.isDown){
  // 		green = true}

  // }
  // redfunc (){
  // 	let enter = this.input.keyboard.addKey("ENTER");

  // 	if(enter.isDown){
  // 		red = true}

  // }
  choosedoll(man, doll, scene) {
    let enter = this.input.keyboard.addKey("ENTER");

    if (enter.isDown && man.inventory.scissors === 0) {
      blueButton.visible = true;
      greenButton.visible = true;
      redButton.visible = true;
      const dialogue = createTextBox(this, 100, 400, {
        wrapWidth: 500,
        fixedWidth: 500,
        fixedHeight: 65,
      }).start("Which doll do you want to choose?", 50);

      blueButton.on("pointerdown", function () {
        this.scene.cameras.main.shake(500);
        blueButton.visible = false;
        greenButton.visible = false;
        redButton.visible = false;
        wrongClicked = true;

        dialogue.destroy();
      });

      greenButton.on("pointerdown", function () {
        this.scene.cameras.main.shake(500);
        blueButton.visible = false;
        greenButton.visible = false;
        redButton.visible = false;
        wrongClicked = true;
        dialogue.destroy();
      });
      redButton.on("pointerdown", function () {
        blueButton.visible = false;
        greenButton.visible = false;
        redButton.visible = false;
        if (dollsCut === true) {
          rightClicked = true;
        } else {
          this.scene.cameras.main.shake(500);
          wrongClicked = true;
        }
        dialogue.destroy();
      });
    } else if (enter.isDown && this.man.inventory.scissors > 0) {
      yesButton.setVisible(true);
      noButton.setVisible(true);

      const dialogue = createTextBox(this, 100, 400, {
        wrapWidth: 500,
        fixedWidth: 500,
        fixedHeight: 65,
      }).start("Cut open the dolls?", 50);
      yesButton.on("pointerdown", function () {
        dollsCut = true;
        if (red) {
          // redDoll = this.scene.add.image(400, 400, "redDollCut")
          redDoll.setTexture("redDollCut");
        }
        if (blue) {
          // blueDoll = this.scene.add.image(300, 400, "blueDollCut")
          blueDoll.setTexture("blueDollCut");
        }
        if (green) {
          greenDoll.setTexture("greenDollCut");

          // greenDoll = this.scene.add.image(500, 400, "greenDollCut")
        }

        man.inventory.scissors = 0;
        console.log("used the scissors");
        yesButton.visible = false;
        noButton.visible = false;
        dialogue.destroy();
      });

      noButton.on("pointerdown", function () {
        yesButton.visible = false;
        noButton.visible = false;
        dialogue.destroy();
      });
    }
  }

  correct(scene) {
    rightClicked = false;
    this.lockedCage.disableBody(true, true);
    const dialogue = createTextBox(this, 100, 400, {
      wrapWidth: 500,
      fixedWidth: 500,
      fixedHeight: 65,
    }).start("You did it! Let's go!", 50);

    scene.physics.add.existing(exitdoor, true);
  }

  penalty() {
    wrongCounter++;
    wrongClicked = false;
    yesButton.visible = false;
    noButton.visible = false;

    if (wrongCounter === 1 && !nurse) {
      textOpen = true;
      createTextBox(this, 100, 400, {
        wrapWidth: 500,
        fixedWidth: 500,
        fixedHeight: 65,
      }).start("aaaaaaaaa", 50);
      employee1.setTexture("dead");
    } else if (wrongCounter === 2 && !nurse) {
      createTextBox(this, 100, 400, {
        wrapWidth: 500,
        fixedWidth: 500,
        fixedHeight: 65,
      }).start("aaaaaaaaa i'm fucking dead too", 50);
      employee2.setTexture("dead");
    } else if (wrongCounter === 3 && !nurse) {
      createTextBox(this, 100, 400, {
        wrapWidth: 500,
        fixedWidth: 500,
        fixedHeight: 65,
      }).start(":(", 50);
      employee3.setTexture("dead");
    } else if (wrongCounter === 4 && !nurse) {
      wrongCounter = 0;
      once = false;
      this.scene.start("GameOver");
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
      y: y,

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

  textBox.setScrollFactor(0);

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
function exitPuzzleRoom2() {
  music.stop();
  this.scene.start("StartScene", { x: 1200, y: 320 });
}
