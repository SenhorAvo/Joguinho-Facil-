
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
    const nomes = {
        facil: "FÁCIL",
        medio: "MÉDIO",
        dificil: "DIFÍCIL",
        impossivel: "IMPOSSÍVEL"
    };

    alert(
        "O modo " + nomes[difficulty] +
        " está em desenvolvimento!\n\nEm breve teremos novidades."
    );
}
