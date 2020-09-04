// based on prepared DOM, initialize echarts instance
var pieChart = echarts.init(document.getElementById("pie_chart3")); //, 'dark');

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
  legend: {
    orient: "vertical",
    left: "75%",
    // data: ['Data A', 'Data B', 'Data C', 'Data D', 'Data E']
    textStyle: {
      color: "#e9ebef",
      fontSize: 10
    }
  },
  series: [
    {
      type: "pie",
      name: "Test Data",
      roseType: 'area', // radius, area
      animation: true,
      hoverOffset: 4, // 10
      startAngle: 90,
      radius: ["32%", "64%"],
      itemStyle: {
        borderColor: "#2d2e39",
        borderWidth: 4,
      },
      avoidLabelOverlap: true,
      label: {
        show: false,
        position: "center",
        bleedMargin: 10,
        padding: 8,
        fontSize: 20,
        fontWeight: 'bold',
        color: "#ffffff"
      },
      labelLine: {
        show: false,
      },
      emphasis: {
        itemStyle: {
          borderWidth: 0,
        },
        label: {
          show: true,
        }
      },
      data: pieChartData
    }
  ]
};

// use configuration item and data specified to show chart
pieChart.setOption(pieChartOptions);
