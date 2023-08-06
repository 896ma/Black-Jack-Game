// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11
let firstCard=6
var secondCard=21
let hasblackjack=false
let isAlive=true
// 2. Create a variable, sum, and set it to the sum of the two cards

// 1. Declare a variable called message and assign its value to an empty string
let message =""

// 2. Reassign the message variable to the string we're logging out

let sum =firstCard+secondCard
//Button that starts the game whenever clicked
function startGame(){
    renderGame()
}
// Write the conditional according to these rules:

// if less than or equal to 20 -> "Do you want to draw a new card? "
let sumEl=document.getElementById("sum-el")
let messageEl=document.getElementById("message-el")
let cardsEl=document.getElementById("cards-el")
function renderGame(){
    cardsEl.textContent= "cards : " +firstCard + " " +secondCard
    sumEl.textContent= "sum : " + sum
    if(sum<=20){
        message=("Do you want to draw a new card? ")
    }
    // else if exactly 21 -> "Wohoo! You've got Blackjack! "s
    else if(sum===21){
        message=( " Wohoo! You've got Blackjack! ")
        hasblackjack=true
    }
    // else -> "You're out of the game! "
    else{
        message=("You're out of the game! ")
        isAlive=false
    }
    

    //Log it out to the console
    messageEl.textContent=message
}
function newCard(){
    console.log("Loading a new card from the deck!")
    console.log("Drawing a new card from the deck!")
    // 1. Create a card variable, and hard code its value to a number (2-11)
    let card = 7
    // 2. Add the new card to the sum variable
    sum += card
    // 3. Call startGame()
    renderGame()
}
