
const rl = require("readline-sync");
    let num;
    let guess;
    let loop = true;

function main (){

    startGame();


}

function startGame(){
    num = Math.floor(Math.random() * 100);
    while(loop){
        guessNumber()
    }
  
}
function guessNumber(){
    console.log("Insira um numero ");
    guess = rl.questionInt();
    
    
    if(guess > num){
        console.log(`O numero secreto é menor que ${guess}. Tente novamente`);

    }else if(guess < num){
        console.log(`O numero secreto é maior que ${guess}. Tente novamente`);
    }else if (guess == num){

        console.log(`A resposta era ${num} Parabens voce acertou o numero secreto!`);
        askContinue();
    }

}

function askContinue(){
    console.log(` \nDeseja jogar novamente? [Y/N]`);
    let option = rl.question();
    switch (option) {
        case "Y":
                startGame();
            break;
        case "N":
            console.log("Fechando...");
            loop = false;
            break;
        default:
            console.log("Resposta invalida tente novamente");
            askContinue();
            break;
    }


}

main();