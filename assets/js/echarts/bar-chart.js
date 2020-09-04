// Row based key-value format (object array), where the keys indicate dimension names.
var data = [{"Date":"03-21-2020","Parish":"Lafayette","CurveValue":6,"Actual":6,"Forecasted":""},{"Date":"03-22-2020","Parish":"Lafayette","CurveValue":24,"Actual":42,"Forecasted":""},{"Date":"03-29-2020","Parish":"Lafayette","CurveValue":135,"Actual":228,"Forecasted":""},{"Date":"04-11-2020","Parish":"Lafayette","CurveValue":168,"Actual":108,"Forecasted":""},{"Date":"04-16-2020","Parish":"Lafayette","CurveValue":92,"Actual":77,"Forecasted":""},{"Date":"04-19-2020","Parish":"Lafayette","CurveValue":52,"Actual":28,"Forecasted":""},{"Date":"04-26-2020","Parish":"Lafayette","CurveValue":25,"Actual":22,"Forecasted":""},{"Date":"05-03-2020","Parish":"Lafayette","CurveValue":28,"Actual":34,"Forecasted":""},{"Date":"05-10-2020","Parish":"Lafayette","CurveValue":57,"Actual":80,"Forecasted":""},{"Date":"05-17-2020","Parish":"Lafayette","CurveValue":80,"Actual":81,"Forecasted":""},{"Date":"05-24-2020","Parish":"Lafayette","CurveValue":92,"Actual":104,"Forecasted":""},{"Date":"05-31-2020","Parish":"Lafayette","CurveValue":104,"Actual":103,"Forecasted":""},{"Date":"06-07-2020","Parish":"Lafayette","CurveValue":188,"Actual":274,"Forecasted":""},{"Date":"06-14-2020","Parish":"Lafayette","CurveValue":249,"Actual":224,"Forecasted":""},{"Date":"06-21-2020","Parish":"Lafayette","CurveValue":361,"Actual":498,"Forecasted":""},{"Date":"06-28-2020","Parish":"Lafayette","CurveValue":640,"Actual":783,"Forecasted":""},{"Date":"07-06-2020","Parish":"Lafayette","CurveValue":922,"Actual":1062,"Forecasted":""},{"Date":"07-16-2020","Parish":"Lafayette","CurveValue":"","Actual":"","Forecasted":1127},{"Date":"07-19-2020","Parish":"Lafayette","CurveValue":"","Actual":"","Forecasted":1336}];

// bar-chart.js
var dom = document.getElementById("bar_chart");

// based on prepared DOM, initialize echarts instance
var myChart = echarts.init(dom); //, 'dark');

// specify chart configuration item and data
var option = {
  color: ["#a52941", "#e38c4e", "#fff388"],
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
      show: false,
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
    color: ["#7C4DFF", "#448AFF", "#00BCD4"]
  },
  series: [
    {
      type: "bar",
      name: "Data",
      encode: {
        x: "Actual",
        y: "Date",
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
        position: 'insideLeft',
        distance: 10,
        formatter: '{b}', // or '{@Date}'
        color: "#e9ebef",
        fontSize: 10
      }
    }
  ]
};

// use configuration item and data specified to show chart
myChart.setOption(option);