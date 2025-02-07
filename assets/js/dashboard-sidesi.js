
const chartPopulationBySex = document.getElementById("chartPopulationBySex");
if (chartPopulationBySex) {
    var options = {
        series: [
            196200, 190741
        ],
        chart: {
            height: 414,
            type: "donut"
        },
        labels: [
            "Laki-Laki", "Perempuan",
        ],
        colors: [
            "#90C7FF", "#AD63F6", 
        ],
        stroke: {
            show: false
        },
        plotOptions: {
            pie: {
                expandOnClick: false,
                donut: {
                    size: '65%',
                    labels: {
                        show: true,
                        name: {
                            color: '#FFF'
                        },
                        value: {
                            show: true,
                            color: '#FFF',
                            fontSize: '28px',
                            fontWeight: '700'
                        },
                        total: {
                            show: true,
                            color: '#FFF'
                        }
                    }
                }
            }
        },
        dataLabels: {
            enabled: false
        },
        tooltip: {
            enabled: false
        },
        legend: {
            show: false,
            fontSize: '12px',
            position: 'bottom',
            horizontalAlign: 'center',
            itemMargin: {
                horizontal: 10,
                vertical: 30
            },
            labels: {
                colors: '#FFF'
            },
            markers: {
                size: 8,
                offsetX: -2,
                shape: 'circle'
            },
            formatter: function(seriesName, opts) {
                return seriesName + ": <strong>" + opts.w.globals.series[opts.seriesIndex] + "</strong>";
            }
        }
    };
    var chart = new ApexCharts(document.querySelector("#chartPopulationBySex"), options);
    chart.render();
}

// Project Management Projects Roadmap Chart
const chartPopulationByAge = document.getElementById("chartPopulationByAge");
if (chartPopulationByAge) {
var options = {
    series: [
        {
            name: "Projects",
            data: [1809, 4880, 6563, 1131
            ]
        }
    ],
    chart: {
        type: "bar",
        height: 220,
        toolbar: {
            show: false
        }
    },
    colors: [
        "#361E7D"
    ],
    plotOptions: {
        bar: {
            horizontal: true
        }
    },
    grid: {
        show: true,
        borderColor: "#361E7D"
    },
    dataLabels: {
        enabled: false
    },
    xaxis: {
        categories: [
            "0-5 Tahun",
            "6-19 Tahun",
            "20-60 Tahun",
            "> 60 Tahun",
        ],
        axisTicks: {
            show: true,
            color: '#361E7D'
        },
        axisBorder: {
            show: true,
            color: '#361E7D'
        },
        labels: {
            show: true,
            style: {
                colors: "#361E7D",
                fontSize: "12px"
            }
        }
    },
    yaxis: {
        labels: {
            style: {
                colors: "#361E7D",
                fontSize: "12px"
            }
        },
        axisBorder: {
            show: true,
            color: '#361E7D'
        },
        axisTicks: {
            show: true,
            color: '#361E7D'
        }
    }
};
var chart = new ApexCharts(document.querySelector("#chartPopulationByAge"), options);
chart.render();
}

const chartPopulationBySch = document.getElementById("chartPopulationBySch");
if (chartPopulationBySch) {
    var options = {
        series: [
            3633, 3070, 93, 251
        ],
        chart: {
            height: 414,
            type: "donut"
        },
        labels: [
            "Belum Kawin", "Kawin", "Cerai Hidup", "Cerai Mati"
        ],
        colors: [
            "#8ED838", "#00A7F4", "361E7D", "#F39C12"
        ],
        stroke: {
            show: false
        },
        plotOptions: {
            pie: {
                expandOnClick: false,
                donut: {
                    size: '65%',
                    labels: {
                        show: true,
                        name: {
                            color: '#AD63F6'
                        },
                        value: {
                            show: true,
                            color: '#AD63F6',
                            fontSize: '28px',
                            fontWeight: '700'
                        },
                        total: {
                            show: true,
                            color: '#AD63F6'
                        }
                    }
                }
            }
        },
        dataLabels: {
            enabled: false
        },
        tooltip: {
            enabled: false
        },
        legend: {
            show: false,
            fontSize: '12px',
            position: 'bottom',
            horizontalAlign: 'center',
            itemMargin: {
                horizontal: 10,
                vertical: 30
            },
            labels: {
                colors: '#FFF'
            },
            markers: {
                size: 8,
                offsetX: -2,
                shape: 'circle'
            },
            formatter: function(seriesName, opts) {
                return seriesName + ": <strong>" + opts.w.globals.series[opts.seriesIndex] + "</strong>";
            }
        }
    };
    var chart = new ApexCharts(document.querySelector("#chartPopulationBySch"), options);
    chart.render();
}

    // Real-Time Sales Chart
    const chartPopulationByMerried = document.getElementById("chartPopulationByMerried");
    if (chartPopulationByMerried) {
        var options = {
            series: [
                {
                    name: "Merried",
                    data: [3633, 3070, 93, 251]
                }
            ],
            chart: {
                height: 275,
                type: "bar",
                toolbar: {
                    show: false
                }
            },
            
            plotOptions: {
                bar: {
                    borderRadius: 0,
                    horizontal: false,
                    columnWidth: '32px',
                    borderRadiusApplication: 'around',
                    borderRadiusWhenStacked: 'all',
                    dataLabels: {
                        position: "top" // top, center, bottom
                    },
                    distributed: true
                }
            },
            dataLabels: {
                enabled: true,
                formatter: function(val) {
                    return val + "";
                },
                offsetY: 0,
                style: {
                    fontSize: "13px",
                    colors: ["#64748B"]
                }
            },
            xaxis: {
                show: true,
                categories: [
                    "Belum Kawin", "Kawin", "Cerai Hidup", "Cerai Mati"
                ],
                axisTicks: {
                    show: true,
                    color: '#8ED838'
                },
                axisBorder: {
                    show: true,
                    color: '#8ED838'
                },
                labels: {
                    show: true,
                    style: {
                        colors: "#8695AA",
                        fontSize: "12px"
                    }
                }
            },
            colors: [
                "#8ED838", "#00A7F4", "#361E7D", "#F39C12"
            ],
            yaxis: {
                tickAmount: 15,
                show: false,
                max: 11,
                min: 0,
                labels: {
                    formatter: (val) => {
                        return val + ''
                    },
                    style: {
                        colors: "#64748B",
                        fontSize: "12px"
                    }
                },
                axisBorder: {
                    show: false,
                    color: '#8ED838'
                },
                axisTicks: {
                    show: false,
                    color: '#8ED838'
                }
            },
            grid: {
                show: false,
                borderColor: "#ECEEF2"
            },
            legend: {
                show: false,
                position: 'top',
                fontSize: '12px',
                horizontalAlign: 'center',
                itemMargin: {
                    horizontal: 8,
                    vertical: 0
                },
                labels: {
                    colors: '#64748B'
                },
                markers: {
                    size: 6,
                    offsetX: -2,
                    offsetY: -.5,
                    shape: 'circle'
                }
            }
        };
        var chart = new ApexCharts(document.querySelector("#chartPopulationByMerried"), options);
        chart.render();
    }