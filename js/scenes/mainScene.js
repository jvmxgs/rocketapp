import Rocket from '../obj/rocket.js';
import Camera from '../obj/camera.js';
import Panelfinal from '../obj/panelfinal.js';
import Coins from '../groups/coins.js';
import defineCollisions from '../helpers/collisions.js';
import defineAnimations from '../helpers/animations.js';

export default class MainScene extends Phaser.Scene {
	constructor () {
		super({key: 'MainScene'});
	}

	create () {
		var Config = require('../util/config.js');

		this.matter.world.setBounds(0, 0, Config.width, Config.heightWorld);

		defineAnimations(this);

		this.rocket = new Rocket(this, Config.width / 2, Config.heightWorld);

		this.camera = new Camera(this, Config.width, Config.heightWorld, this.rocket.sprite);

		this.panelfinal = new Panelfinal(this, Config.width / 2, Config.height /2 - 1500);


		this.coinsF = new Coins(this);

		this.ciclo = 0;

		defineCollisions(this);
	}

	update() {
		this.ciclo++;
		if (this.ciclo > 40) {
			this.coinsF.addCoin(this, Phaser.Math.Between(15, 600), this.rocket.sprite.body.position.y - 1000);
			this.ciclo = 0;
		}

		this.camera.update();

		this.rocket.update(this);
	}
}
