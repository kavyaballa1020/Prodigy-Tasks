let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

const checkWin = () => {
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let condition of winConditions) {
    const [a, b, c] = condition;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      gameActive = false;
      return board[a];
    }
  }

  if (!board.includes('')) {
    gameActive = false;
    return 'draw';
  }

  return null;
};

const handleResult = (result) => {
    let resultDiv=document.querySelector("#main");
  if (result === 'draw') {
    resultDiv.innerHTML = 'It is a Draw';
    resultDiv.className = 'alert alert-info';

  } else {
    setStatus(`Player ${result} wins!`);
  }
};

const setStatus = (message) => {
  document.getElementById('status').innerText = message;
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

setStatus(`Player ${currentPlayer}'s turn`);
