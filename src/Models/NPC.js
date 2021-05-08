import 'phaser';
export default class NPC extends Phaser.Physics.Arcade.Sprite {
	constructor(scene, x, y, key) {
		super(scene, x, y, key);
		scene.add.existing(this);
		// scene.physics.add.existing(this);
		this.scene = scene;
	}

	update(key, sprite) {
		key.anims.play(`${sprite}still`, true);
	}
}
