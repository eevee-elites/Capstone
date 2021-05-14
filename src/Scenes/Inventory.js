import "phaser";

export default class Inventory extends Phaser.Scene {
  constructor() {
    super("Inventory");
  }

  initialize(data) {
    console.log(data);
    Phaser.Scene.call(this, "Inventory");
  }

  preload() {
    this.load.image("cat", "assets/cat.png");
    this.load.image("star", "assets/star.png");
    this.load.image("pizza", "assets/pizza.png");
  }

  create(data) {
    this.inventoryPassed = data.inventory;
    const myInventory = [];
    console.log("data", data);

    for (const key in this.inventoryPassed) {
      if (this.inventoryPassed[key] != 0) {
        myInventory.push(key);
      }
    }
    let x = 100;
    let y = 100;
    myInventory.forEach((item) => {
      this.add.image(x, y, item);
      x += 100;
    });

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
        this.scene.switch("Tester");
      },
      this
    );
  }

  update() {}
}
