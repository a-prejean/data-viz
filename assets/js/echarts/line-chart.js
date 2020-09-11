// Row based key-value format (object array), where the keys indicate dimension names.
var data = [{"Date":"03-21-2020","Parish":"Lafayette","CurveValue":6,"Actual":6,"Forecasted":""},{"Date":"03-22-2020","Parish":"Lafayette","CurveValue":24,"Actual":42,"Forecasted":""},{"Date":"03-29-2020","Parish":"Lafayette","CurveValue":135,"Actual":228,"Forecasted":""},{"Date":"04-11-2020","Parish":"Lafayette","CurveValue":168,"Actual":108,"Forecasted":""},{"Date":"04-16-2020","Parish":"Lafayette","CurveValue":92,"Actual":77,"Forecasted":""},{"Date":"04-19-2020","Parish":"Lafayette","CurveValue":52,"Actual":28,"Forecasted":""},{"Date":"04-26-2020","Parish":"Lafayette","CurveValue":25,"Actual":22,"Forecasted":""},{"Date":"05-03-2020","Parish":"Lafayette","CurveValue":28,"Actual":34,"Forecasted":""},{"Date":"05-10-2020","Parish":"Lafayette","CurveValue":57,"Actual":80,"Forecasted":""},{"Date":"05-17-2020","Parish":"Lafayette","CurveValue":80,"Actual":81,"Forecasted":""},{"Date":"05-24-2020","Parish":"Lafayette","CurveValue":92,"Actual":104,"Forecasted":""},{"Date":"05-31-2020","Parish":"Lafayette","CurveValue":104,"Actual":103,"Forecasted":""},{"Date":"06-07-2020","Parish":"Lafayette","CurveValue":188,"Actual":274,"Forecasted":""},{"Date":"06-14-2020","Parish":"Lafayette","CurveValue":249,"Actual":224,"Forecasted":""},{"Date":"06-21-2020","Parish":"Lafayette","CurveValue":361,"Actual":498,"Forecasted":""},{"Date":"06-28-2020","Parish":"Lafayette","CurveValue":640,"Actual":783,"Forecasted":""},{"Date":"07-06-2020","Parish":"Lafayette","CurveValue":922,"Actual":1062,"Forecasted":""},{"Date":"07-16-2020","Parish":"Lafayette","CurveValue":"","Actual":"","Forecasted":1127},{"Date":"07-19-2020","Parish":"Lafayette","CurveValue":"","Actual":"","Forecasted":1336}];

// line-chart.js
var dom = document.getElementById("line_chart");

// based on prepared DOM, initialize echarts instance
var myChart = echarts.init(dom); //, 'dark');

// specify chart configuration item and data
var option = {
  color: ["#1DE9B6"],
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
myChart.setOption(option);
