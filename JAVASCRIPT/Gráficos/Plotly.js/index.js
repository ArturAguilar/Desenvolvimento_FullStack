document.getElementById('plotar').addEventListener('click', function() {
    var trace1 = {
        x: [1, 2, 3, 4, 5],
        y: [10, 15, 13, 17, 21],
        type: 'scatter',
        mode: 'lines+markers',
        marker: {color: '#1976d2'},
        name: 'Série A'
    };
    var trace2 = {
        x: [1, 2, 3, 4, 5],
        y: [16, 5, 11, 9, 15],
        type: 'scatter',
        mode: 'lines+markers',
        marker: {color: '#d32f2f'},
        name: 'Série B'
    };
    var data = [trace1, trace2];
    var layout = {
        title: 'Exemplo de Gráfico com Plotly.js',
        xaxis: {title: 'Eixo X'},
        yaxis: {title: 'Eixo Y'}
    };
    Plotly.newPlot('grafico', data, layout);
});