import Rocket from '../obj/rocket.js';
import Fuel from '../obj/fuel.js';
import Map1 from '../maps/map1.js';
import Camera from '../obj/camera.js';


export default class mainScene extends Phaser.Scene {
	constructor () {
		super({key: 'mainScene'});
	}

	create () {

		this.map1 = new Map1(this);

		this.rocket = new Rocket(this, this.map1.spawnPoint.x, this.map1.spawnPoint.y);

		this.fuel = new Fuel(this, this.map1.spawnPoint.x, this.map1.spawnPoint.y);

		this.camera = new Camera(this, this.map1.tilemap, this.rocket.sprite);
	}

	update() {
		this.camera.fixYOffset();


		this.rocket.turnOnEngine(20);


		this.rocket.update(this);
	}
}
