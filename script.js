const botoesIdioma = document.querySelectorAll('.idiomas button');
const conteudosIdioma = document.querySelectorAll('.conteudo-idioma');
const botaoMenu = document.getElementById('botaoMenu');
const menu = document.getElementById('menu');
const linksMenu = document.querySelectorAll('.menu a');
const formContato = document.getElementById('formContato');
const mensagemForm = document.getElementById('mensagemForm');

botoesIdioma.forEach((botao) => {
    botao.addEventListener('click', () => {
        const idiomaSelecionado = botao.dataset.idioma;

        botoesIdioma.forEach((item) => item.classList.remove('idioma-ativo'));
        botao.classList.add('idioma-ativo');

        conteudosIdioma.forEach((bloco) => {
            if (bloco.dataset.conteudo === idiomaSelecionado) {
                bloco.classList.remove('escondido');
            } else {
                bloco.classList.add('escondido');
            }
        });
    });
});

if (botaoMenu) {
    botaoMenu.addEventListener('click', () => {
        menu.classList.toggle('menu-aberto');
        document.body.classList.toggle('menu-aberto');
    });
}

linksMenu.forEach((link) => {
    link.addEventListener('click', () => {
        menu.classList.remove('menu-aberto');
        document.body.classList.remove('menu-aberto');
    });
});

if (formContato) {
    formContato.addEventListener('submit', (evento) => {
        evento.preventDefault();

        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();

        if (nome === '' || email === '' || mensagem === '') {
            mensagemForm.textContent = 'Preencha todos os campos antes de enviar.';
            mensagemForm.style.color = '#facc15';
            return;
        }

        const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailValido.test(email)) {
            mensagemForm.textContent = 'Digite um e-mail válido.';
            mensagemForm.style.color = '#facc15';
            return;
        }

        const assunto = encodeURIComponent('Contato pelo portfólio');
        const corpo = encodeURIComponent(
            'Nome: ' + nome + '\n' +
            'E-mail: ' + email + '\n\n' +
            'Mensagem:\n' + mensagem
        );

        mensagemForm.textContent = 'Abrindo seu aplicativo de e-mail...';
        mensagemForm.style.color = '#93c5fd';

        window.location.href = 'mailto:matheus.araujo.1640915@sga.pucminas.br?subject=' + assunto + '&body=' + corpo;

        formContato.reset();
    });
}


// Linha do tempo gerada com JavaScript, mantendo os cartões originais como fallback.
// Para acrescentar um projeto, adicione outro objeto neste vetor.
const projetosPortfolio = [
    {
        ordem: 1,
        categoria: 'Projeto Web',
        titulo: 'Site-IENT',
        descricao: 'Projeto de site institucional voltado ao Colégio Novos Tempos, reunindo conteúdo e estrutura para presença digital da instituição.',
        tecnologias: 'Não especificadas no repositório',
        url: 'https://github.com/MatheusLages/Site-IENT',
        linkTexto: 'Ver no GitHub',
        destaque: true
    },
    {
        ordem: 2,
        categoria: 'DIW',
        titulo: 'Prova1-DIW',
        descricao: 'Repositório desenvolvido para a primeira avaliação da disciplina de Desenvolvimento de Interfaces Web, com arquivos em HTML e CSS e respostas da atividade.',
        tecnologias: 'HTML5 e CSS3',
        imagem: 'docs/demonstracoes/prova1-diw.png',
        imagemAlt: 'Captura real da página Meu Perfil do projeto Prova1-DIW',
        url: 'https://github.com/MatheusLages/Prova1-DIW',
        linkTexto: 'Ver no GitHub'
    },
    {
        ordem: 3,
        categoria: 'Portfólio',
        titulo: 'Portfólio Profissional',
        descricao: 'Projeto pessoal desenvolvido para apresentar formação, experiências, projetos e contatos em uma interface interativa inspirada em tecnologia, games e esportes.',
        tecnologias: 'HTML5, CSS3, JavaScript e Canvas API',
        imagem: 'docs/demonstracoes/portfolio-projetos.png',
        imagemAlt: 'Captura real da seção de projetos do portfólio',
        url: 'https://github.com/MatheusLages/Portifolio-Profissional',
        linkTexto: 'Ver repositório'
    }
];

