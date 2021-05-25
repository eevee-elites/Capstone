import "phaser";
import { Game } from "phaser";
import Player from "../Models/Player";
import Animate from "../Models/Animate";

const COLOR_PRIMARY = 0x4e342e;
const COLOR_LIGHT = 0x7b5e57;
let wrongCounter = 0;
let wrongClicked = false;

export default class PenaltyTest extends Phaser.Scene {
  constructor() {
    super("PenaltyTest");
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

    this.load.tilemapTiledJSON("PenaltyRoom", "../assets/PuzzleRoom.json");
  }

  create() {
    const map = this.make.tilemap({ key: "PenaltyRoom" });

    const tileset = map.addTilesetImage("PuzzleRoom", "tiles");

    const belowLayer = map
      .createLayer("Below", tileset, 0, 0)
    const collidingLayer = map
      .createLayer("Colliding", tileset, 0, 0)

    collidingLayer.setCollisionByProperty({ collides: true });

    this.man = this.physics.add
      .existing(new Player(this, 420, 700, "man"))
      .setOrigin(0, 0);

    this.physics.add.collider(this.man, collidingLayer);

    Animate(this, "man", 4, 7, 8, 11, 12, 15, 0, 3, 0);

    this.cameras.main.setBounds(48, 0, 800, 900);
    this.cameras.main.startFollow(this.man);
  }

  update() {
    if (wrongClicked) {
        this.penalty();
      }
  }

  penalty() {
    wrongCounter++;
    wrongClicked = false;
    
    if (wrongCounter === 3) {
      this.scene.switch("Title");
    }
  }
}