import { Guitar } from "./src/js/guitar.js";

/**
 * @type {HTMLCanvasElement}
 */
const canvas = document.getElementById("canvas");
/**
 * @type {CanvasRenderingContext2D}
 */
const c = canvas.getContext("2d");

const guitar = new Guitar({
    src: "./src/img/guitarneck.jpg",
    position: {
        x: 0,
        y: 0,
    },
    c,
});

c.fillStyle = "rgb(100,100,100)";
c.fillRect(0, 0, canvas.width, canvas.height);

const scale = 1.5;

guitar.image.onload = () => {
    // c.save();
    const img = guitar.image;
    canvas.width = img.width * scale;
    canvas.height = img.height * scale;
    // guitar.draw();
    c.scale(1.5, 1.5);
    c.drawImage(
        guitar.image,
        guitar.position.x,
        guitar.position.y,
        img.width,
        img.height
    );
    c.strokeStyle = "rgba(255, 0, 0, 1)";
    c.beginPath();
    c.lineWidth = 1;
    c.arc(238, 45, 5, 0, Math.PI * 2);
    c.stroke();
    c.closePath();
    // c.restore();
};
