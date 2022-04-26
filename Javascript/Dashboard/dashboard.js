// GRÁFICO DE CALORIAS/PASSOS
var options = {

    toolbar: {
        show: false,
    },

    series: [{
        name: 'Passos',
        data: [3, 5, 4, 7, 9, 4, 7]
    }, {
        name: 'Calorias',
        data: [0.1, 0.3, 0.2, 0.4, 0.1250, 0.2, 0.4]
        }],
    
    
    chart: {
        height: '100%',
        width: '100%',
        type: 'area',
    },

    
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: true,
        curve: ['smooth', 'smooth'],
        lineCap: ['square', 'butt'],
        colors: undefined,
        width: 4,
        dashArray: 0,
    },

    xaxis: {
        type: 'datetime',
        categories: ["2022-02-20", "2022-02-21", "2022-02-22", "2022-02-23", "2022-02-24", "2022-02-25", "2022-02-26"]
    },
    tooltip: {
        x: {
            format: 'dd/MM/yy'

            
            
        },

        

    },
    
    

    yaxis: {
        show: false,

    },

    colors: ['#6D63FF', '#3d34c2']




};





var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();


