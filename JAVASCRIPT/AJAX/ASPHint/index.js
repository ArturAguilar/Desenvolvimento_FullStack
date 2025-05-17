document.getElementById('txt1').onkeyup = function() {
    showHint(this.value);
};

function showHint(str) {
    if (str.length === 0) {
        document.getElementById("txtHint").innerHTML = "";
        return;
    }
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        document.getElementById("txtHint").innerHTML = this.responseText;
    }
    xhttp.open("GET", "gethint.asp?q=" + encodeURIComponent(str));
    xhttp.send();
}