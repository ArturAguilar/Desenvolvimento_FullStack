document.getElementById('href').textContent = window.location.href;
document.getElementById('hostname').textContent = window.location.hostname;
document.getElementById('pathname').textContent = window.location.pathname;
document.getElementById('protocol').textContent = window.location.protocol;

document.getElementById('goGoogle').addEventListener('click', function() {
    window.location.assign('https://www.google.com');
});