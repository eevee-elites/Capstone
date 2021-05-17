import 'phaser';

export default {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: 800,
  height: 600,
  maxLights: 20,
  physics: {
    default: 'arcade'
  },
  autoCenter: true,
};
