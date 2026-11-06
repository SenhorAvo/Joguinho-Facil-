
let playerName = "";
let currentDialogue = 0;
let currentDifficulty = "facil";

// =====================================
// HISTÓRIA — MODO FÁCIL (15 DIÁLOGOS)
// =====================================

const dialoguesFacil = [
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

Sua empregada coloca um pão na mesa.

Você está com fome.

O que você faz?`,
        choices: ["COMER O PÃO", "NÃO COMER O PÃO"]
    },
    {
        title: "DIÁLOGO 3 — A ESCOLA",
        text: () => `Você está com 10 anos.

Seu pai pergunta onde você gostaria de estudar.

Uma escola particular de luxo ou uma escola pública?`,
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

Ele convida você para jogar futebol depois da aula.

O que você responde?`,
        choices: ["ACEITAR O CONVITE", "RECUSAR O CONVITE"]
    },
    {
        title: "DIÁLOGO 6 — O SEGREDO",
        text: () => `Você está com 15 anos.

Encontra uma carta escondida na gaveta do escritório do seu pai.

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
        choices: ["VER OS DOCUMENTOS", "NÃO QUERER SABER"]
    },
    {
        title: "DIÁLOGO 12 — A MANSÃO",
        text: () => `Você volta para casa.

A mansão está completamente silenciosa.

As luzes estão apagadas e ninguém responde quando você chama.

O que você faz?`,
        choices: ["PROCURAR SEUS PAIS", "IR PARA O ESCRITÓRIO"]
    },
    {
        title: "DIÁLOGO 13 — A FOTOGRAFIA",
        text: () => `No escritório, você encontra uma fotografia antiga.

Nela estão seu pai e Lucas, ainda crianças.

No verso existe uma frase:

"A verdade sempre encontra seu caminho."`,
        choices: ["GUARDAR A FOTOGRAFIA", "PROCURAR OUTRAS PISTAS"]
    },
    {
        title: "DIÁLOGO 14 — A ÚLTIMA MENSAGEM",
        text: () => `Seu celular recebe uma mensagem:

"${playerName}, você precisa sair da mansão. Não há mais tempo."

Logo depois, a energia acaba.

O que você faz?`,
        choices: ["TENTAR SAIR", "DESCOBRIR A VERDADE"]
    },
    {
        title: "DIÁLOGO 15 — O FIM",
        text: () => `Você chega ao último corredor da mansão.

Todas as portas se fecham.

Seu telefone recebe uma última mensagem:

"${playerName}, sua história termina aqui."

Você percebe que não existe mais saída.

FIM.`,
        choices: ["ACEITAR O DESTINO", "TENTAR ESCAPAR"]
    }
];

// =====================================
// HISTÓRIA — MODO MÉDIO (10 DIÁLOGOS)
// =====================================

const dialoguesMedio = [
    {
        title: "DIÁLOGO 1 — O ENVELOPE",
        text: () => `É uma noite chuvosa.

Você encontra um envelope preto na porta de sua casa.

Não existe remetente.

O que você faz?`,
        choices: ["ABRIR O ENVELOPE", "JOGAR FORA"]
    },
    {
        title: "DIÁLOGO 2 — A FOTOGRAFIA",
        text: () => `Dentro do envelope existe uma fotografia antiga.

Você aparece nela, mas a fotografia parece ter sido tirada muitos anos antes.

No verso está escrito:

"Você não deveria ter voltado."`,
        choices: ["GUARDAR A FOTO", "PROCURAR O REMETENTE"]
    },
    {
        title: "DIÁLOGO 3 — A LIGAÇÃO",
        text: () => `Seu telefone toca.

Um homem desconhecido diz conhecer sua família.

Ele marca um encontro para a meia-noite.

O que você decide?`,
        choices: ["ACEITAR O ENCONTRO", "RECUSAR O ENCONTRO"]
    },
    {
        title: "DIÁLOGO 4 — O ENCONTRO",
        text: () => `Você chega ao local combinado.

Existe uma cafeteria quase vazia.

Um homem sentado no fundo levanta a mão e chama você.

O que você faz?`,
        choices: ["SENTAR COM O HOMEM", "IR EMBORA"]
    },
    {
        title: "DIÁLOGO 5 — A VERDADE",
        text: () => `O homem coloca uma pasta sobre a mesa.

Dentro existem documentos com seu nome e informações sobre sua infância.

Ele diz:

"Sua família escondeu algo de você."

O que você faz?`,
        choices: ["LER OS DOCUMENTOS", "EXIGIR EXPLICAÇÕES"]
    },
    {
        title: "DIÁLOGO 6 — O AVISO",
        text: () => `O homem olha pela janela.

"Você precisa confiar em mim. Não volte para casa esta noite."

O que você faz?`,
        choices: ["CONFIAR NO HOMEM", "VOLTAR PARA CASA"]
    },
    {
        title: "DIÁLOGO 7 — A MENSAGEM",
        text: () => `Seu celular recebe uma mensagem:

"Estamos procurando você."

A chuva fica cada vez mais forte.

O que você faz?`,
        choices: ["RESPONDER", "BLOQUEAR O NÚMERO"]
    },
    {
        title: "DIÁLOGO 8 — O HOTEL",
        text: () => `Você chega a um hotel antigo.

O recepcionista entrega uma chave.

Alguém deixou uma mensagem:

"Quarto 17. Não demore."

O que você faz?`,
        choices: ["IR AO QUARTO 17", "SAIR DO HOTEL"]
    },
    {
        title: "DIÁLOGO 9 — A ÚLTIMA PORTA",
        text: () => `Você encontra o quarto 17.

A porta está entreaberta.

Lá dentro existe uma mesa, uma fotografia e um telefone tocando.

O que você faz?`,
        choices: ["ENTRAR NO QUARTO", "IR EMBORA"]
    },
    {
        title: "DIÁLOGO 10 — O FIM",
        text: () => `Você dá seu último passo naquela noite.

Todas as luzes se apagam.

Uma voz desconhecida diz:

"${playerName}, finalmente encontramos você."

Você percebe que chegou ao fim da sua jornada.

FIM.`,
        choices: ["TENTAR ESCAPAR", "ACEITAR O DESTINO"]
    }
];

// =====================================
// HISTÓRIA — MODO DIFÍCIL (5 DIÁLOGOS)
// =====================================

const dialoguesDificil = [
    {
        title: "DIÁLOGO 1 — O APARTAMENTO",
        text: () => `Você mora sozinho em um pequeno apartamento.

São 7 horas da manhã.

Seu despertador toca e você precisa trabalhar.

O que você faz?`,
        choices: ["LEVANTAR", "DORMIR MAIS UM POUCO"]
    },
    {
        title: "DIÁLOGO 2 — O TRABALHO",
        text: () => `Você chega ao trabalho.

Seu chefe está esperando e pergunta por que você chegou atrasado ontem.

O que você responde?`,
        choices: ["PEDIR DESCULPAS", "INVENTAR UMA DESCULPA"]
    },
    {
        title: "DIÁLOGO 3 — O ALMOÇO",
        text: () => `Chega a hora do almoço.

Você encontra um restaurante e percebe que esqueceu a carteira em casa.

O que você faz?`,
        choices: ["VOLTAR PARA CASA", "PEDIR AJUDA A UM AMIGO"]
    },
    {
        title: "DIÁLOGO 4 — O BANHO",
        text: () => `Finalmente você chega em casa.

Está cansado e decide tomar um banho.

Depois, precisa escolher o que fazer.

O que você faz?`,
        choices: ["TOMAR UM BANHO RÁPIDO", "FICAR MAIS TEMPO NO BANHO"]
    },
    {
        title: "DIÁLOGO 5 — O DESTINO",
        text: () => `Você termina o banho.

Vai sair do banheiro quando...

OPS!

Você escorrega no chão molhado.

Sua sorte acabou, ${playerName}.

Não era um dia bom para tomar banho.

FIM.`,
        choices: ["TENTAR LEVANTAR", "PEDIR AJUDA"]
    }
];

// =====================================
// INICIAR O JOGO
// =====================================

function startGame(difficulty) {
    const validDifficulties = [
        "facil",
        "medio",
        "dificil",
        "impossivel"
    ];

    if (!validDifficulties.includes(difficulty)) {
        return;
    }

    currentDifficulty = difficulty;
    currentDialogue = 0;

    hideAll();

    document.getElementById("story").classList.remove("hidden");

    document.getElementById("chapter").textContent =
        "ANTES DE COMEÇAR";

    document.getElementById("description").textContent =
        "Toda história começa com um nome.\n\nQual é o seu nome?";

    document.getElementById("choices").innerHTML = `
        <input
            type="text"
            id="playerName"
            placeholder="Digite seu nome..."
            maxlength="20"
        >
        <button onclick="confirmName()">CONFIRMAR</button>
    `;
}

// =====================================
// CONFIRMAR NOME
// =====================================

function confirmName() {
    const input = document.getElementById("playerName");
    const name = input.value.trim();

    if (name.length < 2) {
        alert("Digite um nome com pelo menos 2 letras!");
        return;
    }

    playerName = name;

    // MODO IMPOSSÍVEL
    if (currentDifficulty === "impossivel") {
        impossibleEnding();
        return;
    }

    currentDialogue = 0;
    nextDialogue();
}

// =====================================
// MODO IMPOSSÍVEL
// =====================================

function impossibleEnding() {
    document.getElementById("chapter").textContent =
        "MODO IMPOSSÍVEL — FIM";

    document.getElementById("description").textContent =
        `${playerName}, você morreu na hora do parto.

Você foi tão cagado que deu sorte do médico escorregar e cair com você no colo.

Você nem conseguiu nascer direito.

PARABÉNS! RECORDISTA MUNDIAL DE AZAR.

FIM DE JOGO.`;

    showEndButtons();
}

// =====================================
// MOSTRAR DIÁLOGOS
// =====================================

function nextDialogue() {
    let dialogues;

    if (currentDifficulty === "facil") {
        dialogues = dialoguesFacil;
    } else if (currentDifficulty === "medio") {
        dialogues = dialoguesMedio;
    } else if (currentDifficulty === "dificil") {
        dialogues = dialoguesDificil;
    }

    const dialogue = dialogues[currentDialogue];

    document.getElementById("chapter").textContent =
        dialogue.title;

    document.getElementById("description").textContent =
        dialogue.text();

    const choicesBox = document.getElementById("choices");
    choicesBox.innerHTML = "";

    dialogue.choices.forEach(option => {
        const button = document.createElement("button");

        button.textContent = option;

        button.onclick = () => {
            if (currentDifficulty === "dificil" &&
                currentDialogue === 4) {
                gameOver();
                return;
            }

            if (currentDialogue === dialogues.length - 1) {
                gameOver();
                return;
            }

            currentDialogue++;
            nextDialogue();
        };

        choicesBox.appendChild(button);
    });
}

// =====================================
// FINAIS DE MORTE
// =====================================

function gameOver() {
    document.getElementById("chapter").textContent =
        "FIM DE JOGO";

    let ending = "";

    if (currentDifficulty === "facil") {
        ending = `${playerName}, você morreu!

Depois de uma vida inteira de luxo, mistérios e dinheiro...

Seu maior inimigo acabou sendo uma escada.

Você tropeçou no último degrau da mansão.

A família herdou sua fortuna.

O cachorro herdou seu quarto.

FIM DE JOGO.`;
    }

    else if (currentDifficulty === "medio") {
        ending = `${playerName}, você morreu!

Depois de investigar tantos mistérios e descobrir tantos segredos...

Você esqueceu de olhar para os dois lados antes de atravessar a rua.

O mistério foi resolvido.

Mas você não chegou para assistir.

FIM DE JOGO.`;
    }

    else if (currentDifficulty === "dificil") {
        ending = `${playerName}, você morreu!

MOTIVO DA MORTE:

ESCORREGOU NO BANHO.

Você enfrentou o trabalho, a fome, o cansaço...

Mas não conseguiu vencer o banheiro.

A gravidade venceu novamente.

FIM DE JOGO.`;
    }

    document.getElementById("description").textContent = ending;

    showEndButtons();
}

// =====================================
// BOTÕES DO FINAL
// =====================================

function showEndButtons() {
    const choicesBox = document.getElementById("choices");
    choicesBox.innerHTML = "";

    const retry = document.createElement("button");
    retry.textContent = "JOGAR NOVAMENTE";

    retry.onclick = () => startGame(currentDifficulty);

    const menu = document.createElement("button");
    menu.textContent = "VOLTAR AO MENU";

    menu.onclick = backHome;

    choicesBox.appendChild(retry);
    choicesBox.appendChild(menu);
}

// =====================================
// FUNÇÕES DO MENU
// =====================================

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
