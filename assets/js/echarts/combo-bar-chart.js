// Row based key-value format (object array), where the keys indicate dimension names.
var data = [{"Date":"03-21-2020","Parish":"Lafayette","CurveValue":6,"Actual":6,"Forecasted":""},{"Date":"03-22-2020","Parish":"Lafayette","CurveValue":24,"Actual":42,"Forecasted":""},{"Date":"03-29-2020","Parish":"Lafayette","CurveValue":135,"Actual":228,"Forecasted":""},{"Date":"04-11-2020","Parish":"Lafayette","CurveValue":168,"Actual":108,"Forecasted":""},{"Date":"04-16-2020","Parish":"Lafayette","CurveValue":92,"Actual":77,"Forecasted":""},{"Date":"04-19-2020","Parish":"Lafayette","CurveValue":52,"Actual":28,"Forecasted":""},{"Date":"04-26-2020","Parish":"Lafayette","CurveValue":25,"Actual":22,"Forecasted":""},{"Date":"05-03-2020","Parish":"Lafayette","CurveValue":28,"Actual":34,"Forecasted":""},{"Date":"05-10-2020","Parish":"Lafayette","CurveValue":57,"Actual":80,"Forecasted":""},{"Date":"05-17-2020","Parish":"Lafayette","CurveValue":80,"Actual":81,"Forecasted":""},{"Date":"05-24-2020","Parish":"Lafayette","CurveValue":92,"Actual":104,"Forecasted":""},{"Date":"05-31-2020","Parish":"Lafayette","CurveValue":104,"Actual":103,"Forecasted":""},{"Date":"06-07-2020","Parish":"Lafayette","CurveValue":188,"Actual":274,"Forecasted":""},{"Date":"06-14-2020","Parish":"Lafayette","CurveValue":249,"Actual":224,"Forecasted":""},{"Date":"06-21-2020","Parish":"Lafayette","CurveValue":361,"Actual":498,"Forecasted":""},{"Date":"06-28-2020","Parish":"Lafayette","CurveValue":640,"Actual":783,"Forecasted":""},{"Date":"07-06-2020","Parish":"Lafayette","CurveValue":922,"Actual":1062,"Forecasted":""},{"Date":"07-16-2020","Parish":"Lafayette","CurveValue":"","Actual":"","Forecasted":1127},{"Date":"07-19-2020","Parish":"Lafayette","CurveValue":"","Actual":"","Forecasted":1336}];

// 2d array, where dimension names can be provided in the first row/column, or do not provide, only data
var data1 = [
  ["product", "2012", "2013", "2014", "2015", "2016", "2017"],
  ["Matcha Latte", 41.1, 30.4, 65.1, 53.3, 83.8, 98.7],
  ["Milk Tea", 86.5, 92.1, 85.7, 83.1, 73.4, 55.1],
  ["Cheese Cocoa", 24.1, 67.2, 79.5, 86.4, 65.2, 82.5],
  ["Walnut Brownie", 55.2, 67.1, 69.2, 72.4, 53.9, 39.1]
];

var data2 = [
  ["score", "amount", "product"],
  [89.3, 58212, "Matcha Latte"],
  [57.1, 78254, "Milk Tea"],
  [74.4, 41032, "Cheese Cocoa"],
  [50.1, 12755, "Cheese Brownie"],
  [89.7, 20145, "Matcha Cocoa"],
  [68.1, 79146, "Tea"],
  [19.6, 91852, "Orange Juice"],
  [10.6, 101852, "Lemon Juice"],
  [32.7, 20112, "Walnut Brownie"]
];

var dom = document.getElementById("combo_chart");
var theme = "dark_theme";

// based on prepared DOM, initialize echarts instance
var myChart = echarts.init(dom); //, 'dark');

// Gradient Colors
var dataColor1 = new echarts.graphic.LinearGradient(
  0, 0, 0, 1, // Vertical
  // 0, 0, 1, 0, // Horizontal
  [
    {offset: 0, color: '#a52941'},
    {offset: 1, color: '#b8454c'}
  ]
);
var dataColor2 = new echarts.graphic.LinearGradient(
  0, 0, 0, 1, // Vertical
  // 0, 0, 1, 0, // Horizontal
  [
    {offset: 0, color: '#ed9537'},
    {offset: 1, color: '#fa9d63'} // e38c4e
  ]
);



// specify chart configuration item and data
var option = {
  color: [dataColor1, dataColor2, "#fff388"],
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
        color: '#e9ebef',
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
  // series: [ // for data 1
  //   { type: "bar", smooth: true, seriesLayoutBy: "row" }, // or column (default)
  //   { type: "bar", smooth: true, seriesLayoutBy: "row" },
  //   { type: "bar", smooth: true, seriesLayoutBy: "row" },
  //   { type: "bar", smooth: true, seriesLayoutBy: "row" }
  // ]
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
        barBorderRadius: 50, // or [50, 50, 0, 0],
      }
    },
    {
      type: "line",
      name: "Moving Average",
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
      },
    }
  ]
};

// use configuration item and data specified to show chart
myChart.setOption(option);
