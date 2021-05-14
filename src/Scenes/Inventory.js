import "phaser";

export default class Inventory extends Phaser.Scene {
  constructor() {
    super("Inventory");
  }

  initialize() {
    Phaser.Scene.call(this, "Inventory");
  }

  preload() {
    this.load.image("cat", "assets/cat.png");
    this.load.image("star", "assets/star.png");
    this.load.image("pizza", "assets/pizza.png");
  }

  create() {
    this.add.image(200, 200, "cat");

    this.input.once(
      Phaser.Input.Events.POINTER_DOWN,
      function (event) {
        this.scene.switch("Tester");
      },
      this
    );

    this.events.on(
      Phaser.Scenes.Events.WAKE,
      function () {
        this.wake(this.input, this.scene);
      },
      this
    );
  }
  wake(input, scene) {
    input.once(
      Phaser.Input.Events.POINTER_DOWN,
      function (event) {
        scene.switch("Tester");
      },
      this
    );
  }

  update() {}
}
