import "phaser";
import Player from "../Models/Player";
import NPC from "../Models/NPC";
import Animate from "../Models/Animate";
import { TextBoxWithIcon } from "../Utilities/TextBox";
let light; 
var content =
  "Welcome to Haunted Hopper! Behind each door you will find the opportunity to save one of your friends but dont be fooled, each mistake you make will cost them their life";
let textOpen = false;
let last = false;

export default class StartScene extends Phaser.Scene {
  constructor() {
    super("StartScene");
    let man, npc;
    var anims;
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
  }

  create(data) {
    let hitBox = this.add.rectangle(100, 400, 40, 40, 0x000000);
    const puzzle1Room = this.add.rectangle(835, 300, 120, 40, 0x000000);
    const puzzle2Room = this.add.rectangle(1220, 300, 120, 40, 0x000000);
    const EmptyRoom = this.add.rectangle(450, 300, 120, 40, 0x000000);

    this.physics.add.existing(puzzle1Room, true);
    this.physics.add.existing(puzzle2Room, true);
    this.physics.add.existing(EmptyRoom, true);

    //map
    const map = this.make.tilemap({ key: "map" });

    const tileset = map.addTilesetImage("Hallway", "tiles");

    const belowLayer = map.createLayer("Below", tileset, 0, 0).setPipeline("Light2D");;
    const collidingLayer = map.createLayer("Colliding", tileset, 0, 0).setPipeline("Light2D");;

    collidingLayer.setCollisionByProperty({ collides: true });
    //map

    this.add.text(425,170, 'Room 1', {color: 'black'})
    this.add.text(805,170, 'Room 2', {color: 'black'})
    this.add.text(1185,170, 'Room 3', {color: 'black'})



    if (data.x){
    console.log('data', data)
			this.man = this.physics.add
				.existing(new Player(this, data.x, data.y, "man"))
				.setOrigin(0, 0);}
		else {
			this.man = this.physics.add
				.existing(new Player(this, 200, 400, "man"))
				.setOrigin(0, 0);
		}
		this.man.body.setSize(32, 32, true);

    this.npc = this.physics.add.existing(new NPC(this, 100, 400, "NPC"), true);

    this.npc.body.setSize(30, 90, true);

    this.physics.add.existing(hitBox, true);
    this.physics.add.collider(this.npc, this.man);
    this.physics.add.overlap(this.man, hitBox, this.sayHello, null, this);
    this.physics.add.collider(this.man, collidingLayer);
    this.physics.add.overlap(this.man, EmptyRoom, emptyEnter, null, this);

    Animate(this, "man", 4, 7, 8, 11, 12, 15, 0, 3, 0);
    //camera
    this.cameras.main.setBounds(48, 0, 3000, 700);
    this.cameras.main.startFollow(this.man, true);

    //lights
		this.lights.enable();
		this.lights.setAmbientColor(0x7b5e57);
		light = this.lights.addLight(180, 80, 120);

    this.physics.add.collider(this.man, collidingLayer);
    this.physics.add.overlap(
      this.man,
      puzzle1Room,
      enterPuzzleRoom1,
      null,
      this
    );

    this.physics.add.overlap(
      this.man,
      puzzle2Room,
      enterPuzzleRoom2,
      null,
      this
    );
    this.input.keyboard.on(
      "keydown-I",
      function () {
        this.scene.transition({
          target: "Inventory",
          duration: 10,
          data: { inventory: this.man.inventory, scene: "StartScene" },
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
          data: { inventory: this.man.inventory, scene: "StartScene" },
          sleep: true,
        });
      },
      this
    );
  }

  update() {
    this.man.update(this);
    light.x = this.man.x + 35;
		light.y = this.man.y + 35;
  }

  sayHello(man, pika) {
    let enter = this.input.keyboard.addKey("ENTER");
    if (enter.isDown && textOpen === false && last === false) {
      textOpen = true;
      TextBoxWithIcon(this, "icon", textOpen, last).start(content, 50);
    }
  }
}
function enterPuzzleRoom1() {
  this.scene.start("Puzzle1");
}
function enterPuzzleRoom2() {
  this.scene.start("Puzzle2");
}
function emptyEnter() {
  this.scene.start("EmptyRoom1");
}
