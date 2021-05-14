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
    console.log(" inventory data", data);

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

    this.add.text(350, 0, "INVENTORY");

    this.input.keyboard.on(
      "keydown-I",
      function () {
        this.scene.transition({
          target: data.scene,
          duration: 10,
        });
      },
      this
    );

    // this.input.once(
    //   scene.input.keyboard.on(
    //     "keydown-I",
    //     function (event) {
    //       this.scene.switch("Tester");
    //     },
    //     this
    //   )
    // );

    this.events.on(
      Phaser.Scenes.Events.WAKE,
      function () {
        this.wake(this.input, this.scene, data.scene);
      },
      this
    );
  }
  wake(input, scene, sceneToSwitchTo) {
    this.input.keyboard.on(
      "keydown-I",
      function (event) {
        this.scene.transition({
          target: sceneToSwitchTo,
          duration: 10,
        });
      },
      this
    );
  }

  update() {}
}
