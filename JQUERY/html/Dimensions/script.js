$(document).ready(function(){
    $("#btn-width").click(function(){
        $("#resultado").text("width(): " + $("#caixa").width() + "px");
    });

    $("#btn-height").click(function(){
        $("#resultado").text("height(): " + $("#caixa").height() + "px");
    });

    $("#btn-innerwidth").click(function(){
        $("#resultado").text("innerWidth(): " + $("#caixa").innerWidth() + "px");
    });

    $("#btn-innerheight").click(function(){
        $("#resultado").text("innerHeight(): " + $("#caixa").innerHeight() + "px");
    });

    $("#btn-outerwidth").click(function(){
        $("#resultado").text("outerWidth(): " + $("#caixa").outerWidth() + "px");
    });

    $("#btn-outerheight").click(function(){
        $("#resultado").text("outerHeight(): " + $("#caixa").outerHeight() + "px");
    });
});