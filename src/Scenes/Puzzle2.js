import 'phaser';
import {Game} from 'phaser';
import Player from '../Models/Player';
import Animate from '../Models/Animate';

const openingLine = "Player name, help!"
const note = "Here's how to solve the puzzle: you just hahaha yknow ;)"
const COLOR_PRIMARY = 0x4e342e;
const COLOR_LIGHT = 0x7b5e57;
const COLOR_DARK = 0x260e04;
let textOpen = false;
let last = false;
let wrongCounter = 0;
var yesButton;
var noButton;
let clicked = false;

export default class Puzzle2 extends Phaser.Scene {
    constructor() {
        super('Puzzle2')
        // let yesButton;
        // let noButton;
    }

    preload() {
        this.load.scenePlugin({
			key: 'rexuiplugin',
			url: 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js',
			sceneKey: 'rexUI',
		});

		this.load.plugin(
			'rextexttypingplugin',
			'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rextexttypingplugin.min.js',
			true
		);
    }

    create() {
        //tilemap
        const map = this.make.tilemap({ key: "Puzzle2" });

        const tileset = map.addTilesetImage('PuzzleRoom', 'tiles');

        const belowLayer = map.createLayer("Below", tileset, 0, 0);
        const collidingLayer = map.createLayer("Colliding", tileset, 0, 0);

        collidingLayer.setCollisionByProperty({collides: true});

        //items in room
        let note = this.add.rectangle(100, 400, 40, 40, 0x000000);
        let wrongDoll = this.add.rectangle(300, 200, 40, 40, 0x000000);
        let rightDoll = this.add.rectangle(400, 200, 40, 40, 0x000000);

        //player
		this.man = this.physics.add
        .existing(new Player(this, 400, 300, 'man'))
        .setOrigin(0.5, 0.5);

        this.physics.add.collider(this.man, collidingLayer);

        Animate(this, 'man', 4, 7, 8, 11, 12, 15, 0, 3, 0);

        //camera
        this.cameras.main.setBounds(48, 0, 800, 600);
		this.cameras.main.startFollow(this.man);

        //opening dialogue
        this.time.delayedCall(8000, this.openingDialogue(), this);  // delay in ms

        //player and item interactions
        this.physics.add.existing(note, true)
        this.physics.add.overlap (this.man, note, this.readNote, null, this)

        this.physics.add.existing(wrongDoll, true)
        this.physics.add.overlap (this.man, wrongDoll, this.chooseWrong, null, this)

        //yes or no choices
        yesButton = this.add.rectangle(400, 300, 50, 50, 0x000000)
        yesButton.visible = false;
        yesButton.setInteractive()
        noButton = this.add.rectangle(400, 370, 50, 50, 0x000000)
        noButton.visible = false;
        noButton.setInteractive()

    }

    update() {
		this.man.update(this);
        if (clicked) {
            this.penalty()
        }
	}

    openingDialogue() {
        textOpen = true;
			createTextBox(this, 100, 400, {
				wrapWidth: 500,
				fixedWidth: 500,
				fixedHeight: 65,
			}).start(openingLine, 50);
    }

    readNote() {
        let enter = this.input.keyboard.addKey('ENTER');
		if (enter.isDown && textOpen === false && last === false) {
			textOpen = true;
			createTextBox(this, 100, 400, {
				wrapWidth: 500,
				fixedWidth: 500,
				fixedHeight: 65,
			}).start(note, 50);
		}
    }

    chooseWrong() {
        let enter = this.input.keyboard.addKey('ENTER');
        if (enter.isDown) {
            yesButton.visible = true;
            noButton.visible = true;

            textOpen = true;
			const dialogue = createTextBox(this, 100, 400, {
				wrapWidth: 500,
				fixedWidth: 500,
				fixedHeight: 65,
			}).start('Choose this doll?', 50);

            yesButton.on('pointerdown', function() {
                clicked = true;
                dialogue.destroy();
            })

            noButton.on('pointerdown', function() {
                yesButton.visible = false;
                noButton.visible = false;
                dialogue.destroy();
            })
            // const dialog = this.rexUI.add.dialog({
            //     x: 400,
            //     y: 300,

            //     background: this.rexUI.add.roundRectangle(0, 0, 100, 100, 20, 0x156c0),
                
            //     content: this.add.text(0, 0, 'Choose this doll?', {
            //         fontSize: '24px'
            //     }),

            //     actions: [
            //         createLabel(this, 'Yes'),
            //         createLabel(this, 'No')
            //     ],

            //     space: {
            //         content: 25,
            //         action: 15,

            //         left: 20,
            //         right: 20,
            //         top: 20,
            //         bottom: 20,
            //     },

            //     align: {
            //         actions: 'center'
            //     },

            //     expand: {
            //         content: false
            //     }
            // })
            // .layout()
            // .popUp(1000);

            // this.print = this.add.text(0, 0, '');
            // dialog
            //     .on('button.click', function (button, groupName, index) {
            //         if (button.text === 'Yes') {
            //             this.penalty()
            //             dialog.destroy()
            //         } else {
            //             console.log("why")
            //             dialog.destroy()
            //         }
            //     }, this)
                
        }
    }
    
        chooseRight() {
    
        }

        penalty() {
            wrongCounter++;
            clicked = false;
            yesButton.visible = false;
            noButton.visible = false;

            if (wrongCounter === 1) {
                console.log("strike one")
            } else if (wrongCounter === 2) {
                console.log("strike two")
            } else if (wrongCounter === 3)  {
                console.log("strike three")
                this.scene.switch('Title')
            }
        }
}

// var createLabel = function (scene, text) {
//     return scene.rexUI.add.label({
//         background: scene.rexUI.add.roundRectangle(0, 0, 0, 0, 20, 0x5e92f3),

//         text: scene.add.text(0, 0, text, {
//             fontSize: '24px'
//         }),

//         space: {
//             left: 10,
//             right: 10,
//             top: 10,
//             bottom: 10
//         }
//     })
// }

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
            // icon: iconImage,

			// text: getBuiltInText(scene, wrapWidth, fixedWidth, fixedHeight),
			text: getBBcodeText(scene, wrapWidth, fixedWidth, fixedHeight),

			action: scene.add.image(0, 0, 'nextPage').setTint(COLOR_LIGHT),

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
			if (this.isLastPage && !this.isTyping) {
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
