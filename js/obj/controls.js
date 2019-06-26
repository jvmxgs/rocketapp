import GameScreen from '../util/gamescreen.js';
export default class Controls{
    constructor(scene) {
        this.scene = scene;
        this.cursors = scene.input.keyboard.createCursorKeys();
    }

    chechWhatHalf(){
        let gameScreen = new GameScreen();
        this.firstHalf = (this.scene.input.pointer1.x < gameScreen.getRelativePositionX(50));
    }

    keyLeft() {
        return Phaser.Input.Keyboard.JustDown(this.cursors.left);
    }

    keyRight() {
        return Phaser.Input.Keyboard.JustDown(this.cursors.right);
    }

    touchedDown() {
        this.chechWhatHalf();
        return this.scene.input.pointer1.justDown;
    }
}
