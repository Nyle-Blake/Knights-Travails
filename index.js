const buildBoard = () => {
  let newArr = [];
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      newArr.push([i, j])
    }
  }
  return newArr;
};

const containsSq = (board, sq) => {
  if (board.find(elem => elem[0] == sq[0] && elem[1] == sq[1])) return true
}

const knightsTravails = (a, b, x, y) => {
  if (a > 7 || b > 7 || x > 7 || b > 7) {
    console.log("Given starting or ending co-ordinates are out of bounds!")
    return;
  }
  const myBoard = buildBoard();
  const steps = [[1, 2], [1, -2], [2, 1], [2, -1], [-1, 2], [-1, -2], [-2, 1], [-2, -1]];

  let seen = [];

  const queue = [[[[a, b]], [a, b]]];

  while (queue) {
    let queueItem = queue.shift()
    let path = queueItem[0], coords = queueItem[1];
    if (coords[0] == x && coords[1] == y) {
      console.log("path completed", path.length - 1)
      console.log(path)
      return path
    }

    let nextcoord;
    steps.forEach(step => {
      nextcoord = [coords[0] + step[0], coords[1] + step[1]]

      if (!seen.includes(nextcoord)) {
        if (containsSq(myBoard, nextcoord)) {
          queue.push([path.concat([nextcoord]), nextcoord])
          seen.push(nextcoord)
        }
      }
    })
  }
}

knightsTravails(2, 2, 8, 7)

// use buildBoard, bfsInfo, buildAdjList functions in this version so you can track what steps are taken to get to destination
// look at other solution and see how they track the steps