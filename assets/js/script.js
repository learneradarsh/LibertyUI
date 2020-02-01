/**
 * LibertyUI Scripts
 */

(function($) {
    'use strict';
    $(function() {
      if ($('#product-chart-graph').length) {
        var lineChartCanvas = $("#product-chart-graph").get(0).getContext("2d");
        var data = {
          labels: ["2013", "2014", "2014", "2015", "2016", "2017", "2018"],
          datasets: [
            {
              label: 'Support',
              data: [150, 200, 150, 200, 350, 320, 400],
              backgroundColor: 'rgba(70, 77, 228, 0.3)',
              borderColor: [
                'rgba(70, 77, 228, 1)'
              ],
              borderWidth: 1,
              fill: true
            },
            {
              label: 'Product',
              data: [300, 400, 300, 440, 700, 550, 730],
              backgroundColor: 'rgba(217, 225 ,253, 1)',
              borderColor: [
                'rgba(70, 77, 228, 1)'
              ],
              borderWidth: 1,
              fill: true
            }
          ]
        };
        var options = {
          scales: {
            yAxes: [{
              display: false
            }],
            xAxes: [{
              display: false
            }]
          },
          legend: {
            display: false
          },
          elements: {
            point: {
              radius: 3
            }
          },
          stepsize: 1
        };
        var lineChart = new Chart(lineChartCanvas, {
          type: 'line',
          data: data,
          options: options
        });
      }
      if ($('#sales-chart').length) {
        Morris.Line({
          element: 'sales-chart',
          lineColors: ['rgba(70, 77, 228, 0.8)', 'rgba(217, 225 ,253, 1)'],
          data: [{
              y: '2006',
              a: 50,
              b: 0
            },
            {
              y: '2007',
              a: 75,
              b: 78
            },
            {
              y: '2008',
              a: 30,
              b: 12
            },
            {
              y: '2009',
              a: 35,
              b: 50
            },
            {
              y: '2010',
              a: 70,
              b: 100
            },
            {
              y: '2011',
              a: 78,
              b: 65
            }
          ],
          grid: false,
          xkey: 'y',
          ykeys: ['a', 'b'],
          labels: ['Series A', 'Series B'],
          hideHover: "always"
        });
      }
    });
  })(jQuery);
  