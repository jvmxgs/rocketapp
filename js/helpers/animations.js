export default function defineAnimations(scene) {
    //coin animation
    scene.anims.create({
        key: 'coinFlip',
        frames: scene.anims.generateFrameNumbers('coin', { start: 0, end: 5 }),
        frameRate: 10,
        repeat: -1
    });


    //rocket animations
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
