$(document).ready(function(){
    // Seleciona todos os parágrafos
    $("#btn-todos").click(function(){
        $("p").css("background", "#e0f7fa");
    });

    // Seleciona pelo ID
    $("#btn-id").click(function(){
        $("#especial").css("background", "#ffe082");
    });

    // Seleciona pela classe
    $("#btn-classe").click(function(){
        $(".destaque").css("background", "#c8e6c9");
    });
});