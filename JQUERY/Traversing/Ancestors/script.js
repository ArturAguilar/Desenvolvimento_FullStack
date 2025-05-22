$(document).ready(function(){
    // parent() - seleciona o ancestral direto
    $("#btn-parent").click(function(){
        $("#paragrafo").parent().addClass("highlight");
    });

    // parents() - seleciona todos os ancestrais
    $("#btn-parents").click(function(){
        $("#paragrafo").parents().addClass("highlight");
    });

    // parents('div') - seleciona todos os ancestrais <div>
    $("#btn-parents-div").click(function(){
        $("#paragrafo").parents("div").addClass("highlight");
    });

    // closest('section') - seleciona o ancestral mais próximo do tipo <section>
    $("#btn-closest").click(function(){
        $("#paragrafo").closest("section").addClass("highlight");
    });
});