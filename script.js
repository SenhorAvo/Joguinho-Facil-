
let playerName = "";
let currentDialogue = 0;

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

    document.getElementById("chapter").textContent = "ANTES DE COMEÇAR";
    document.getElementById("description").textContent =
        "Toda história começa com um nome.\n\nComo devemos chamar você?";

    const choices = document.getElementById("choices");
    choices.innerHTML = `
        <input
            type="text"
            id="playerName"
            placeholder="Digite seu nome..."
            maxlength="20"
        >
        <button onclick="confirmName()">CONFIRMAR</button>
    `;
}

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

const dialogues = [
    {
        title: "O NASCIMENTO",
        text: () => `Você nasceu em uma família extremamente rica.\n\nSeu pai é dono de várias empresas e sua mãe é uma famosa empresária.\n\nDesde pequeno, você nunca precisou se preocupar com dinheiro.\n\nSua vida parece perfeita...`,
        choices: ["APROVEITAR A VIDA DE RICO", "TENTAR SER INDEPENDENTE"]
    },
    {
        title: "O CAFÉ DA MANHÃ",
        text: () => `São 8 horas da manhã.\n\nSua empregada coloca um pão na mesa e pergunta se você deseja comer.\n\nVocê está com fome.`,
        choices: ["COMER O PÃO", "NÃO COMER O PÃO"]
    },
    {
        title: "A ESCOLA",
        text: () => `Você está com 10 anos.\n\nSeu pai pergunta se você quer estudar na escola particular mais cara da cidade ou em uma escola pública perto de casa.`,
        choices: ["ESCOLA PARTICULAR", "ESCOLA PÚBLICA"]
    },
    {
        title: "O PRESENTE",
        text: () => `No seu aniversário, seu pai oferece um presente.\n\nUm carro de brinquedo ou um computador novo.`,
        choices: ["ESCOLHER O CARRO", "ESCOLHER O COMPUTADOR"]
    },
    {
        title: "A AMIZADE",
        text: () => `Na escola, você conhece um garoto chamado Lucas.\n\nEle parece ser uma boa pessoa e convida você para jogar futebol depois da aula.`,
        choices: ["ACEITAR O CONVITE", "RECUSAR O CONVITE"]
    },
    {
        title: "O SEGREDO",
        text: () => `Você está com 15 anos.\n\nCerto dia, encontra uma carta escondida na gaveta do escritório do seu pai.\n\nEla contém informações sobre um segredo da família.`,
        choices: ["LER A CARTA", "DEVOLVER A CARTA"]
    },
    {
        title: "A DISCUSSÃO",
        text: () => `Seu pai descobre que você esteve no escritório.\n\nEle pergunta o que você estava procurando.`,
        choices: ["CONTAR A VERDADE", "MENTIR PARA ELE"]
    },
    {
        title: "A HERANÇA",
        text: () => `Você completa 18 anos.\n\nSeu pai decide entregar uma pequena parte dos negócios da família para você administrar.`,
        choices: ["ACEITAR A RESPONSABILIDADE", "RECUSAR A OFERTA"]
    },
    {
        title: "A VIAGEM",
        text: () => `Alguns meses depois, sua mãe oferece uma viagem para outro país.\n\nVocê pode viajar com sua família ou ficar na cidade.`,
        choices: ["VIAJAR COM A FAMÍLIA", "FICAR NA CIDADE"]
    },
    {
        title: "O TELEFONEMA",
        text: () => `Às 23:30, seu telefone toca.\n\nÉ Lucas, seu antigo amigo.\n\nEle diz que precisa conversar urgentemente com você.`,
        choices: ["ATENDER A LIGAÇÃO", "IGNORAR A LIGAÇÃO"]
    },
    {
        title: "A PROPOSTA",
        text: () => `Lucas conta que descobriu algo estranho sobre os negócios do seu pai.\n\nEle quer mostrar alguns documentos.`,
        choices: ["PEDIR PARA VER OS DOCUMENTOS", "DIZER QUE NÃO QUER SABER"]
    },
    {
        title: "A MANSÃO",
        text: () => `Você volta para casa.\n\nA mansão está completamente silenciosa. As luzes estão apagadas e ninguém responde quando você chama.`,
        choices: ["PROCURAR SEUS PAIS", "IR PARA O ESCRITÓRIO"]
    },
    {
        title: "A DESCOBERTA",
        text: () => `No escritório, você encontra uma fotografia antiga.\n\nNela estão seu pai e Lucas, ainda crianças.\n\nNo verso existe uma frase: "A verdade sempre encontra seu caminho."`,
        choices: ["GUARDAR A FOTOGRAFIA", "PROCURAR OUTRAS PISTAS"]
    },
    {
        title: "A ÚLTIMA MENSAGEM",
        text: () => `Seu celular recebe uma mensagem de um número desconhecido:\n\n"${() => playerName}, você precisa sair da mansão. Não há mais tempo."\n\nLogo depois, a energia acaba.`,
        choices: ["TENTAR SAIR DA MANSÃO", "FICAR E DESCOBRIR A VERDADE"]
    },
    {
        title: "O FIM",
        text: () => `Você chega ao último corredor da mansão.\n\nDe repente, todas as portas se fecham. Uma última mensagem aparece no seu celular:\n\n"Obrigado por participar, ${"NOME"}."\n\nEssa era a última noite da sua história.`,
        choices: ["CONTINUAR", "TENTAR NOVAMENTE"]
    }
];

function nextDialogue() {
    if (currentDialogue >= 15) {
        gameOver();
        return;
    }

    const dialogue = dialogues[currentDialogue];

    document.getElementById("chapter").textContent =
        `DIÁLOGO ${currentDialogue + 1}/15 — ${dialogue.title}`;

    let text = dialogue.text();

    if (typeof text === "function") {
        text = text();
    }

    text = text.replaceAll("NOME", playerName);

    document.getElementById("description").textContent = text;

    const choices = document.getElementById("choices");
    choices.innerHTML = "";

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

        choices.appendChild(button);
    });
}

function gameOver() {
    document.getElementById("chapter").textContent = "FIM DE JOGO";

    document.getElementById("description").textContent =
        `${playerName}, sua história chegou ao fim.\n\nVocê morreu no último capítulo.\n\nNenhuma escolha poderia mudar esse destino.`;

    const choices = document.getElementById("choices");
    choices.innerHTML = "";

    const retry = document.createElement("button");
    retry.textContent = "JOGAR NOVAMENTE";
    retry.onclick = () => startGame("facil");

    const menu = document.createElement("button");
    menu.textContent = "VOLTAR AO MENU";
    menu.onclick = backHome;

    choices.appendChild(retry);
    choices.appendChild(menu);
}
