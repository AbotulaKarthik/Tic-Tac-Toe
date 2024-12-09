// DOM elements
const nameInput = document.getElementById("playerName");
const xButton = document.getElementById("xChoice");
const oButton = document.getElementById("oChoice");
const startButton = document.getElementById("startGame");

// Global variables to hold the player's choice and name
let playerChoice = "";
let playerName = "";

// Event listener for X button
xButton.addEventListener("click", () => {
    playerChoice = "X";
    xButton.style.backgroundColor = "rgb(255, 73, 222)";
    oButton.style.backgroundColor = "rgb(174, 174, 255)";  // Reset O button color
});

// Event listener for O button
oButton.addEventListener("click", () => {
    playerChoice = "O";
    oButton.style.backgroundColor = "rgb(174, 174, 255)";
    xButton.style.backgroundColor = "rgb(255, 73, 222)";  // Reset X button color
});
let box1 = document.querySelector(".one")
let sel1 = document.querySelector("#xChoice")
sel1.addEventListener("click",()=>{
    sel1.style.background = "black"
    sel1.style.color = "pink"
    box1.style.color = "black"
})
let box2 = document.querySelector(".two")
let sel2 = document.querySelector("#oChoice")
sel2.addEventListener("click",()=>{
    sel2.style.background = "black"
    sel2.style.color = "skyblue"
    box2.style.color = "black"
})
// Start game button click event
startButton.addEventListener("click", () => {
    playerName = nameInput.value.trim();  // Get the value from the input field

    // Check if player name and choice are selected
    if (!playerName) {
        showPopup("Please enter your name.");  // Show popup if name is empty
        return;
    }

    if (!playerChoice) {
        showPopup("Please choose your marker (X or O).");  // Show popup if no choice made
        return;
    }

    // Store player name and choice in localStorage to pass to second page
    localStorage.setItem("playerName", playerName);
    localStorage.setItem("playerChoice", playerChoice);

    // Redirect to the second page (ttt2.html)
    window.location.href = "ttt2.html";
});

// Function to show the popup
function showPopup(message) {
    const popup = document.createElement("div");
    popup.classList.add("popup");
    popup.innerHTML = `
        <div class="popup-content">
            <p>${message}</p>
            <button class="popup-close">OK</button>
        </div>
    `;
    document.body.appendChild(popup);

    const closeButton = popup.querySelector(".popup-close");
    closeButton.addEventListener("click", () => {
        popup.remove();  // Remove the popup when closed
    });
}
