const result = document.querySelector('.result');
const myScore = document.querySelector('#human')
const mcScore = document.querySelector('#machine')
let humanScore = 0
let machineScore = 0

const playHuman = (humanChoise) => {

    playTheGame(humanChoise, playMachine())
}

const playMachine = () => {
    const choises = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)

    return choises[randomNumber]
}

const playTheGame = (human, machine) => {
    if (human === machine) {
        result.innerHTML = "Empatou !!"
    } else if (human === 'paper' && machine === 'scissors' || human === 'rock' && machine === 'paper' || human === 'scissors' && machine === 'rock') {
        humanScore++
        myScore.innerHTML = humanScore
        result.innerHTML = "Você ganhou !!!"
    } else {
        machineScore++
        mcScore.innerHTML = machineScore
        result.innerHTML = "A Maquina ganhou!!"
    }
}

const resetar = () => {
humanScore = 0
machineScore = 0

myScore.innerHTML = humanScore
mcScore.innerHTML = machineScore

result.innerHTML = ""
}