let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const gencompchoice=()=>{
   const options=["rock","paper","scissors"];
   const randIdx=Math.floor(Math.random()*3);
   return options[randIdx];
};

const drawGame=()=>{
    console.log("game was draw.");
     msg.innerText="game was draw play again";
}
const showWinner=(userwin,userchoice,compchoice)=>{
      if(userwin){
         userScore++;
         userScorePara.innerText=userScore;
        msg.innerText=`you Win! ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
      }
      else{
         compScore++;
         compScorePara.innerText=compScore;
        console.log("you LOSE");
        msg.innerText=`you Lose! ${compchoice} beats ${userchoice}`
         msg.style.backgroundColor="red";
      }
}
const playGame=(userchoice)=>{
     console.log("user choice=",userchoice);
      const compchoice=gencompchoice();
      console.log("computer choice=",compchoice);

      if(userchoice==compchoice){
         drawGame();
      }
      else{
        let userwin=true;
        if(userchoice=="rock"){
           userwin= compchoice=="paper" ? false:true;
        }
        else if(userchoice=="paper"){
            userwin=compchoice=="scissors" ? false:true;
        }
         else {
            userwin=compchoice=="rock" ? false:true;
        }
        showWinner(userwin,userchoice,compchoice);
      }
};

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
           const userchoice=choice.getAttribute("id");
            console.log("choice was clicked",userchoice);
            playGame(userchoice);
    });
});