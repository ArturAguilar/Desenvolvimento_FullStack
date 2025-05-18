function buscarLivros(str) {
  if (str.length == 0) {
    document.getElementById("resultado").innerHTML = "";
    return;
  } else {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var xml = this.responseXML;
        var livros = xml.getElementsByTagName("livro");
        var saida = "";
        for (var i = 0; i < livros.length; i++) {
          var autor = livros[i].getElementsByTagName("autor")[0].textContent;
          var titulo = livros[i].getElementsByTagName("titulo")[0].textContent;
          if (autor.toLowerCase().indexOf(str.toLowerCase()) !== -1) {
            saida += "Título: " + titulo + " | Autor: " + autor + "<br>";
          }
        }
        if (saida === "") saida = "Nenhum livro encontrado.";
        document.getElementById("resultado").innerHTML = saida;
      }
    }
    xmlhttp.open("GET", "livros.xml", true);
    xmlhttp.send();
  }
}