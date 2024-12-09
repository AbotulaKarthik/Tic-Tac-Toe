// JavaScript for the game

const playerName = localStorage.getItem("playerName") || "Player";
const playerChoice = localStorage.getItem("playerChoice") || "X";

const boxes = document.querySelectorAll(".box");
const resetButton = document.querySelector(".resetbut");
let currentPlayer = "X"; // Start with Player X
let gameActive = true;
let gameState = Array(9).fill("");

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function checkWinner() {
    for (let combo of winningCombos) {
        const [a, b, c] = combo;
        if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
            return gameState[a];
        }
    }
    return gameState.includes("") ? null : "Draw";
}

function handleBoxClick(e) {
    const boxIndex = Array.from(boxes).indexOf(e.target);

    if (gameState[boxIndex] !== "" || !gameActive) return;

    gameState[boxIndex] = currentPlayer;
    e.target.textContent = currentPlayer;
    e.target.style.color = currentPlayer === "X" ? "rgb(255, 73, 222)" : "rgb(174, 174, 255)";

    const result = checkWinner();
    if (result) {
        gameActive = false;
        showPopup(
            result === "Draw"
                ? "Match Drawn!"
                : result === playerChoice
                ? `${playerName} Wins!`
                : "Opponent Wins!"
        );
    } else {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
}

function showPopup(message) {
    const popup = document.createElement("div");
    popup.className = "popup";
    popup.textContent = message;
    popup.style.position = "fixed";
    popup.style.top = "50%";
    popup.style.left = "50%";
    popup.style.transform = "translate(-50%, -50%)";
    popup.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
    popup.style.color = "rgb(0, 221, 255)";
    popup.style.fontSize = "2rem";
    popup.style.padding = "20px";
    popup.style.border = "2px solid rgb(0, 204, 255)";
    popup.style.borderRadius = "10px";
    popup.style.textAlign = "center";
    popup.style.boxShadow = "0 0 15px rgb(156, 244, 252)";
    document.body.appendChild(popup);

    setTimeout(() => {
        popup.remove();
    }, 3000);
}

function resetGame() {
    gameState.fill("");
    boxes.forEach((box) => {
        box.textContent = "";
        box.style.color = "white";
    });
    currentPlayer = "X";
    gameActive = true;
}

boxes.forEach((box) => box.addEventListener("click", handleBoxClick));
resetButton.addEventListener("click", resetGame);