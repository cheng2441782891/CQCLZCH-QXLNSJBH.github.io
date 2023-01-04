setTimeout(()=>{
    echart_1()
    echart_2()
    echart_3()
    echart_4()
}, 50)    

function echart_1 () {
  var as = document.querySelectorAll("a");
  for (let i = 0; i < as.length; i++) {
    as[i].onclick = function () {
      for (let i = 0; i < as.length; i++) {
        as[i].className = "";
      }
      this.setAttribute("class", "current");
    };
  }
}

function echart_2 () {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('main'));

    // 指定图表的配置项和数据
  option = {
    tooltip: {},
    legend: {
      data: ['年薪']
    },
      xAxis: {
        data: ['梅西', 'C罗', '内马尔', '迪玛利亚', '贝尔', '莫德里奇']
      },
      yAxis: {},
      series: [
        {
          type: 'bar',
          data: [5000, 20000, 7500, 5500, 2800, 1000]
        }
      ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}

function echart_3 () {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('main_c'));

    // 指定图表的配置项和数据
    
        
        option = {
          xAxis: {
            type: 'category',
            data: ['2014', '2015', '2016', '2017','2018','2019','2020']
          },
          yAxis: {
            type: 'value'
          },
          tooltip: {},
          legend: {
            data: ['C罗','梅西',  '贝尔','内马尔',   '迪玛利亚','莫德里奇']
          },
          series: [
            {
              name: 'C罗',
              type: 'bar',
              stack: 'total',
              label: {
                show: true
              },
              legend: {},
              emphasis: {
                focus: 'series'
              },
              data: [12000, 11000, 11000, 11000, 10000, 10000, 6000]
            },
            {
              name: '梅西',
              type: 'bar',
              stack: 'total',
              label: {
                show: true
              },
              emphasis: {
                focus: 'series'
              },
              data: [4300, 12000, 12000, 55000, 18000, 12700, 7000]
            },
            {
              name: '贝尔',
              type: 'bar',
              stack: 'total',

              label: {
                show: true
              },
              emphasis: {
                focus: 'series'
              },
              data: [8000, 8000, 9000, 9000, 7000, 6000, 2800]
            },
            {
              name: '内马尔',
              type: 'bar',
              stack: 'total',
              label: {
                show: true
              },
              emphasis: {
                focus: 'series'
              },
              data: [7000, 9000, 11000, 22000, 20000, 18000, 12000]
            },
            {
              name: '迪马利亚',
              type: 'bar',
              stack: 'total',
              label: {
                show: true
              },
              emphasis: {
                focus: 'series'
              },
              data: [6500, 6300, 6300, 6000, 4430, 4000, 2000]
            },
            {
              name: '莫德里奇',
              type: 'bar',
              stack: 'total',
              label: {
                show: true
              },
              emphasis: {
                focus: 'series'
              },
              data: [7000,5000,6000,7800,8000,3000,1000]
            }
          ]
        };
     // 使用刚指定的配置项和数据显示图表。
     myChart.setOption(option);
}
function echart_4 () {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('main_cz'));

  // 指定图表的配置项和数据
  option = {
    tooltip: {},
    series: [
      {
        title: {
          text:'球星年龄'
        },
        type: 'pie',
        data: [
          {
            value: 37,
            name: 'C罗37岁'
          },
          {
            value: 35,
            name: '梅西35岁'
          },
          {
            value: 33,
            name: '贝尔33岁'
          },
          {
            value: 30,
            name: '内马尔30岁'
          },
          {
            value: 34,
            name: '迪玛利亚34岁'
          },
          {
            value: 37,
            name: '莫德里奇37岁'
          }
        ],
        roseType: 'area'
      }
    ]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
}
