let board = document.getElementById('board');
let currentPlayer = 'X';
let gameOver = false;

function startGame() {
  board.innerHTML = '';
  currentPlayer = 'X';
  gameOver = false;
  for (let i = 0; i < 9; i++) {
    let cell = document.createElement('div');
    cell.addEventListener('click', handleCellClick);
    board.appendChild(cell);
  }
}

function handleCellClick(event) {
  if (gameOver) return;
  let cell = event.target;
  if (cell.innerHTML) return;

  cell.innerHTML = currentPlayer;
  if (checkWinner()) {
    alert(currentPlayer + ' wins!');
    gameOver = true;
    return;
  }

  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWinner() {
  const cells = board.getElementsByTagName('div');
  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
  ];

  for (let combination of winningCombinations) {
    let [a, b, c] = combination;
    if (cells[a].innerHTML && cells[a].innerHTML === cells[b].innerHTML && cells[a].innerHTML === cells[c].innerHTML) {
      return true;
    }
  }
  return false;
}

startGame();
