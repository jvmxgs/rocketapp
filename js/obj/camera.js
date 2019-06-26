export default class Camera {
    constructor(scene, x, y, sprite) {
        this.camera = scene.cameras.main;
        this.camera.startFollow(sprite);
		this.camera.setBounds(0, 0, x, y);
        this.camera.setRoundPixels(true);
        this.yOffset = 0;
    }

    fixYOffset() {
        if (this.yOffset < 300) {
            this.yOffset+=3;
            this.camera.setFollowOffset(0, this.yOffset);
        }
    }

    update() {
        this.fixYOffset();
    }
}
