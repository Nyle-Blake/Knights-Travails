const buildBoard = () => {
  let newBoard = [];
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      newBoard.push([i, j]);
    }
  }
  return newBoard;
}

const containsSq = (board, sq) => {
  if (board.find(elem => elem[0] == sq[0] && elem[1] == sq[1])) return true
}

const knightsTravails = (a, b, x, y) => {
  if (a > 7 || b > 7 || x > 7 || y > 7) {
    return "Input is out of bounds, must be 0 - 7";
  }
  const myBoard = buildBoard()
  const seen = [];
  const steps = [[1, 2], [1, -2], [-1, 2], [-1, -2], [2, 1], [2, -1], [-2, 1], [-2, -1]];
  let q = [[[[a, b]], [a, b]]];

  while (q) {
    let qItem = q.shift()
    let path = qItem[0], coords = qItem[1];

    if (coords[0] == x && coords[1] == y) {
      return ['num moves:', path.length - 1, 'path:', path];
    } else {
      let nextcoords;
      steps.forEach(s => {
        nextcoords = [coords[0] + s[0], coords[1] + s[1]];

        if (!seen.includes(nextcoords)) {
          if (containsSq(myBoard, nextcoords)) {
            seen.push(nextcoords);
            q.push([path.concat([nextcoords]), nextcoords]);
          }
        }
      })
    }
  }
};

console.log(knightsTravails(1, 3, 9, 4));