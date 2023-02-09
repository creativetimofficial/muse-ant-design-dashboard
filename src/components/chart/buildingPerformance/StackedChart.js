import React,{useEffect} from 'react'
import Highcharts from 'highcharts';

function SatckedChart() {
    useEffect(() => {
        Highcharts.chart('stacked', {
            chart: {
                type: 'bar'
            },
            title: {
                text: ''
            },
            credits: {
                enabled: false,
              },
            xAxis: {
                // categories: ['2020/21', '2019/20', '2018/19', '2017/18', '2016/17']
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Goals'
                }
            },
            legend: {
                reversed: true
            },
           
        
            plotOptions: {
                series: {
                    stacking: 'normal',
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            
            series: [{
                // name: 'Cristiano Ronaldo',
                data: [444, 4, 644, 15, 12,34,56,76,77,122,333,44,44]
            }, 
            // {
            //     name: 'Lionel Messi',
            //     data: [5, 3, 12, 6, 11]
            // }, {
            //     name: 'Robert Lewandowski',
            //     data: [5, 15, 8, 5, 8]
            // }
        ]
        });
        
        return () => {
        
        };
    }, []);
  return (
    <div className='stacked' id='stacked'>


    </div>
  )
}

export default SatckedChart;