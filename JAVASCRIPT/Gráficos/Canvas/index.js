document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('desenhar').addEventListener('click', function() {
        const canvas = document.getElementById('meuCanvas');
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.arc(200, 100, 60, 0, 2 * Math.PI);
        ctx.fillStyle = '#1976d2';
        ctx.fill();
        ctx.strokeStyle = '#0d47a1';
        ctx.lineWidth = 4;
        ctx.stroke();
    });

    document.getElementById('limpar').addEventListener('click', function() {
        const canvas = document.getElementById('meuCanvas');
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    });
});