import Display from './util/display.js';
import MenuScene from './scenes/menuScene.js';
import Boot from './scenes/boot.js';

var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        let display = new Display();

        var config = {
            type: Phaser.AUTO,
            parent: 'rocketGame',
            width: display.width,
            height: display.height,
            scale: {
                mode: Phaser.Scale.FIT,
                autoCenter: Phaser.Scale.CENTER_BOTH
            },
            backgroundColor : '#000',
            physics: {
                default: 'matter',
                matter: {
                    gravity: { y: 9.8 },
                    debug: false
                }
            },
            scene: [Boot,MenuScene]
        };

        new Phaser.Game(config);
    },
};
app.initialize();
