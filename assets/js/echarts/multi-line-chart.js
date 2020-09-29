const hexToRgba = (hex, opacity) => {
  let rgbaColor = "";
  let reg = /^#[\da-f]{6}$/i;
  if (reg.test(hex)) {
    rgbaColor = `rgba(${parseInt("0x" + hex.slice(1, 3))},${parseInt(
      "0x" + hex.slice(3, 5)
    )},${parseInt("0x" + hex.slice(5, 7))},${opacity})`;
  }
  return rgbaColor;
};

const color = [
  "#0090FF",
  "#36CE9E",
  "#FFC005",
  "#FF515A",
  "#8B5CFF",
  "#00CA69"
];

const gradient_start = 0.1; // 0.25
const gradient_end = 0;

// Gradient Colors
var lineColor = new echarts.graphic.LinearGradient(
  // 0, 0, 0, 1, // Vertical
  0,
  0,
  1,
  0, // Horizontal
  [
    { offset: 0, color: "#448AFF" },
    { offset: 0.5, color: "#00BCD4" },
    { offset: 1, color: "#1DE9B6" }
  ]
);

function multi_line_chart(data, dom) {
   // based on prepared DOM, initialize echarts instance
   var chart = echarts.init(document.getElementById(dom));
 
   // specify chart configuration item and data
   var option = {
     color: color,
     legend: {
       textStyle: {
         color: "#e9ebef"
         // fontSize: 12
       }
     },
     tooltip: {
       backgroundColor: "rgba(56,57,71,0.75)",
       trigger: "axis",
       showContent: true,
       axisPointer: {
         type: "shadow",
         shadowStyle: {
           shadowColor: "rgba(56,57,71,0.75)",
           opacity: 0.25
         },
         label: {
           show: true,
           color: "#e9ebef",
           backgroundColor: "#434556",
           borderWidth: 0,
           shadowBlur: 0,
           // formatter: "{value}"
           // formatter: function(params) { return params.value.replace("\n", ""); }
         },
         // lineStyle: {
         //   color: "#e9ebef",
         //   width: "0.5"
         // },
         // crossStyle: {
         //   color: "#e9ebef",
         //   width: "0.5"
         // }
         z: 0
       }
     },
     dataset: {
       source: data
     },
     calculable: true,
     grid: {
       containLabel: true
     },
     xAxis: {
       type: "category", // value, category, time, log
       name: "Week / Date",
       nameLocation: "middle",
       nameGap: 32,
       boundaryGap: true,
       axisLine: {
         show: false,
         lineStyle: {
           color: "#e9ebef"
         }
       },
       axisTick: {
         show: false,
         lineStyle: {
           color: "#434556"
         }
       },
       axisLabel: {
         show: true,
         textStyle: {
           color: "#e9ebef",
           fontSize: 10
         }
       },
       splitLine: {
         show: false,
         lineStyle: {
           color: ["#434556"]
         }
       },
       splitArea: {
         show: false,
         areaStyle: {
           color: ["#e9ebef"]
         }
       }
     },
     yAxis: {
       // type: "log", // value, category, time, log
       // logBase: 100000,
       name: "Data Totals",
       nameLocation: "middle",
       nameGap: 40,
       axisLine: {
         show: false,
         lineStyle: {
           color: "#e9ebef"
         }
       },
       axisTick: {
         show: false,
         lineStyle: {
           color: "#434556"
         }
       },
       axisLabel: {
         show: true,
         textStyle: {
           color: "#e9ebef",
           fontSize: 10
         }
       },
       splitLine: {
         show: true,
         lineStyle: {
           color: ["#434556"]
         }
       }
     },
     series: [
       {
         type: "line",
         // data: data,
         // dimensions: 3,
         name: parish_name[0],
         animationEasing: "cubicOut",
         lineStyle: {
           normal: {
             width: "4"
           }
         },
         areaStyle: {
           normal: {
             color: new echarts.graphic.LinearGradient(
               0,
               0,
               0,
               1,
               [
                 {
                   offset: 0,
                   color: hexToRgba(color[0], gradient_start)
                 },
                 {
                   offset: 1,
                   color: hexToRgba(color[0], gradient_end)
                 }
               ],
               false
             ),
             // shadowColor: hexToRgba(color[0], 0.1),
             // shadowBlur: 10
           }
         },
         symbolSize: "8",
         symbol: "circle",
         showSymbol: false,
         smooth: true,
         encode: {
           x: 0, // 1st column (dates)
           y: 1 // 2nd column
         }
       },
       {
         type: "line",
         name: parish_name[1],
         animationEasing: "cubicOut",
         lineStyle: {
           normal: {
             width: "4"
           }
         },
         areaStyle: {
           normal: {
             color: new echarts.graphic.LinearGradient(
               0,
               0,
               0,
               1,
               [
                 {
                   offset: 0,
                   color: hexToRgba(color[1], gradient_start)
                 },
                 {
                   offset: 1,
                   color: hexToRgba(color[1], gradient_end)
                 }
               ],
               false
             )
           }
         },
         symbolSize: "8",
         symbol: "circle",
         showSymbol: false,
         smooth: true,
         encode: {
           x: 0, // 1st column (dates)
           y: 2 // next column
         }
       },
       {
         type: "line",
         name: parish_name[2],
         animationEasing: "cubicOut",
         lineStyle: {
           normal: {
             width: "4"
           }
         },
         areaStyle: {
           normal: {
             color: new echarts.graphic.LinearGradient(
               0,
               0,
               0,
               1,
               [
                 {
                   offset: 0,
                   color: hexToRgba(color[2], gradient_start)
                 },
                 {
                   offset: 1,
                   color: hexToRgba(color[2], gradient_end)
                 }
               ],
               false
             )
           }
         },
         symbolSize: "8",
         symbol: "circle",
         showSymbol: false,
         smooth: true,
         encode: {
           x: 0, // 1st column (dates)
           y: 3 // next column
         }
       },
       {
         type: "line",
         name: parish_name[3],
         animationEasing: "cubicOut",
         lineStyle: {
           normal: {
             width: "4"
           }
         },
         areaStyle: {
           normal: {
             color: new echarts.graphic.LinearGradient(
               0,
               0,
               0,
               1,
               [
                 {
                   offset: 0,
                   color: hexToRgba(color[3], gradient_start)
                 },
                 {
                   offset: 1,
                   color: hexToRgba(color[3], gradient_end)
                 }
               ],
               false
             )
           }
         },
         symbolSize: "8",
         symbol: "circle",
         showSymbol: false,
         smooth: true,
         encode: {
           x: 0, // 1st column (dates)
           y: 4 // next column
         }
       },
       {
         type: "line",
         name:parish_name[4],
         animationEasing: "cubicOut",
         lineStyle: {
           normal: {
             width: "4"
           }
         },
         areaStyle: {
           normal: {
             color: new echarts.graphic.LinearGradient(
               0,
               0,
               0,
               1,
               [
                 {
                   offset: 0,
                   color: hexToRgba(color[4], gradient_start)
                 },
                 {
                   offset: 1,
                   color: hexToRgba(color[4], gradient_end)
                 }
               ],
               false
             )
           }
         },
         symbolSize: "8",
         symbol: "circle",
         showSymbol: false,
         smooth: true,
         encode: {
           x: 0, // 1st column (dates)
           y: 5 // next column
         }
       }
     ]
   };
 
   // use configuration item and data specified to show chart
   chart.setOption(option);
 }
 
 multi_line_chart(covid_data, "multi_line_chart")