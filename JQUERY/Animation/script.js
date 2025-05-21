$(document).ready(function(){
    $("#btn-animar").click(function(){
        $("#caixa").animate({
            left: '250px',
            opacity: '0.5',
            height: '150px',
            width: '150px'
        }, 1000);
    });
});