let dicebtn=document.getElementById('dice');
const scoreE1=document.getElementById("score1");
const scoreE2=document.getElementById("score2");

const diceVal=[1,2,3,4,5,6];
let score1=0;
let score2=0;
const TARGET=30;
let currentplayer=1;

function rolldice() {
    const value = diceVal[Math.floor(Math.random() * diceVal.length)];
    if(currentplayer==1){
        score1+=value;
        scoreE1.textContent=score1;
        currentplayer=2;
    }
    else{
        score2+=value;
        scoreE2.textContent=score2;
        currentplayer=1;
    }
    if (score1 >= TARGET) {
    alert("Player 1 Wins!");
    dicebtn.disabled=true;
    dicebtn.style.opacity = "0.5";
     } 
     else if (score2 >= TARGET) {
    alert("Player 2 Wins!");
     dicebtn.disabled=true;
    dicebtn.style.opacity = "0.5";
    }
}