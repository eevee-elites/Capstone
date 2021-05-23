import "phaser";
import Player from "../Models/Player";
import Animate from "../Models/Animate";
import NPC from "../Models/NPC";
import NPCAnimate from "../Models/NPCAnimate";
import { TextBoxWithIcon } from "../Utilities/TextBox";
let strikes = 0;
let light;
let unlocked = false;
let lock1Collected = false;
let lock2Collected = false;
let lock3Collected = false;
let dialog = false;
let reenter = false;
// let music;
const Help =
  "SOPHIE!!! HELP! Come save us, you're trapped in this room too! BUT WE HAVE THE KEY TO THE DOOR! Press the sensors on the ground to unlock the door!!       I think that big red button is also a reset button!!!";
const Thanks = "Thanks for freeing us! Grab the key and lets goooo!";
export default class Puzzle1 extends Phaser.Scene {
  constructor() {
    super("Puzzle1");
  }

  preload() {
    this.load.scenePlugin({
      key: "rexuiplugin",
      url: "https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js",
      sceneKey: "rexUI",
    });
  }

  create(data) {
    // music = this.sound.add("dollroom", true);
    // music.play();
    // music.setVolume(0.3);
    //exit
    let exitBox = this.add.rectangle(450, 850, 100, 100, 0x000000);
    //map
    const map = this.make.tilemap({ key: "PuzzleMap" });
    const tileset = map.addTilesetImage("PuzzleRoom", "tiles");

    const belowLayer = map
      .createLayer("Below", tileset, 0, 0)
      .setPipeline("Light2D");
    switch (strikes) {
      case 0:
        this.add.image(256, 224, "employee");
        this.add.image(384, 224, "employee");
        this.add.image(512, 224, "employee");
        this.add.sprite(640, 224, "NPC2");
        break;
      case 1:
        this.add.image(256, 224, "dead");
        this.add.image(384, 224, "employee");
        this.add.image(512, 224, "employee");
        this.add.sprite(640, 224, "NPC2");
        break;
      case 2:
        this.add.image(256, 224, "dead");
        this.add.image(384, 224, "dead");
        this.add.image(512, 224, "employee");
        this.add.sprite(640, 224, "NPC2");
        break;
      case 3:
        this.add.image(256, 224, "dead");
        this.add.image(384, 224, "dead");
        this.add.image(512, 224, "dead");
        this.add.sprite(640, 224, "NPC2");
        break;
      case 4:
        strikes = 0;
        unlocked = false;
        lock1Collected = false;
        lock2Collected = false;
        lock3Collected = false;
        dialog = false;
        reenter = false;
        this.scene.start("GameOver");
      default:
        console.log("somethin went wrong here");
    }

    this.collidingLayer = map
      .createLayer("Colliding", tileset, 0, 0)
      .setPipeline("Light2D");

    this.collidingLayer.setCollisionByProperty({ collides: true });
    // could this be why we are getting double!!!!!!!!! look below
    //player
    if (data.x)
      this.man = this.physics.add
        .existing(new Player(this, data.x, data.y, "man"))
        .setOrigin(0, 0);
    else {
      this.man = this.physics.add
        .existing(new Player(this, 420, 700, "man"))
        .setOrigin(0, 0);
    }

    this.man.body.setSize(58, 50).setOffset(0, 64);
    this.physics.add.collider(this.man, this.collidingLayer);
    this.man.setDepth(1);

    Animate(this, "man", 4, 7, 8, 11, 12, 15, 0, 3, 0);
    //puzzle
    if (!reenter) makePuzzle(this);
    //unlock square
    this.add.rectangle(100, 350, 32, 32, 0x000000);
    let lock1 = this.add.rectangle(100, 350, 16, 16, 0x6b6868);
    this.add.rectangle(100, 542, 32, 32, 0x000000);
    let lock2 = this.add.rectangle(100, 542, 16, 16, 0x6b6868);
    this.add.rectangle(740, 542, 32, 32, 0x000000);
    let lock3 = this.add.rectangle(740, 542, 16, 16, 0x6b6868);

    //cage
    this.lockedCage = this.physics.add.staticSprite(800, 256, "cage");
    this.physics.add.existing(this.lockedCage, true);
    this.physics.add.collider(this.man, this.lockedCage);
    //camera
    this.cameras.main.setBounds(48, 0, 800, 900);
    this.cameras.main.startFollow(this.man);
    //lights
    this.lights.enable();
    this.lights.setAmbientColor(0x7b5e57);
    light = this.lights.addLight(180, 80, 120);

    // NPCAnimate(this, 'NPC', 0, 0, 0);
    this.key = this.physics.add.existing(
      new NPC(this, 750, 120, "room1Key"),
      true
    );
    NPCAnimate(this, "room1Key", 0, 9, 10, -1);
    let resetBox = this.add.rectangle(60, 650, 20, 20, 0xa93226);
    this.collected = false;
    //music
    this.music = this.sound.add("bg", true);
    this.music.setLoop(true);
    this.music.play();
    this.music.setVolume(0.3);

    //exit
    this.physics.add.existing(exitBox, true);
    this.physics.add.overlap(this.man, exitBox, this.exitRoom, null, this);
    //collection
    this.physics.add.overlap(this.man, this.key, collectItem, null, this);
    // reset
    this.physics.add.existing(resetBox, true);
    this.physics.add.overlap(this.man, resetBox, reset, null, this);
    //lock
    this.physics.add.existing(lock1, true);
    this.physics.add.existing(lock2, true);
    this.physics.add.existing(lock3, true);
    this.physics.add.overlap(this.man, lock1, collectlock1, null, this);
    this.physics.add.overlap(this.man, lock2, collectlock2, null, this);
    this.physics.add.overlap(this.man, lock3, collectlock3, null, this);

    if (!dialog && !reenter) {
      let dialogue = TextBoxWithIcon(this, "NPC2", true, false).start(Help, 50);
      dialogue.setDepth(2);
      this.cameras.main.pan(640, 224, 5000);
    }

    this.input.keyboard.on(
      "keydown-I",
      function () {
        this.scene.transition({
          target: "Inventory",
          duration: 10,
          data: { inventory: this.man.inventory, scene: "Puzzle1" },
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
          data: { inventory: this.man.inventory, scene: "Puzzle1" },
          sleep: true,
        });
      },
      this
    );
  }
  exitRoom() {
    if (this.collected) {
      this.music.stop();
      // return this.scene.start("StartScene");
      unlocked = false;
      lock1Collected = false;
      lock2Collected = false;
      lock3Collected = false;
      dialog = false;
      reenter = false;
      this.scene.start("StartScene", { x: 825, y: 320, completed1: true });
    }
  }

