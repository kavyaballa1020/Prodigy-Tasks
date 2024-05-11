let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = false;
let gameMode = 'normal'; // Default game mode is normal (user vs user)

const checkWin = () => {
  // Win conditions check logic remains the same
};

const handleResult = (result) => {
  // Handle result logic remains the same
};

const setStatus = (message) => {
  // Set status logic remains the same
};

const makeMove = (index) => {
  if (gameActive && !board[index]) {
    board[index] = currentPlayer;
    document.getElementsByClassName('square')[index].innerText = currentPlayer;
    
    const winner = checkWin();
    if (winner) {
      handleResult(winner);
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      setStatus(`Player ${currentPlayer}'s turn`);
      if (gameMode === 'computer' && currentPlayer === 'O') {
        setTimeout(computerMove, 500); // If playing with computer and it's computer's turn, make a move for the computer
      }
    }
  }
};

const resetGame = () => {
  currentPlayer = 'X';
  board = ['', '', '', '', '', '', '', '', ''];
  gameActive = true;
  setStatus(`Player ${currentPlayer}'s turn`);
  document.querySelectorAll('.square').forEach(square => square.innerText = '');
};

const computerMove = () => {
  // Computer move logic remains the same
};

const playWithUser = () => {
  gameMode = 'normal'; // Set game mode to normal (user vs user)
  resetGame();
};

const playWithComputer = () => {
  gameMode = 'computer'; // Set game mode to computer (user vs computer)
  resetGame();
  if (currentPlayer === 'O') {
    setTimeout(computerMove, 500); // If computer starts, make a move
  }
};

setStatus(`Player ${currentPlayer}'s turn`);

document.querySelectorAll('.square').forEach((square, index) => {
  square.addEventListener('click', () => {
    if (gameActive) {
      makeMove(index);
    }
  });
});
