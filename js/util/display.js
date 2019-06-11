export default class Display {
    constructor() {
        this.calculateSize();
    }

    calculateSize() {
        if (screen.width < (screen.height * 0.8)) {
            this.width = screen.width;
            this.height = screen.height;
        } else {
            this.width = screen.height * 0.8;
            this.height = screen.height;
        }
        //this.width = 576;
        //this.height = 1024;
    }

    getRelativePositionX(xPercent) {
        return this.width * (xPercent / 100);
    }

    getRelativePositionY(yPercent) {
        return this.height * (yPercent / 100);
    }

    calculateScale() {

    }
}
