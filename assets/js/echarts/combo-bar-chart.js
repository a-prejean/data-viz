// Get data then run chart funtions with that data and specify DOM elements
crest_data_formatted.then(function (data, dom) {
  combo_bar_chart(data, "combo_chart");
});


function combo_bar_chart(data, dom) {
  // based on prepared DOM, initialize echarts instance
  var chart = echarts.init(document.getElementById(dom));

  // specify chart configuration item and data
  var option = {
    color: [gradientBarColorA, gradientBarColorB, curveColor],
    title: {
      // text: "ECharts entry example",
      textStyle: {
        color: "#f1f1f4"
      },
      subtextStyle: {
        color: "#b8b9c7"
      }
    },
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
      // dimensions: ["score", "amount", "product"],
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
    series: [
      {
        type: "bar",
        name: "Actual",
        // stack: "group",
        encode: {
          // Map the "amount" column to X axis.
          x: "Date",
          // Map the "product" column to Y axis
          y: "Actual"
        },
        barGap: "-100%",
        barWidth: "75%",
        itemStyle: {
          barBorderRadius: 50, // or [50, 50, 0, 0],
          borderWidth: 0,
          borderColor: "#fff"
        }
      },
      {
        type: "bar",
        name: "Forecasted",
        // stack: "group",
        encode: {
          x: "Date",
          y: "Forecasted"
        },
        barGap: "-100%",
        barWidth: "75%",
        itemStyle: {
          barBorderRadius: 50 // or [50, 50, 0, 0],
        }
      },
      {
        type: "line",
        name: "Moving Average",
        animationEasing: "cubicOut",
        lineStyle: {
          normal: {
            width: "3"
          }
        },
        symbolSize: "5",
        symbol: "circle",
        showSymbol: false,
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

// Gradient Colors
var gradientBarColorA = new echarts.graphic.LinearGradient(
  0, 0, 0, 1, // Vertical
  // 0, 0, 1, 0, // Horizontal
  [
    { offset: 0, color: "#a52941" },
    { offset: 1, color: "#b8454c" }
  ]
);
var gradientBarColorB = new echarts.graphic.LinearGradient(
  0, 0, 0, 1, // Vertical
  // 0, 0, 1, 0, // Horizontal
  [
    { offset: 0, color: "#ed9537" },
    { offset: 1, color: "#fa9d63" } // e38c4e
  ]
);