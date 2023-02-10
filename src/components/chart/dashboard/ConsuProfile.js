import React from 'react';
import { Row,Table,  } from 'antd';
import styles from './style.css'
import Highcharts from 'highcharts' //core
import HighchartsReact from 'highcharts-react-official';

function ConsuProfile() {
  let tsXaxis = [];
  let seriesBaseLoadPeakLoad = [];
  let loadHCOption = {
    chart: {
      zoomType: 'xy',
      marginBottom:80
  },
    title: {
        text: '',
        align: 'left'

    },
    credits: {
      enabled: false
    },
    xAxis: [{
        categories: tsXaxis,
        crosshair: true
    }],
    yAxis: [{ // Primary yAxis
        labels: {
            format: '{value}°C',
            style: {
                //color: Highcharts.getOptions().colors[2]
            }
        },
        title: {
            text: 'Temperature(°C)',
            style: {
                //color: Highcharts.getOptions().colors[2]
            }
        },
        opposite: true

    }, { // Secondary yAxis
        gridLineWidth: 0,
        title: {
            text: 'Electricity(Kwh)',
            style: {
                //color:"#ce6927"
            }
        },
        labels: {
            format: '{value} Kwh',
            style: {
                //color: "#ce6927"
            }
        },
        //opposite: true

    }],
    tooltip: {
        shared: true
    },
    legend: {
        //layout: 'horizontal',
        align: 'center',
        x: 0,
        verticalAlign: 'bottom',
        y: 0,
        floating: true,
        backgroundColor:
           // Highcharts.defaultOptions.legend.backgroundColor || // theme
            'rgba(255,255,255,0.25)'
    },
    plotOptions: {
      series: {
          lineWidth: 2
      }
    },
    series: seriesBaseLoadPeakLoad,
    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    floating: false,
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom',
                    x: 0,
                    y: 0
                },
                yAxis: [{
                    labels: {
                        align: 'right',
                        x: 0,
                        y: -6
                    },
                    showLastLabel: false
                }, {
                    labels: {
                        align: 'left',
                        x: 0,
                        y: -6
                    },
                    showLastLabel: false
                }, {
                    visible: true
                }]
            }
        }]
    }
  }
  

  
  return (
    <>
         <Row style={{ marginBottom: 20, marginTop: 50  }} gutter={[20, 20]}>
                    <h2 className={styles.title1} style={{textAlign:'left'}}>{"Base Load, Peak Load"}</h2>
                    <div style={{width:"100%", marginBottom:10, textAlign: 'center'}}>
                        {/* <DualAxes {...config} /> */}
                        <HighchartsReact
                          highcharts={Highcharts}
                          options={loadHCOption}
                        />
                    </div>
                </Row>

    </>
  )
}

export default ConsuProfile;