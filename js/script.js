/*-------------------------------- Constants --------------------------------*/
const gameBoard = document.getElementById('game-board');
const gameOverText = document.getElementById('text-element')
const scoreDisplay = document.getElementById('score-element')
const resetButton = document.getElementById('reset-button')
const boardSize = 30;
/*-------------------------------- Variables --------------------------------*/
let cells = [];
let snake = [{ x: 10, y: 10 }];
let direction = { x: 0, y: 0 };
let food = { x: 15, y: 15 };
let gameInterval;
let isGameRunning = false;
let score = 0;
/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/
resetButton.addEventListener('click', resetGame);
/*-------------------------------- Functions --------------------------------*/
function createBoard() {
  gameBoard.innerHTML = ''; //This should create Cells
  cells = []; // set cells array to empty
  for (let i = 0; i < boardSize; i++) {
      for (let j = 0; j < boardSize; j++) {
          const cell = document.createElement('div');
          cell.classList.add('cell');
          cells.push(cell);
          gameBoard.appendChild(cell);
      } //creation of the board.
  }
}
function updateBoard() {
  cells.foreach(cell => cell.classList.remove('snake', 'snake-head', 'snake-tail', 'food')); 
  snake.foreach((segment,index) => {
    const cell = cells[segment.y * boardSize + segment.x];
    if (index === 0) {
      cell.classList.add('snake-head')
    } else if (index === snake.length -1 ) {
      cell.classList.add('snake-tail')
    } else {
      cell.classList.add('snake')
    } //constantly checking snake location
  });
  const foodIndex = food.y * boardSize + food.x; //this checks for food always on board
  cells[foodIndex].classList.add('food');
}

function changeDirection() {
  let newDirection;
  switch (event.key) {
    case 'ArrowUp':
      newDirection = { x: 0, y: -1 };
      break;
    case 'ArrowDown':
      newDirection = { x: 0, y: 1 };
      break;
    case 'ArrowLeft':
      newDirection = { x: -1, y: 0 };
      break;
    case 'ArrowDown':
      newDirection = { x: 1, y: 0 };
      break;
    default:
        return; //this should ignore other keys.
  }

  //prevention of snake hitting that reverse
  if (direction.x + newDirection.x === 0 && direction.y + newDirection.y === 0) {
    return;
}

direction = newDirection;

if (!isGameRunning) {
    isGameRunning = true;
    gameInterval = setInterval(moveSnake, 150); //this sets the snakes speed
}
}

function moveSnake() {
  const newHead = { x: snake[0].x + direction.x, y: snake[0].y + direction.y }; 
  if (newHead.x < 0 || newHead.x >= boardSize || newHead.y < 0 || newHead.y >= boardSize || snake.some((segment, index) => index > 0 && segment.x === newHead.x && segment.y === newHead.y)) { //self collision in here.
      clearInterval(gameInterval);
      gameOverText.textContent = `Y U No Stop?!?`;
      isGameRunning = false;
      return;
  }
  snake.unshift(newHead); //growth from head using unshift.
  if (newHead.x === food.x && newHead.y === food.y) {
      placeFood();
      score++;
      scoreDisplay.textContent = `Score: ${score}`;
  } else {
      snake.pop();
  }
  updateBoard();
}
function placeFood() {
  let newFoodPosition;
  do {
    newFoodPosition = { x: Math.floor(Math.random() * boardSize), y: Math.floor(Math.random() * boardSize) };
    } while (snake.some(segment => segment.x === newFoodPosition.x && segment.y === newFoodPosition.y));
    food = newFoodPosition;  //randomization of food placement.
}

function resetGame() {
  clearInterval(gameInterval); 
  gameOverText.textContent = '';
  score = 0;
  scoreDisplay.textContent = `Score: ${score}`;
  snake = [{x:10, y:10}];
  direction = {x:0, y:0};
  food = {x:15, y:15};
  isGameRunning: false;
  createBoard();
  updateBoard();
}

function Init() {
  createBoard();
  updateBoard();
  document.addEventListener('keydown', changeDirection);
}

resetButton.addEventListener('click', resetGame);

Init();

