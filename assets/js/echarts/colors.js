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

var lineColor = new echarts.graphic.LinearGradient(
  // 0, 0, 0, 1, // Vertical
  0, 0, 1, 0, // Horizontal
  [
    { offset: 0, color: "#448AFF" },
    { offset: 0.5, color: "#00BCD4" },
    { offset: 1, color: "#1DE9B6" }
  ]
);


var curveColor = "#fff388"; // ffffd9, ffffcc