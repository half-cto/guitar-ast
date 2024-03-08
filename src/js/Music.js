import { neckNotes } from "./utils";

export class Music {
  constructor() {
    this.notes = [
      "C",
      "C#",
      "D",
      "D#",
      "E",
      "F",
      "F#",
      "G",
      "G#",
      "A",
      "A#",
      "B",
    ];

    this.neckNotes = neckNotes;
    this.scales = {
      Maj: [2, 2, 1, 2, 2, 2],
      Min: [2, 1, 2, 2, 1, 2],
    };
  }

  getScale(root, scale) {
    const rootIndex = this.notes.indexOf(root);
    let deg = 1;
    const scaleNotes = [{ note: this.notes[rootIndex], deg }];
    let index = rootIndex;
    for (let i = 0; i < scale.length; i++) {
      index += scale[i];
      deg += 1;
      if (index >= this.notes.length) {
        index = index - this.notes.length;
      }
      scaleNotes.push({ note: this.notes[index], deg });
    }
    return scaleNotes;
  }

  getTriad(root, scale) {
    const scaleNotes = this.getScale(root, scale);
    const triad = [scaleNotes[0], scaleNotes[2], scaleNotes[4]];
    return triad;
  }
}
