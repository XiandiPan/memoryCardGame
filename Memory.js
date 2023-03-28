//shuffle the card
const gameBoard = document.querySelector('.game-board');
const cards = document.querySelectorAll('.card-set');//nodeList
const cardsArray = Array.from(cards);
const cardFront = document.querySelectorAll('.front');
const cardBack = document.querySelectorAll('.back');

let flippedCard = false;
let firstCard, secondCard;
let preventFlip = false;

function flipCard(){
  if (preventFlip) return;
  this.classList.add('flip');

  if(!flippedCard){
    flippedCard = true;
    firstCard = this;
    return;
  } else {
    secondCard = this;
    flippedCard=false;
    matchingCheck();
  }


function matchingCheck(){
  if (firstCard.dataset.color ===  secondCard.dataset.color){
    firstCard.removeEvenListener('click',flipCard);
    secondCard.removeEvenListener('click',flipCard);

  }else {
    preventFlip = true;
    setTimeout(()=>{
      firstCard.classList.remove('flip');
      secondCard.classList.remove('flip');
      preventFlip = false;
    },1500)
  }
}



}

cards.forEach( card => card.addEventListener('click',flipCard))


























