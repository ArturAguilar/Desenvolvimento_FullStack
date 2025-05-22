$(document).ready(function(){
    // Altera apenas a cor do texto
    $("#btn-cor").click(function(){
        $("#paragrafo").css("color", "red");
    });

    // Altera múltiplas propriedades CSS de uma vez
    $("#btn-multiplos").click(function(){
        $("#paragrafo").css({
            "background-color": "#e1bee7",
            "font-size": "20px",
            "padding": "10px",
            "border-radius": "8px"
        });
    });
});