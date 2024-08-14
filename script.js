function getComputerChoice(liste) {
    return liste[Math.floor(Math.random() * liste.length)]
}

function getHumanChoice(liste) {
    return prompt("Choose one among : rock - paper - scissors")
}

function playRound(hC, cC) {
    hC = hC.toLowerCase();
    if (values.indexOf(hC) + 1 === values.indexOf(cC) || values.indexOf(hC) -2 === values.indexOf(cC)) {
        console.log(`You lose! ${cC} beats ${hC}`);
        computerScore++;
    }
    else if (values.indexOf(hC) === values.indexOf(cC)) {
        console.log(`equality! ${hC} equals ${cC}`);
    }
    else {
        console.log(`You win! ${hC} beats ${cC}`);
        humanScore++;
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        let computerChoice = getComputerChoice(values);
        let humanChoice = getHumanChoice(values);
        playRound(humanChoice, computerChoice);
    }
    console.log(`Your score : ${humanScore} | Computer : ${computerScore}`);
}   

const values = ["rock", "paper", "scissors"];
let computerScore = 0, humanScore = 0;
playGame()