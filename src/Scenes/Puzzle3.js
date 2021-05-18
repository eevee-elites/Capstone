import 'phaser';
import {Game} from 'phaser';
import Player from '../Models/Player';
import Animate from '../Models/Animate';
var content = "HA HA HA! So you think you're close to saving everyone, don't you? Let's test just how good your memory is. I'll only show the patterns once! For each strike you get one of these lovely guests will die !!" ;
const COLOR_PRIMARY = 0x000000;
const COLOR_LIGHT = 0x7b5e57;
const COLOR_DARK = 0x260e04;
let textOpen = false;
let last = false;
let score = 0;
let killed = 0
var light;

export default class Puzzle3 extends Phaser.Scene {
	constructor() {
		super('Puzzle3');
       
    }

	preload() {
		this.load.spritesheet('man', 'assets/man.png', {
			frameWidth: 64,
			frameHeight: 64,
		});
		this.load.audio('bg', 'assets/bg.wav');
		this.load.image('nextPage', 'assets/next.png');
		this.load.image('star', 'assets/star.png');
		this.load.image('table', 'assets/table.png');
		this.load.image('x', 'assets/x.png');
		this.load.image('bluetile', 'assets/bluetile.png');
		this.load.image('greentile', 'assets/greentile.png');
		this.load.image('redtile', 'assets/redtile.png');


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
		//exit
        // Phaser.Display.Color(2)
        
		let exitBox = this.add.rectangle(20, 300, 50, 50, 0xffffff);

		//map
		const map = this.make.tilemap({key: 'Puzzle3'});

		const tileset = map.addTilesetImage('PuzzleRoom', 'tiles');
    //.setPipeline('Light2D');
        
		const belowLayer = map.createLayer('Below', tileset, 0, 0).setPipeline('Light2D');
		const collidingLayer = map.createLayer('Colliding', tileset, 0, 0).setPipeline('Light2D');
        // const xspot = this.add.image(450, 700, 'x')
		
        //colliding tile layers
        collidingLayer.setCollisionByProperty({collides: true});
       

        
        // this.add.image(450, 660, 'redtile')
        // this.add.image(450, 700, 'redtile')
        
		//player
		this.man = this.physics.add
			.existing(new Player(this, 415, 710, 'man'))
			.setOrigin(0, 0);

		this.physics.add.collider(this.man, collidingLayer);
		

		// this.physics.add.collider(this.man, gate);
		// this.physics.add.collider(this.man, border1);
		// this.physics.add.collider(this.man, border2);
        // this.physics.add.existing(xspot,true)
       
		Animate(this, 'man', 4, 7, 8, 11, 12, 15, 0, 3, 0);

		// this.cameras.main.setBounds(48, 0, 800, 600);
		// this.cameras.main.startFollow(this.man);
		// let resetBox = this.add.rectangle(330, 570, 20, 20, 0xa93226);

		this.add.rectangle(0, 400, 10, 10, 0x000000);
		 //lights
         this.lights.enable();
         this.lights.setAmbientColor(0x7b5e57);
                light = this.lights.addLight(180, 80, 80);
        

            
    
		// this.stars = this.physics.add.sprite(760, 410, 'star');
		this.collect = false;
		//music

		this.music = this.sound.add('bg', true);
		this.music.setLoop(true);
		this.music.play();
		this.music.setVolume(0.3);


		//collisions
		// this.man.setCollideWorldBounds(true);

		//exit
        
		this.physics.add.existing(exitBox, true);
		this.physics.add.overlap(this.man, exitBox, this.exitRoom, null, this);
		//collection
		// this.physics.add.overlap(this.man, xspot, this.pattern,null, this)
		// this.physics.add.overlap(this.man, this.stars, collectBox, null, this);



        
		// reset
		// this.physics.add.existing(resetBox, true);
		// this.physics.add.overlap(this.man, xspot, this.pattern, null, this);
        if(content.includes('die')){
            this.cameras.main.shake(600)
        }

            
            // this.physics.add.collider(this.man, gate, shake, null, this);
        
        this.cameras.main.setBounds(48, 68, 800, 900);
        this.cameras.main.startFollow(this.man, true);
        //opening dialogue//

        // this.time.delayedCall(8000, this.openingDialogue(), this);  // delay in ms

        // this.lights.addLight(400, 300,200 ).setColor(0xFF0000);
        this.time.delayedCall(8000, this.openingDialogue(), this); 
    }
   
	exitRoom() {
		if (this.collect) {
			this.music.stop();
			return this.scene.start('StartScene');
		}
	}
	update() {
		this.man.update(this);
        // let lightx = this.man.x - 0.5
        // let lighty = this.man.y - 0.5
        // this.lights.addLight( lightx, lighty, 40);
        light.x = this.man.x + 35 ;
            light.y = this.man.y + 35 ;
	}
    openingDialogue(){
    createTextBox(this, 180, 400, {
            wrapWidth: 500,
            fixedWidth: 500,
            fixedHeight: 65,
        }).start(content, 50)

    };
    pattern(){

        // this.lights.addLight(450, 510, 40).setColor(0x00000FF).setIntensity(3.0);
        // this.lights.addLight(310, 450, 40).setColor(0x00000FF).setIntensity(3.0);
    this.add.image(450, 700, 'redtile')
    this.add.image(410, 660, 'redtile')

    
    }

    


}

function shake(){
    if(score < 3){
        content = "The gate seems to be locked"
    this.cameras.main.shake(500)
    }
}
function collectBox(man, item) {
	item.disableBody(true, true);
	this.collect = true;
}

// function reset() {
// 	this.scene.start('Puzzle3');
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

            // icon: scene.add.image(0, 0, 'icon'),

            // text: getBuiltInText(scene, wrapWidth, fixedWidth, fixedHeight),
            text: getBBcodeText(scene, wrapWidth, fixedWidth, fixedHeight),

            // action: scene.add.image(0, 0, 'nextPage').setTint(COLOR_LIGHT),
			action: scene.add.image(0, 0, 'nextPage').setTint(COLOR_LIGHT),


            space: {
                left: 30,
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

