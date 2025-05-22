$(document).ready(function(){
    $("#btn-esconder").click(function(){
        $("#caixa").hide(1000, function(){
            alert("A caixa foi escondida! (callback executado)");
        });
    });
});