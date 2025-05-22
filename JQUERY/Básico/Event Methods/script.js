$(document).ready(function(){
    // Método click()
    $("#btn-click").click(function(){
        $("#mensagem").text("Botão clicado!");
    });

    // Método keypress()
    $("#campo-texto").keypress(function(event){
        if(event.which === 13) { // 13 é o código da tecla Enter
            $("#mensagem").text("Você pressionou Enter: " + $(this).val());
        }
    });

    // Método mouseenter()
    $("#mensagem").mouseenter(function(){
        $(this).css("color", "blue");
    }).mouseleave(function(){
        $(this).css("color", "black");
    });
});