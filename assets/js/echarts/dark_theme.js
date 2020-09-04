// Quote this file in HTML
// Use echarts.init(dom, 'dark_theme') to create the chart. The second parameter is the theme name registered in *.js.

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['exports', 'echarts'], factory);
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        // CommonJS
        factory(exports, require('echarts'));
    } else {
        // Browser globals
        factory({}, root.echarts);
    }
}(this, function (exports, echarts) {
    var log = function (msg) {
        if (typeof console !== 'undefined') {
            console && console.error && console.error(msg);
        }
    };
    if (!echarts) {
        log('ECharts is not Loaded');
        return;
    }
    echarts.registerTheme('dark_theme', {
        "color": [
            "#d9615b",
            "#77abb3",
            "#e99278",
            "#8bcaad",
            "#ea7e53",
            "#eedd78",
            "#73a373",
            "#73b9bc",
            "#7289ab",
            "#91ca8c",
            "#f49f42"
        ],
        "backgroundColor": "#2d2e39",
        "textStyle": {},
        "title": {
            "textStyle": {
                "color": "#f1f1f4"
            },
            "subtextStyle": {
                "color": "#b8b9c7"
            }
        },
        "line": {
            "itemStyle": {
                "normal": {
                    "borderWidth": "1"
                }
            },
            "lineStyle": {
                "normal": {
                    "width": "2"
                }
            },
            "symbolSize": "2",
            "symbol": "circle",
            "smooth": true
        },
        "radar": {
            "itemStyle": {
                "normal": {
                    "borderWidth": "1"
                }
            },
            "lineStyle": {
                "normal": {
                    "width": "2"
                }
            },
            "symbolSize": "2",
            "symbol": "circle",
            "smooth": true
        },
        "bar": {
            "itemStyle": {
                "normal": {
                    "barBorderWidth": "0",
                    "barBorderColor": "#c6c7d2"
                },
                "emphasis": {
                    "barBorderWidth": "0",
                    "barBorderColor": "#c6c7d2"
                }
            }
        },
        "pie": {
            "itemStyle": {
                "normal": {
                    "borderWidth": "0",
                    "borderColor": "#c6c7d2"
                },
                "emphasis": {
                    "borderWidth": "0",
                    "borderColor": "#c6c7d2"
                }
            }
        },
        "scatter": {
            "itemStyle": {
                "normal": {
                    "borderWidth": "0",
                    "borderColor": "#c6c7d2"
                },
                "emphasis": {
                    "borderWidth": "0",
                    "borderColor": "#c6c7d2"
                }
            }
        },
        "boxplot": {
            "itemStyle": {
                "normal": {
                    "borderWidth": "0",
                    "borderColor": "#c6c7d2"
                },
                "emphasis": {
                    "borderWidth": "0",
                    "borderColor": "#c6c7d2"
                }
            }
        },
        "parallel": {
            "itemStyle": {
                "normal": {
                    "borderWidth": "0",
                    "borderColor": "#c6c7d2"
                },
                "emphasis": {
                    "borderWidth": "0",
                    "borderColor": "#c6c7d2"
                }
            }
        },
        "sankey": {
            "itemStyle": {
                "normal": {
                    "borderWidth": "0",
                    "borderColor": "#c6c7d2"
                },
                "emphasis": {
                    "borderWidth": "0",
                    "borderColor": "#c6c7d2"
                }
            }
        },
        "funnel": {
            "itemStyle": {
                "normal": {
                    "borderWidth": "0",
                    "borderColor": "#c6c7d2"
                },
                "emphasis": {
                    "borderWidth": "0",
                    "borderColor": "#c6c7d2"
                }
            }
        },
        "gauge": {
            "itemStyle": {
                "normal": {
                    "borderWidth": "0",
                    "borderColor": "#c6c7d2"
                },
                "emphasis": {
                    "borderWidth": "0",
                    "borderColor": "#c6c7d2"
                }
            }
        },
        "candlestick": {
            "itemStyle": {
                "normal": {
                    "color": "#fd1050",
                    "color0": "#0cf49b",
                    "borderColor": "#fd1050",
                    "borderColor0": "#0cf49b",
                    "borderWidth": 1
                }
            }
        },
        "graph": {
            "itemStyle": {
                "normal": {
                    "borderWidth": "0",
                    "borderColor": "#c6c7d2"
                }
            },
            "lineStyle": {
                "normal": {
                    "width": "1",
                    "color": "#9b9db0"
                }
            },
            "symbolSize": "2",
            "symbol": "circle",
            "smooth": true,
            "color": [
                "#d9615b",
                "#77abb3",
                "#e99278",
                "#8bcaad",
                "#ea7e53",
                "#eedd78",
                "#73a373",
                "#73b9bc",
                "#7289ab",
                "#91ca8c",
                "#f49f42"
            ],
            "label": {
                "normal": {
                    "textStyle": {
                        "color": "#e9ebef"
                    }
                }
            }
        },
        "map": {
            "itemStyle": {
                "normal": {
                    "areaColor": "#eee",
                    "borderColor": "#444",
                    "borderWidth": 0.5
                },
                "emphasis": {
                    "areaColor": "rgba(255,215,0,0.8)",
                    "borderColor": "#444",
                    "borderWidth": 1
                }
            },
            "label": {
                "normal": {
                    "textStyle": {
                        "color": "#000"
                    }
                },
                "emphasis": {
                    "textStyle": {
                        "color": "rgb(100,0,0)"
                    }
                }
            }
        },
        "geo": {
            "itemStyle": {
                "normal": {
                    "areaColor": "#eee",
                    "borderColor": "#444",
                    "borderWidth": 0.5
                },
                "emphasis": {
                    "areaColor": "rgba(255,215,0,0.8)",
                    "borderColor": "#444",
                    "borderWidth": 1
                }
            },
            "label": {
                "normal": {
                    "textStyle": {
                        "color": "#000"
                    }
                },
                "emphasis": {
                    "textStyle": {
                        "color": "rgb(100,0,0)"
                    }
                }
            }
        },
        "categoryAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#434556"
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "#434556"
                }
            },
            "axisLabel": {
                "show": true,
                "textStyle": {
                    "color": "#e9ebef"
                }
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#434556"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "#eeeeee"
                    ]
                }
            }
        },
        "valueAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#434556"
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "#434556"
                }
            },
            "axisLabel": {
                "show": true,
                "textStyle": {
                    "color": "#e9ebef"
                }
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#434556"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "#eeeeee"
                    ]
                }
            }
        },
        "logAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#434556"
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "#434556"
                }
            },
            "axisLabel": {
                "show": true,
                "textStyle": {
                    "color": "#e9ebef"
                }
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#434556"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "#eeeeee"
                    ]
                }
            }
        },
        "timeAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#434556"
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "#434556"
                }
            },
            "axisLabel": {
                "show": true,
                "textStyle": {
                    "color": "#e9ebef"
                }
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#434556"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "#eeeeee"
                    ]
                }
            }
        },
        "toolbox": {
            "iconStyle": {
                "normal": {
                    "borderColor": "#8d8fa5"
                },
                "emphasis": {
                    "borderColor": "#5a5c72"
                }
            }
        },
        "legend": {
            "textStyle": {
                "color": "#e9ebef"
            }
        },
        "tooltip": {
            "axisPointer": {
                "lineStyle": {
                    "color": "#e9ebef",
                    "width": "0.5"
                },
                "crossStyle": {
                    "color": "#e9ebef",
                    "width": "0.5"
                }
            }
        },
        "timeline": {
            "lineStyle": {
                "color": "#e9ebef",
                "width": 1
            },
            "itemStyle": {
                "normal": {
                    "color": "#1e79b6",
                    "borderWidth": "1"
                },
                "emphasis": {
                    "color": "#1e79b6"
                }
            },
            "controlStyle": {
                "normal": {
                    "color": "#e9ebef",
                    "borderColor": "#e9ebef",
                    "borderWidth": 0.5
                },
                "emphasis": {
                    "color": "#e9ebef",
                    "borderColor": "#e9ebef",
                    "borderWidth": 0.5
                }
            },
            "checkpointStyle": {
                "color": "#3a8dbf",
                "borderColor": "#3a8dbf"
            },
            "label": {
                "normal": {
                    "textStyle": {
                        "color": "#e9ebef"
                    }
                },
                "emphasis": {
                    "textStyle": {
                        "color": "#e9ebef"
                    }
                }
            }
        },
        "visualMap": {
            "color": [
                "#1eb6d1",
                "#4e6cda"
            ]
        },
        "dataZoom": {
            "backgroundColor": "rgba(47,69,84,0)",
            "dataBackgroundColor": "rgba(255,255,255,0.3)",
            "fillerColor": "rgba(167,183,204,0.4)",
            "handleColor": "#a7b7cc",
            "handleSize": "100%",
            "textStyle": {
                "color": "#e9ebef"
            }
        },
        "markPoint": {
            "label": {
                "normal": {
                    "textStyle": {
                        "color": "#e9ebef"
                    }
                },
                "emphasis": {
                    "textStyle": {
                        "color": "#e9ebef"
                    }
                }
            }
        }
    });
}));
