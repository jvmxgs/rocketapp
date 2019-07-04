import MainScene from './mainScene.js';
import ScoreScene from './scoreScene.js';
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
			this.scene.add('MainScene', new MainScene);
			this.scene.add('ScoreScene', new ScoreScene);
			this.scene.start('ScoreScene');
			this.scene.launch('MainScene');
		};
	}
}
