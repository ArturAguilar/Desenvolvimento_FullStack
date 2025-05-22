$(document).ready(function(){
    // addClass() - adiciona uma ou mais classes
    $("#btn-add").click(function(){
        $("#paragrafo").addClass("destaque borda");
    });

    // removeClass() - remove uma ou mais classes
    $("#btn-remove").click(function(){
        $("#paragrafo").removeClass("destaque borda");
    });

    // toggleClass() - alterna entre adicionar/remover classes
    $("#btn-toggle").click(function(){
        $("#paragrafo").toggleClass("destaque");
    });

    // css() - altera propriedades CSS diretamente
    $("#btn-css").click(function(){
        $("#paragrafo").css({
            "font-size": "22px",
            "padding": "10px"
        });
    });
});