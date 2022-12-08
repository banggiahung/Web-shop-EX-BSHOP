Highcharts.chart('container', {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie'
  },
  title: {
    text: ''
  },
  credits: {
    enabled: false
  },
  tooltip: {
    formatter: function () {
      return this.point.options.name + ' </br>' + 'Doanh số: <b>' + Highcharts.numberFormat(this.point.z, 0) + '₫' + '</b> '
    }
  },

  accessibility: {
    point: {
      valueSuffix: '%'
    }

  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: true,
        format: '<b>{point.name}</b>: {point.percentage:.1f} % </b> '
      }
    }
  },
  series: [{

    minPointSize: 10,
    mainName: 'Doanh số',
    colorByPoint: true,
    zMin: 0,
    data: [{
      name: 'Thời Trang Nam',
      y: 4.2,
      z: 34019450907
    }, {
      name: 'Điện Thoại & Phụ Kiện',
      y: 4.2,
      z: 33951798063

    }, {
      name: 'Nhà cửa & Đời sống',
      y: 5.5,
      z: 45625595482
    }, {
      name: 'Mẹ & Bé',
      y: 5.8,
      z: 47625595482
    }, {
      name: 'Sức Khỏe',
      y: 8.4,
      z: 71338748927
    }, {
      name: 'matbe',
      y: 10.5,
      z: 80975699959
    }, {
      name: 'Thực phẩm và đồ uống',
      y: 11.6,
      z: 89577972577
    }, {
      name: 'Thời Trang Nữ',
      y: 12.4,
      z: 103462557759
    }, {
      name: 'Sắc Đẹp',
      y: 20.4,
      z: 133109521807
    }, {
      name: 'Giày Dép Nữ',
      y: 20.8,
      z: 168392594553
    }]
  }]
});