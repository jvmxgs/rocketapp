import mainScene from './mainScene.js';
import Boton from '../obj/boton.js';
import GameScreen from '../util/gamescreen.js';

export default class MenuScene extends Phaser.Scene {
	constructor () {
		super({key: 'menuScene'});
	}

	create () {
		var gameScreen = new GameScreen();
		this.boton = new Boton(this, gameScreen.getRelativePositionX(50), gameScreen.getRelativePositionY(50), "buttonplay", 0);
		this.boton.click = () => {
			this.scene.add('mainScene', new mainScene);
			this.scene.start('mainScene');
		};
	}
}
