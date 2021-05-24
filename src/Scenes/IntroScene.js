import "phaser";
import Animate from "../Models/Animate";
import Player from "../Models/Player";

let textOpen = false;
let last = false;
let go = false;
let continueText = false;
let icon, box, enter;
let content = [
	"I can't believe you guys finally came with me to MineCon! I'm so excited all of us are here!",
	"You know we always wanted to come with you, Sophie.",
	"Yeah! We were super jealous when you posted about it on Instagram.",
	"Well, I'm glad you made it this year. I hear it's going to be different now that there's new management.",
	"Let's go look around after lunch. The delivery guy just pulled up with our order. Who's gonna get it?",
	"Rock paper scissors?",
	"Sure. Rock...paper...scissors...say shoot!",
	"Ugh, I always lose. Alright, I'll go get it.",
];
const Finally =
	"I can't believe you guys finally came with me to MineCon! I'm so excited all of us are here!";
const Reply1 = "You know we always wanted to come with you, Sophie.";
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
		this.man.body.setSize(32, 32, true);

		this.physics.add.collider(this.man, collidingLayer);
		Animate(this, "man", 4, 7, 8, 11, 12, 15, 0, 3, 0);
		//npc
		const NPC2 = this.physics.add.staticSprite(520, 350, "NPC2");
		const NPC3 = this.physics.add.staticSprite(390, 350, "NPC3");
		//keyboard
		// enter = this.input.keyboard.addKey("ENTER");
		//collisions
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
		if (textOpen === false && last === false) {
			textOpen = true;
			this.TextBoxWithIcon(this, "man", this.reply1).start(Finally, 50);
			// this.input.keyboard.on("keydown-ENTER", this.reply1, this);
		}
	}
	reply1() {
		console.log("textopen", textOpen, "last", last);
		if (textOpen === false && last === false) {
			textOpen = true;
			this.TextBoxWithIcon(this, "NPC2", this.reply2).start(Reply1, 50);
			// this.input.keyboard.on("keydown-ENTER", this.reply2, this);
		}
	}
	reply2() {
		if (textOpen === false && last === false) {
			textOpen = true;
			this.TextBoxWithIcon(this, "NPC3", this.reply3).start(Reply2, 50);
		}
		// this.input.keyboard.on("keydown-ENTER", this.reply3, this);
	}
	reply3() {
		if (textOpen === false && last === false) {
			textOpen = true;
			this.TextBoxWithIcon(this, "man", this.reply4).start(Reply3, 50);
			// this.input.keyboard.on("keydown-ENTER", this.reply4, this);
		}
	}
	reply4() {
		if (textOpen === false && last === false) {
			textOpen = true;
			this.TextBoxWithIcon(this, "NPC2", this.reply5).start(Reply4, 50);
			// this.input.keyboard.on("keydown-ENTER", this.reply5, this);
		}
	}
	reply5() {
		if (textOpen === false && last === false) {
			textOpen = true;
			this.TextBoxWithIcon(this, "NPC3", this.reply6).start(Reply5, 50);
			// this.input.keyboard.on("keydown-ENTER", this.reply6, this);
		}
	}
	reply6() {
		if (textOpen === false && last === false) {
			textOpen = true;
			this.TextBoxWithIcon(this, "NPC2", this.reply7).start(Reply6, 50);
			// this.input.keyboard.on("keydown-ENTER", this.reply7, this);
		}
	}
	reply7() {
		if (textOpen === false && last === false) {
			textOpen = true;
			this.TextBoxWithIcon(this, "man", null).start(Reply7, 50);
		}
		go = true;
	}
	TextBoxWithIcon(scene, icon, func) {
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
				icon: scene.add.image(0, 0, icon),
				text: scene.getBuiltInText(scene, wrapWidth, fixedWidth, fixedHeight),
				// text: getBBcodeText(scene, wrapWidth, fixedWidth, fixedHeight),
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
		scene.input.keyboard.once(
			"keyup-ENTER",
			function (event) {
				if (this.isTyping) {
					this.stop(true);
				} else {
					this.typeNextPage();
				}
			},
			textBox
		);
		textBox.setInteractive().once(
			"pageend",
			function () {
				if (this.isLastPage) {
					scene.input.keyboard.once("keyup-ENTER", () => {
						textBox.setVisible(false);
						last = false;
						if (func !== null) return func.bind(scene)();
						// func();
					});
					textOpen = !textOpen;
					last = true;
				}
			},
			textBox
		);
		return textBox;
	}
	getBuiltInText(scene, wrapWidth, fixedWidth, fixedHeight) {
		return scene.add
			.text(0, 0, "", {
				fontSize: "20px",
				wordWrap: {
					width: wrapWidth,
				},
				maxLines: 3,
			})
			.setFixedSize(fixedWidth, fixedHeight);
	}
}
// function TextBoxWithIcon(scene, icon) {
// 	var wrapWidth = 500;
// 	var fixedWidth = 500;
// 	var fixedHeight = 65;
// 	var textBox = scene.rexUI.add
// 		.textBox({
// 			x: 100,
// 			y: 400,

// 			background: scene.rexUI.add
// 				.roundRectangle(0, 0, 2, 2, 20, 0x4e342e)
// 				.setStrokeStyle(2, 0x7b5e57)
// 				.setVisible(true),

// 			icon: scene.add.image(0, 0, icon),

// 			text: getBuiltInText(scene, wrapWidth, fixedWidth, fixedHeight),

// 			action: scene.add.image(0, 0, "nextPage").setTint(0x7b5e57),

// 			space: {
// 				left: 20,
// 				right: 20,
// 				top: 20,
// 				bottom: 20,
// 				icon: 10,
// 				text: 10,
// 			},
// 		})
// 		.setOrigin(0)
// 		.layout();

// 	textBox.setScrollFactor(0);

// 	scene.input.keyboard.on(
// 		"keydown-ENTER",
// 		function (event) {
// 			if (this.isTyping) {
// 				this.stop(true);
// 			} else {
// 				this.typeNextPage();
// 			}
// 		},
// 		textBox
// 	);

// 	textBox.setInteractive().on(
// 		"pageend",
// 		function () {
// 			if (this.isLastPage && !this.isTyping) {
// 				scene.input.keyboard.on("keyup-ENTER", () => {
// 					textBox.setVisible(false);
// 					last = false;
// 				});

// 				textOpen = !textOpen;

// 				last = true;
// 			}
// 		},
// 		textBox
// 	);

// 	return textBox;
// }

// var getBBcodeText = function (scene, wrapWidth, fixedWidth, fixedHeight) {
// 	return scene.rexUI.add.BBCodeText(0, 0, "", {
// 		fixedWidth: fixedWidth,
// 		fixedHeight: fixedHeight,

// 		fontSize: "20px",
// 		wrap: {
// 			mode: "word",
// 			width: wrapWidth,
// 		},
// 		maxLines: 3,
// 	});
// };

// var getBuiltInText = function (scene, wrapWidth, fixedWidth, fixedHeight) {
// 	return scene.add
// 		.text(0, 0, "", {
// 			fontSize: "20px",
// 			wordWrap: {
// 				width: wrapWidth,
// 			},
// 			maxLines: 3,
// 		})
// 		.setFixedSize(fixedWidth, fixedHeight);
// };
// function
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
