const form = document.getElementById('formExemplo');
const emailInput = document.getElementById('email');
const emailError = document.getElementById('emailError');
const resultado = document.getElementById('resultado');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    emailError.textContent = '';
    resultado.textContent = '';

    if (!emailInput.checkValidity()) {
        if (emailInput.validity.valueMissing) {
            emailError.textContent = 'O campo e-mail é obrigatório.';
        } else if (emailInput.validity.typeMismatch) {
            emailError.textContent = 'Digite um e-mail válido.';
        }
        emailInput.focus();
        return;
    }

    resultado.textContent = 'Formulário enviado com sucesso!';
    form.reset();
});