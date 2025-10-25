/**
 * js/app.js
 * * Arquivo principal da aplicação (Entry Point).
 * Responsável por:
 * 1. Importar os módulos (templates e validação).
 * 2. Implementar o sistema de Roteamento (SPA).
 * 3. Manipular o DOM para renderizar o conteúdo.
 */

// 1. Importa os módulos
//    './modules/...' significa "olhe para uma pasta chamada 'modules'
//    a partir deste mesmo diretório"
import { templates } from './modules/templates.js';
import { initializeFormValidation } from './modules/validation.js';

// 2. Define os elementos principais do DOM
const appRoot = document.getElementById('app-root');

// 3. Define as rotas da aplicação
// Mapeia um "hash" (ex: #home) para um template do módulo 'templates.js'
const routes = {
    '#home': templates.home,
    '#sobre': templates.sobre,
    '#contato': templates.contato,
};

// 4. Função Roteadora (O coração da SPA)
function router() {
    // Pega o hash da URL (ex: #home, #sobre)
    // Se não houver hash, define '#home' como padrão
    const hash = window.location.hash || '#home';

    // Encontra o template correspondente à rota
    // Se a rota não existir no objeto 'routes', usa um template de 'não encontrado'
    const template = routes[hash] || `<h2>Erro 404: Página Não Encontrada</h2>`;

    // ** Manipulação do DOM **
    // Injeta o template HTML dentro do <main id="app-root">
    appRoot.innerHTML = template;

    // ** Funcionalidade Específica **
    // Se a página de contato foi carregada, inicializa a validação do formulário
    if (hash === '#contato') {
        initializeFormValidation('contact-form');
    }
}

// --- Event Listeners (Ouvintes de Eventos) ---

// 1. Ouve o evento 'hashchange'
// Dispara toda vez que o hash da URL muda (ex: clique em um link <a>)
window.addEventListener('hashchange', router);

// 2. Ouve o evento 'load'
// Dispara quando a página é carregada pela primeira vez
window.addEventListener('load', () => {
    // Garante que temos um hash padrão ao carregar
    if (!window.location.hash) {
        window.location.hash = '#home';
    }
    // Chama o roteador pela primeira vez para carregar a página inicial
    router();
});