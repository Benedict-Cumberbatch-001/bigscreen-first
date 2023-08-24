var t = null;
t = setTimeout(time, 1000);//開始运行
function time() {
    clearTimeout(t);//清除定时器
    dt = new Date();
    var y = dt.getFullYear();
    var mt = dt.getMonth() + 1;
    var day = dt.getDate();
    var h = dt.getHours();//获取时
    var m = dt.getMinutes();//获取分
    var s = dt.getSeconds();//获取秒
    document.querySelector(".showTime").innerHTML = '当前时间：' + y + "年" + mt + "月" + day + "-" + h + "时" + m + "分" + s + "秒";
    t = setTimeout(time, 1000); //设定定时器，循环运行
}
// 基于准备好的dom，初始化echarts实例
// 柱状图
//   var myChart = echarts.init(document.getElementById('pie'));
//
//   // 指定图表的配置项和数据
//   var option = {
//     xAxis: {
//     type: 'category',
//     data: [ "旅游行业","教育培训", "游戏行业", "医疗行业", "电商行业", "社交行业", "金融行业"],
//         axisLabel: {
//           color: "rgba(255,255,255,.6)",
//           fontSize: "12"
//       },
//       // y轴线条样式
//       axisLine: {
//          show:false
//           }
//
//   },
//   yAxis: {
//       type: 'value',
//       axisLabel: {
//           color: "rgba(255,255,255,.6)",
//           fontSize: 12
//       },
//       axisLine: {
//   lineStyle: {
//      color: "rgba(255,255,255,.1)",
//      // width: 1,
//      // type: "solid"
//               }
//         },
// // y 轴分隔线样式
//     splitLine: {
//         lineStyle: {
//            color: "rgba(255,255,255,.1)"
//          }
//     }
//   },
//   series: [
//     {
//       data: [120, 200, 150, 80, 70, 110, 130],
//       type: 'bar',
//         barWidth:'40%',
//         itemStyle:{
//           barBorderRadius:5
//         }
//     }
//   ],
//     color: ["#2f89cf"],
//     grid: {
//       left: "0%",
//       top: "10px",
//       right: "0%",
//       bottom: "4%",
//       containLabel: true
//     },
//     tooltip:{
//         trigger:'axis',
//         axisPointer:{
//             type:'shadow'
//         },
//
//     }
//
//   };
//
//   // 使用刚指定的配置项和数据显示图表。
//   myChart.setOption(option);
//   window.addEventListener("resize", function() {//echarts自带的能随着页面大小自动变化的函数
// myChart.resize();
// });


//饼状图实例
// var option = {
//   legend: {
//       bottom:'10%',
//       textStyle:{
//         color:'white'
//       }
//
//   },
// color:['#73c0de','#fac858','#ee6666'],
//   series: [
//     {
//         label:{
//           color:'white',
//         },
//       name: 'Nightingale Chart',
//       type: 'pie',
//       radius: [10, 70],
//       center: ['50%', '40%'],
//       roseType: 'radius',
//       itemStyle: {
//         borderRadius: 3
//       },
//       data: [
//         { value: 40, name: '隧道' },
//         { value: 38, name: '地下厂房' },
//         { value: 32, name: '边坡' },
//
//       ]
//     }
//   ]
// };




