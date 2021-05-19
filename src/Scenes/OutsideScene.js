import "phaser";
import Player from "../Models/Player";
import TextBoxWithoutIcon, {TextBoxWithIcon} from "../Utilities/TextBox";

let textOpen = false;
let last = false;
const food = "Here's your food!";

export default class OutsideScene extends Phaser.Scene {
	constructor() {
		super("Outside");
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
		const map = this.make.tilemap({key: "Outside"});

		const tileset = map.addTilesetImage("PuzzleRoom", "tiles");

		const belowLayer = map.createLayer("Tile Layer 1", tileset, 0, 0);
		//man
		this.man = this.physics.add.existing(new Player(this, 400, 350, "man"));
		//car
		const car = this.physics.add.staticSprite(300, 570, "car");
		//camera
		this.cameras.main.setBounds(50, -50, 900, 900);
		this.foodDialogue(this);
		this.input.keyboard.on(
			"keydown-SPACE",
			function () {
				this.scene.start("Lobby");
			},
			this
		);
	}

	update() {}
	foodDialogue() {
		textOpen = true;
		TextBoxWithoutIcon(this, textOpen, last).start(food, 50);
	}
}
