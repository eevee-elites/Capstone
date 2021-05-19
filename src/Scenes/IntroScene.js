import "phaser";
import Animate from "../Models/Animate";
import Player from "../Models/Player";
import {TextBoxWithIcon} from "../Utilities/TextBox";

let textOpen = false;
let last = false;
let go = false;

const Finally =
	"I can't believe you guys finally came with me! Im so excited all of us are here!";
const Reply1 =
	"Of course! You know we normally have summer camp, but after what happened in 2020? It shut down.";
const Reply2 =
	"Yeah, 2020 was a wild one. Im so glad we're pass that. I always wanted to go to MineCon with you Sophie!";
const Reply3 =
	"Yeah! We always saw you post on instagram and was super jealous";
const Reply4 =
	"Well I'm glad you both can make it! I heard this year is going to be different they have new management";
const Reply5 = "I'm stoked regardless!";
const Reply6 = "Yeah me too!";
const Reply7 = "Before we go down, did you order the food?";
const Reply8 = "Yeah, I ordered on UberEats";
const Reply9 = "Gooooooood, Im starving! How far are they?";
const Reply10 = "Oh they're about to be downstairs. Who's going to pick it up?";
const Reply11 = "Lets play rock paper scissors!";
const Reply12 = "Ok! Rock... Paper... Scissors... Says Shoot!";
const Reply13 = "Damn! I lost, I'll Go get it";
export default class IntroScene extends Phaser.Scene {
	constructor() {
		super("Intro");
	}

	preload() {
		this.load.scenePlugin({
			key: "rexuiplugin",
			url: "https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js",
			sceneKey: "rexUI",
		});
		// this.load.image('tiles', '../assets/Room spritesheet.png');
		this.load.tilemapTiledJSON("HotelRoom", "../assets/HotelRoom.json");
	}

	create() {
		let exitBox = this.add.rectangle(450, 850, 200, 100, 0x000000);
		this.physics.add.existing(exitBox, true);
		//map
		const map = this.make.tilemap({key: "HotelRoom"});
		const tileset = map.addTilesetImage("PuzzleRoom", "tiles");

		const belowLayer = map.createLayer("Below", tileset, 0, 0);
		const collidingLayer = map.createLayer("Colliding", tileset, 0, 0);
		collidingLayer.setCollisionByProperty({collides: true});
		//player
		this.man = this.physics.add.existing(new Player(this, 450, 350, "man"));
		this.physics.add.collider(this.man, collidingLayer);
		Animate(this, "man", 4, 7, 8, 11, 12, 15, 0, 3, 0);

		const NPC2 = this.physics.add.staticSprite(520, 350, "NPC2");
		const NPC3 = this.physics.add.staticSprite(390, 350, "NPC3");
		this.physics.add.collider(this.man, NPC2);
		this.physics.add.collider(this.man, NPC3);
		this.physics.add.overlap(this.man, exitBox, this.exitRoom, null, this);

		this.cameras.main.setBounds(48, 0, 1100, 900);
		this.cameras.main.startFollow(this.man);
		this.openingdialogue1();
	}

	update() {
		if (go) this.man.update(this);
	}
	exitRoom() {
		this.scene.start("Hallway");
	}
	openingdialogue1() {
		textOpen = true;
		TextBoxWithIcon(this, "man", textOpen, last).start(Finally, 50);
		this.input.keyboard.once("keydown-ENTER", this.reply1, this);
	}
	reply1() {
		TextBoxWithIcon(this, "NPC2", textOpen, last).start(Reply1, 50);
		this.input.keyboard.once("keydown-ENTER", this.reply2, this);
	}
	reply2() {
		TextBoxWithIcon(this, "NPC3", textOpen, last).start(Reply2, 50);
		this.input.keyboard.once("keydown-ENTER", this.reply3, this);
	}
	reply3() {
		TextBoxWithIcon(this, "NPC2", textOpen, last).start(Reply3, 50);
		this.input.keyboard.once("keydown-ENTER", this.reply4, this);
	}
	reply4() {
		TextBoxWithIcon(this, "man", textOpen, last).start(Reply4, 50);
		this.input.keyboard.once("keydown-ENTER", this.reply5, this);
	}
	reply5() {
		TextBoxWithIcon(this, "NPC2", textOpen, last).start(Reply5, 50);
		this.input.keyboard.once("keydown-ENTER", this.reply6, this);
	}
	reply6() {
		TextBoxWithIcon(this, "NPC3", textOpen, last).start(Reply6, 50);
		this.input.keyboard.once("keydown-ENTER", this.reply7, this);
	}
	reply7() {
		TextBoxWithIcon(this, "NPC2", textOpen, last).start(Reply7, 50);
		this.input.keyboard.once("keydown-ENTER", this.reply8, this);
	}
	reply8() {
		TextBoxWithIcon(this, "NPC3", textOpen, last).start(Reply8, 50);
		this.input.keyboard.once("keydown-ENTER", this.reply9, this);
	}
	reply9() {
		TextBoxWithIcon(this, "man", textOpen, last).start(Reply9, 50);
		this.input.keyboard.once("keydown-ENTER", this.reply10, this);
	}
	reply10() {
		TextBoxWithIcon(this, "NPC2", textOpen, last).start(Reply10, 50);
		this.input.keyboard.once("keydown-ENTER", this.reply11, this);
	}
	reply11() {
		TextBoxWithIcon(this, "NPC3", textOpen, last).start(Reply11, 50);
		this.input.keyboard.once("keydown-ENTER", this.reply12, this);
	}
	reply12() {
		TextBoxWithIcon(this, "NPC2", textOpen, last).start(Reply12, 50);
		this.input.keyboard.once("keydown-ENTER", this.reply13, this);
	}
	reply13() {
		TextBoxWithIcon(this, "man", textOpen, last).start(Reply13, 50);
		go = true;
	}
}
