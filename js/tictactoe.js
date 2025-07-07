let board = [];

function startGame() {
  board = Array(9).fill('');
  const boardDiv = document.getElementById('board');
  boardDiv.innerHTML = '';
  document.getElementById('result').textContent = '';

  for (let i = 0; i < 9; i++) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.onclick = () => playerMove(i);
    boardDiv.appendChild(cell);
  }
}

function playerMove(index) {
  if (board[index] !== '') return;

  board[index] = 'X';
  updateBoard();
  if (checkWinner('X')) {
    document.getElementById('result').textContent = 'Player Wins!!';
    return;
  }

  setTimeout(aiMove, 300);
}

function aiMove() {
  const empty = board.map((v, i) => v === '' ? i : null).filter(v => v !== null);
  if (empty.length === 0) {
    document.getElementById('result').textContent = "It's a draw!";
    return;
  }

  const move = empty[Math.floor(Math.random() * empty.length)];
  board[move] = 'O';
  updateBoard();

  if (checkWinner('O')) {
    document.getElementById('result').textContent = 'AI Wins!';
  }
}

function updateBoard() {
  document.querySelectorAll('.cell').forEach((cell, i) => {
    cell.textContent = board[i];
  });
}

function checkWinner(p) {
  const win = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];
  return win.some(combo => combo.every(i => board[i] === p));
}

startGame();
