const puzzle = [
  [7,5,0,8,3,0,0,2,0],
  [5,9,0,2,0,0,0,3,0],
  [3,4,0,0,6,5,0,7,0],
  [7,9,5,0,0,6,3,2,0],
  [0,3,6,9,0,7,1,0,0],
  [6,8,0,0,2,0,0,0,7],
  [9,1,4,8,3,5,7,6,0],
  [0,3,7,0,1,4,9,5,0],
  [5,6,7,4,2,9,1,3,0]
];

const answer = [
  [7,5,1,8,3,9,6,2,4],
  [5,9,6,2,7,1,8,3,0],
  [3,4,2,1,6,5,9,7,8],
  [7,9,5,0,4,6,3,2,1],
  [2,3,6,9,8,7,1,4,5],
  [6,8,4,5,2,3,0,1,7],
  [9,1,4,8,3,5,7,6,2],
  [8,3,7,6,1,4,9,5,0],
  [5,6,7,4,2,9,1,3,8]
];

let board = [];

function buildBoard() {
  board = JSON.parse(JSON.stringify(puzzle));
  const container = document.getElementById("sudoku-board");
  container.innerHTML = "";
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const input = document.createElement("input");
      input.type = "text";
      input.maxLength = 1;
      input.className = "cell";
      input.id = `cell-${i}-${j}`;
      if (puzzle[i][j] !== 0) {
        input.value = puzzle[i][j];
        input.disabled = true;
      }
      container.appendChild(input);
    }
  }
}

function check() {
  let correct = true;
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const cell = document.getElementById(`cell-${i}-${j}`);
      if (!cell.disabled && parseInt(cell.value) !== answer[i][j]) {
        correct = false;
        cell.style.color = 'red';
      } else {
        cell.style.color = 'black';
      }
    }
  }
  if (correct) alert("You solved it!");
  else alert("Some values are incorrect.");
}

function withdraw() {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const cell = document.getElementById(`cell-${i}-${j}`);
      cell.value = answer[i][j];
    }
  }
}

buildBoard();