//
// var zhexianchart=echarts.init(document.getElementById('zhexian'));
// var DataName = ['安全', '报警','橙色预警','黄色预警'];
// var DataA =["24", "15", "3", "27", "5", "16", "26"]; //安全
// var DataB = ["14", "28", "6", "20", "17", "9", "23"];  //报警
// var DataC=["8", "19", "27", "11", "25", "2", "29"];//橙色预警
// var DataD=["7", "26", "18", "13", "22", "3", "16"];//黄色预警
// var DataDM = ['2023/03/15','2023/03/16','2023/03/17', '2023/03/18','2023/03/19','2023/03/20','2023/03/21' ];
// option ={
//        // backgroundColor: "#344b58",
//         tooltip: {
//         trigger: "axis",
//         axisPointer: {
//             type: "line",
//             textStyle: {
//                 color: "#fff",
//             }
//           },
//           //formatter: '{b}<br />{a}: {c}人',
//           //backgroundColor: 'rgba(0,0,0,0.7)', //提示背景
//         },
//         grid: {
//             top: '15%',
//             left: '12%',
//             right: '5%',
//             bottom: '22%',
//         },
//
//         legend: {
//         align: "left",
//         right: '5%',
//         top:'5%',
//         textStyle:{
//             color:'#666',
//             fontSize:12
//         },
//         icon:'pin',
//         itemGap:25,
//         itemWidth:20,
//         itemHeight:5,
//         data: DataName
//         },
//     xAxis: [{
//         type: 'category',
//         boundaryGap: false,
//         axisLine: {
//             show: false,
//             lineStyle: {
//                 color: '#666',
//                 width:1,
//             },
//         },
//         axisLabel: {
//             textStyle: {
//                 color: '#666',
//                 padding: [10,0,0,0],
//                 fontSize: 12
//             },
//         },
//         splitLine: {
//             show: false,
//         },
//         axisTick: {
//             show: false,
//         },
//          data:DataDM
//     },
//     ],
//     yAxis: [{
//         name: '警示数量',
//         nameTextStyle: {
//             color: "#666",
//             fontSize: 12,
//             padding:[0,25,0,0],
//             lineHeight: 40,
//         },
//         min:0,
//         splitLine: {
//             show: true,
//             lineStyle: {
//                 color: 'rgba(200,200,200,.5)',
//                 type:'dashed'
//             },
//         },
//         axisLine: {
//             show: false,
//         },
//         axisLabel: {
//             show: true,
//             textStyle: {
//                 color: '#666',
//                 padding: 16,
//                 fontSize: 12,
//             },
//         },
//         axisTick: {
//             show: false,
//         },
//     },
// ],
//     series: [{
//         name: DataName[0],
//         type: 'line',
//         showAllSymbol: true,
//         symbolSize: 8,
//         symbol :'circle',
//         smooth: true,
//         lineStyle: {
//             normal: {
//                 width: 1,
//                 color: "#00CA94",
//             },
//             borderColor: 'rgba(0,0,0,.4)',
//         },
//         itemStyle: {
//             color: "#00CA94",
//         },
//         tooltip: {
//             show: true
//         },
//         data:  DataA
//     },
//     {
//         name: DataName[1],
//         type: 'line',
//         showAllSymbol: true,
//         symbolSize: 8,
//         symbol :'circle',
//         smooth: true,
//         lineStyle: {
//             normal: {
//                 width: 1,
//                 color: "#FB388F",
//             },
//             borderColor: 'rgba(0,0,0,.4)',
//         },
//         itemStyle: {
//             color: "#FB388F",
//         },
//         tooltip: {
//             show: true
//         },
//         data: DataB
//     },
//     {
//         name: DataName[2],
//         type: 'line',
//         showAllSymbol: true,
//         symbolSize: 8,
//         symbol :'circle',
//         smooth: true,
//         lineStyle: {
//             normal: {
//                 width: 1,
//                 color: "#FFA500",
//             },
//             borderColor: 'rgba(0,0,0,.4)',
//         },
//         itemStyle: {
//             color: "#FFA500",
//         },
//         tooltip: {
//             show: true
//         },
//         data: DataC
//     },
//     {
//         name: DataName[3],
//         type: 'line',
//         showAllSymbol: true,
//         symbolSize: 8,
//         symbol :'circle',
//         smooth: true,
//         lineStyle: {
//             normal: {
//                 width: 1,
//                 color: "yellow",
//             },
//             borderColor: 'rgba(0,0,0,.4)',
//         },
//         itemStyle: {
//             color: "yellow",
//         },
//         tooltip: {
//             show: true
//         },
//         data: DataD
//     },
//     ]
// }



var myChart = echarts.init(document.getElementById('pie'));
var option = {

  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b}: {c} ({d}%)'
  },
  legend: {
    top:'5%',
    textStyle:{
      color:'white',
        fontFamily:'宋体',
        fontWeight:'bold'
    },
    data: [
      '水利',
      '交通',
      '矿山',
    ]
  },
  series: [

    {
      center:['50%','55%'],
      name: 'Access From',
      type: 'pie',
      selectedMode: 'single',
      radius: [0, '30%'],
      label: {
        position: 'inner',
        fontSize: 12,
          fontFamily: '宋体',
          color:'white',
      },
      labelLine: {
        show: false,

      },
      data: [
        { value: 1548, name: '边坡' },
        { value: 775, name: '隧道' },
        { value: 679, name: '地下厂房', selected: true }
      ]
    },
    {
      center:['50%','55%'],
      name: 'Access From',
      type: 'pie',
      radius: ['45%', '60%'],

         label: {
        fontSize: 12,
          fontFamily: '宋体',
          color:'white',
          borderType:'dotted',
      },
      labelLine: {
        // length: 15,
        //  lineStyle:{
        //   width:2
        // }
        show: false,

      },

      data: [
        { value: 1048, name: '水利' },
        { value: 335, name: '交通' },
        { value: 310, name: '矿山' }

      ]
    }
  ]
};
myChart.setOption(option);
  window.addEventListener("resize", function() {//echarts自带的能随着页面大小自动变化的函数
myChart.resize();
});