function criarCartaoProjeto(projeto) {
    const artigo = document.createElement('article');
    artigo.className = 'timeline-item cartao' + (projeto.destaque ? ' destaque-borda' : '');

    const categoria = document.createElement('span');
    categoria.className = 'ano';
    categoria.textContent = projeto.categoria;

    const titulo = document.createElement('h3');
    titulo.textContent = projeto.titulo;

    const descricao = document.createElement('p');
    descricao.textContent = projeto.descricao;

    const tecnologias = document.createElement('p');
    const rotulo = document.createElement('strong');
    rotulo.textContent = 'Tecnologias: ';
    tecnologias.append(rotulo, document.createTextNode(projeto.tecnologias));

    const link = document.createElement('a');
    link.href = projeto.url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.className = 'link-projeto';
    link.textContent = projeto.linkTexto;

    artigo.append(categoria, titulo, descricao, tecnologias);
    if (projeto.imagem) {
        const imagem = document.createElement('img');
        imagem.src = projeto.imagem;
        imagem.alt = projeto.imagemAlt;
        imagem.className = 'imagem-projeto';
        imagem.loading = 'lazy';
        artigo.appendChild(imagem);
    }
    artigo.appendChild(link);
    return artigo;
}

const timelineProjetos = document.getElementById('timelineProjetos');
if (timelineProjetos) {
    const projetosOrdenados = [...projetosPortfolio].sort((a, b) => a.ordem - b.ordem);
    timelineProjetos.replaceChildren(...projetosOrdenados.map(criarCartaoProjeto));
}

const canvas = document.getElementById('ceu-estrelado');
const contexto = canvas.getContext('2d');

let largura = window.innerWidth;
let altura = window.innerHeight;
let estrelas = [];
let ponteiro = { x: largura / 2, y: altura / 2 };
let tempo = 0;
const QUANTIDADE_ESTRELAS_FUNDO = 260;

function ajustarCanvas() {
    largura = window.innerWidth;
    altura = window.innerHeight;
    canvas.width = largura;
    canvas.height = altura;
    criarEstrelas();
}

function criarEstrelas() {
    estrelas = [];

    for (let i = 0; i < QUANTIDADE_ESTRELAS_FUNDO; i++) {
        estrelas.push({
            x: Math.random() * largura,
            y: Math.random() * altura,
            raio: Math.random() * 1.8 + 0.4,
            opacidade: Math.random() * 0.6 + 0.15,
            velocidade: Math.random() * 0.008 + 0.002,
            direcao: Math.random() > 0.5 ? 1 : -1
        });
    }
}

function desenharPonto(x, y, raio, cor, brilho) {
    contexto.beginPath();
    contexto.arc(x, y, raio, 0, Math.PI * 2);
    contexto.fillStyle = cor;
    contexto.shadowBlur = brilho;
    contexto.shadowColor = cor;
    contexto.fill();
    contexto.shadowBlur = 0;
}

function desenharEstrela(x, y, raioExterno, raioInterno, cor, brilho) {
    let angulo = -Math.PI / 2;
    const passo = Math.PI / 5;

    contexto.beginPath();

    for (let i = 0; i < 10; i++) {
        const raioAtual = i % 2 === 0 ? raioExterno : raioInterno;
        const pontoX = x + Math.cos(angulo) * raioAtual;
        const pontoY = y + Math.sin(angulo) * raioAtual;

        if (i === 0) {
            contexto.moveTo(pontoX, pontoY);
        } else {
            contexto.lineTo(pontoX, pontoY);
        }

        angulo += passo;
    }

    contexto.closePath();
    contexto.fillStyle = cor;
    contexto.shadowBlur = brilho;
    contexto.shadowColor = cor;
    contexto.fill();
    contexto.shadowBlur = 0;
}

