import "phaser";
import Player from "../Models/Player";
import Animate from "../Models/Animate";
import {TextBoxWithIcon} from "../Utilities/TextBox";

let textOpen = false;
let last = false;
const content = "The exit is to your left";

export default class HallwayScene extends Phaser.Scene {
	constructor() {
		super("Hallway");
		let man, npc;
		var anims;
	}
	preload() {
		this.load.scenePlugin({
			key: "rexuiplugin",
			url: "https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js",
			sceneKey: "rexUI",
		});
	}

	create() {
		//exit
		let exitBox = this.add.rectangle(100, 400, 40, 400, 0x000000);
		this.physics.add.existing(exitBox, true);
		//map
		const map = this.make.tilemap({key: "map"});

		const tileset = map.addTilesetImage("Hallway", "tiles");

		const belowLayer = map.createLayer("Below", tileset, 0, 0);
		const collidingLayer = map.createLayer("Colliding", tileset, 0, 0);
		collidingLayer.setCollisionByProperty({collides: true});

		//man
		this.man = this.physics.add.existing(new Player(this, 400, 350, "man"));
		Animate(this, "man", 4, 7, 8, 11, 12, 15, 0, 3, 0);
		this.physics.add.collider(this.man, collidingLayer);

		//camera
		this.cameras.main.setBounds(48, 10, 3000, 700);
		this.cameras.main.startFollow(this.man, true);

		//NPC
		const HotelEmployee = this.physics.add.staticSprite(
			520,
			350,
			"HotelEmployee"
		);
		//arrow
		const arrow = this.physics.add.staticSprite(200, 150, "arrow");
		this.physics.add.collider(this.man, HotelEmployee);
		textOpen = true;
		TextBoxWithIcon(this, "HotelEmployee", textOpen, last).start(content, 50);
		this.physics.add.overlap(exitBox, this.man, this.exitOutside, null, this);
	}
	update() {
		this.man.update(this);
	}
	exitOutside() {
		this.scene.start("Outside");
	}
}
