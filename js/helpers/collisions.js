export default function defineCollisions (scene) {

    scene.matter.world.on('collisionstart', function(event, bodyA, bodyB) {

        if (bodyA.label == "rocket" && bodyB.label == "coin") {
            bodyB.gameObject.dissapear();
        }
    });
}
