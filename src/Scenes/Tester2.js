import "phaser";
import Player from "../Models/Player";
import NPC from "../Models/NPC";
import Animate from "../Models/Animate";
import NPCAnimate from "../Models/NPCAnimate";

export default class Tester2 extends Phaser.Scene {
  constructor() {
    super("Tester2");
  }
  init(data) {
    console.log("init", data);
    this.man = data.man;
  }

  preload() {
    this.load.scenePlugin(
      "rexuiplugin",
      "https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js",
      "rexUI",
      "rexUI"
    );
    this.load.spritesheet("man", "assets/man.png", {
      frameWidth: 64,
      frameHeight: 64,
    });
    this.load.spritesheet("pika", "assets/pika.png", {
      frameWidth: 31,
      frameHeight: 31,
    });
    this.load.audio("bg", "assets/bg.wav");
    this.load.image("star", "assets/star.png");
    this.load.image("cat", "assets/cat.png");
    this.load.image("pizza", "assets/pizza.png");
  }

  create(data) {
    this.man = data.man;
    let hitBox = this.add.rectangle(100, 400, 40, 40, 0x000000);
    // this.man = this.physics.add.existing(new Player(this, 400, 300, "man"));
    this.pika = this.physics.add.existing(
      new NPC(this, 100, 400, "pika"),
      true
    );
    this.stars = this.physics.add.sprite(100, 450, "star");
    this.pizza = this.physics.add.sprite(333, 250, "pizza");
    this.cat = this.physics.add.sprite(200, 350, "cat");
    var music = this.sound.add("bg", true);
    music.setLoop(true);
    music.play();
    music.setVolume(0.3);

    this.pika.body.setSize(25, 25, true);

    // hitBox.setInteractive();
    Animate(this, "man", 4, 7, 8, 11, 12, 15, 0, 3, 0);
    NPCAnimate(this, "pika", 2, 3, 6, -1);

    let testBox = this.add.rectangle(100, 100, 100, 100, 0xffffff);

    this.man.setCollideWorldBounds(true);

    //this adds collision to given object, and sets static to true so it can't be moved
    this.physics.add.existing(testBox, true);
    this.physics.add.existing(hitBox, true);

    this.physics.add.collider(testBox, this.man);
    this.physics.add.collider(this.pika, this.man);
    this.physics.add.overlap(this.man, this.stars, collectItem, null, this);
    this.physics.add.overlap(this.man, this.pizza, collectItem, null, this);
    this.physics.add.overlap(this.man, this.cat, collectItem, null, this);
    this.physics.add.overlap(this.man, hitBox, this.sayHello, null, this);
  }
  sayHello(man, pika) {
    let enter = this.input.keyboard.addKey("ENTER");
    if (enter.isDown) {
      const dialog = this.rexUI.add
        .dialog({
          x: 400,
          y: 500,
          height: 10,
          width: 10,

          background: this.rexUI.add.roundRectangle(0, 0, 0, 0, 0, 0xddd7d6),
          content: this.add.text(0, 0, "Do you want to build a snow man?", {
            fontSize: "24px",
            color: "0x00000",
          }),
          actions: [createLabel(this, "Yes"), createLabel(this, "No")],
          space: {
            title: 25,
            content: 25,
            action: 15,

            left: 20,
            right: 20,
            top: 20,
            bottom: 20,
          },

          align: {
            title: "center", // 'center'|'left'|'right'
            actions: "left",
          },

          expand: {
            content: false, // Content is a pure text object
          },
        })
        .layout();
      this.print = this.add.text(0, 0, "");
      dialog.on(
        "button.click",
        function (button, groupName, index) {
          if (button.text === "Yes") return this.scene.start("Tester");
          this.print.text += index + ": " + button.text + "\n";
          if (button.text === "No") return this.scene.start("Title"); // can say what to do in button
        },
        this
      );
    }
  }

  update() {
    this.pika.update(this.pika, "pika");
    this.man.update(this);
  }
}
function collectItem(man, item) {
  man.pickupItem(item.texture.key);
  item.disableBody(true, true);
  console.log(man.inventory);
}
var createLabel = function (scene, text) {
  return scene.rexUI.add.label({
    width: 40,
    height: 40,

    background: scene.rexUI.add.roundRectangle(10, 50, 10, 0, 0, 0x5e92f3),

    text: scene.add.text(0, 0, text, {
      fontSize: "24px",
    }),

    space: {
      left: 80,
      right: 80,
      top: 10,
      bottom: 10,
    },
  });
};
