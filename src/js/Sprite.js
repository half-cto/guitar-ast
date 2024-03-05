export class Sprite {
    constructor({ src, position = { x: 0, y: 0 } }) {
        this.image = new Image();
        this.image.src = src;
        this.position = position;
    }
}
