$(function() {
    $('#estilizar').on('click', function() {
        $('#texto').css({
            'color': '#fff',
            'background': '#1976d2',
            'padding': '16px',
            'border-radius': '8px',
            'font-weight': 'bold',
            'box-shadow': '0 2px 8px rgba(25, 118, 210, 0.15)'
        });
    });
});