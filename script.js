const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "No início ficou com medo do que essa tecnologia pode fazer. "
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "Quis saber como usar IA no seu dia a dia. "
            }
        ]
    },
    {
        enunciado: "Com a descoberta desta tecnologia, chamada Inteligência Artificial, uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre esta tecnologia. No fim de uma aula ela pede que você escreva um trabalho sobre o uso de IA em sala de aula. Qual atitude você toma?",
        alternativas: [
            {
                texto: "Utiliza uma ferramenta de busca com IA para encontrar informações relevantes.",
                afirmacao: "Conseguiu utilizar a IA para buscar informações úteis. "
            },
            {
                texto: "Escreve o trabalho com base em conversas e conhecimentos próprios.",
                afirmacao: "Sentiu mais facilidade em utilizar seus próprios recursos. "
            }
        ]
    },
    {
        enunciado: "No debate sobre IA e o futuro do trabalho, como você se posiciona?",
        alternativas: [
            {
                texto: "Defende que a IA cria novas oportunidades de emprego.",
                afirmacao: "Vem impulsionando a inovação e criando novos caminhos profissionais com IA. "
            },
            {
                texto: "Se preocupa com quem pode perder o emprego para máquinas.",
                afirmacao: "Motivou um grupo de estudos para discutir o uso ético da IA. "
            }
        ]
    },
    {
        enunciado: "Você precisa criar uma imagem que represente sua visão sobre a IA. E agora?",
        alternativas: [
            {
                texto: "Criar com Paint ou outra ferramenta de design tradicional.",
                afirmacao: "Decidiu compartilhar conhecimentos em design com ferramentas digitais. "
            },
            {
                texto: "Criar com gerador de imagens por IA.",
                afirmacao: "Agora ensina pessoas a usarem IA para expressar ideias visualmente. "
            }
        ]
    },
    {
        enunciado: "Seu grupo atrasou o trabalho de biologia, e alguém colou tudo do chat. O que faz?",
        alternativas: [
            {
                texto: "Acha que usar o texto do chat inteiro não é problema.",
                afirmacao: "Agora depende da IA para todas as tarefas. "
            },
            {
                texto: "Revê o conteúdo e adapta com ideias do grupo.",
                afirmacao: "Percebeu que a IA deve ser apoio, não o produto final. "
            }
        ]
    }
];

let atual = 0;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    const perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.innerHTML = "";
    perguntaAtual.alternativas.forEach(alternativa => {
        const botao = document.createElement("button");
        botao.textContent = alternativa.texto;
        botao.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botao);
    });
}

function respostaSelecionada(opcao) {
    historiaFinal += opcao.afirmacao;
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    caixaAlternativas.innerHTML = "";
    textoResultado.textContent = "";

    let i = 0;
    const intervalo = setInterval(() => {
        textoResultado.textContent += historiaFinal[i];
        i++;
        if (i >= historiaFinal.length) clearInterval(intervalo);
    }, 25);

    // Botão para reiniciar
    const botaoReiniciar = document.createElement("button");
    botaoReiniciar.textContent = "Tentar de novo";
    botaoReiniciar.addEventListener("click", reiniciar);
    caixaAlternativas.appendChild(botaoReiniciar);
}

function reiniciar() {
    atual = 0;
    historiaFinal = "";
    mostraPergunta();
}

mostraPergunta();
