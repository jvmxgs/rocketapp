export default function defineAnimations(scene) {
    scene.anims.create({
        key: 'coinFlip',
        frames: scene.anims.generateFrameNumbers('coin', { start: 0, end: 5 }),
        frameRate: 10,
        repeat: -1
    });
}
