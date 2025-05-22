$(document).ready(function(){
    $("#btn-iniciar").click(function(){
        $("#caixa").animate({
            left: '300px'
        }, 3000);
    });

    $("#btn-parar").click(function(){
        $("#caixa").stop();
    });
});