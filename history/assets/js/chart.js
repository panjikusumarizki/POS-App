Chart.defaults.global.legend.labels.usePointStyle = true;

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['','','','','','','','','',''],
        datasets: [{
            label: 'This Month',
            fill: false,
            backgroundColor: '#57CAD5',
            borderColor: '#57CAD5',
            lineTension: 0,
            data: [
                0,
                20000,
                11000,
                28000,
                22000,
                39900,
                13000,
                47000,
                40000,
                32000,
                37000
            ],
        }, {
            label: 'Last Month',
            fill: false,
            backgroundColor: '#F24F8A',
            borderColor: '#F24F8A',
            lineTension: 0,
            data: [
                10000,
                28000,
                3000,
                38000,
                23000,
                39000,
                12000,
                28000,
                23000,
                47000,
            ]
        }
    ]
    },
    options: {
        scales: {
            responsive: true,
            xAxes: [{
                gridLines: {
                    display: false
                }
            }],
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    stepValue: 1000,
                    stepSize: 10000,
                    callback: function(value) {
                        return value/1000 + 'K';
                    }
                }
            }]
        },
        legend: {
            position: 'bottom'
        }
    }
});