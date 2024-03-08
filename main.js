import { Music } from "./src/js/Music.js";
import { Fretboard } from "./src/js/Fretboard.js";
import { Note } from "./src/js/Note.js";

/**
 * @type {HTMLCanvasElement}
 */
const canvas = document.getElementById("canvas");
/**
 * @type {CanvasRenderingContext2D}
 */
const c = canvas.getContext("2d");
window.context2d = c;

const music = new Music();
const fretboard = new Fretboard();

canvas.width = 1300;
canvas.height = 300;

document.fonts.ready.then(() => drawContent());
// document.fonts.forEach((font) => console.log(font));

function drawContent() {
  c.fillStyle = "white";
  c.fillRect(0, 0, canvas.width, canvas.height);

  fretboard.draw();

  // event listeners for app controll
  const input = document.getElementById("note");
  const button = document.getElementById("showNote");

  button.addEventListener("click", (e) => {
    e.preventDefault();
  });
  //  ------------

  const note = new Note({
    note: "G",
  });

  // note.drawAllPositionsOnString(0, true);

  const scale = music.getTriad("C", music.scales.Maj);
  console.log(scale);
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < scale.length; j++) {
      note.note = scale[j].note;
      note.deg = scale[j].deg;
      note.drawAllPositionsOnString(i);
    }
  }
}
