// Mapeando e criando as variáveis. 
const result = document.querySelector('.result')
const humanScore = document.getElementById('human-score')
const machineScore = document.getElementById('machine-score')

let humanScoreNumber = 0 //Todos os playr começa zerados
let machineScoreNumber = 0

// Função arrow functin, jogador humano. 
const playHuman = (humanChoice) => {

    playResult(humanChoice, playMachine())
}

// Função da Máquina. 
const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors'] // variáveis com opções da maq.

    // Usar Math.random, para colocar o nuemro aleatorio.
    // Floor aredando um numero para baixou, o resultado multiplicado por 3. 
    const randomNumber = Math.floor(Math.random() * 3)

    return choices [randomNumber] //arrei para retornar a posição da escolha. 
}

const playResult =(human, machine) => {
    console.log('Humano: ' + human +  ' Maquina: ' + machine)

    //Verificações
    if(human === machine){
        result.innerHTML = 'Empate!'
    } else if( 
        (human === 'paper' && machine === 'rock') || 
        (human === 'rock' &&  machine === 'scissors') || 
        (human === 'scissors' && machine === 'paper')
    ){
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = 'Você ganhou!!'
    }else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = 'MáqPô ganhou!'
    }
}

// Chamar a função todo vez que clicar no botão. 
document.getElementById('rock').addEventListener('click', () => playHuman('rock'));
document.getElementById('paper').addEventListener('click', () => playHuman('paper'));
document.getElementById('scissors').addEventListener('click', () => playHuman('scissors'));

