import { neckNotes, colorPallete } from "./utils";

export class Note {
  constructor({
    note,
    deg = 0,
    fretboardCordinates = { x: 70, y: 40, strDist: 40, fretDist: 70 },
  }) {
    this.note = note;
    this.deg = deg;
    this.fretboardCordinates = fretboardCordinates;
    this.neckNotes = neckNotes;
    this.c = window.context2d;
  }

  drawAllPositionsOnString(str, writeNote) {
    let { x, y } = this.getNoteCordinatesOnNeck(str);
    this.draw(x, y);
    this.write(x, y, writeNote);
    const from12thFret = this.getNoteCordinatesOnNeckFrom12thFret(str);
    if (from12thFret) {
      this.draw(from12thFret.x, from12thFret.y);
      this.write(from12thFret.x, from12thFret.y, writeNote);
    }
  }

  draw(x, y) {
    let color = this.getColorByDeg();
    this.c.strokeStyle = color;
    this.c.fillStyle = color;
    this.c.beginPath();
    this.c.lineWidth = 2;
    this.c.arc(x, y, 15, 0, Math.PI * 2);
    this.c.stroke();
    this.c.fill();
    this.c.closePath();
  }

  write(x, y, writeNote = false) {
    let fillText = writeNote ? this.note : this.deg.toString();
    if (fillText === "1") {
      fillText = "R";
    }
    const fontColor =
      this.deg == 1 || this.deg == 3 || this.deg == 5 || this.deg == 0
        ? colorPallete.neutral200
        : colorPallete.neutral600;
    this.c.fillStyle = fontColor;
    this.c.font = "20px Overpass Mono";
    if (fillText.length === 1) {
      this.c.fillText(fillText, x - 6, y + 6);
    } else {
      this.c.fillText(fillText, x - 12, y + 6);
    }
  }

  getNoteFret(str) {
    return this.neckNotes[str].indexOf(this.note);
  }

  getNoteCordinatesOnNeck(str) {
    const noteFret = this.getNoteFret(str);
    const noteX = this.getNoteX(noteFret);
    const noteY = this.getNoteY(str);
    return { x: noteX, y: noteY };
  }

  getNoteCordinatesOnNeckFrom12thFret(str) {
    const fretsFrom12th = 5;
    const xPadding = 12 * this.fretboardCordinates.fretDist;
    const noteFret = this.getNoteFret(str);
    if (noteFret >= fretsFrom12th) {
      return;
    } else {
      const noteX = this.getNoteX(noteFret) + xPadding;
      const noteY = this.getNoteY(str);
      return { x: noteX, y: noteY };
    }
  }

  getNoteX(noteFret) {
    return (
      this.fretboardCordinates.x +
      this.fretboardCordinates.fretDist * noteFret -
      this.fretboardCordinates.fretDist / 2 +
      3
    );
  }

  getNoteY(str) {
    return (
      this.fretboardCordinates.y + this.fretboardCordinates.strDist * str + 1
    );
  }

  getColorByDeg() {
    let color = colorPallete.neutral400 + "B3";
    if (this.deg === 1 || this.deg === 0) {
      color = colorPallete.primary + "B3";
    } else if (this.deg === 3) {
      color = colorPallete.secondary;
    } else if (this.deg === 5) {
      color = colorPallete.trenary;
    }

    return color;
  }
}
