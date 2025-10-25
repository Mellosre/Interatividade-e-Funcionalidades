# Innovate Tech - Site SPA (Single Page Application)

Este é um projeto de site institucional para a "Innovate Tech", uma empresa de consultoria de tecnologia fictícia. O projeto foi desenvolvido como uma Single Page Application (SPA) usando JavaScript puro (Vanilla JS), HTML5 e CSS3.

O objetivo principal é demonstrar conceitos de desenvolvimento front-end moderno, como manipulação do DOM, modularização de código e roteamento do lado do cliente, tudo isso com uma interface de usuário profissional e limpa.

## 🚀 Objetivos do Projeto

Este projeto foi criado para atender aos seguintes requisitos técnicos e de funcionalidade:

* **Interface Profissional:** Criar um layout corporativo e moderno, utilizando uma paleta de cores coesa, fontes legíveis (Google Fonts) e estilização profissional para formulários e botões.
* **Single Page Application (SPA):** Implementar um sistema de SPA básico, onde a navegação entre as páginas "Home", "Sobre Nós" e "Contato" ocorre instantaneamente, sem a necessidade de recarregar a página.
* **Manipulação do DOM:** Utilizar JavaScript para alterar dinamicamente o conteúdo principal (`<main>`) com base na rota acessada pelo usuário.
* **Validação de Formulários:** Implementar um sistema robusto de verificação de consistência de dados no formulário de contato, com feedback visual em tempo real para o usuário (mensagens de erro, bordas vermelhas, etc.).
* **Código JavaScript Modular:** Estruturar o JavaScript em módulos (ES6 Modules), separando as responsabilidades (roteador, templates, lógica de validação) para melhor organização e manutenção.

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estrutura semântica do site.
* **CSS3:** Estilização moderna (incluindo Flexbox, Variáveis CSS e Google Fonts).
* **JavaScript (ES6+):** Lógica da aplicação, manipulação do DOM e modularização (usando `import`/`export`).

## 📁 Estrutura de Pastas

O projeto está organizado da seguinte forma para garantir a separação de responsabilidades:

/innovate-tech-spa/
├── index.html         # Arquivo HTML principal (casca da SPA)
├── /css/
│   └── style.css      # Folha de estilos principal
└── /js/
    ├── app.js         # Arquivo principal (roteador e inicializador)
    └── /modules/
        ├── templates.js   # Módulo com os templates HTML das páginas
        └── validation.js  # Módulo com a lógica de validação do formulário


## ⚙️ Como Executar o Projeto

**IMPORTANTE:** Este projeto utiliza Módulos ES6 (`import`/`export`) no JavaScript. Por motivos de segurança (política de CORS), ele **não funcionará** se você apenas abrir o arquivo `index.html` diretamente no navegador (usando `file:///...`).

Você **precisa** executá-lo a partir de um servidor local. A forma mais fácil é usando a extensão **Live Server** no VS Code.

1.  Certifique-se de ter o [Visual Studio Code](https://code.visualstudio.com/) instalado.
2.  Instale a extensão [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) no VS Code.
3.  Abra a pasta do projeto no VS Code.
4.  Clique com o botão direito no arquivo `index.html`.
5.  Selecione a opção **"Open with Live Server"**.
6.  O projeto será aberto automaticamente no seu navegador em um endereço como `http://127.0.0.1:5500`.

## 👨‍💻 Autor

* **Renato Mello**
    * Estudante de Análise e Desenvolvimento de Sistemas