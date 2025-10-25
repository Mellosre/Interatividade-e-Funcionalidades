/**
 * js/modules/validation.js
 * * Módulo responsável pela validação de consistência de dados
 * do formulário de contato.
 */

// Função para mostrar o erro em um campo
function showError(field) {
    const group = field.parentElement;
    group.classList.add('invalid');
}

// Função para limpar o erro de um campo
function clearError(field) {
    const group = field.parentElement;
    group.classList.remove('invalid');
}

// Função principal que valida um campo individual
function validateField(field) {
    let isValid = true;

    // 1. Verificação de 'required' (campo vazio)
    if (field.hasAttribute('required') && !field.value.trim()) {
        isValid = false;
    }

    // 2. Verificação de 'minlength' (comprimento mínimo)
    if (isValid && field.hasAttribute('minlength')) {
        const minLength = parseInt(field.getAttribute('minlength'), 10);
        if (field.value.trim().length < minLength) {
            isValid = false;
        }
    }

    // 3. Verificação de 'email'
    if (isValid && field.type === 'email' && field.value.trim()) {
        // Expressão regular simples para validar email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(field.value)) {
            isValid = false;
        }
    }

    // Atualiza a UI (mostra ou esconde o erro)
    if (!isValid) {
        showError(field);
    } else {
        clearError(field);
    }
    
    return isValid;
}

// Função que é exportada para ser usada no app.js
export function initializeFormValidation(formId) {
    const form = document.getElementById(formId);
    if (!form) return; // Sai se o formulário não existir

    // Pega todos os campos que precisam de validação
    const fields = form.querySelectorAll('input[required], textarea[required]');

    // 1. Validação ao tentar enviar (SUBMIT)
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio real do formulário
        
        let isFormValid = true;
        
        // Valida todos os campos
        fields.forEach(field => {
            if (!validateField(field)) {
                isFormValid = false;
            }
        });

        if (isFormValid) {
            alert('Formulário enviado com sucesso! (Simulação)');
            form.reset();
            fields.forEach(clearError); // Limpa todos os erros
        } else {
            alert('Por favor, corrija os campos em vermelho.');
        }
    });

    // 2. Validação "real-time" ao sair do campo (evento 'blur')
    fields.forEach(field => {
        field.addEventListener('blur', () => {
            validateField(field); // Valida o campo quando o usuário sai dele
        });
    });
}