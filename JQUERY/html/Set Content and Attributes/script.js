$(document).ready(function(){
    // text() - define o texto do elemento
    $("#btn-text").click(function(){
        $("#paragrafo").text("O texto foi alterado usando .text()");
    });

    // html() - define o HTML do elemento
    $("#btn-html").click(function(){
        $("#paragrafo").html("O <strong>HTML</strong> foi alterado usando .html()");
    });

    // val() - define o valor do campo de formulário
    $("#btn-val").click(function(){
        $("#campo").val("Novo valor definido com .val()");
    });

    // attr() - define um atributo do elemento
    $("#btn-attr").click(function(){
        $("#paragrafo").attr("style", "color: red; font-weight: bold;");
    });
});