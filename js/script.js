// Main classes in the game will be snake, apple, and game logic

// game ends if snake hits own body or walls

// Walls will be all the barrier outside.

// Fruit Generates randomly elsewhere when eaten

// Player Controls snake though Arrow Keys

// Once games starts forces snake to keep moving.

// Snake will grow one more at the tail when eating fruit.

// a function that forces the snake to keep moving.

// Init to start the game Game Loop game state, user input, game rendering.

// Message saying user has lost or won.

// Board will be made up using a object carrying an array designed into a 15x15 cube. (this is changeable.

// As a User

// I want the game to keep moving continually

// I also want the fruit to keep regenerate and relocate

// I want the snake to move at a constant rate as well at grow at the end.

// I want to control the Snake using my keyboard.

// I want my game to keep score of how many fruit I've eaten

// I want the game to end if I crash into myself or the wall.

// I want the board to be outlined so I know the limitation.

// Figure our self Collision

/*-------------------------------- Constants --------------------------------*/
const gameBoard = document.getElementById('game-board');
const gameOverText = document.getElementById('text-element')
const scoreDisplay = document.getElementById('score-element')
const resetButton = document.getElementById('reset-button')
const boardSize = 30;
/*-------------------------------- Variables --------------------------------*/
let cells = [];
let snake [{x:10, y:10}];
let direction = {x:0, y:0};
let food = {x: 15. y:15};
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
// updateBoard
// this will check for snake location as well and food location/
// Collision Mechanic will be based off of 0x 0y and x.max and y.max
function updateBoard() {
  cells.foreach(cell => cell.classList.remove('snake', 'snake-head', 'snake-tail', 'food'));
  snake.foreach((segment,index) => {
    const cell = cells[segmeny.y * boardSize + segment.x];
    if (index === 0) {
      cell.classList.add('snake-head')
    } else if (index === snake.length -1 ) {
      cell.classList.add('snake-tail')
    } else {
      cell.classList.add('snake')
    }
  });
  const foodIndex = food.y * boardSize + food.xl
  cells[foodIndex].classList.add('food');
}
//TODO make food index placement 
// Switch Case>Change Direction> event Listener
// add something to snake stop from going backwards
// Game Starts upon user input
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

//game start upon user input
if (!isGameRunning) {
    isGameRunning = true;
    gameInterval = setInterval(moveSnake, 100);
}
}
// Snake
// shift in the head where the food position is.
// maybe a method to induce a larger head and smaller tail?.

function moveSnake() {
  const newhead = {};
  if
  //TODO focus on head direction movement and decide if i add to tail or head.
  //TODO either push it or unshift

  const newHead = {};
  if () {}
  clearInterval(gameInterval);
  gameOverText.textContent = 'Y U No Stop?!?';
  isGameRunning = false;
  return;
}
// Food
// new location based of x/y random number.
function placeFood() {
  let newfoodPosition;
  do {
    //TODO Math equation. this is breaking maybe mathfloor(mathrandom)
  } while //TODO new food placement. 
}
// Reset Game
// make this reset the board to 0,
// reset snakes location.
// Run Core Functions from the beginning.
// Event Listener for a button.

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

Init();

