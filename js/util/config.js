module.exports = {
    width: 720,
    height: 1280,
    heightWorld: 60000,
    type: Phaser.AUTO,
    parent: 'rocketGame',
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    backgroundColor : '#87ceeb',
    physics: {
        default: 'matter',
        matter: {
            gravity: { y: 9.8 },
            debug: true
        }
    }
};
