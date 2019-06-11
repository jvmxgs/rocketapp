export default class Camera {
    constructor(scene, tilemap, sprite) {
        this.camera = scene.cameras.main;
        this.camera.startFollow(sprite);
		this.camera.setBounds(0, 0, tilemap.widthInPixels, tilemap.heightInPixels);
		scene.matter.world.setBounds(0, 0, tilemap.widthInPixels, tilemap.heightInPixels);
        this.camera.setRoundPixels(true);
        this.yOffset = 0;
    }

    fixYOffset() {
        if (this.yOffset < 300) {
            this.yOffset+=3;
            this.camera.setFollowOffset(0, this.yOffset);
        }
    }
}
