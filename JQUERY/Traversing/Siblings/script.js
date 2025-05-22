$(document).ready(function(){
    // siblings() - seleciona todos os irmãos
    $("#btn-siblings").click(function(){
        $("#paragrafo-central").siblings().addClass("highlight");
    });

    // next() - seleciona o próximo irmão
    $("#btn-next").click(function(){
        $("#paragrafo-central").next().addClass("highlight");
    });

    // prev() - seleciona o irmão anterior
    $("#btn-prev").click(function(){
        $("#paragrafo-central").prev().addClass("highlight");
    });

    // nextAll() - seleciona todos os próximos irmãos
    $("#btn-nextall").click(function(){
        $("#paragrafo-central").nextAll().addClass("highlight");
    });

    // prevAll() - seleciona todos os irmãos anteriores
    $("#btn-prevall").click(function(){
        $("#paragrafo-central").prevAll().addClass("highlight");
    });
});