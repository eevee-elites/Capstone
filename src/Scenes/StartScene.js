import 'phaser';
import Player from '../Models/Player';
import NPC from '../Models/NPC';
import Animate from '../Models/Animate';
import NPCAnimate from '../Models/NPCAnimate';
// import { TextBox } from 'phaser3-rex-plugins/templates/ui/ui-components.js';

var content =
	'Welcome to the beta test of Haunted Hopper! Your goal is to retrieve the key from the other room to set your friend free! Our developers hope you enjoy the game!';
const COLOR_PRIMARY = 0x4e342e;
const COLOR_LIGHT = 0x7b5e57;
const COLOR_DARK = 0x260e04;
let textOpen = false;
let last = false;

export default class StartScene extends Phaser.Scene {
  constructor() {
    super("StartScene");
    let man, npc;
    var anims;
  }

  preload() {
    this.load.spritesheet("man", "assets/man.png", {
      frameWidth: 64,
      frameHeight: 64,
    });

    this.load.spritesheet("NPC", "assets/NPC.png", {
      frameWidth: 80,
      frameHeight: 130,
    });

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
    this.load.image('nextPage', 'assets/next.png');
    this.load.image('icon', 'assets/iconnpc.png');

  }

  create() {
    let hitBox = this.add.rectangle(100, 400, 100, 100, 0x000000);
    this.man = this.physics.add
      .existing(new Player(this, 400, 300, "man"))
      .setOrigin(0.5, 0.5);

    this.npc = this.physics.add.existing(
      new NPC(this, 100, 400, "NPC"),
      true
    );

    this.npc.body.setSize(30, 90, true);

    this.physics.add.existing(hitBox, true);
    this.physics.add.collider(this.npc, this.man);
    this.physics.add.overlap(this.man, hitBox, this.sayHello, null, this);

    Animate(this, "man", 4, 7, 8, 11, 12, 15, 0, 3, 0);
    // NPCAnimate(this, "NPC", 2, 3, 6, -1);

    this.man.setCollideWorldBounds(true);
  }

  update() {
    this.man.update(this);
    // this.npc.update(this.npc, "NPC");
  }

  sayHello(man, pika) {
    let enter = this.input.keyboard.addKey("ENTER");
    if (enter.isDown && textOpen === false && last === false ) {

      textOpen = true;
      createTextBox(this, 100, 400, {
        wrapWidth: 500,
        fixedWidth: 500,
        fixedHeight: 65,
      }).start(content, 50);
    }
  }
}
const GetValue = Phaser.Utils.Objects.GetValue;
var createTextBox = function (scene, x, y, config) {
	var wrapWidth = GetValue(config, 'wrapWidth', 0);
	var fixedWidth = GetValue(config, 'fixedWidth', 0);
	var fixedHeight = GetValue(config, 'fixedHeight', 0);

	var textBox = scene.rexUI.add
		.textBox({
			x: x,
			y: y,

			background: scene.rexUI.add
				.roundRectangle(0, 0, 2, 2, 20, COLOR_PRIMARY)
				.setStrokeStyle(2, COLOR_LIGHT)
				.setVisible(true),

			icon: scene.add.image(0, 0, 'icon'),

			// text: getBuiltInText(scene, wrapWidth, fixedWidth, fixedHeight),
			text: getBBcodeText(scene, wrapWidth, fixedWidth, fixedHeight),

			action: scene.add
				.image(0, 0, 'nextPage')
				.setTint(COLOR_LIGHT)
				.setVisible(false),
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
		'keydown-ENTER',
		function (event) {
			var icon = this.getElement('action').setVisible(false);
			this.resetChildVisibleState(icon);
			if (this.isTyping) {
				this.stop(true);
			} else {
				this.typeNextPage();
			}
		},
		textBox
	);

	textBox.setInteractive().on(
		'pageend',
		function () {
			var icon = this.getElement('action').setVisible(true);
			this.resetChildVisibleState(icon);
			if (this.isLastPage) {
				scene.input.keyboard.on('keyup-ENTER', () => {
					textBox.setVisible(false);
					last = false;
				});
				textOpen = !textOpen;

				last = true;
			}
		},
		textBox
	);
	// setTimeout(() => {last = false;  textOpen = !textOpen;}, 1000)

	return textBox;
};

var getBuiltInText = function (scene, wrapWidth, fixedWidth, fixedHeight) {
	return scene.add
		.text(0, 0, '', {
			fontSize: '20px',
			wordWrap: {
				width: wrapWidth,
			},
			maxLines: 3,
		})
		.setFixedSize(fixedWidth, fixedHeight);
};

var getBBcodeText = function (scene, wrapWidth, fixedWidth, fixedHeight) {
	return scene.rexUI.add.BBCodeText(0, 0, '', {
		fixedWidth: fixedWidth,
		fixedHeight: fixedHeight,

		fontSize: '20px',
		wrap: {
			mode: 'word',
			width: wrapWidth,
		},
		maxLines: 3,
	});
};
