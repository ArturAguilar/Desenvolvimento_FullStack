$(document).ready(function(){
    // Adiciona antes do elemento
    $("#btn-before").click(function(){
        $("#elemento").before("<p style='color:blue;'>Elemento adicionado antes</p>");
    });

    // Adiciona depois do elemento
    $("#btn-after").click(function(){
        $("#elemento").after("<p style='color:green;'>Elemento adicionado depois</p>");
    });

    // Adiciona ao final do container
    $("#btn-append").click(function(){
        $("#container").append("<p style='color:purple;'>Elemento adicionado ao final do container</p>");
    });

    // Adiciona ao início do container
    $("#btn-prepend").click(function(){
        $("#container").prepend("<p style='color:orange;'>Elemento adicionado ao início do container</p>");
    });
});