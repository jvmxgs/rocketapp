import Controls from '../obj/controls.js';

export default class Rocket {
    constructor(scene, x, y) {
        this.scene = scene;

        this.isFlying = true;
        this.velocity = 20;
        this.moveAngle = 0;
        this.maxFuel = 1000;
        this.fuel = 1000;

        scene.data.set('fuelPercentage', 100);


        var rocketShape = scene.cache.json.get('rocketShape');

        this.sprite = scene.matter.add.sprite(0, 0, "rocket", 0, {shape: rocketShape.rocket});

        this.tailfire= scene.matter.add.sprite(0, 0, "tailfire", 1).setOrigin(0);
        this.sprite
        .setFixedRotation()
        .setDepth(3)
        .setPosition(x, y);


        this.tailfire
            .setExistingBody(this.sprite.body.parts[1])
            .setFixedRotation()
            .setDepth(2)
            .setPosition(this.sprite.body.parts[1].position.x, this.sprite.body.parts[1].position.y);

        this.tailfire.anims.load('tailfiring');
        this.tailfire.anims.play('tailfiring');
        this.sprite.anims.load('rollingleft');

        this.controls = new Controls(scene);

    }

    turnOnEngine() {
        if (this.thereAreFuel()) {
            this.isFlying = true;
            this.sprite.setVelocityY(Math.sin(this.sprite.body.angle - Math.PI/2) * this.velocity);
            this.sprite.setVelocityX(Math.cos(this.sprite.body.angle - Math.PI/2) * this.velocity);
            this.decreaseFuel();
        } else {
            this.isFlying = false;
            this.scene.cameras.main.stopFollow();
            this.tailfire.anims.stop();
            this.tailfire.setFrame(0);
            this.sprite.body.inertia = 20000.1;
            this.sprite.applyForce({ x: 0, y: -0.5 });
            this.sprite.setAngularVelocity(Phaser.Math.Between(-10, 10) / 100);
            this.scene.panelfinal.show();
        }
    }

    moveToSide(angle) {
        if (this.sprite.angle < 30 && this.sprite.angle > -30) {
            this.moveAngle = angle;
        }
    }

    updateAngle() {
        if (this.moveAngle != 0) {
            if (this.moveAngle > 0) {
                this.sprite.angle += 1;
                this.moveAngle -= 1;
                this.sprite.applyForce({ x: 0.03, y: 0 });
            } else {
                this.sprite.angle -= 1;
                this.moveAngle += 1;
                this.sprite.applyForce({ x: -0.03, y: 0 });
            }
        } else {

            if (this.sprite.angle > 2) {
                this.sprite.angle-= 2;
            } else if(this.sprite.angle < -2) {
                this.sprite.angle+= 2;
            } else {
                this.sprite.angle = 0;
            }

        }
    }

    update(scene) {
        if (this.isFlying) {
            this.turnOnEngine();
            if (this.controls.keyLeft() || (this.controls.touchedDown() && this.controls.firstHalf)) {
                this.moveToSide(-20);
                this.sprite.anims.play('rollingleft');
            }

            if (this.controls.keyRight() || (this.controls.touchedDown() && !this.controls.firstHalf)) {
                this.moveToSide(20);
                this.sprite.anims.play('rollingright');
            }
            this.updateAngle();
        }
    }

    thereAreFuel () {
        if (this.fuel > 0) {
            return true;
        } else {
            return false;
        }
    }

    decreaseFuel() {
        this.fuel--;
        let fuelPercentage = Math.floor((this.fuel / this.maxFuel) * 100);
        this.scene.registry.events.emit('changeFuelPercentaje', fuelPercentage);
    }

}
