// Get data then run chart funtions with that data and specify DOM elements
crest_data_formatted.then(function (data, dom) {
  return bar_chart(data, "bar_chart");
});

function bar_chart(data, dom) {
  // based on prepared DOM, initialize echarts instance
  var chart = echarts.init(document.getElementById(dom)); //, 'dark');

  // specify chart configuration item and data
  var option = {
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
    yAxis: {
      type: "category", // value, category, time, log
      inverse: true,
      name: "Week / Date",
      nameLocation: "middle",
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
        show: false
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
    visualMap: {
      show: false,
      min: 0,
      max: 17,
      dimension: 0,
      color: ["#7C4DFF", "#448AFF", "#00BCD4"],
      seriesIndex: 0
    },
    series: [
      {
        type: "bar",
        name: "Data",
        encode: {
          x: "Actual",
          y: "Date"
        },
        barGap: "-100%",
        barWidth: "75%",
        itemStyle: {
          barBorderRadius: 50, // or [50, 50, 0, 0],
          borderWidth: 0,
          borderColor: "#fff"
        },
        label: {
          show: true,
          position: "insideLeft",
          distance: 10,
          formatter: "{b}", // or '{@Date}'
          color: "#e9ebef",
          fontSize: 10
        }
      }
    ]
  };

  // use configuration item and data specified to show chart
  chart.setOption(option);
}