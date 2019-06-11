export default class Fuel {
    constructor(scene) {
        this.sprite = scene.add.image(10, 10, "fuel");
        this.sprite.frame.setTrim(240, 39, 10, 0, 250, 39);
        this.sprite.frame.updateUVs();
        this.sprite.setOrigin(0);
        this.sprite.setScrollFactor(0);
    }
}
