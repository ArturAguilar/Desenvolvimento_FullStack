function votar(valor) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("resultado").innerHTML = this.responseText;
    }
  }
  xmlhttp.open("GET", "poll.php?voto=" + encodeURIComponent(valor), true);
  xmlhttp.send();
}

// Atualização automática dos resultados a cada 5 segundos
setInterval(function() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("resultado").innerHTML = this.responseText;
    }
  }
  xmlhttp.open("GET", "poll.php", true);
  xmlhttp.send();
}, 5000);