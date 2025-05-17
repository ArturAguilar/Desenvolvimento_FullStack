const info = document.getElementById('info');

document.getElementById('addState').onclick = function() {
    const state = { page: Math.floor(Math.random() * 1000) };
    const title = '';
    const url = '?page=' + state.page;
    history.pushState(state, title, url);
    info.textContent = 'Novo estado adicionado: ' + JSON.stringify(state);
};

document.getElementById('goBack').onclick = function() {
    history.back();
};

document.getElementById('goForward').onclick = function() {
    history.forward();
};

window.onpopstate = function(event) {
    info.textContent = 'Estado atual: ' + JSON.stringify(event.state);
};