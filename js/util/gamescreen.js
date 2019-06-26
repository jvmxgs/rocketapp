export default class GameScreen {
    constructor(){
        let Config = require('../util/config.js');
        this.width = Config.width;
        this.height = Config.height;
    }

    getRelativePositionX (xPercent) {
        return this.width * (xPercent / 100);
    }

    getRelativePositionY (yPercent) {
        return this.height * (yPercent / 100);
    }
}
