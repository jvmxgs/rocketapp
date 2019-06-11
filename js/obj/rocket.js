import Controls from '../obj/controls.js';

export default class Rocket {
    constructor(scene, x, y) {
        var rocketShape = scene.cache.json.get('rocketShape');

        this.sprite = scene.matter.add.sprite(0, 0, "rocket", 0, {shape: rocketShape.rocket});

        //const { width: w, height: h } = this.sprite;

        this.tailfire= scene.matter.add.sprite(0, 0, "tailfire", 1);
        this.sprite
        .setFixedRotation()
        .setPosition(x, y);


        this.tailfire
            .setExistingBody(this.sprite.body.parts[1])
            .setFixedRotation()
            .setPosition(this.sprite.body.parts[1].position.x, this.sprite.body.parts[1].position.y + (this.tailfire.height / 4));



        this.moveAngle = 0;

        this.createAnimations(scene);

        this.tailfire.anims.load('tailfiring');
        this.tailfire.anims.play('tailfiring');
        this.sprite.anims.load('rollingleft');


        this.controls = new Controls(scene);

    }

    createAnimations(scene) {
        scene.anims.create({
            key: 'tailfiring',
            frames: scene.anims.generateFrameNumbers('tailfire', {start: 1, end: 2}),
            frameRate: 25,
            yoyo: true,
            repeat: -1
        });

        scene.anims.create({
            key: 'rollingleft',
            frames: scene.anims.generateFrameNumbers('rocket', {frames: [0,1,2]}),
            frameRate: 15,
            yoyo: true
        });

        scene.anims.create({
            key: 'rollingright',
            frames: scene.anims.generateFrameNumbers('rocket', {frames: [0,3,4]}),
            frameRate: 15,
            yoyo: true
        });
    }

    turnOnEngine(velocity) {
        this.sprite.setVelocityY(Math.sin(this.sprite.body.angle - Math.PI/2) * velocity);
        this.sprite.setVelocityX(Math.cos(this.sprite.body.angle - Math.PI/2) * velocity);
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
