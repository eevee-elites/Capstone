import "phaser";
import Animate from "../Models/Animate";
import Player from "../Models/Player";
import {TextBoxWithIcon} from "../Utilities/TextBox";

let textOpen = false;
let last = false;
let go = false;

const Finally =
	"I can't believe you guys finally came with me to MineCon! I'm so excited all of us are here!";
const Reply1 =
	"You know we always wanted to come with you, Sophie.";
const Reply2 =
	"Yeah! We were super jealous when you posted about it on Instagram.";
const Reply3 =
	"Well, I'm glad you made it this year. I hear it's going to be different now that there's new management.";
const Reply4 =
	"Let's go look around after lunch. The delivery guy just pulled up with our order. Who's gonna get it?";
const Reply5 = "Rock paper scissors?";
const Reply6 = "Sure. Rock...paper...scissors...say shoot!";
const Reply7 = "Ugh, I always lose. Alright, I'll go get it.";

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
		TextBoxWithIcon(this, "man", textOpen, last).start(Reply3, 50);
		this.input.keyboard.once("keydown-ENTER", this.reply4, this);
	}
	reply4() {
		TextBoxWithIcon(this, "NPC2", textOpen, last).start(Reply4, 50);
		this.input.keyboard.once("keydown-ENTER", this.reply5, this);
	}
	reply5() {
		TextBoxWithIcon(this, "NPC3", textOpen, last).start(Reply5, 50);
		this.input.keyboard.once("keydown-ENTER", this.reply6, this);
	}
	reply6() {
		TextBoxWithIcon(this, "NPC2", textOpen, last).start(Reply6, 50);
		this.input.keyboard.once("keydown-ENTER", this.reply7, this);
	}
	reply7() {
		TextBoxWithIcon(this, "man", textOpen, last).start(Reply7, 50);
		go = true;
	}
}
