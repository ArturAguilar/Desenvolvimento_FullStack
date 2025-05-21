$(document).ready(function(){
    $("#btn-slideup").click(function(){
        $("#painel").slideUp();
    });

    $("#btn-slidedown").click(function(){
        $("#painel").slideDown();
    });

    $("#btn-slidetoggle").click(function(){
        $("#painel").slideToggle();
    });
});