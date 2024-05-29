const buildBoard = () => {
  let newArr = []
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      newArr.push([j, i])
    }
  }
  return newArr
}

const findIndex = (board, start) => {
  for (let i = 0; i < board.length; i++) {
    if (board[i][0] == start[0] && board[i][1] == start[1]) {
      return i;
    }
  }
}
// build list of neighbours each co-ordinate (vertex) has
const buildAdjList = (board) => {
  let adjList = [];
  for (let i = 0; i < board.length; i++) {
    let neighbours = [];
    for (let j = 0; j < 8; j++) { // up to 8, as 8 is the number of different places the knight can travel to
      let n = findNextMove(j, board[i][0], board[i][1]) // j which is our current step (e.g. 1, -2), and x + y co-ordinates
      if (boardHas(board, n)) {
        neighbours.push(n);
      }
    }
    adjList.push(neighbours)
  }
  return adjList
}
// returns co-ordinates that the knight could move to from current position
// this is carried out 8 times as there are maximum 8 squares a knight can move to
const findNextMove = (step, x, y) => {
  if (step == 0) return [x + 1, y + 2];
  if (step == 1) return [x + 1, y + -2];
  if (step == 2) return [x + -1, y + 2];
  if (step == 3) return [x + -1, y + -2];
  if (step == 4) return [x + 2, y + 1];
  if (step == 5) return [x + 2, y + -1];
  if (step == 6) return [x + -2, y + 1];
  if (step == 7) return [x + -2, y + -1];
}
// checks if co-ordinate is on the board
const boardHas = (board, target) => {
  if (board.find(elem => elem[0] == target[0] && elem[1] == target[1])) return true
}


const knightsTravails = (start, end) => {
  const myBoard = buildBoard();
  const startIndex = findIndex(myBoard, start);
  const endIndex = findIndex(myBoard, end);
  const adjList = buildAdjList(myBoard);
  let q = [startIndex];
  let current;

  while (current !== endIndex) {
    let seen = [myBoard[startIndex]]

    current = q.shift();
    // iterate through each neighbour vertex of current vertex
    for (let i = 0; i < adjList[current].length; i++) {
      let neighbourIndex = findIndex(myBoard, adjList[current][i])

      if (neighbourIndex == endIndex) {
        seen.push(myBoard[neighbourIndex])
        console.log("path completed", squaresChecked)
        return;
      } else {
        q.push(neighbourIndex)
        seen.push(myBoard[neighbourIndex])
        console.log("onto queue")
      } // This part could be changed to use recursion
    }
  }
}

knightsTravails([0, 0], [7, 4])