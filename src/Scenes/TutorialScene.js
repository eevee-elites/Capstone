import "phaser";
import Player from "../Models/Player";
import NPC from "../Models/NPC";
import Animate from "../Models/Animate";
import NPCAnimate from "../Models/NPCAnimate";
import {TextBoxWithIcon} from "../Utilities/TextBox";

const Greet =
	'Hey! Come over here! Use your arrow keys or "W" "A" "S" "D" to move and press the "enter" key to interact with me';
const TalkandPushingInstructions =
	"This is how you can talk to me. You can also keep pressing to finish and close out our conversations...                 Did you make sure to leave the door open?                                                                             …                                                                                                                       You didn't?! Oh no! Did you get trapped in here too? Go find the key! I'm not strong enough, but I'm sure you are!   You have to push those nightstands to get the key!";
const InventoryInstructions = 'Press " i " to see your inventory';
const Leave =
	"Now that you have the key, you can leave. Go back to your friends!";

let textOpen = false;
let last = false;
let madeBoxesAppear = false;
let light;
let collect = false;

export default class TutorialScene extends Phaser.Scene {
	constructor() {
		super("Tutorial");
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

	create() {
		let npcHitBox = this.add.rectangle(100, 400, 70, 100, 0x000000);
		let exitHitBox = this.add.rectangle(450, 600, 100, 20, 0x000000);

		//map
		const map = this.make.tilemap({key: "tutorialRoom"});

		const tileset = map.addTilesetImage("PuzzleRoom", "tiles");

		const belowLayer = map
			.createLayer("Below", tileset, 0, 0)
			.setPipeline("Light2D");
		this.collidingLayer = map
			.createLayer("Colliding", tileset, 0, 0)
			.setPipeline("Light2D");

		this.collidingLayer.setCollisionByProperty({collides: true});
		// man
		this.man = new Player(this, 400, 700, "man").setOrigin(0, 0);
		Animate(this, "man", 4, 7, 8, 11, 12, 15, 0, 3, 0);
		this.man.body.setSize(32, 32, true);
		//npc
		this.npc = this.physics.add.existing(new NPC(this, 100, 400, "NPC"), true);
		this.npc.body.setSize(30, 90, true);
		//key
		this.room1Key = this.physics.add.existing(
			new NPC(this, 770, 200, "room1Key"),
			true
		);
		NPCAnimate(this, "room1Key", 0, 9, 10, -1);
		this.room1Key.setVisible(false);
		//table
		this.movable = this.physics.add.staticSprite(678, 540, "drawer");
		//collisions
		this.physics.add.collider(this.movable, this.man);
		this.physics.add.existing(npcHitBox, true);
		this.physics.add.existing(exitHitBox, true);
		this.physics.add.collider(this.npc, this.man);
		this.physics.add.collider(this.man, this.collidingLayer);

		this.man.setCollideWorldBounds(true);
		this.physics.add.collider(this.man, this.collidingLayer);
		this.cameras.main.setBounds(48, 0, 500, 700);
		this.physics.add.overlap(
			this.man,
			this.room1Key,
			this.collectKey,
			null,
			this
		);
		this.physics.add.overlap(npcHitBox, this.man, this.sayHello, null, this);
		this.physics.add.overlap(exitHitBox, this.man, this.exitRoom, null, this);
		// starting dialogue
		textOpen = true;
		createTextBox(this).start(Greet, 50);

		//lights
		this.lights.enable();
		this.lights.setAmbientColor(0x7b5e57);
		light = this.lights.addLight(180, 80, 120);
		//inventory
		this.input.keyboard.on(
			"keydown-I",
			function () {
				this.scene.transition({
					target: "Inventory",
					duration: 10,
					data: {inventory: this.man.inventory, scene: "Tutorial"},
					sleep: true,
				});
			},
			this
		);

		this.events.on(
			Phaser.Scenes.Events.WAKE,
			function () {
				this.wake(this.input, this.scene);
				textOpen = true;
				createTextBox(this).start(Leave, 50);
			},
			this
		);
	}
	wake() {
		this.input.keyboard.on(
			"keydown-I",
			function () {
				this.scene.transition({
					target: "Inventory",
					duration: 10,
					data: {inventory: this.man.inventory, scene: "Tutorial"},
					sleep: true,
				});
			},
			this
		);
	}

	update() {
		this.man.update(this);
		this.room1Key.update(this.room1Key, "room1Key");
		light.x = this.man.x + 35;
		light.y = this.man.y + 35;
	}
	exitRoom() {
		if (collect) {
			return this.scene.start("Intro", {finishedTutorial: true});
		}
	}
	collectKey(man, item) {
		item.disableBody(true, true);
		man.pickupItem(item.texture.key);
		collect = true;
		textOpen = true;
		createTextBox(this).start(InventoryInstructions, 50);
	}

	sayHello() {
		let enter = this.input.keyboard.addKey("ENTER");
		if (enter.isDown && textOpen === false && last === false) {
			textOpen = true;
			createTextBox(this, true).start(TalkandPushingInstructions, 50);
		}
	}
}
var createTextBox = function (scene, letBoxesAppear = false) {
	var wrapWidth = 500;
	var fixedWidth = 500;
	var fixedHeight = 65;

	var textBox = scene.rexUI.add
		.textBox({
			x: 100,
			y: 400,

			background: scene.rexUI.add
				.roundRectangle(0, 0, 2, 2, 20, 0x4e342e)
				.setStrokeStyle(2, 0x7b5e57)
				.setVisible(true),

			icon: scene.add.image(0, 0, "icon"),
			text: getBBcodeText(scene, wrapWidth, fixedWidth, fixedHeight),

			action: scene.add.image(0, 0, "nextPage").setTint(0x7b5e57),

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
			if (this.isLastPage) {
				scene.input.keyboard.on("keyup-ENTER", () => {
					textBox.setVisible(false);
					last = false;
					if (letBoxesAppear) {
						if (!madeBoxesAppear) {
							madeBoxesAppear = true;
							//set key visible
							scene.room1Key.setVisible(true);
							//make last box movable
							const movable = scene.physics.add.sprite(678, 540, "drawer");
							//disable old box
							scene.movable.disableBody(true, true);
							//collisons
							scene.physics.add.collider(movable, scene.collidingLayer);
							scene.physics.add.collider(movable, scene.man);
						}
					}
				});
				textOpen = !textOpen;

				last = true;
			}
		},
		textBox
	);

	return textBox;
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
