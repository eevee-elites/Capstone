import "phaser";

export default class Inventory extends Phaser.Scene {
  constructor() {
    super({
      key: "Inventory",
    });
  }

  preload() {
    // leave rexui in her do not move
    this.load.scenePlugin({
      key: "rexuiplugin",
      url: "https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js",
      sceneKey: "rexUI",
    });
    this.load.plugin(
      "rexcirclemaskimageplugin",
      "https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexcirclemaskimageplugin.min.js",
      true
    );

    // already added to preloader be sure to take out for clean up
    this.load.image("pizza", "assets/pizza.png");
  }

  create() {
    createDialog.bind(this);
    this.pizza = this.add.image(0, 0, "pizza");
    var scene = this,
      dialog = undefined;
    this.input.on(
      "pointerdown",
      function (pointer) {
        var x = pointer.x,
          y = pointer.y;

        if (dialog === undefined) {
          dialog = createDialog(this, x, y, function (color) {
            dialog.scaleDownDestroy(100);
            dialog = undefined;
          });
        } else if (!dialog.isInTouching(pointer)) {
          dialog.scaleDownDestroy(100);
          dialog = undefined;
        }
      },
      this
    );
  }

  update() {}
}

var createDialog = function (scene, x, y, onClick) {
  var dialog = scene.rexUI.add
    .dialog({
      x: 350,
      y: 0,

      background: scene.rexUI.add.roundRectangle(0, 0, 100, 100, 20, 0xf57f17),

      title: scene.rexUI.add.label({
        background: scene.rexUI.add.roundRectangle(0, 0, 100, 40, 20, 0xbc5100),
        text: scene.add.text(0, 0, "Inventory", {
          fontSize: "20px",
        }),
        space: {
          left: 15,
          right: 15,
          top: 10,
          bottom: 10,
        },
      }),

      actions: [
        scene.rexUI.add.roundRectangle(0, 0, 0, 0, 20, 0xe91e63),
        scene.rexUI.add.roundRectangle(0, 0, 0, 0, 20, 0x673ab7),
        scene.rexUI.add.roundRectangle(0, 0, 0, 0, 20, 0x2196f3),
        scene.rexUI.add.roundRectangle(0, 0, 0, 0, 20, 0x00bcd4),
        scene.rexUI.add.roundRectangle(0, 0, 0, 0, 20, 0xcddc39),
        scene.add.rexCircleMaskImage(0, 0, "assets/pizza.png"),

        // scene.rexUI.add.image(0, 0, 0, 0, 20, "pizza"),
      ],
      // icon: scene.add.image(0, 0, 0, 0, 20, "pizza"),

      actionsAlign: "left",

      space: {
        title: 10,
        action: 5,

        left: 10,
        right: 10,
        top: 10,
        bottom: 10,
      },
    })
    .layout()
    .pushIntoBounds()
    //.drawBounds(this.add.graphics(), 0xff0000)
    .popUp(500);

  dialog
    .on("button.click", function (button, groupName, index) {
      onClick(button.fillColor);
    })
    .on("button.over", function (button, groupName, index) {
      button.setStrokeStyle(2, 0xffffff);
    })
    .on("button.out", function (button, groupName, index) {
      button.setStrokeStyle();
    });

  return dialog;
};
