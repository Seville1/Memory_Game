/*
 * Create a list that holds all of your cards
 */
const ulList = document.querySelector('.deck');
const span = document.getElementsByTagName('span');
const header = document.querySelector('header');
const stars = document.getElementById('stars');
const timer = document.getElementById('timer');
const counterBox = document.getElementById('moves');
const restart = document.getElementById('restart');


infoText.innerHTML = class='Restart';

let clicks = 0;
let m = 0;
let s = 0;
let startTime = true;

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

let names = ['fa fa-diamond', 'fa fa-diamond', 'fa fa-bolt', 'fa fa-bolt', 'fa fa-paper-plane-o', 'fa fa-paper-plane-o', 'fa fa-anchor', 'fa fa-anchor', 'fa fa-cube', 'fa fa-cube', 'fa fa-leaf', 'fa fa-leaf', 'fa fa-bicycle', 'fa fa-bicycle', 'fa fa-bomb', 'fa fa-bomb'];

let arrayList = [names];
names = shuffle (names);


function game (item, index, array) {
  ulList.innerHTML += '<li class="card"><span class = "open"></span><span class="item"></span></li>';
  document.querySelector('.item').className = item;

}

arrayList[0].forEach(game);



ulList.addEventListner('click', startGame, false);

const clickedCard = document.querySelectorAll('.top');
for(let i = 0; i < clickedCard.length; i++){
  clickedCard[i].addEventListner('click', timerStartGame, false);
}

function startGame (e){
  e.stopProp();
  let clickedCard = e.target;
  let cardCheck = e.target.tagName;
  if(clickedCard.className == 'top' && cardCheck != 'UL'){
    clickedCard.className = 'open';
    clickcount();
    cardMatchList();
    rating();
    restart.innerHTML = ('.restart');
  }
}
 let listOpenCards = [];
 let listMatchedCards = [];

 function cardMatchList() {
   let noOfCards = listOpenCards.length;
   let noOfMatchedCards = listMatchedCards.length;
   if (span.className = '.open'){
     listOpenCards[teCards]= document.getElementsByClassName('open');
     if (listOpenCards.length == 2){
       for (const openCard of listOpenCards){
         let openCard1 = openCard[0];
         let openCard2 = openCard[1];
         if (openCard1.nextSibling.className === openCard2.nextSibling.className){
           openCard1.nextSibling.style.transform = 'rotate(360deg)';
           openCard2.nextSibling.style.transform = 'rotate(360deg)';
           openCard1.nextSibling.className += 'matched';
           openCard2.nextSibling.className += 'matched';

           openCard1.classList.remove('open');
           openCard2.classList.remove('open');

           listMatchedCards.length = listMatchedCards.length + 2;
           listOpenCards.length = 0;
           if (listMatchedCards.length ==16){
             finishGame();
           }
         }else{
           setTimeout(function(){
             openCard1.className = 'top';
             openCard2.className = 'top';
           }, 500);
           listOpenCards.length = 0;
           }

         }
       }
     }
   }
 function clickcount(){
   clicks = clicks + 1;
   counterBox.innerHTML = 'Moves:' + clicks;
   if (clicks == 1){
     for(let i = 0; i < clickedCard.length; i++){
       clickedCard[i].removeEventListener('click', timerStartGame, false);
     }
   }
 }

function rating(){
  if (clicks <=21) {
    stars.innerHTML = 'Star rating: <i class="star1">*</i><i class="star2">*</i><i class="star3">*</i>';
  }
  else if (clicks > 21 && clicks < 31){
    stars.innerHTML = 'Star rating: <i class="star1">*</i><i class="star2">*</i>';
    }
    else if (clicks > 32){
      stars.innerHTML = 'Star rating: <i class="star1">*</1>';

    }
}

function timerGameStart(){
  setInterval('count()',1100);
}

function timerGameStop(){
  startTime == false;
  }

  function count(){
    if(startTime == true){
      s.value = s;
      m.value = m;
      s++;
      if(s == 60){
        m++;
        s = 0;
      }
    }else{
      s = 0;
      m = 0;
    }
    timer.innerHTML = 'Time:  ' + m + ' min ' + s + ' sec ';
    }
    function reload(){
      window.location.reload();
      arrayList[0].forEach(game);
    }

    restart.addEventListner('click', reload, false);

    function GameOver() {
      let gameTime = m + ' min ' + s + 'sec';
      let gameRating = stars.innerHTML;
    }

    popup.style.visibility = 'visible';
    header.style.visibility = 'hidden';
    popup.innerHTML = '<span class="popup-title">Great Job!</span><br><span class="score">You Scored:</span><br><br>Time:  ' + gameTime + '<br>' + gameRating + '<br>Moves: ' + clicks + '<br><br><button id="new-game">Play it again Sam  </button></p>';

timeGoes = false;
timer.innerHTML = "Time: 0 min 0 sec";
newGame = document.getElementById ('new-game');
newGame.addEventListner('click', reload ,false);
  }

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
