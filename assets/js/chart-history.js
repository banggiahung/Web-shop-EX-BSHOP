Highcharts.chart('container', {
    xAxis: {
        categories: ['12/1/2022', '12/2/2022', '12/3/2022', '12/4/2022', '12/5/2022', '12/6/2022',
            '12/7/2022', '12/8/2022', '12/9/2022', '12/10/2022', '12/11/2022', '12/12/2022']
    },

    title: {
        text: ''
    },
    tooltip: {
        formatter: function () {
            return 'Giá: <b>' + Highcharts.numberFormat(this.point.y, 0) + '₫' + '</b> '
        }
    },
    legend: {
        enabled: false
    },
    yAxis: {
        title: {
            text: null
        }
    },
    credits: {
        enabled: false
    },

    series: [{
        name: 'Váy công chúa',
        data: [2050000, 2180000, 2250000, 2080100, { y: 4500000, id: 'max' }, 4200500, 1500000, 2650000, 3500000, 2500000,
            1980000, { y: 1200000, id: 'min' }]
    }],

    annotations: [{
        labels: [{
            point: 'max',
            text: 'Cao nhất'
        }, {
            point: 'min',
            text: 'Thấp nhất',
            backgroundColor: 'white'
        }]
    }]
});