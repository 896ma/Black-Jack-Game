// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11

//create an array of cards that contains the first card and the second card
let cards =[]
let hasblackjack=false
 let isAlive=false
// 2. Create a variable, sum, and set it to the sum of the two cards

// 1. Declare a variable called message and assign its value to an empty str
let message =""   

// 2. Reassign the message variable to the string we're logging out

let sum =0
//Button that starts the game whenever clicked

//function  getRandomCard(), that always returns the number  5

function getRandomCard (){
    let randomNumber =  Math.floor(Math.random() * 13) +1
    if (randomNumber>10){
        return 10
    }else if (randomNumber === 1){
        return 11
    }else {
        return randomNumber
    }

}
function startGame(){
     isAlive=true
     //Generate two numbers
     let firstCard=getRandomCard()
     let secondCard=getRandomCard()

    
     cards =[firstCard,secondCard]
     sum= firstCard+secondCard
     //Re-assign the cards and sum variables so that the game can start
    renderGame()
}
// Write the conditional according to these rules:

// if less than or equal to 20 -> "Do you want to draw a new card? "
let sumEl=document.getElementById("sum-el")
let messageEl=document.getElementById("message-el")
let cardsEl=document.getElementById("cards-el")
let player ={
    name: "Marvine" ,
    chips : 150
}
let playerEl= document.getElementById("player-el")
playerEl.textContent =player.name +": $" + player.chips

function renderGame(){
    cardsEl.textContent= "cards : " 

    //create a for loop to render out all the cards instead of just one

    for (let i=0; i<cards.length;i++){
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent= "sum : " + sum
    if(sum<=20){
        message=("Do you want to draw a new card? ")
    }
    // else if exactly 21 -> "Wohoo! You've got Blackjack! "s
    else if(sum===21){
        message=( " Wonderful! You've got Blackjack! ")
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
    //only allow the player to get a new card if she IS alive and does NOT  have a blackjack

    if (isAlive==true && hasblackjack===false){
// 1. Create a card variable, and hard code its value to a number (2-11)
let card = getRandomCard()
// 2. Add the new card to the sum variable
sum += card
//push the new card to the crads array
cards.push(card);
// 3. Call startGame()
renderGame()
}
    }
    
    
