import MenuScene from './scenes/menuScene.js';
import Boot from './scenes/boot.js';

var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {

        var Config = require('./util/config.js');

        Config.scene = [Boot,MenuScene];

        new Phaser.Game(Config);
    },
};
app.initialize();
