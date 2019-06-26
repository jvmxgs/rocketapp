export default class Fuel {
    constructor(scene) {
        this.fuel = scene.add.image(53, 0, "fuel");
        this.fuelindicator = scene.add.image(10, 10, "fuelindicator");

        this.fuel.y = (this.fuelindicator.height / 2) + 10;

        this.fuel.setOrigin(0, 0.5);
        this.fuelindicator.setOrigin(0);
        this.fuel.setScrollFactor(0);
        this.fuelindicator.setScrollFactor(0);
        this.decrease = 0;
    }

    decreaseFuel() {
        this.fuel.frame.cutY = 0;
        this.fuel.frame.cutX = this.decrease;
        this.fuel.frame.cutHeight = this.fuel.height;
        this.fuel.frame.cutWidth = this.fuel.width - this.decrease;
        this.fuel.frame.updateUVs();
        if (this.decrease < this.fuel.width) {
            this.decrease+=1;
        }
    }

    thereAreFuel() {
        if (this.fuel.width - this.decrease <= 0) {
            return false;
        } else {
            return true;
        }
    }
}
