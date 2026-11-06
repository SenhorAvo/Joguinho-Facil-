
function hideAll() {
    document.getElementById("home").classList.add("hidden");
    document.getElementById("difficulties").classList.add("hidden");
    document.getElementById("story").classList.add("hidden");
    document.getElementById("credits").classList.add("hidden");
}

function showDifficulties() {
    hideAll();
    document.getElementById("difficulties").classList.remove("hidden");
}

function credits() {
    hideAll();
    document.getElementById("credits").classList.remove("hidden");
}

function backHome() {
    hideAll();
    document.getElementById("home").classList.remove("hidden");
}

function startGame(difficulty) {
    if (difficulty !== "facil") {
        alert("O modo " + difficulty.toUpperCase() + " está em desenvolvimento!");
        return;
    }

    hideAll();
    document.getElementById("story").classList.remove("hidden");

    document.getElementById("chapter").textContent = "ANTES DE COMEÇAR";
    document.getElementById("description").textContent =
        "Toda história começa com um nome.\n\nQual é o seu nome?";

    document.getElementById("choices").innerHTML = `
        <input type="text" id="playerName" placeholder="Digite seu nome..." maxlength="20">
        <button onclick="confirmName()">CONFIRMAR</button>
    `;
}

function confirmName() {
    const input = document.getElementById("playerName");
    const name = input.value.trim();

    if (name.length < 2) {
        alert("Digite um nome válido!");
        return;
    }

    playerName = name;
    currentDialogue = 0;
    nextDialogue();
}

let playerName = "";
let currentDialogue = 0;
