let chartLoaded = false;

function desenharGrafico() {
    const data = google.visualization.arrayToDataTable([
        ['Mês', 'Série A', 'Série B'],
        ['Jan', 10, 16],
        ['Fev', 15, 5],
        ['Mar', 13, 11],
        ['Abr', 17, 9],
        ['Mai', 21, 15]
    ]);

    const options = {
        title: 'Exemplo de Gráfico com Google Chart',
        curveType: 'function',
        legend: { position: 'bottom' },
        colors: ['#1976d2', '#d32f2f']
    };

    const chart = new google.visualization.LineChart(document.getElementById('grafico'));
    chart.draw(data, options);
}

document.getElementById('plotar').addEventListener('click', function() {
    if (!chartLoaded) {
        google.charts.load('current', {packages: ['corechart']});
        google.charts.setOnLoadCallback(function() {
            chartLoaded = true;
            desenharGrafico();
        });
    } else {
        desenharGrafico();
    }
});