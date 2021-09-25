let playeroneEL = document.querySelector(".player--0");
let playertwoEL = document.querySelector(".player--1");
let scoreoneEL = document.querySelector("#score--0");
let scoretwoEL = document.querySelector("#score--1");
let currentscoreone = document.querySelector("#current--0");
let currentscoretwo = document.querySelector("#current--1");
let playersection = document.querySelector(".player");
//grab the 
let btnroll = document.querySelector(".btn--roll");
let btnnew = document.querySelector(".btn--new");
let btnhold = document.querySelector(".btn--hold");

//change players  values to zeros
scoreoneEL.textContent = 0;
scoretwoEL.textContent = 0;
console.log(scoreoneEL,scoretwoEL); 

//set the program ever used conditions
let currentscore = 0;
let activeplayer = 0;
//finalscore array
let finalscore = [0,0]

//swith player function
const switchplayer = ()=>{
 //change the active player and other instances does change afterwards
     //change the currentscore to zero in DOM and programm
     document.querySelector(`#current--${activeplayer}`).textContent = 0;
     //it updates the current score in the program in the next player
     currentscore = 0;
     //change the active player in the program onwards
    activeplayer = activeplayer === 0 ? 1 :0;
    playeroneEL.classList.toggle("player--active");
    playertwoEL.classList.toggle("player--active");
}

//check if you are playing
let playing = true;

//Grab the dice
let diceEl = document.querySelector(".dice");
//hide the dice
diceEl.classList.add("hidden");
btnroll.addEventListener("click",()=>{
    if (playing) {
//roll the dice and update the dice image,
    let rolleddice = Math.trunc(Math.random()*6+1);
    diceEl.src = `dice-${rolleddice}.png`;
    if ( rolleddice !== 1) {
         //ADD THE ROLLED VALUE TO CURRENTSCORE
    currentscore += rolleddice;
    diceEl.classList.remove("hidden");
    //update the textcontent of the playerone
 document.querySelector(`#current--${activeplayer}`).textContent = currentscore;
 //swithc to anotherplayer
    }else{
      switchplayer();
    }
   
} }
)

//hpld button functionality
btnhold.addEventListener("click",()=>{
    if (playing) {
      //update the current textcontent of activeplayer
    document.querySelector(`#current--${activeplayer}`).textContent = currentscore;
    finalscore[activeplayer] += currentscore;
 document.querySelector(`#score--${activeplayer}`).textContent = finalscore[activeplayer];
 if (finalscore[activeplayer]  >= 20) {
     playing = false;
    document.querySelector(`.player--${activeplayer}`).classList.add("player--winner");
    document.querySelector(`.player--${activeplayer}`).classList.remove("player--active");
 }
   switchplayer();
}
})

//btnnew reset function
const resetfuncy = ()=>{
  //start conditions
  diceEl.classList.add("hidden");
  activeplayer = 0;
currentscore = 0;
scoreoneEL.textContent = 0;
scoretwoEL.textContent = 0;
currentscoreone.textContent = 0;
currentscoretwo.textContent = 0;
finalscore = [0,0];
playeroneEL.classList.remove("player--winner");
playertwoEL.classList.remove("player--winner");
playeroneEL.classList.add("player--active");
playertwoEL.classList.remove("player--active");
}

//reseting values
btnnew.addEventListener("click",()=>{
  //hide the dice
  playing = true;
  if (playing) {
  resetfuncy();
}
})

