export const TETROMINOS = {
  0: { shape: [[0]], color: "0,0,0" },
  I: {
    shape: [
      [0, "I", 0, 0],
      [0, "I", 0, 0],
      [0, "I", 0, 0],
      [0, "I", 0, 0],
    ],
    color: "80, 227, 230",
  },
  J: {
    shape: [
      [0, "J", 0],
      [0, "J", 0],
      ["J", "J", 0],
    ],
    color: "36, 95, 223",
  },
  K: {
    shape: [
      ["K", "K", "K"],
      [0, "K", 0],
      [0, 0, 0],
    ],
    color: "227, 71, 190",
  },
  L: {
    shape: [
      [0, "L", 0],
      [0, "L", 0],
      [0, "L", "L"],
    ],
    color: "223, 173, 36",
  },
  O: {
    shape: [
      ["O", "O"],
      ["O", "O"],
    ],
    color: "223, 217, 36",
  },
  P: {
    shape: [
      ["P", "P"],
      [0, "P"],
    ],
    color: "247, 247, 245",
  },
  S: {
    shape: [
      [0, "S", "S"],
      ["S", "S", 0],
      [0, 0, 0],
    ],
    color: "48, 211, 56",
  },
  T: {
    shape: [
      ["T", "T", "T"],
      [0, "T", 0],
      [0, "T", 0],
    ],
    color: "148, 61, 198",
  },
  Z: {
    shape: [
      ["Z", "Z", 0],
      [0, "Z", "Z"],
      [0, 0, 0],
    ],
    color: "228, 78, 78",
  },
};

export const randomTet = () => {
  const tet = 'IJKLOPSTZ';
  const randTetro = tet[Math.floor(Math.random() * tet.length)];

  return TETROMINOS[randTetro];
}
