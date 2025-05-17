function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + encodeURIComponent(value) + expires + "; path=/";
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for(let i=0;i < ca.length;i++) {
        let c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return decodeURIComponent(c.substring(nameEQ.length,c.length));
    }
    return null;
}

document.getElementById('setCookie').onclick = function() {
    const value = document.getElementById('cookieValue').value;
    setCookie('meuCookie', value, 7);
    document.getElementById('cookieDisplay').textContent = "Cookie definido!";
};

document.getElementById('getCookie').onclick = function() {
    const value = getCookie('meuCookie');
    document.getElementById('cookieDisplay').textContent = value ? "Valor do cookie: " + value : "Cookie não encontrado.";
};