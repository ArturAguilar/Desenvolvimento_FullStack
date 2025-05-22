$(document).ready(function(){
    // Remove o parágrafo específico
    $("#btn-remove").click(function(){
        $("#paragrafo").remove();
    });

    // Esvazia todo o conteúdo do container, mas mantém o container
    $("#btn-empty").click(function(){
        $("#container").empty();
    });
});