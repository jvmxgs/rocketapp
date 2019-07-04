import GameScreen from '../util/gamescreen.js';

export default class Coin extends Phaser.Physics.Matter.Sprite {
    constructor (scene, x, y) {
        super(scene.matter.world, x, y, 'coin');
        scene.add.existing(this);
        this.scene = scene;

        this.setIgnoreGravity(true);
        this.body.label = "coin";

    }

    dissapear(x, y) {
        let gameScreen = new GameScreen();

        this.body.destroy();
        this.setScrollFactor(0);
        this.setPosition(this.body.position.x, 900);

        this.scene.tweens.add({
            targets: this,
            duration: 600,
            ease: 'Bounce.Out',
            x: gameScreen.getRelativePositionX(95),
            y: gameScreen.getRelativePositionY(2),
            onComplete:() => {
                this.scene.registry.events.emit('coinCollected');
                this.destroy();
            }
        });
    }
}
