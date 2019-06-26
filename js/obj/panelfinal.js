export default class Panelfinal extends Phaser.GameObjects.Container {
    constructor(scene, x, y) {
        super(scene, x, y);
        this.scene = scene;
        this.scene.add.existing(this);

        this.panelf = this.scene.add.image(0, 0, 'panelfinal');
        this.add([this.panelf]);
        this.setScrollFactor(0);
    }

    show () {
        this.scene.tweens.add({
            targets: this,
            duration: 600,
            ease: 'Circ.easeInOut',
            y: 700
        });
    }

}
