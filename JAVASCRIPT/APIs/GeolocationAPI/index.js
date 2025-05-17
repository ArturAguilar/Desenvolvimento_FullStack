document.getElementById('localizar').onclick = function() {
    const resultado = document.getElementById('resultado');
    if ("geolocation" in navigator) {
        resultado.textContent = "Obtendo localização...";
        navigator.geolocation.getCurrentPosition(
            function(pos) {
                resultado.textContent = `Latitude: ${pos.coords.latitude}\nLongitude: ${pos.coords.longitude}`;
            },
            function(error) {
                resultado.textContent = "Erro ao obter localização: " + error.message;
            }
        );
    } else {
        resultado.textContent = "Geolocalização não suportada pelo navegador.";
    }
};