$(document).ready(function(){
    $("#btn-chain").click(function(){
        $("#caixa")
            .css("background", "#ffab91")
            .slideUp(800)
            .slideDown(800)
            .fadeTo(800, 0.5)
            .fadeTo(800, 1);
    });
});