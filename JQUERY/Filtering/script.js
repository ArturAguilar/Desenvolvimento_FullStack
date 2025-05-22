$(document).ready(function(){
    // first() - seleciona o primeiro item
    $("#btn-first").click(function(){
        $("#lista li").removeClass("highlight");
        $("#lista li").first().addClass("highlight");
    });

    // last() - seleciona o último item
    $("#btn-last").click(function(){
        $("#lista li").removeClass("highlight");
        $("#lista li").last().addClass("highlight");
    });

    // eq() - seleciona o item pelo índice (começa do 0)
    $("#btn-eq").click(function(){
        $("#lista li").removeClass("highlight");
        $("#lista li").eq(2).addClass("highlight");
    });

    // filter() - seleciona itens que correspondem ao seletor
    $("#btn-filter").click(function(){
        $("#lista li").removeClass("highlight");
        $("#lista li").filter(".especial").addClass("highlight");
    });

    // not() - seleciona itens que NÃO correspondem ao seletor
    $("#btn-not").click(function(){
        $("#lista li").removeClass("highlight");
        $("#lista li").not(".especial").addClass("highlight");
    });
});