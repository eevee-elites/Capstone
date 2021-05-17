import "phaser";

export default class PuzzleSlider extends Phaser.Scene {
  constructor() {
    super("PuzzleSlider");
    this.PIECE_WIDTH = 200;
    this.PIECE_HEIGHT = 200;
    this.BOARD_COLS;
    this.BOARD_ROWS;

    this.piecesGroup;
    this.piecesAmount;
    this.shuffledIndexArray = [];
  }

  preload() {
    this.load.spritesheet("monster", "assets/.png", {
      frameWidth: this.PIECE_WIDTH,
      frameHeight: this.PIECE_HEIGHT,
    });
  }
  create() {
    this.prepareBoard();
  }
  prepareBoard() {
    var piecesIndex = 0,
      i,
      j,
      piece;
    this.BOARD_COLS = Math.floor(this.cameras.main.width / this.PIECE_WIDTH);
    this.BOARD_ROWS = Math.floor(this.cameras.main.height / this.PIECE_HEIGHT);
    this.piecesAmount = this.BOARD_COLS * this.BOARD_ROWS;
    this.shuffledIndexArray = this.createShuffledIndexArray();
    this.piecesGroup = this.add.group();

    for (i = 0; i < this.BOARD_ROWS; i++) {
      for (j = 0; j < this.BOARD_COLS; j++) {
        if (this.shuffledIndexArray[piecesIndex]) {
          piece = this.piecesGroup.create(
            j * this.PIECE_WIDTH,
            i * this.PIECE_HEIGHT,
            "monster",
            this.shuffledIndexArray[piecesIndex]
          );
        } else {
          //initial position of black piece
          piece = this.piecesGroup.create(
            j * this.PIECE_WIDTH,
            i * this.PIECE_HEIGHT
          );
          piece.black = true;
        }
        piece.name = "piece" + i.toString() + "x" + j.toString();
        piece.currentIndex = piecesIndex;
        piece.destIndex = this.shuffledIndexArray[piecesIndex];
        piece.inputEnabled = true;
        piece.on("pointerdown", function () {
          add(selectPiece, this);
        });
        piece.posX = j;
        piece.posY = i;
        piecesIndex++;
      }
    }
  }
  selectPiece(piece) {
    var blackPiece = canMove(piece);

    if (blackPiece) {
      movePiece(piece, blackPiece);
    }
  }
  canMove(piece) {
    var foundBlackElem = false;

    piecesGroup.children.forEach(function (element) {
      if (
        (element.posX === piece.posX - 1 &&
          element.posY === piece.posY &&
          element.black) ||
        (element.posX === piece.posX + 1 &&
          element.posY === piece.posY &&
          element.black) ||
        (element.posY === piece.posY - 1 &&
          element.posX === piece.posX &&
          element.black) ||
        (element.posY === piece.posY + 1 &&
          element.posX === piece.posX &&
          element.black)
      ) {
        foundBlackElem = element;
        return;
      }
    });

    return foundBlackElem;
  }
  movePiece(piece, blackPiece) {
    var tmpPiece = {
      posX: piece.posX,
      posY: piece.posY,
      currentIndex: piece.currentIndex,
    };

    game.add.tween(piece).to(
      {
        x: blackPiece.posX * PIECE_WIDTH,
        y: blackPiece.posY * PIECE_HEIGHT,
      },
      300,
      Phaser.Easing.Linear.None,
      true
    );

    piece.posX = blackPiece.posX;
    piece.posY = blackPiece.posY;
    piece.currentIndex = blackPiece.currentIndex;
    piece.name = "piece" + piece.posX.toString() + "x" + piece.posY.toString();

    blackPiece.posX = tmpPiece.posX;
    blackPiece.posY = tmpPiece.posY;
    blackPiece.currentIndex = tmpPiece.currentIndex;
    blackPiece.name =
      "piece" + blackPiece.posX.toString() + "x" + blackPiece.posY.toString();

    checkIfFinished();
  }
  checkIfFinished() {
    var isFinished = true;

    piecesGroup.children.forEach(function (element) {
      if (element.currentIndex !== element.destIndex) {
        isFinished = false;
        return;
      }
    });

    if (isFinished) {
      showFinishedText();
    }
  }
  showFinishedText() {
    bmd = game.make.bitmapData();
    bmd.load("win").cls();
    game.stage.backgroundColor = "#2d2d2d";
    area = new Phaser.Rectangle(0, bmd.height, bmd.width, 1);
    bmd.addToWorld(game.world.centerX, game.world.centerY, 0.5, 0.5, 1, 1);
    game.stage.smoothed = false;
    dropTime = game.time.now + 200;
    var text = game.add
      .text(
        game.world.centerX,
        game.world.centerY,
        "Congrats! \n- YOU WIN! -",
        {
          font: "100px impact",
          style: "bold",
          fill: "white",
        }
      )
      .anchor.set(0.5);
  }
  createShuffledIndexArray() {
    var indexArray = [];

    for (var i = 0; i < this.piecesAmount; i++) {
      indexArray.push(i);
    }

    return this.shuffle(indexArray);
  }
  shuffle(array) {
    var counter = array.length,
      temp,
      index;

    while (counter > 0) {
      index = Math.floor(Math.random() * counter);

      counter--;

      temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
    }

    return array;
  }
}
