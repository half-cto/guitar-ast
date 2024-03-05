import { Sprite } from "./Sprite.js";

export class Guitar extends Sprite {
    /**
     * Creates a new Guitar instance.
     * @param {Object} options - Options for creating the Guitar.
     * @param {string} options.src - The source of the sprite image.
     * @param {Object} options.position - The position of the sprite.
     * @param {number} options.position.x - The x-coordinate of the sprite's position.
     * @param {number} options.position.y - The y-coordinate of the sprite's position.
     * @param {CanvasRenderingContext2D} options.c - The context in which to draw the sprite.
     */
    constructor({ src, position, c }) {
        super({ src, position });
        this.c = c;
    }

    draw() {
        this.c.drawImage(this.image, this.position.x, this.position.y);
    }
}
