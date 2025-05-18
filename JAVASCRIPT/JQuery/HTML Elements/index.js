$(function() {
    $('#adicionar').on('click', function() {
        $('#elementos').append('<p>Novo parágrafo adicionado!</p>');
    });

    $('#remover').on('click', function() {
        $('#elementos p:last').remove();
    });
});