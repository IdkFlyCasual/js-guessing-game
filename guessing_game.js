const readline = require('readline')

rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout
})


let secretNumber = 42;
let count;

function randomeInRange(min, max){
    secretNumber = Math.floor(Math.random() * (max - min + 1) + min)
    askGuess();
}

function askLimit(){
    function handleTurns(answerTurns){
        count = answerTurns
        askRange();
    }
    rl.question("Enter turn limit: ", handleTurns)
}

function checkGuess(num){
    if(num > secretNumber){
        count--
        console.log("Too high.")
    }
    if(num < secretNumber){
        count--
        console.log('Too low.')
    }
    if(num === secretNumber){
        console.log('You win!')
        rl.close();
        return true
    }
    if(count === 0){
        console.log('Lewser!')
        rl.close()
        return
    }
    askGuess();
}

function askRange(){
    let min = 0
    let max = 0

    rl.question('Enter a max number: ', handleMax)
    function handleMax(answerMax){
        max = Number(answerMax)
        rl.question('Enter a min number:', handleMin) 
    }
    function handleMin(answerMin){
        min = Number(answerMin)
        console.log("I'm thinking of a number between " + min + " and " + max)
        randomeInRange(min, max)
    }
}

function askGuess(){
    rl.question('Enter a guess: ', (answer)=> {
        checkGuess(Number(answer))
    })
}//|
// V ...noice.
askLimit();