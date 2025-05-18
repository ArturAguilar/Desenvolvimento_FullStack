$(function() {
    $('#adicionar').on('click', function() {
        const total = $('#lista li').length + 1;
        $('#lista').append(`<li>Item ${total}</li>`);
    });

    $('#remover').on('click', function() {
        $('#lista li:last').remove();
    });
});