// Sintaxe básica do jQuery
// $(seletor).ação();

$(document).ready(function(){
    $("#btn-esconder").click(function(){
        $("p").hide();
    });
});