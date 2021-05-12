import "phaser";
import Player from "../Models/Player";
import Animate from '../Models/Animate';

export default class RoomTest extends Phaser.Scene {
    constructor() {
        super('RoomTest')
        let man;
    }

    preload() {
        this.load.spritesheet("man", "assets/man.png", {
            frameWidth: 64,
            frameHeight: 64,
          });
        this.load.image("tiles", "../assets/Room spritesheet.png")
        this.load.tilemapTiledJSON("map", "../assets/Test room.json")
    }

    create() {
        const map = this.make.tilemap({ key: "map" });

        const tileset = map.addTilesetImage("Room", "tiles");

        const belowLayer = map.createLayer("Below", tileset, 0, 0);
        const collidingLayer = map.createLayer("Colliding", tileset, 0, 0);
        const collidingLayer2 = map.createLayer("Colliding 2", tileset, 0, 0);
        const aboveLayer = map.createLayer("Above", tileset, 0, 0)

        collidingLayer.setCollisionByProperty({ collides: true })
        collidingLayer2.setCollisionByProperty({ collides: true })

        aboveLayer.setDepth(10)

        this.man = this.physics.add
        .existing(new Player(this, 400, 300, "man"))
        .setOrigin(0.4, 0.5);

        this.physics.add.collider(this.man, collidingLayer);
        this.physics.add.collider(this.man, collidingLayer2)

        Animate(this, 'man', 4, 7, 8, 11, 12, 15, 0, 3, 0);

        this.cameras.main.setBounds(48, 0, 800, 600);
        this.cameras.main.startFollow(this.man);

    }

    update() {
        this.man.update(this);
    }
}