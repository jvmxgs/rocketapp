import FuelIndicator from '../obj/fuelindicator.js';

export default class ScoreScene extends Phaser.Scene {
	constructor () {
		super({key: 'ScoreScene'});
	}

	create () {
		//The fuel indicator
		this.fuelIndicator = new FuelIndicator(this);

		//Coin counter
		this.data.set('coins', 0);

		this.piggy = this.add.image(560, 10, 'piggy');
		this.piggy.setOrigin(0);

		this.coinCounter = this.add.text(630, 10, "0", {
			fontFamily: 'Courier',
			fontSize: '48px',
			color: 'white',
		});

		this.registry.events.on('coinCollected', () => {
			this.updateCoinCounter();
		});

	}

	updateCoinCounter() {
		this.data.values.coins++;
		this.coinCounter.setText(this.data.values.coins);
	}
}
