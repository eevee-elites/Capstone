import "phaser";
export default class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, key) {
    super(scene, x, y, key);
    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.scene = scene;
    this.inventory = {
      scissors: 0,
      room1Key: 0,
    };
    this.completed = {
      puzzle1: false,
      puzzle2: false,
    };
  }
  // updates inventory when an item is picked up
  pickupItem(item) {
    switch (item) {
      case "room1Key":
        this.inventory.room1Key += 1;

        break;
      case "scissors":
        this.inventory.scissors += 1;
        break;

			default:
				console.log("cant pick up item");
		}
	}
	update(keys) {
		var cursors = keys.input.keyboard.createCursorKeys();
		var keyObjW = keys.input.keyboard.addKey("W");
		var keyObjA = keys.input.keyboard.addKey("A");
		var keyObjS = keys.input.keyboard.addKey("S");
		var keyObjD = keys.input.keyboard.addKey("D");
		if (cursors.left.isDown || keyObjA.isDown) {
			this.setVelocityX(-160);
			this.setVelocityY(0);
			this.anims.play("left", true);
		} else if (cursors.right.isDown || keyObjD.isDown) {
			this.setVelocityX(160);
			this.setVelocityY(0);
			this.anims.play("right", true);
		} else if (cursors.up.isDown || keyObjW.isDown) {
			this.setVelocityY(-160);
			this.setVelocityX(0);
			this.anims.play("up", true);
		} else if (cursors.down.isDown || keyObjS.isDown) {
			this.setVelocityY(160);
			this.setVelocityX(0);
			this.anims.play("down", true);
		} else {
			this.setVelocityX(0);
			this.setVelocityY(0);
			this.anims.play("still", true);
		}
	}
}
