import "phaser";
import Player from "../Models/Player";
import TextBoxWithoutIcon, {TextBoxWithIcon} from "../Utilities/TextBox";

let textOpen = false;
let last = false;
let light;
let openingTextBox;
const Attention =
	"Attention everyone this building is on lockdown! I repeat, THIS BUILDING IS ON LOCK DOWN!";
const Monster =
	"Sophie! I have your friends. Want to save them? Come find them!";
export default class LobbyScene extends Phaser.Scene {
	constructor() {
		super("Lobby");
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
		//map
		const map = this.make.tilemap({key: "Lobby"});

		const tileset = map.addTilesetImage("PuzzleRoom", "tiles");

		const belowLayer = map
			.createLayer("Tile Layer 1", tileset, 0, 0)
			.setPipeline("Light2D");
		const belowLayer2 = map
			.createLayer("Tile Layer 2", tileset, 0, 0)
			.setPipeline("Light2D");
		//man
		this.man = this.physics.add.existing(new Player(this, 700, 550, "man"));
		//NPC
		this.HotelEmployee = this.physics.add.staticSprite(
			520,
			350,
			"HotelEmployee"
		);
		//camera
		this.cameras.main.setBounds(50, -100, 900, 900);
		this.cameras.main.startFollow(this.man);
		//lights
		this.lights.enable();
		this.lights.setAmbientColor(0x434242);
		this.lights.addLight(this.man.x + 35, this.man.y + 35, 120);

		this.attentionDialogue(this.cameras.main);
	}
	update() {}
	attentionDialogue(camera) {
		textOpen = true;
		openingTextBox = TextBoxWithIcon(
			this,
			"bellhopscared",
			textOpen,
			last
		).start(Attention, 50);
		//shake
		camera.shake(1000);
		this.input.keyboard.once("keydown-ENTER", this.monsterDialogue, this);
	}
	monsterDialogue() {
		openingTextBox.setVisible(false);
		TextBoxWithoutIcon(this, textOpen, last).start(Monster, 50);
		this.lights.setAmbientColor(0x970404);
		this.HotelEmployee.disableBody(true, true);
		this.input.keyboard.once("keydown-ENTER", this.startScene, this);
	}
	startScene() {
		this.lights.setAmbientColor(0xffffff);
		this.scene.start("StartScene", {
			completed: { puzzle1: false, puzzle2: false },
		  });
	}
}