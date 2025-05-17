document.getElementById('buscar').onclick = function() {
    const resultado = document.getElementById('resultado');
    resultado.textContent = "Buscando XML...";

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://www.w3schools.com/xml/note.xml', true);

    xhr.onload = function() {
        if (xhr.status === 200) {
            const xml = xhr.responseXML;
            if (xml) {
                const to = xml.getElementsByTagName('to')[0].textContent;
                const from = xml.getElementsByTagName('from')[0].textContent;
                const heading = xml.getElementsByTagName('heading')[0].textContent;
                const body = xml.getElementsByTagName('body')[0].textContent;
                resultado.textContent = `Para: ${to}\nDe: ${from}\nAssunto: ${heading}\nMensagem: ${body}`;
            } else {
                resultado.textContent = "Resposta não é XML.";
            }
        } else {
            resultado.textContent = "Erro: " + xhr.status;
        }
    };

    xhr.onerror = function() {
        resultado.textContent = "Erro na requisição.";
    };

    xhr.send();
};