// Get data then run chart funtions with that data and specify DOM elements
crest_data_formatted.then(function (data, dom) {
  line_chart(data, "line_chart");
});

function line_chart(data, dom) {
  // based on prepared DOM, initialize echarts instance
  var chart = echarts.init(document.getElementById(dom));

  // specify chart configuration item and data
  var option = {
    color: lineColor,
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
          formatter: "{value}"
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
      // type: "category"
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
    visualMap: {
      show: false,
      min: 0,
      max: 1000, // 17
      dimension: 2, // 0
      color: ["#1DE9B6", "#00BCD4", "#448AFF"]
    },
    series: [
      {
        type: "line",
        name: "Data",
        animationEasing: "cubicOut",
        lineStyle: {
          normal: {
            width: "4"
          }
        },
        symbolSize: "8",
        symbol: "circle",
        showSymbol: true,
        smooth: true,
        encode: {
          x: "Date",
          y: "CurveValue"
        }
      }
    ]
  };

  // use configuration item and data specified to show chart
  chart.setOption(option);
}
