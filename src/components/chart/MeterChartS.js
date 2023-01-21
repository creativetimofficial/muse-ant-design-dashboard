import React,{useEffect} from 'react';
import Highcharts from 'highcharts';
import * as ChartModuleMore from 'highcharts/highcharts-more.js';
import HCSoldGauge from 'highcharts/modules/solid-gauge';


ChartModuleMore(Highcharts);
HCSoldGauge(Highcharts);

function MeterChartS() {

    useEffect(() => {
        Highcharts.chart('meter-charts', {

            chart: {
              type: 'solidgauge',
              marginTop: 50
            },
        
            title: {
                //heading name
              text: '',
              style: {
                fontSize: '24px'
              }
            },
        
            tooltip: {
              borderWidth: 0,
              backgroundColor: 'none',
              shadow: false,
              style: {
                fontSize: '10px'
              },
              pointFormat: '{series.name}<br><span style="font-size:2em; color: {point.color}; font-weight: bold; text-align: center">{point.y}%</span>',
              positioner: function(labelWidth, labelHeight) {
                return {
                  x: 200 - labelWidth / 2,
                  y: 180
                };
              }
            },
        
            pane: [{
              startAngle: -140,
              endAngle: 140,
              background: [{ // Track for Move
                outerRadius: '112%',
                innerRadius: '88%',
                backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0.3).get(),
                borderWidth: 0,
                shape: 'arc'
              }, { // Track for Exercise
                outerRadius: '87%',
                innerRadius: '63%',
                backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[1]).setOpacity(0.3).get(),
                borderWidth: 0,
                shape: 'arc'
              },]
            }, {
              startAngle: -140,
              endAngle: 140,
              size: '95%',
              background: []
            }],
        
            yAxis: [{
            //   reversed: true,
              min: 0,
              max: 2,
              lineWidth: 0,
              tickLength: 99,
              tickWidth: 1,
              tickColor: 'white',
              tickPosition: 'outside',
              minorTickLength: 0,
              tickPositions: [0,0.3,0.5,0.8,1,1.3,1.6,1.9],
              zIndex: 4,
              labels: {
                distance: 30,
                enabled: true,
                x: 0,
                y: 0,
                format: '{value} %',
                style: {
                  fontSize: 16
                }
              }
            }, {
              pane: 1,
              linkedTo: 0,
        
              reversed: true,
              min: 0,
              max: 10,
              lineWidth: 0,
              tickLength: 100,
              tickWidth: 4,
              tickColor: 'white',
              tickPosition: 'inside',
              minorTickLength: 0,
              tickPositions: [0, 2.9, 6, 10],
              zIndex: 4,
              labels: {
                enabled: false
              }
            }],
        
            plotOptions: {
              solidgauge: {
                borderWidth: '20px',
                dataLabels: {
                  enabled: false
                },
                linecap: 'round',
                stickyTracking: false
              }
            },
        
            series: [{
              name: 'Current Period',
              borderColor: Highcharts.getOptions().colors[0],
              data: [{
                color: Highcharts.getOptions().colors[1],
                radius: '100%',
                innerRadius: '100%',
                y: 4
              }],
              dataLabels: {
                borderRadius: 0,
                backgroundColor: "#fff",
                borderWidth: 0,
                borderColor: "#FFF",
                style: {
                  fontSize: "50px"
                },
                color: "grey",
                crop: true,
                formatter: function() {
                  var s;
                  s = '<span style="font-size: 50px;">' + this.point.y + '</span>';
                  return s;
                },
                y: -30,
                zIndex: 90
              }
            }, {
              name: 'Previous Period',
              borderColor: Highcharts.getOptions().colors[1],
              data: [{
                color: Highcharts.getOptions().colors[0],
                radius: '75%',
                innerRadius: '75%',
                y: 6
              }]
            },]
          });
        
    }, []);
  return (
    <div id='meter-charts'>
        
    </div>
  )
}

export default MeterChartS;