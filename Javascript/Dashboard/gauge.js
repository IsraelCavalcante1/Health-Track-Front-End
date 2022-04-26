var randomScalingFactor = function () {
    return Math.round(Math.random() * 100);
};

var randomData = function () {
    return [
        100
    ];
};

var randomValue = function (data) {
    return Math.max.apply(null, data) * Math.random();
};

var data = randomData();
var value = 50

var config = {
    type: 'gauge',
    data: {
        //labels: ['Success', 'Warning', 'Warning', 'Error'],
        datasets: [{
            data: data,
            value: value,
            backgroundColor: ['#6D63FF'],
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            text: ''
        },
        layout: {
            padding: {
                bottom: 30
            }
        },
        needle: {
            // Needle circle radius as the percentage of the chart area width
            radiusPercentage: 2,
            // Needle width as the percentage of the chart area width
            widthPercentage: 3.2,
            // Needle length as the percentage of the interval between inner radius (0%) and outer radius (100%) of the arc
            lengthPercentage: 80,
            // The color of the needle
            color: 'rgba(0, 0, 0, 1)'
        },
        valueLabel: {
            formatter: Math.round
        }
    }
};

window.onload = function () {
    var ctx = document.getElementById('gauge').getContext('2d');
    window.myGauge = new Chart(ctx, config);
    var ctx = document.getElementById('gauge-mobile').getContext('2d');
    window.myGauge = new Chart(ctx, config);
};

document.getElementById('randomizeData').addEventListener('click', function () {
    config.data.datasets.forEach(function (dataset) {
        dataset.data = randomData();
        dataset.value = randomValue(dataset.data);
    });

    window.myGauge.update();
});