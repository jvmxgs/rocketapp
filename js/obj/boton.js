export default class Boton extends Phaser.GameObjects.Sprite {

    constructor (scene, x, y, sprite, frame) {
        super(scene, x, y, sprite, frame);
        scene.add.existing(this);
        this.makeInteractive();
    }

    makeInteractive() {
        this.setInteractive();

        this.on("pointerup", function (ev) {
            this.setFrame(1);
        });

        this.on("pointerdown", function (ev) {
            this.setFrame(2);
            this.click();
		});

        this.on("pointerover", function (ev) {
            this.setFrame(1);
        });

        this.on("pointerout", function (ev) {
            this.setFrame(0);
        });
    }
}
