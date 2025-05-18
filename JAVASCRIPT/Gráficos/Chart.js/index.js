let chart = null;

document.getElementById('plotar').addEventListener('click', function() {
    const ctx = document.getElementById('grafico').getContext('2d');
    if (chart) {
        chart.destroy();
    }
    chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai'],
            datasets: [
                {
                    label: 'Série A',
                    data: [10, 15, 13, 17, 21],
                    borderColor: '#1976d2',
                    backgroundColor: 'rgba(25, 118, 210, 0.2)',
                    fill: true,
                    tension: 0.3
                },
                {
                    label: 'Série B',
                    data: [16, 5, 11, 9, 15],
                    borderColor: '#d32f2f',
                    backgroundColor: 'rgba(211, 47, 47, 0.2)',
                    fill: true,
                    tension: 0.3
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Exemplo de Gráfico com Chart.js'
                }
            }
        }
    });
});