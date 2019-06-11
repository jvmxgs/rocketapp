import Display from '../util/display.js';

export default class Controls{
    constructor(scene) {
        this.scene = scene;
        this.display = new Display();
        this.cursors = scene.input.keyboard.createCursorKeys();
    }

    chechWhatHalf(){
        this.firstHalf = (this.scene.input.pointer1.x < this.display.getRelativePositionX(50));
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
