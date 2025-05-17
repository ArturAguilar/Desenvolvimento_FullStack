// Exemplo de validação de formulário com JavaScript

document.getElementById("formValidacao").addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const idade = document.getElementById("idade").value.trim();
    let mensagem = "";

    if (nome.length < 3) {
        mensagem += "O nome deve ter pelo menos 3 caracteres.<br>";
    }

    // Validação simples de email
    if (!email.match(/^[\w-.]+@[\w-]+\.[a-z]{2,}$/i)) {
        mensagem += "Digite um email válido.<br>";
    }

    if (idade === "" || isNaN(idade) || idade < 1 || idade > 120) {
        mensagem += "Digite uma idade válida entre 1 e 120.<br>";
    }

    if (mensagem) {
        document.getElementById("demo").innerHTML = `<span style="color:red">${mensagem}</span>`;
    } else {
        document.getElementById("demo").innerHTML = `<span style="color:green">Formulário enviado com sucesso!</span>`;
    }
});

document.getElementById("demo2").innerText = "Preencha o formulário e clique em Enviar para validar os dados.";