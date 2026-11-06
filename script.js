
const home = document.getElementById("home");
const difficulties = document.getElementById("difficulties");
const story = document.getElementById("story");
const creditsBox = document.getElementById("credits");

function hideAll() {
    home.classList.add("hidden");
    difficulties.classList.add("hidden");
    story.classList.add("hidden");
    creditsBox.classList.add("hidden");
}

function showDifficulties() {
    hideAll();
    difficulties.classList.remove("hidden");
}

function credits() {
    hideAll();
    creditsBox.classList.remove("hidden");
}

function backHome() {
    hideAll();
    home.classList.remove("hidden");
}

function startGame(difficulty) {
    if (difficulty !== "facil") {
        alert("Essa dificuldade ainda está em desenvolvimento!");
        return;
    }

    hideAll();
    story.classList.remove("hidden");

    showChapter(
        "CAPÍTULO 1 — A ÚLTIMA NOITE",
        "São 23:47.\n\nVocê acorda com o barulho de três batidas na porta da sua casa.\n\nO celular está sem sinal. A energia acabou e uma voz desconhecida chama seu nome do lado de fora.\n\nO que você faz?",
        [
            {
                text: "ABRIR A PORTA",
                action: () => gameOver("Você abriu a porta sem saber quem estava do outro lado.")
            },
            {
                text: "OLHAR PELA JANELA",
                action: () => chapterTwo()
            },
            {
                text: "SE ESCONDER E ESPERAR",
                action: () => gameOver("Você esperou por muito tempo. Quando decidiu sair, já era tarde.")
            }
        ]
    );
}

function showChapter(title, description, choices) {
    document.getElementById("chapter").textContent = title;
    document.getElementById("description").textContent = description;

    const choicesBox = document.getElementById("choices");
    choicesBox.innerHTML = "";

    choices.forEach(choice => {
        const button = document.createElement("button");
        button.textContent = choice.text;
        button.onclick = choice.action;
        choicesBox.appendChild(button);
    });
}

function chapterTwo() {
    showChapter(
        "CAPÍTULO 2 — A JANELA",
        "Você olha discretamente pela janela.\n\nNão há ninguém na porta.\n\nMas, do outro lado da rua, um carro está parado com os faróis ligados. De repente, o telefone toca.",
        [
            {
                text: "ATENDER O TELEFONE",
                action: () => chapterThree()
            },
            {
                text: "SAIR PELOS FUNDOS",
                action: () => gameOver("Você saiu sem saber o que estava esperando lá fora.")
            }
        ]
    );
}

function chapterThree() {
    showChapter(
        "CAPÍTULO 3 — A LIGAÇÃO",
        "Uma voz familiar fala do outro lado:\n\n'Você precisa sair daí. Não confie em ninguém. Vá até a estação antiga.'\n\nA ligação cai.",
        [
            {
                text: "IR ATÉ A ESTAÇÃO",
                action: () => victory()
            },
            {
                text: "FICAR EM CASA",
                action: () => gameOver("Você decidiu não seguir o aviso. A noite ainda não tinha terminado.")
            }
        ]
    );
}

function gameOver(reason) {
    showChapter(
        "FIM DE JOGO",
        reason + "\n\nSua história termina aqui.",
        [
            {
                text: "TENTAR NOVAMENTE",
                action: () => startGame("facil")
            },
            {
                text: "VOLTAR AO MENU",
                action: backHome
            }
        ]
    );
}

function victory() {
    showChapter(
        "FIM — SOBREVIVENTE",
        "Você chega à estação antiga.\n\nAo amanhecer, as luzes da cidade voltam a funcionar.\n\nVocê sobreviveu à última noite.",
        [
            {
                text: "JOGAR NOVAMENTE",
                action: () => startGame("facil")
            },
            {
                text: "VOLTAR AO MENU",
                action: backHome
            }
        ]
    );
}
