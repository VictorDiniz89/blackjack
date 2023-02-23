// CAUCULATOR CHALLENGER
 /*let num1 = 8
 let num2 = 2

document.getElementById('num1-el').textContent = num1
document.getElementById('num2-el').textContent = num2

let sumEl = document.getElementById('sum-el')

function add(){
    let result = num1 + num2
    sumEl.textContent = `Sum: ${num1} + ${num2} : ${result}`
}

function subtract(){
    let result = num1 - num2
    sumEl.textContent = `Sum: ${num1} + ${num2} : ${result}`
}

function divide(){
    let result = num1 / num2
    sumEl.textContent = `Sum: ${num1} + ${num2} : ${result}`
}

function multiply(){
    let result = num1 * num2
    sumEl.textContent = `Sum: ${num1} + ${num2} : ${result}`
}

function sum(){
   
}*/

//BLACKJACKS CASSINO


let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById('message-el')
let sumEl = document.querySelector('#sum-el')
let cardsEl = document.querySelector('#cards-el')

let player = {
    name: 'Victor',
    chips: 145,
    // sayHello: function(){
    //   console.log('hi, there!')  
    // }
}

let playerEl = document.querySelector('#player-el')
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard(){
    let randomNumber = Math.floor(Math.random() *13) +1
    if(randomNumber > 10){
        return 10
    } else if(randomNumber === 1){
        return 11
    } else {
        return randomNumber
    }
}

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard = secondCard
    renderGame()
}

function renderGame(){

    cardsEl.textContent = 'Cards:'

    for(let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = `Sum: ${sum}`
    if(sum <= 20){
        message = 'Would you like to draw a new card?'
    } else if(sum === 21){
       message = "You've a BlackJack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard(){
    if(isAlive === true && hasBlackJack === false){
    let card = getRandomCard()
    sum += card
    cards.push(card)
    console.log(cards)
    renderGame()
    }

} 
  