  update() {
    this.man.update(this);
    this.key.update(this.key, "room1Key");
    light.x = this.man.x + 35;
    light.y = this.man.y + 35;
    if (lock1Collected && lock2Collected && lock3Collected) {
      unlocked = true;
    }
    if (unlocked) {
      this.lockedCage.disableBody(true, true);
    }
  }
}
function collectlock1(man, lock1) {
  lock1.setVisible(false);
  lock1Collected = true;
}
function collectlock2(man, lock2) {
  lock2.setVisible(false);
  lock2Collected = true;
}
function collectlock3(man, lock3) {
  lock3.setVisible(false);
  lock3Collected = true;
}
function collectItem(man, key) {
  dialog = true;
  TextBoxWithIcon(this, "NPC2", true, false).start(Thanks, 50);
  man.pickupItem(key.texture.key);
  key.disableBody(true, true);
  this.collected = true;
}

function reset() {
  strikes += 1;
  console.log("strikes", strikes);
  dialog = true;
  unlocked = false;
  lock1Collected = false;
  lock2Collected = false;
  lock3Collected = false;
  this.scene.start("Puzzle1", { x: this.man.x, y: this.man.y });
  if (strikes > 3) {
    this.scene.start("GameOver");
  }
}

function makePuzzle(key) {
  //puzzle
  //row1
  const staticRow1S1 = key.physics.add
    .staticSprite(100, 414, "table")
    .setPipeline("Light2D");
  const staticRow1S2 = key.physics.add
    .staticSprite(100, 606, "table")
    .setPipeline("Light2D");
  //row 2
  const movableRow2B3 = key.physics.add.sprite(164, 478, "drawer");
  const staticRow2 = key.physics.add
    .staticSprite(165, 606, "table")
    .setPipeline("Light2D");
  key.physics.add.existing(movableRow2B3);
  key.physics.add.collider(movableRow2B3, [
    staticRow1S1,
    staticRow1S2,
    staticRow2,
  ]);
  key.physics.add.collider(movableRow2B3, key.collidingLayer);
  key.physics.add.collider(movableRow2B3, key.man);
  // row 3
  const movableRow3B2 = key.physics.add.sprite(228, 414, "drawer");
  const staticRow3S1 = key.physics.add
    .staticSprite(228, 542, "table")
    .setPipeline("Light2D");
  const staticRow3S2 = key.physics.add
    .staticSprite(228, 606, "table")
    .setPipeline("Light2D");
  key.physics.add.existing(movableRow3B2);
  key.physics.add.collider(movableRow3B2, [
    staticRow1S1,
    staticRow1S2,
    staticRow3S2,
    staticRow3S1,
    movableRow2B3,
  ]);
  key.physics.add.collider(movableRow3B2, key.collidingLayer);
  key.physics.add.collider(movableRow3B2, key.man);
  key.physics.add.collider(staticRow3S1, movableRow2B3);
  key.physics.add.collider(staticRow3S2, movableRow2B3);
  // row 4
  const staticRow4 = key.physics.add
    .staticSprite(292, 340, "table")
    .setPipeline("Light2D");
  const movableRow4 = key.physics.add.sprite(292, 606, "drawer");
  key.physics.add.existing(movableRow4);
  key.physics.add.collider(movableRow4, key.man);
  key.physics.add.collider(movableRow4, key.collidingLayer);
  key.physics.add.collider(staticRow4, [movableRow4, movableRow3B2]);
  key.physics.add.collider(movableRow4, [staticRow3S1, staticRow3S2]);

  //row 5
  const staticRow5B5 = key.physics.add
    .staticSprite(358, 340, "table")
    .setPipeline("Light2D");
  const staticRow5B3 = key.physics.add
    .staticSprite(358, 478, "table")
    .setPipeline("Light2D");
  const staticRow5B2 = key.physics.add
    .staticSprite(358, 542, "table")
    .setPipeline("Light2D");
  //row6
  const staticRow6 = key.physics.add
    .staticSprite(420, 606, "table")
    .setPipeline("Light2D");
  key.physics.add.collider(staticRow6, key.man);
  //row 7
  const movableRow7B2 = key.physics.add.sprite(484, 478, "drawer");
  const staticRow7B2 = key.physics.add
    .staticSprite(484, 606, "table")
    .setPipeline("Light2D");
  key.physics.add.existing(movableRow7B2);
  key.physics.add.collider(movableRow7B2, key.man);
  key.physics.add.collider(staticRow7B2, key.man);
  key.physics.add.collider(movableRow7B2, key.collidingLayer);
  key.physics.add.collider(movableRow7B2, movableRow4);
  key.physics.add.collider(staticRow7B2, [movableRow7B2, movableRow4]);
  //row 8
  const staticRow8B1 = key.physics.add
    .staticSprite(548, 414, "table")
    .setPipeline("Light2D");
  const staticRow8 = key.physics.add
    .staticSprite(548, 606, "table")
    .setPipeline("Light2D");
  key.physics.add.collider([movableRow4, movableRow7B2], staticRow8);
  key.physics.add.collider(staticRow8, [movableRow4, movableRow7B2]);
  key.physics.add.collider(staticRow8B1, [movableRow4, movableRow7B2]);
  key.physics.add.collider(staticRow8B1, key.man);
  key.physics.add.collider(staticRow8, key.man);
  //row 9
  const staticRow9B1 = key.physics.add
    .staticSprite(612, 340, "table")
    .setPipeline("Light2D");
  const staticRow9 = key.physics.add
    .staticSprite(612, 542, "table")
    .setPipeline("Light2D");
  // key.physics.add.collider([movableRow4, movableRow7B2], staticRow8);
  key.physics.add.collider(staticRow9, [movableRow4, movableRow7B2]);
  key.physics.add.collider(staticRow9, key.man);
  key.physics.add.collider(staticRow9, key.man);
  //row 10
  const staticRow10B1 = key.physics.add
    .staticSprite(676, 414, "table")
    .setPipeline("Light2D");
  const staticRow10B2 = key.physics.add
    .staticSprite(676, 542, "table")
    .setPipeline("Light2D");
  // key.physics.add.collider([staticRow10B1, staticRow10B2], key.man);
  //row 11
  const staticRow11 = key.physics.add
    .staticSprite(740, 414, "table")
    .setPipeline("Light2D");
  const staticRow11S1 = key.physics.add
    .staticSprite(740, 606, "table")
    .setPipeline("Light2D");
  key.physics.add.collider(staticRow11, key.man);
  key.physics.add.collider(staticRow11S1, key.man);
  //row 12
  const staticRow12B1 = key.physics.add
    .staticSprite(804, 542, "table")
    .setPipeline("Light2D");
  const staticRow12B2 = key.physics.add
    .staticSprite(804, 606, "table")
    .setPipeline("Light2D");

  // colliders
  key.physics.add.collider(
    [
      staticRow3S2,
      staticRow9B1,
      staticRow1S1,
      staticRow1S2,
      staticRow2,
      staticRow3S1,
      staticRow4,
      staticRow5B2,
      staticRow5B3,
      staticRow5B5,
      staticRow6,
      staticRow8B1,
      staticRow7B2,
      staticRow8,
      staticRow9,
      staticRow10B1,
      staticRow10B2,
      staticRow11,
      staticRow11S1,
      staticRow12B1,
      staticRow12B2,
      movableRow2B3,
      movableRow3B2,
      movableRow4,
      movableRow7B2,
    ],
    key.man
  );
  key.physics.add.collider(
    [movableRow2B3, movableRow3B2, movableRow4, movableRow7B2],
    [
      key.man,
      staticRow9B1,
      movableRow2B3,
      movableRow3B2,
      movableRow4,
      movableRow7B2,
      staticRow1S1,
      staticRow1S2,
      staticRow2,
      staticRow3S1,
      staticRow4,
      staticRow5B2,
      staticRow5B3,
      staticRow5B5,
      staticRow6,
      staticRow7B2,
      staticRow8B1,
      staticRow8,
      staticRow9,
      staticRow10B1,
      staticRow10B2,
      staticRow11,
      staticRow11S1,
      staticRow12B1,
      staticRow12B2,
      key.collidingLayer,
    ]
  );
}
