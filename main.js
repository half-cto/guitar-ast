import { Circle } from "./src/js/Circle.js";
import { Guitar } from "./src/js/guitar.js";
import { Music } from "./src/js/Music.js";
/**
 * @type {HTMLCanvasElement}
 */
const canvas = document.getElementById("canvas");
/**
 * @type {CanvasRenderingContext2D}
 */
const music = new Music();
const c = canvas.getContext("2d");
window.context2d = c;

const guitar = new Guitar({
    src: "./src/img/guitarneck.jpg",
    position: {
        x: 0,
        y: 0,
    },
});

// event listeners for app controll
const input = document.getElementById("note");
const button = document.getElementById("showNote");

button.addEventListener("click", (e) => {
    e.preventDefault();
    guitar.draw();
    for (let i = 0; i < 6; i++) {
        guitar.drawNote(input.value, i);
    }
});
//

const scale = 2;

guitar.image.onload = () => {
    const img = guitar.image;
    canvas.width = img.width * scale;
    canvas.height = img.height * scale;
    c.scale(2, 2);
    guitar.draw();

    const maj = music.getMaj("C");

    for (const note of maj) {
        guitar.drawNote(note, 0);
    }
};
