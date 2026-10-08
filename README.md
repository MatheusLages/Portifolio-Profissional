# Portfólio Profissional — Matheus Lages

Portfólio profissional desenvolvido para a disciplina **Desenvolvimento de Interfaces Web (DIW)**, no curso de Ciência da Computação da PUC Minas.

## Sobre o projeto

O site apresenta minha formação acadêmica, áreas de interesse, projetos desenvolvidos, experiências e informações de contato. A interface foi construída com referências a **tecnologia, games e esportes**, cores azul, branco e preto e um céu estrelado com as cinco estrelas do Cruzeiro em destaque.

## Funcionalidades

- Apresentação "Sobre Mim" em português e inglês;
- Menu de navegação entre as seções;
- Linha do tempo de projetos com links para o GitHub;
- Experiências profissionais e acadêmicas;
- Links de contato para e-mail, GitHub e LinkedIn;
- Formulário com validação básica que abre o aplicativo de e-mail do visitante;
- Fundo estrelado animado com Canvas em JavaScript;
- Layout responsivo para computadores e celulares.

> O formulário utiliza o protocolo `mailto:`. O envio da mensagem é concluído no aplicativo de e-mail do visitante; não existe back-end para enviar e-mails automaticamente.

## Tecnologias utilizadas

| Tecnologia | Uso |
| --- | --- |
| HTML5 | Estrutura e conteúdo |
| CSS3 | Layout, cores e responsividade |
| JavaScript | Interatividade, validação e animação das estrelas |
| Canvas API | Desenho do céu estrelado |
| Git / GitHub | Versionamento e repositório |
| GitHub Pages | Hospedagem gratuita do portfólio |

**Bibliotecas e dependências:** nenhuma. O projeto utiliza apenas recursos nativos do navegador. Não há instalação de pacotes nem banco de dados.

## Arquitetura

Aplicação web estática, sem back-end. O navegador carrega `index.html`, o estilo `style.css`, as interações `script.js` e as imagens da pasta `assets/`. O formulário inicia a composição de uma mensagem no cliente de e-mail instalado no dispositivo do usuário.

## Estrutura de pastas

```text
Portifolio-Profissional/
├── index.html
├── style.css
├── script.js
├── assets/
│   ├── foto-principal.jpg
│   └── foto-secundaria.jpeg
└── README.md
```

## Instalação e execução local

1. Faça o download ou clone este repositório.
2. Abra a pasta no Visual Studio Code.
3. Abra o arquivo `index.html` no navegador ou use a extensão Live Server.

Também é possível iniciar um servidor local com Python:

```bash
python -m http.server 5500
```

Depois, acesse `http://localhost:5500`.

Não são necessárias variáveis de ambiente, bibliotecas, frameworks ou instalação de dependências.

## Demonstração

**Portfólio online:** [Acessar o site](https://matheuslages.github.io/Portifolio-Profissional/)

Capturas de tela e GIFs dos demais projetos apresentados poderão ser acrescentados à documentação, conforme solicitado no laboratório.

## Projetos apresentados

- [Site-IENT](https://github.com/MatheusLages/Site-IENT)
- [Prova1-DIW](https://github.com/MatheusLages/Prova1-DIW)
- Este Portfólio Profissional

## Publicação

**Status:** publicação realizada via GitHub Pages (execução de publicação concluída com sucesso).

**Repositório:** [MatheusLages/Portifolio-Profissional](https://github.com/MatheusLages/Portifolio-Profissional)

**Site publicado:** [https://matheuslages.github.io/Portifolio-Profissional/](https://matheuslages.github.io/Portifolio-Profissional/)

**Hospedagem:** GitHub Pages, com origem na branch `main` e pasta `/ (root)`. Atualizações nessa branch geram novas publicações.

## Autor

**Matheus Lages**  
Estudante do 2º período de Ciência da Computação na PUC Minas.  
E-mail: matheus.araujo.1640915@sga.pucminas.br  
GitHub: https://github.com/MatheusLages  
LinkedIn: https://www.linkedin.com/in/matheus-lages-232a50416/

## Contexto acadêmico

Laboratório 01 — Portfólio Profissional  
Disciplina: Desenvolvimento de Interfaces Web (DIW)  
Professor: João Paulo Carneiro Aramuni  
Instituição: PUC Minas

Documentação adaptada para o projeto a partir do [template recomendado para README](https://github.com/joaopauloaramuni/desenvolvimento-de-interfaces-web/blob/main/TEMPLATES/template_README.md).