$(document).ready(function(){
    $("#btn-fadeout").click(function(){
        $("#caixa").fadeOut();
    });

    $("#btn-fadein").click(function(){
        $("#caixa").fadeIn();
    });

    $("#btn-fadetoggle").click(function(){
        $("#caixa").fadeToggle();
    });
});