var zhexianchart=echarts.init(document.getElementById('zhexian'));
option = {

  legend: {
    top:'5%',
    textStyle:{
    color:'white',
    fontFamily:'宋体',
    fontWeight:'bold'}
  },
    grid:{
      bottom:'18%'
    },
  tooltip: {},
  dataset: {
    source: [
      ['时间', '安全', '橙色预警', '黄色预警','报警'],
      ['2023/08/15',14,5,3,3],
      ['2023/08/16', 15, 5,3,3],
      ['2023/08/17', 12,4, 8,3],
    ]
  },
  xAxis: { type: 'category',
        axisLabel: {
        color: "rgba(255,255,255,0.6)",
        fontSize: "12"
      },
  },
  yAxis: {
      axisLabel: {
        color: "rgba(255,255,255)",
        fontSize: "12"
      },
      splitLine: {
        lineStyle: {
        color: "rgba(255,255,255,.2)"}
      }
  },
  // Declare several bar series, each will be mapped
  // to a column of dataset.source by default.
  series: [
      { type: 'bar' ,itemStyle: {
        color: '#00CA94',
          barBorderRadius: 3

      }
        },
    { type: 'bar',itemStyle: {
        color: '#FFA500',
        barBorderRadius: 3
      }
      },
    { type: 'bar',itemStyle: {
        color: '#DBDB70',
        barBorderRadius: 3
      }
      },
    { type: 'bar',itemStyle: {
        color: '#FB388F',
        barBorderRadius: 3
      }
    }
    ]
};
zhexianchart.setOption(option);
  window.addEventListener("resize", function() {//echarts自带的能随着页面大小自动变化的函数
zhexianchart.resize();
});


var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
// 1. 实例化对象
var bar2=echarts.init(document.getElementById('bar2'));
// 2. 指定配置和数据
var option = {
grid: {
  top: "5%",
  left: "20%",
  right:"13%",
  bottom: "7.5%"
  // containLabel: true
},
// 不显示x轴的相关信息
xAxis: {
  show: false
},
yAxis: [
  {
    type: "category",
    inverse: true,
    data: ["位移监测", "应力监测", "数值模拟", "微震监测", "多元融合"],
    // 不显示y轴的线
    axisLine: {
      show: false
    },
    // 不显示刻度
    axisTick: {
      show: false
    },
    // 把刻度标签里面的文字颜色设置为白色
    axisLabel: {
      color: "#fff",
      fontFamily:'微软雅黑',
      fontSize:12
      // fontWeight:'bold'
    }
  },
  {
    data: [702, 350, 610, 793, 664],
    inverse: true,
    // 不显示y轴的线
    axisLine: {
      show: false
    },
    // 不显示刻度
    axisTick: {
      show: false
    },
    // 把刻度标签里面的文字颜色设置为白色
    axisLabel: {
      color: "#fff"
    }
  }
],
series: [
  {
    name: "条",
    type: "bar",
    data: [70, 34, 60, 78, 69],
    yAxisIndex: 0,
    // 修改第一组柱子的圆角
    itemStyle: {
      barBorderRadius: 20,
      // 此时的color 可以修改柱子的颜色
      color: function(params) {
        // params 传进来的是柱子对象
        // console.log(params);
        // dataIndex 是当前柱子的索引号
        return myColor[params.dataIndex];
      }
    },
    // 柱子之间的距离
    barCategoryGap: 2,
    //柱子的宽度
    barWidth: 12,
    // 显示柱子内的文字
    label: {
      show: true,
      position: "inside",
      // {c} 会自动的解析为 数据  data里面的数据
      formatter: "{c}%",
      color:'#fff'
    }
  },
  {
    name: "框",
    type: "bar",
    barCategoryGap: 50,
    barWidth: 12,
    yAxisIndex: 1,
    data: [100, 100, 100, 100, 100],
    itemStyle: {
      color: "none",
      borderColor: "#00c1de",
      borderWidth: 2,
      barBorderRadius: 15
    }
  }
]
};
bar2.setOption(option);
  window.addEventListener("resize", function() {//echarts自带的能随着页面大小自动变化的函数
bar2.resize();
});