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
    }

    getMaj(root) {
        const majIntervals = [2, 2, 1, 2, 2, 2, 1];
        const rootIndex = this.notes.indexOf(root);
        const scale = [this.notes[rootIndex]];
        let index = rootIndex;
        for (let i = 0; i < majIntervals.length; i++) {
            index += majIntervals[i];
            if (index >= this.notes.length) {
                index = index - this.notes.length;
            }
            scale.push(this.notes[index]);
        }
        return scale;
    }
}
