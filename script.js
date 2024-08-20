const values = ["Rock", "Paper", "Scissors"];
let comScore = 0, humScore = 0;
const humanDiv = document.querySelector(".humanScore");
const computerDiv = document.querySelector(".computerScore");
const dialog = document.querySelector(".dialog");
function getComputerChoice() {
    return values[Math.floor(Math.random() * values.length)]
}

function playRound(hC, cC) {
    if (values.indexOf(hC) + 1 === values.indexOf(cC) || values.indexOf(hC) - 2 === values.indexOf(cC)) {
        dialog.textContent = `You lose! ${cC} beats ${hC}`;
        comScore++;
    }
    else if (values.indexOf(hC) === values.indexOf(cC)) {
        dialog.textContent = `equality! ${hC} equals ${cC}`;
    }
    else {
        dialog.textContent = `You win! ${hC} beats ${cC}`;
        humScore++;
    }
    computerDiv.textContent = comScore;
    humanDiv.textContent = humScore;
    if (comScore >= 5 || humScore >= 5) {
        playGame();
    }
}

function resetValue() {
    comScore = 0;
    humScore = 0;
    computerDiv.textContent = comScore;
    humanDiv.textContent = humScore;
    dialog.textContent = " ";
}

function playGame() {
    if (comScore > humScore) {
        alert("You lose...");
    } 
    else {
        alert("You win!");
    }
    resetValue();
}

window.onload = resetValue;
const buttons = document.querySelectorAll("#btn");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        playRound(button.textContent, getComputerChoice());
    });
});
const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", resetValue);