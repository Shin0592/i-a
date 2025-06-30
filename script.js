const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual seria o melhor uso desta nova tecnologia na sua opnião?",
        alternativas: [
            {
                texto: "Isso Ser usado ao máximo possível!",
                afirmacao: "Facilitar a vida humana é o objetivo de criar novas tecnologias. "
            },
            {
                texto: "Isso deveria ser limitado!",
                afirmacao: "Uma tecnologia com essas habilidades podem ser usadas do jeito errado por pessoas mal-intencionadas."
            }
        ]
    },
    {
        enunciado: "Com a descoberta desta tecnologia, uma professore passou um trabalho sobre IA. Como você faz esse trabalho.",
        alternativas: [
            {
                texto: "Ultiliza da própria IA para fazer o trabalho para você e buscar as informações relevantes sobre o assunto.",
                afirmacao: "Conseguiu utilizar a IA para buscar informações úteis."
            },
            {
                texto: "Conversa com outros colegas e faz algumas pesquisas na internet para realizar o trabalho.",
                afirmacao: "Sentiu mais facilidade em utilizar seus próprios recursos para escrever seu trabalho."
            }
        ]
    },
    {
        enunciado: "Após a finalização do trabalho a professora começa um debate sobre como a IA vai influenciar o trabalho no futuro. qual sua opnião sobre o assunto.",
        alternativas: [
            {
                texto: "Defende a ideia de que a IA pode criar novas oportunidades de trabalho e facilitar a vida humana.",
                afirmacao: "Vem impulsionando a inovação na área de IA e luta para abrir novos caminhos profissionais com IA."
            },
            {
                texto: "Defende que o uso da IA pode ser um problema no mercado de trabalho ocupando o emprego de várias pessoas no mundo.",
                afirmacao: "Sua preocupação com o assunto impulsiona a criação de um grupo que procura meios de usar a IA de forma mais ética."
            }
        ]
    },
    {
        enunciado: "Ao final do debate, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
        alternativas: [
            {
                texto: "Criar uma imagem utilizando uma plataforma de design.",
                afirmacao: "Notou que muitas pessoas não sabem usar plataformas de design tradicionais e começa a ensinar elas a usar."
            },
            {
                texto: "Usou uma IA para gerar a imagem de maneira mais rapidá e facil.",
                afirmacao: "Acelerou o processo de criação de trabalhos utilizando IA e agora ultiliza ela para ajudar pessoas com dificildade de desenho"
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer uso da IA para fazer o trabalho. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso revisar o trabalho e procurar possíveis erros.",
                afirmacao: "percebeu que muitas das informações do chat vem da empresa que o programou e não representa oque você pensa de maneira correta. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
