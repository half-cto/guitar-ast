import { Circle } from "./Circle.js";
import { Sprite } from "./Sprite.js";
import { neckNotes } from "./utils.js";

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
    constructor({ src, position }) {
        super({ src, position });
        this.c = window.context2d;
        /**
         * An object representing the coordinates of the strings and frets on a guitar neck.
         * @type {Object}
         * @property {number[][]} string - An array of arrays, each representing the y-coordinates of a string on the guitar neck.
         * @property {number[]} fret - An array representing the x-coordinates of the frets on the guitar neck.
         */
        this.neckCordinates = {
            neckY: [
                [44, 53, 62, 72, 81, 90],
                [44, 53, 62, 72, 81, 90],
                [44, 53, 62, 72, 81, 90],
                [44, 53, 62, 72, 81, 90],
                [44, 53, 62, 72, 81, 90],
                [43, 53, 62, 72, 81, 91],
                [43, 53, 62, 72, 81, 91],
                [42, 52, 62, 72, 81, 91],
                [42, 52, 62, 72, 81, 91],
                [42, 52, 62, 72, 82, 91],
                [42, 52, 62, 72, 82, 91],
                [41, 52, 62, 72, 82, 92],
                [41, 52, 62, 72, 82, 92],
                [40, 51, 62, 73, 83, 93],
                [40, 51, 62, 73, 83, 93],
                [40, 51, 62, 73, 83, 93],
                [40, 51, 62, 73, 83, 93],
                [40, 51, 62, 73, 83, 93],
            ],
            neckX: [
                200, 238, 281, 319, 356, 389, 422, 453, 482, 509, 535, 559, 582,
                603, 624, 643, 661, 679,
            ],
        };
        /**
         * A 2D array representing the notes on a guitar neck.
         * Each sub-array represents a str on the guitar, ordered from the 6th string (E) to the 1st string (E).
         * Each element within a sub-array represents a fret on that string, ordered from the open string (0th fret) to the 12th fret.
         * @type {string[][]}
         */
        this.neckNotes = neckNotes;
    }

    draw() {
        this.c.drawImage(this.image, this.position.x, this.position.y);
    }

    getNoteCordinatesOnOneString(note, str) {
        const noteIdx = this.neckNotes[str].indexOf(note);
        const noteX = this.neckCordinates.neckX[noteIdx];
        const noteY = this.neckCordinates.neckY[noteIdx][str];
        return { x: noteX, y: noteY };
    }

    getNoteCordintesOnAllStrings(note) {
        const noteCordinates = [];
        for (let i = 0; i < this.neckNotes.length; i++) {
            const fret = this.neckNotes[i].indexOf(note);
            noteCordinates.push({
                str: i,
                fret: str.indexOf(note),
            });
            // console.log(note);
            // console.log(str);
        }
        // console.log(noteCordinates);
        return noteCordinates;
    }

    drawNote(note, str) {
        const position = this.getNoteCordinatesOnOneString(note, str);
        const circle = new Circle({ position });
        circle.draw();
    }

    drawNoteOnAllStrings(note) {
        const noteCordinates = this.getNoteOnAllStrings(note);

        for (const { str, fret } of noteCordinates) {
            const x = this.neckCordinates.fret[fret];
            const y = this.neckCordinates.str[str];

            // console.log(x, y);
            this.c.strokeStyle = "rgba(255, 255, 255, 0.5)";
            this.c.fillStyle = "rgba(255, 0, 0, .7)";
            this.c.beginPath();
            this.c.lineWidth = 1;
            this.c.arc(x, y, 5, 0, Math.PI * 2);
            this.c.stroke();
            this.c.fill();
            this.c.closePath();
        }
    }

    drawAllNotes() {
        const circle = new Circle({
            position: {
                x: 0,
                y: 0,
            },
            c: this.c,
        });

        const { neckX, neckY } = this.neckCordinates;
        for (let i = 0; i < neckX.length; i++) {
            const noteX = neckX[i];
            for (let j = 0; j < neckY[i].length; j++) {
                const noteY = neckY[i][j];
                circle.position = { x: noteX, y: noteY };
                circle.draw();
            }
        }
    }
}
