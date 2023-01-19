const eChart = {
  
  series: [{
    name: 'Consumption',
    type: 'column',
    data: [440, 505, 414, 671, 227, 413, 201, 352, 752,250.300,500,100],
    color:"rgb(44, 178, 231)",
  }, {
    name: 'Consumption-Pre',
    type: 'line',
    data: [12, 22, 15, 17, 33, 22, 17, 21, 12,8,5,13],
    color: '#28E8C3'
  }],


  options : {
    chart: {
      width:"100%",  
      height: "auto",
      type: 'line',
      
    },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "40%",
    },
  },
  stroke:{
    width:[1,3],
    curve: "straight",
  },
  markers: {
    size: [2, 3]
  },  
  title: {
    text: 'Consumption Comparsion',
    
    
  },
  dataLabels: {
    enabled: false,
   // enabledOnSeries: [1]
  },
  labels: ['12 AM', '1 AM', '2 AM', '3 AM', '4 AM', '5 AM', '5 PM', '7 PM', '8 PM', '9 PM', '10 PM', '11 PM'],
  xaxis: {

  },
  yaxis: [{
    title: {
      text: 'Consumption',
    },
  
  }, {
    opposite: true,
    title: {
      text: 'Consumption-Pre'
    }
  }]
  }

}
export default eChart;
