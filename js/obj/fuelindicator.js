export default class FuelIndicator {
    constructor(scene) {
        this.fuel = scene.add.image(53, 0, "fuel");
        this.fuelindicator = scene.add.image(10, 10, "fuelindicator");

        this.fuel.y = (this.fuelindicator.height / 2) + 10;

        this.fuel.setOrigin(0, 0.5);
        this.fuelindicator.setOrigin(0);
        this.fuel.setScrollFactor(0);
        this.fuelindicator.setScrollFactor(0);

        scene.registry.events.on('changeFuelPercentaje', (fuelPercentage) => {
            this.updateLevelFuel(fuelPercentage);
        });
    }

    updateLevelFuel(fuelPercentage) {
        let fuelPercentageUsed = 100 - fuelPercentage;
        let widthToCut = Math.floor((this.fuel.frame.width * fuelPercentageUsed) / 100);

        this.fuel.frame.cutY = 0;
        this.fuel.frame.cutX = widthToCut;
        this.fuel.frame.cutHeight = this.fuel.height;
        this.fuel.frame.cutWidth = this.fuel.width - widthToCut;
        this.fuel.frame.updateUVs();
    }

}
