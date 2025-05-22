$(document).ready(function(){
    // find('p') - seleciona todos os descendentes <p> dentro do #container
    $("#btn-find-p").click(function(){
        $("#container").find("p").addClass("highlight");
    });

    // children('p') - seleciona filhos diretos <p> do <article>
    $("#btn-children-article").click(function(){
        $("#container article").children("p").addClass("highlight");
    });

    // children('p') - seleciona filhos diretos <p> da <section>
    $("#btn-children-section").click(function(){
        $("#container section").children("p").addClass("highlight");
    });
});