let score = {
    you:0,
    computer:0,
    tie:0
};
document.querySelector('.js-button-rock').addEventListener('click', () => playGame('rock'))
document.querySelector('.js-button-paper').addEventListener('click', () => playGame('paper'))
document.querySelector('.js-button-scissors').addEventListener('click', () => playGame('scissors'))
document.querySelector('.js-button-reset').addEventListener('click', () => {
    score = {
        you:0,
        computer:0,
        tie:0
    };
    document.querySelector('.js-score').innerHTML = `<p>Win: ${score.you}, Loose: ${score.computer}, Tie: ${score.tie}</p>`;
})
function playGame(move){
    let computerMove;
    let num = Math.random();
    if(num < 1/3){
        computerMove = 'rock'
    } else if(num < 2/3 && num > 1/3 ){
        computerMove = 'paper'
    }
    else{
        computerMove = 'scissors'
    }
    showResult(move, computerMove);
}
let resultInitial ='';
function showResult(move, computerMove){
    if(computerMove === move){
        resultInitial = 'Tie';
        score.tie += 1;
        renderStuff(resultInitial, score, computerMove,move);
    }else if((computerMove === 'rock' && move === 'paper') || (computerMove === 'paper' && move === 'scissors') || computerMove === 'scissors' && move === 'rock'){
        resultInitial = 'You Won!';
        score.you += 1;
        renderStuff(resultInitial, score,computerMove,move);
    }else if((computerMove === 'rock' && move === 'scissors') || (computerMove === 'paper' && move === 'rock') || computerMove === 'scissors' && move === 'paper'){
        resultInitial = 'You Lose';
        score.computer +=1;
        renderStuff(resultInitial, score, computerMove, move);
    }
}
function renderStuff(resultInitial, score, computerMove, move){
    document.querySelector('.js-moves').innerHTML = `<p>your move = ${move}, Computer's move = ${computerMove} </p>`;
    document.querySelector('.js-score').innerHTML = `<p>Win: ${score.you}, Loose: ${score.computer}, Tie: ${score.tie}</p>`;
    document.querySelector('.js-result').innerHTML = `<p>${resultInitial}</p>`;
}