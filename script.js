let player = {
    name: "Idi",
    chips: 150
};
let cardsInHand = "";
let sum = 0;
let inGame = false;


let score = document.getElementById("score");
let card = document.querySelector("#cards");
let comment = document.querySelector("#commenter");
let playerEl = document.querySelector("#player-el");

function gameStart(){
    inGame = true;
    sum = 0;
    cardsInHand = ""
    playerEl.textContent = player.name + ": $" + player.chips;
    newCard();
    newCard();
    gameMaster();
}

function gameMaster(){
    if (sum === 21){
        comment.textContent = "You got the blackjack!"
        inGame = false;
    }
    else if(sum < 21){
        comment.textContent = "Do you want to Draw another card?"
    }
    else {
        comment.textContent = "Game Over!"
        inGame = false;
    }
}

function randomCard(){
    let randomCard = (Math.floor(Math.random() * 13)) + 1;
    if (randomCard === 1){
        return 11;
    }
    else if (randomCard > 10  ){
        return 10;
    }
    else {
        return randomCard;
    }
}

function newCard(){
    if (inGame === true){
        let cardCollected = randomCard();
        cardsInHand += cardCollected + " ";
        sum += cardCollected;
        card.textContent = "Cards : " + cardsInHand;
        score.textContent = "Score: " + sum;
        gameMaster();
    }
    else{
        comment.textContent = "Please start the Game!"
    }
}


