const diceBtn = document.getElementById("dice");
const diceImg = document.getElementById("diceImg");

const scoreE1 = document.getElementById("score1");
const scoreE2 = document.getElementById("score2");

const playerBox1 = document.getElementById("player1");
const playerBox2 = document.getElementById("player2");


playerBox1.style.backgroundColor = "lightgreen";
playerBox2.style.backgroundColor = "lightgray";
playerBox2.style.opacity = "0.5";

let score1 = 0;
let score2 = 0;

const TARGET = 10;
let currentPlayer = 1;
let gameOver = false;

function rolldice() {
if (gameOver) 
    return;
diceBtn.disabled = true;
const diceValue = Math.floor(Math.random() * 6) + 1;
    diceImg.src = `dice-${diceValue}.png`;

setTimeout(() => {
if (currentPlayer === 1) {
  if (score1 + diceValue <= TARGET) {
    score1 += diceValue;
    scoreE1.textContent = score1;
} else {
     alert("Exact number needed!");
 }
currentPlayer = 2;
playerBox1.style.backgroundColor = "lightgray";
playerBox1.style.opacity = "0.5";

 playerBox2.style.backgroundColor = "lightgreen";
  playerBox2.style.opacity = "1";
} else {
if (score2 + diceValue <= TARGET) {
    score2 += diceValue;
    scoreE2.textContent = score2;
} else {
alert("Exact number needed!");
}
currentPlayer = 1;
playerBox2.style.backgroundColor = "lightgray";
playerBox2.style.opacity = "0.5";
playerBox1.style.backgroundColor = "lightgreen";
playerBox1.style.opacity = "1";
 }
if (score1 === TARGET) {
     alert("Player 1 Wins!");
     endGame();
      return;
 }
if (score2 === TARGET) {
   alert("Player 2 Wins!");
     endGame();
     return;
 }
diceBtn.disabled = false;
}, 1000);
}
function endGame() {
    gameOver = true;
    diceBtn.disabled = true;
    diceBtn.style.opacity = "0.5";
}
