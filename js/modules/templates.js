/**
 * js/modules/templates.js
 * * Armazena os templates HTML para a "Innovate Tech".
 */

export const templates = {
    // Template da Página Inicial
    home: `
        <h2>Transformando Ideias em Soluções Digitais</h2>
        <p>Na Innovate Tech, combinamos criatividade e tecnologia para construir o futuro dos negócios digitais. Nossa missão é fornecer soluções web robustas, escaláveis e intuitivas que impulsionam o crescimento dos nossos clientes.</p>
        <p>Seja um website institucional, um e-commerce complexo ou uma aplicação web sob medida, nossa equipe está pronta para transformar seu desafio em uma história de sucesso.</p>
        <br>
        <a href="#contato" class="cta-button">Vamos Conversar Sobre Seu Projeto</a>
    `,

    // Template da Página Sobre
    sobre: `
        <h2>Sobre Nós e Nossos Serviços</h2>
        <p>A Innovate Tech nasceu da paixão por resolver problemas complexos com tecnologia de ponta. Somos mais do que desenvolvedores; somos seus parceiros estratégicos em inovação.</p>
        
        <h3>Nossa Missão</h3>
        <p>Nossa missão é democratizar o acesso a soluções digitais de alta performance, permitindo que empresas de todos os tamanhos possam competir de igual para igual na nova economia digital.</p>

        <h3>Nossos Serviços</h3>
        <ul>
            <li><strong>Desenvolvimento Web Customizado:</strong> Criação de plataformas, dashboards e sistemas web sob medida.</li>
            <li><strong>Aplicações Mobile (Híbridas):</strong> Desenvolvimento de aplicativos para iOS e Android com React Native e Flutter.</li>
            <li><strong>Consultoria em UI/UX Design:</strong> Desenhamos interfaces focadas no usuário para garantir a melhor experiência.</li>
            <li><strong>Integração de Sistemas e APIs:</strong> Conectamos suas ferramentas para otimizar processos e fluxo de dados.</li>
        </ul>
    `,

    // Template da Página de Contato
    contato: `
        <h2>Pronto para Inovar?</h2>
        <p>Estamos ansiosos para ouvir sobre seu próximo grande projeto. Preencha o formulário abaixo e um de nossos especialistas entrará em contato o mais breve possível.</p>
        
        <form id="contact-form" novalidate>
            
            <div class="form-group">
                <label for="name">Seu Nome:</label>
                <input type="text" id="name" name="name" required minlength="3">
                <span class="error-message">Por favor, preencha seu nome (mín. 3 caracteres).</span>
            </div>
            
            <div class="form-group">
                <label for="email">Seu Melhor Email:</label>
                <input type="email" id="email" name="email" required>
                <span class="error-message">Por favor, insira um email válido.</span>
            </div>
            
            <div class="form-group">
                <label for="message">Fale sobre seu projeto:</label>
                <textarea id="message" name="message" rows="6" required></textarea>
                <span class="error-message">Por favor, conte-nos um pouco sobre sua ideia.</span>
            </div>
            
            <button type="submit">Enviar Mensagem</button>
        </form>
    `
};