function obterEstrelasCruzeiro() {
    const centroX = largura * 0.78;
    const centroY = altura * 0.31;
    const escala = Math.max(72, Math.min(largura * 0.11, 145));

    return [
        { x: centroX, y: centroY - escala * 0.72, tamanho: escala * 0.16, intensidade: 0.75 },
        { x: centroX - escala * 0.58, y: centroY - escala * 0.16, tamanho: escala * 0.15, intensidade: 0.45 },
        { x: centroX + escala * 0.58, y: centroY - escala * 0.16, tamanho: escala * 0.15, intensidade: 0.55 },
        { x: centroX + escala * 0.08, y: centroY + escala * 0.00, tamanho: escala * 0.10, intensidade: 1.00 },
        { x: centroX, y: centroY + escala * 0.72, tamanho: escala * 0.16, intensidade: 0.65 }
    ];
}

function desenharCruzeiro() {
    const estrelasCruzeiro = obterEstrelasCruzeiro();
    const haloX = estrelasCruzeiro[3].x;
    const haloY = estrelasCruzeiro[3].y;
    const halo = contexto.createRadialGradient(
        haloX,
        haloY,
        10,
        haloX,
        haloY,
        Math.max(170, largura * 0.16)
    );

    halo.addColorStop(0, 'rgba(96, 165, 250, 0.10)');
    halo.addColorStop(0.55, 'rgba(255, 255, 255, 0.03)');
    halo.addColorStop(1, 'rgba(2, 8, 23, 0)');

    contexto.fillStyle = halo;
    contexto.fillRect(0, 0, largura, altura);

    estrelasCruzeiro.forEach((estrela, indice) => {
        const pulso = (Math.sin(tempo * 0.02 + estrela.intensidade * 5) + 1) / 2;
        const opacidade = 0.46 + pulso * 0.28;
        const brilho = 10 + pulso * 14;
        const raioExterno = estrela.tamanho + pulso * 1.4;
        const raioInterno = raioExterno * 0.45;
        const cor = indice === 3
            ? 'rgba(255, 255, 255, ' + (opacidade + 0.10) + ')'
            : 'rgba(255, 255, 255, ' + opacidade + ')';

        desenharEstrela(estrela.x, estrela.y, raioExterno, raioInterno, cor, brilho);
    });
}

function animar() {
    tempo += 1;
    contexto.clearRect(0, 0, largura, altura);

    const gradiente = contexto.createRadialGradient(
        ponteiro.x,
        ponteiro.y,
        0,
        ponteiro.x,
        ponteiro.y,
        largura * 0.45
    );

    gradiente.addColorStop(0, 'rgba(29, 78, 216, 0.10)');
    gradiente.addColorStop(1, 'rgba(2, 8, 23, 0)');

    contexto.fillStyle = gradiente;
    contexto.fillRect(0, 0, largura, altura);

    estrelas.forEach((estrela) => {
        estrela.opacidade += estrela.velocidade * estrela.direcao;

        if (estrela.opacidade >= 0.9 || estrela.opacidade <= 0.15) {
            estrela.direcao *= -1;
        }

        desenharPonto(
            estrela.x,
            estrela.y,
            estrela.raio,
            'rgba(255, 255, 255, ' + estrela.opacidade + ')',
            8
        );
    });

    desenharCruzeiro();
    requestAnimationFrame(animar);
}

window.addEventListener('resize', ajustarCanvas);
window.addEventListener('mousemove', (evento) => {
    ponteiro.x = evento.clientX;
    ponteiro.y = evento.clientY;
});

window.addEventListener('touchmove', (evento) => {
    if (evento.touches.length > 0) {
        ponteiro.x = evento.touches[0].clientX;
        ponteiro.y = evento.touches[0].clientY;
    }
});

ajustarCanvas();
animar();