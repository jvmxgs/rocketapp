export default class Boot extends Phaser.Scene {
	constructor () {
		super({key: 'Boot', active: true});
	}

	preload () {
		var progressBar = this.add.graphics();
		var progressBox = this.add.graphics();
		progressBox.fillStyle(0x222222, 0.8);
		progressBox.fillRect(10, 200, 220, 50);

		this.load.on('progress', function (value) {
		    progressBar.clear();
		    progressBar.fillStyle(0xffffff, 1);
		    progressBar.fillRect(20, 210, 200 * value, 30);
		});

		this.load.on('fileprogress', function (file) {

		});

		this.load.on('complete', () => {
			progressBar.destroy();
			progressBox.destroy();
			this.scene.start('menuScene');
		});

		this.load.spritesheet('buttonplay', 'assets/sprites/buttonplay.png', {frameWidth: 64, frameHeight: 64, endFrame: 3});
		this.load.spritesheet("rocket", "./assets/sprites/rocket.png", {frameWidth: 80, frameHeight: 160});
		this.load.spritesheet("tailfire", "./assets/sprites/tailfire.png", {frameWidth:32, frameHeight:64});
		this.load.spritesheet("coin", "./assets/sprites/coin.png", {frameWidth:60, frameHeight:60});

		this.load.image("fuel", "./assets/sprites/fuel.png");
		this.load.image("fuelindicator", "./assets/sprites/fuelindicator.png");
		this.load.image("panelfinal", "./assets/sprites/panelfinal.png");
		this.load.image("piggy", "./assets/sprites/piggy.png");

		this.load.json('rocketShape', './assets/sprites/rocket.json');

	}
}
