$(function() {
    $('#realcar').on('click', function() {
        // Seleciona todos os parágrafos
        $('p').css('background', '#e3f2fd');

        // Seleciona elementos com a classe .destaque
        $('.destaque').css('background', '#bbdefb');

        // Seleciona o elemento com id #lista e destaca seus itens
        $('#lista li').css('border-left', '4px solid #1976d2');
    });
});