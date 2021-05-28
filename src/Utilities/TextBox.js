export function TextBoxWithIcon(scene, icon, textOpen, last) {
  var wrapWidth = 500;
  var fixedWidth = 500;
  var fixedHeight = 65;
  var textBox = scene.rexUI.add
    .textBox({
      x: 100,
      y: 400,

      background: scene.rexUI.add
        .roundRectangle(0, 0, 2, 2, 20, 0x4e342e)
        .setStrokeStyle(2, 0x7b5e57)
        .setVisible(true),

      icon: scene.add.image(0, 0, icon),

      text: getBBcodeText(scene, wrapWidth, fixedWidth, fixedHeight),

      action: scene.add.image(0, 0, "nextPage").setTint(0x7b5e57),

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

  textBox.setScrollFactor(0);

  scene.input.keyboard.on(
    "keydown-ENTER",
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
    "pageend",
    function () {
      if (this.isLastPage && !this.isTyping) {
        scene.input.keyboard.on("keyup-ENTER", () => {
          textBox.setVisible(false);
          last = false;
        });

        textOpen = !textOpen;

        last = true;
      }
    },
    textBox
  );

  return textBox;
}

var getBBcodeText = function (scene, wrapWidth, fixedWidth, fixedHeight) {
  return scene.rexUI.add.BBCodeText(0, 0, "", {
    fixedWidth: fixedWidth,
    fixedHeight: fixedHeight,

    fontSize: "20px",
    wrap: {
      mode: "word",
      width: wrapWidth,
    },
    maxLines: 3,
  });
};

export default function TextBoxWithoutIcon(scene, textOpen, last) {
  var wrapWidth = 500;
  var fixedWidth = 500;
  var fixedHeight = 65;
  var textBox = scene.rexUI.add
    .textBox({
      x: 100,
      y: 400,

      background: scene.rexUI.add
        .roundRectangle(0, 0, 2, 2, 20, 0x4e342e)
        .setStrokeStyle(2, 0x7b5e57)
        .setVisible(true),

      text: getBBcodeText(scene, wrapWidth, fixedWidth, fixedHeight),

      action: scene.add.image(0, 0, "nextPage").setTint(0x7b5e57),

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

  textBox.setScrollFactor(0);

  scene.input.keyboard.on(
    "keydown-ENTER",
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
    "pageend",
    function () {
      if (this.isLastPage && !this.isTyping) {
        scene.input.keyboard.on("keyup-ENTER", () => {
          textBox.setVisible(false);
          last = false;
        });

        textOpen = !textOpen;

        last = true;
      }
    },
    textBox
  );

  return textBox;
}
