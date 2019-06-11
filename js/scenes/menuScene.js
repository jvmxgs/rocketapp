import mainScene from './mainScene.js';
import Boton from '../obj/boton.js';
import Display from '../util/display.js';

export default class MenuScene extends Phaser.Scene {
	constructor () {
		super({key: 'menuScene'});
	}

	create () {
		let display = new Display();
		this.boton = new Boton(this, display.getRelativePositionX(50), display.getRelativePositionY(50), "buttonplay", 0);
		this.boton.click = () => {
			this.scene.add('mainScene', new mainScene);
			this.scene.start('mainScene');
		};
	}
}
