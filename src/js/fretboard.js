export class Fretboard {
  constructor() {
    this.frets = 16;
    this.strings = 6;
    this.position = {
      x: 70,
      y: 40,
    };
    this.c = window.context2d;
    this.width = 5;
    this.height = 200;
    this.spaceBetweenStrings = this.height / (this.strings - 1);
  }

  draw() {
    /**
     * @type {CanvasRenderingContext2D}
     */
    const c = this.c;

    let { x, y } = this.position;
    // draw frets
    for (let i = 0; i <= this.frets; i++) {
      if (i === 0) {
        c.fillStyle = "black";
      } else {
        c.fillStyle = "gray";
      }
      c.fillRect(x + i * 70, y, this.width, this.height);
    }

    // draw strings
    for (let i = 0; i < this.strings; i++) {
      const stringWidth = i < 2 ? 1 : i < 4 ? 2 : 3;
      c.beginPath();
      c.strokeStyle = "black";
      c.lineWidth = 0.5;
      c.strokeRect(
        x + 2,
        y + i * this.spaceBetweenStrings,
        x + 70 * (this.frets - 1),
        stringWidth,
      );
      c.stroke();
      c.closePath();
    }

    // draw fret marker
    const fretMarkerFrets = [3, 5, 7, 9, 12, 15];
    c.strokeStyle = "lightgray";
    c.fillStyle = "lightgray";
    c.lineWidth = 2;

    for (let i = 0; i < fretMarkerFrets.length; i++) {
      if (fretMarkerFrets[i] === 12) {
        const markerX = this.getFretMarkerX(fretMarkerFrets[i]);
        let markerY = this.getFretMarkerY(2);
        this.drawFretMarker(markerX, markerY);
        markerY = this.getFretMarkerY(4);
        this.drawFretMarker(markerX, markerY);
      } else {
        const markerX = this.getFretMarkerX(fretMarkerFrets[i]);
        const markerY = this.getFretMarkerY(3);
        this.drawFretMarker(markerX, markerY);
      }
    }
  }

  getFretMarkerY(string) {
    const result =
      this.position.y +
      string * this.spaceBetweenStrings -
      this.spaceBetweenStrings / 2 +
      1;
    return result;
  }

  getFretMarkerX(fret) {
    return this.position.x + 70 * fret - 32;
  }

  drawFretMarker(markerX, markerY) {
    this.c.beginPath();
    this.c.arc(markerX, markerY, 8, 0, Math.PI * 2, 0);
    this.c.fill();
    this.c.stroke();
  }
}
