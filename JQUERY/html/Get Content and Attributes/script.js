$(document).ready(function(){
    // text() - retorna o texto do elemento
    $("#btn-text").click(function(){
        var texto = $("#paragrafo").text();
        $("#resultado").text("text(): " + texto);
    });

    // html() - retorna o HTML do elemento
    $("#btn-html").click(function(){
        var html = $("#paragrafo").html();
        $("#resultado").text("html(): " + html);
    });

    // val() - retorna o valor do campo de formulário
    $("#btn-val").click(function(){
        var valor = $("#campo").val();
        $("#resultado").text("val(): " + valor);
    });
});