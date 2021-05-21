import "phaser";
import Animate from "../Models/Animate";
import Player from "../Models/Player";
import {TextBoxWithIcon} from "../Utilities/TextBox";
let light;

export default class EmptyRoom1 extends Phaser.Scene {
	constructor() {
		super("EmptyRoom1");
	}

	preload() {
		this.load.scenePlugin({
			key: "rexuiplugin",
			url: "https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js",
			sceneKey: "rexUI",
		});
	}

	create(data) {
        let exitBox = this.add.rectangle(450, 860, 200, 100, 0x000000);
		this.physics.add.existing(exitBox, true);
		//map
		const map = this.make.tilemap({key: "HotelRoom"});
		const tileset = map.addTilesetImage("PuzzleRoom", "tiles");

		const belowLayer = map.createLayer("Below", tileset, 0, 0).setPipeline('Light2D');
		const collidingLayer = map.createLayer("Colliding", tileset, 0, 0).setPipeline('Light2D');
		collidingLayer.setCollisionByProperty({collides: true});
		//player
		this.man = this.physics.add.existing(new Player(this, 450, 650, "man")).setOrigin(0,0);
		this.man.body.setSize(32, 32, true);

		this.physics.add.collider(this.man, collidingLayer);
		this.physics.add.overlap(this.man, exitBox, this.exitRoom, null, this);

		Animate(this, "man", 4, 7, 8, 11, 12, 15, 0, 3, 0);

		this.cameras.main.setBounds(48, 0, 1100, 900);
		this.cameras.main.startFollow(this.man);
		// this.openingdialogue1();
          //lights
		this.lights.enable();
		this.lights.setAmbientColor(0x7b5e57);
		light = this.lights.addLight(180, 80, 120);
	}

	update() {
        this.man.update(this);
        light.x = this.man.x + 35;
		light.y = this.man.y + 35;
	}
	exitRoom() {
		this.scene.start("StartScene", {x: 450, y: 360})
	}
}