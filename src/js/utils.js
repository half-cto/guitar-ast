/**
 * A 2D array representing the notes on a guitar neck.
 * Each sub-array represents a string on the guitar, ordered from the 1th string (E) to the 6st string (E).
 * Each element within a sub-array represents a fret on that string, ordered from the open string (0th fret) to the 12th fret.
 * @type {string[][]}
 */

export const neckNotes = [
  ["E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D", "D#", "E"], // 1st string (E)
  ["B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"], // 2nd string (B)
  ["G", "G#", "A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G"], // 3rd string (G)
  ["D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D"], // 4th string (D)
  ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A"], // 5th string (A)
  ["E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D", "D#", "E"], // 6th string (E)
];

export const colorPallete = {
  primary: "#0b3b74",
  secondary: "#54d2d2",
  trenary: "#ffcb00",
  fourth: "#f8aa4b",
  fifth: "#ff6150",
  neutral200: "#F1F1F1",
  neutral400: "#CDCDCD",
  neutral600: "#434343",
  neutral800: "#000",
};
