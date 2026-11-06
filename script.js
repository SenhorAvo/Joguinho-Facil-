
let playerName = "";
let currentDialogue = 0;

// MENU
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

// ESCOLHA DA DIFICULDADE
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

// CONFIRMAR NOME
function confirmName() {
    const input = document.getElementById("playerName");
    const name = input.value.trim();

    if (name.length < 2) {
        alert("Digite um nome com pelo menos 2 letras!");
        return;
    }

    playerName = name;
    currentDialogue = 0;

    nextDialogue();
}

// HISTÓRIA — MODO FÁCIL
const dialogues = [
    {
        title: "DIÁLOGO 1 — O NASCIMENTO",
        text: () => `Você nasceu em uma família extremamente rica.

Seu pai é dono de várias empresas e sua mãe é uma empresária famosa.

Desde pequeno, você nunca precisou se preocupar com dinheiro.

Sua vida parece perfeita...`,
        choices: ["APROVEITAR A VIDA DE RICO", "TENTAR SER INDEPENDENTE"]
    },
    {
        title: "DIÁLOGO 2 — O CAFÉ DA MANHÃ",
        text: () => `${playerName}, são 8 horas da manhã.

Sua empregada coloca um pão na mesa e pergunta se você deseja comer.

Você está com fome.

O que você faz?`,
        choices: ["COMER O PÃO", "NÃO COMER O PÃO"]
    },
    {
        title: "DIÁLOGO 3 — A ESCOLA",
        text: () => `Você está com 10 anos.

Seu pai pergunta se você quer estudar na escola particular mais cara da cidade ou em uma escola pública perto de casa.`,
        choices: ["ESCOLA PARTICULAR", "ESCOLA PÚBLICA"]
    },
    {
        title: "DIÁLOGO 4 — O PRESENTE",
        text: () => `Seu aniversário chegou!

Seu pai oferece dois presentes: um computador novo ou uma bicicleta.

Qual você escolhe?`,
        choices: ["ESCOLHER O COMPUTADOR", "ESCOLHER A BICICLETA"]
    },
    {
        title: "DIÁLOGO 5 — UMA AMIZADE",
        text: () => `Na escola, você conhece Lucas.

Ele parece ser uma boa pessoa e convida você para jogar futebol depois da aula.

O que você responde?`,
        choices: ["ACEITAR O CONVITE", "RECUSAR O CONVITE"]
    },
    {
        title: "DIÁLOGO 6 — O SEGREDO",
        text: () => `Você está com 15 anos.

Certo dia, encontra uma carta escondida na gaveta do escritório do seu pai.

Ela parece conter um segredo da família.

O que você faz?`,
        choices: ["LER A CARTA", "DEVOLVER A CARTA"]
    },
    {
        title: "DIÁLOGO 7 — A DESCOBERTA",
        text: () => `Seu pai percebe que você esteve no escritório.

Ele pergunta se encontrou alguma coisa.

Como você responde?`,
        choices: ["CONTAR A VERDADE", "MENTIR PARA ELE"]
    },
    {
        title: "DIÁLOGO 8 — A HERANÇA",
        text: () => `Você completa 18 anos.

Seu pai decide entregar uma parte dos negócios da família para você administrar.

Qual é sua decisão?`,
        choices: ["ACEITAR A RESPONSABILIDADE", "RECUSAR A OFERTA"]
    },
    {
        title: "DIÁLOGO 9 — A VIAGEM",
        text: () => `Sua mãe oferece uma viagem para outro país.

Você pode viajar com sua família ou permanecer na cidade.

O que você escolhe?`,
        choices: ["VIAJAR COM A FAMÍLIA", "FICAR NA CIDADE"]
    },
    {
        title: "DIÁLOGO 10 — O TELEFONEMA",
        text: () => `São 23:30.

Seu telefone toca. É Lucas, seu antigo amigo.

Ele diz que precisa conversar urgentemente com você.

O que você faz?`,
        choices: ["ATENDER A LIGAÇÃO", "IGNORAR A LIGAÇÃO"]
    },
    {
        title: "DIÁLOGO 11 — A PROPOSTA",
        text: () => `Lucas conta que descobriu algo estranho sobre os negócios do seu pai.

Ele quer mostrar alguns documentos.

O que você responde?`,
        choices: ["PEDIR PARA VER OS DOCUMENTOS", "DIZER QUE NÃO QUER SABER"]
    },
    {
        title: "DIÁLOGO 12 — A MANSÃO",
        text: () => `Você volta para casa.

A mansão está completamente silenciosa. As luzes estão apagadas e ninguém responde quando você chama.

O que você faz?`,
        choices: ["PROCURAR SEUS PAIS", "IR PARA O ESCRITÓRIO"]
    },
    {
        title: "DIÁLOGO 13 — A FOTOGRAFIA",
        text: () => `No escritório, você encontra uma fotografia antiga.

Nela estão seu pai e Lucas, ainda crianças.

No verso existe uma frase:

"A verdade sempre encontra seu caminho."

O que você faz?`,
        choices: ["GUARDAR A FOTOGRAFIA", "PROCURAR OUTRAS PISTAS"]
    },
    {
        title: "DIÁLOGO 14 — A ÚLTIMA MENSAGEM",
        text: () => `Seu celular recebe uma mensagem de um número desconhecido:

"${playerName}, você precisa sair da mansão. Não há mais tempo."

Logo depois, a energia acaba.

O que você faz?`,
        choices: ["TENTAR SAIR DA MANSÃO", "FICAR E DESCOBRIR A VERDADE"]
    },
    {
        title: "DIÁLOGO 15 — O FIM",
        text: () => `Você chega ao último corredor da mansão.

De repente, todas as portas se fecham.

Seu telefone recebe uma última mensagem:

"${playerName}, sua história termina aqui."

Você não consegue escapar.

Este é o fim da sua jornada.`,
        choices: ["ACEITAR O DESTINO", "TENTAR ESCAPAR"]
    }
];

// MOSTRAR DIÁLOGOS
function nextDialogue() {
    const dialogue = dialogues[currentDialogue];

    document.getElementById("chapter").textContent = dialogue.title;
    document.getElementById("description").textContent = dialogue.text();

    const choicesBox = document.getElementById("choices");
    choicesBox.innerHTML = "";

    dialogue.choices.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;

        button.onclick = () => {
            if (currentDialogue === 14) {
                gameOver();
            } else {
                currentDialogue++;
                nextDialogue();
            }
        };

        choicesBox.appendChild(button);
    });
}

// FINAL DO JOGO
function gameOver() {
    document.getElementById("chapter").textContent = "FIM DE JOGO";

    document.getElementById("description").textContent =
        `${playerName}, você morreu.

Sua história chegou ao fim.

Obrigado por jogar LAST WORDS.`;

    const choicesBox = document.getElementById("choices");
    choicesBox.innerHTML = "";

    const retry = document.createElement("button");
    retry.textContent = "JOGAR NOVAMENTE";
    retry.onclick = () => startGame("facil");

    const menu = document.createElement("button");
    menu.textContent = "VOLTAR AO MENU";
    menu.onclick = backHome;

    choicesBox.appendChild(retry);
    choicesBox.appendChild(menu);
}
