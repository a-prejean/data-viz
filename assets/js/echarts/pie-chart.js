// based on prepared DOM, initialize echarts instance
var pieChart = echarts.init(document.getElementById("pie_chart")); //, 'dark');

// specify chart configuration item and data
var pieChartData = [
  { value: 335, name: "Data A" },
  { value: 510, name: "Data B" },
  { value: 634, name: "Data C" },
  { value: 800, name: "Data D" },
  { value: 948, name: "Data E" }
];

var pieChartOptions = {
  color: ["#d28084", "#a78eb6", "#49a4b1", "#65B77A", "#D2B950"],
  tooltip: {
    trigger: "item",
    // formatter: "{a} <br/>{b}: {c} ({d}%)"
  },
  // legend: {
  //     orient: 'vertical',
  //     left: 10,
  //     // data: ['Data A', 'Data B', 'Data C', 'Data D', 'Data E']
  // },
  series: [
    {
      type: "pie",
      name: "Test Data",
      // roseType: 'area',
      animation: true,
      hoverOffset: 4, // 10
      startAngle: 90,
      // For doughnut:
      radius: ["30%", "60%"],
      // For pie:
      // radius: '50%',
      // center: ['50%', '50%'],
      itemStyle: {
        borderColor: "#2d2e39",
        borderWidth: 4,
      },
      avoidLabelOverlap: true,
      label: {
        show: true,
        formatter: "{b} ({d}%)",
        position: "outer",
        alignTo: "edge", // none(default), labelLine, edge
        margin: 10,
        bleedMargin: 10,
        distanceToLabelLine: 16, // padding*2
        padding: 8,
        fontSize: 12,
        color: "#ffffff",
        borderRadius: 4,
        // backgroundColor: 'auto',
        borderColor: "auto",
        borderWidth: 2
      },
      labelLine: {
        show: true,
        // length: 32,
        // length2: 32,
        // smooth: true,
        lineStyle: {
          width: 2
        }
      },
      emphasis: {
        itemStyle: {
          borderWidth: 0,
        },
        label: {
          // show: true,
          distanceToLabelLine: 16, // padding*2
          padding: 8,
          // fontSize: 14,
          // fontWeight: 'bold',
          borderWidth: 4
        },
        labelLine: {
          lineStyle: {
            width: 4
          }
        }
      },
      data: pieChartData
    }
  ]
};

// use configuration item and data specified to show chart
pieChart.setOption(pieChartOptions);
