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
let direction
let food
let gameInterval;
let isGameRunning = false;
let score = 0;
/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/
resetButton.addEventListener('click', resetGame);
/*-------------------------------- Functions --------------------------------*/

// createBoard
// Code with create and array of arrays using x,y
function createBoard() {
   
}
// updateBoard
// this will check for snake location as well and food location/
// Collision Mechanic will be based off of 0x 0y and x.max and y.max
function updateBoard() {

}
// Switch Case>Change Direction> event Listener
// add something to snake stop from going backwards
// Game Starts upon user input
function changeDirection() {

}
// Snake
// shift in the head where the food position is.
// maybe a method to induce a larger head and smaller tail?.

function moveSnake() {

}
// Food
// new location based of x/y random number.
function placeFood() {

}
// Reset Game
// make this reset the board to 0,
// reset snakes location.
// Run Core Functions from the beginning.
// Event Listener for a button.

function resetGame() {

}

function Init() {

}

