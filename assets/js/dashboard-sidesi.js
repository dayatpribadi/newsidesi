
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



const pieChart1 = document.getElementById("pieChart1");
if (pieChart1) {
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
                            color: '#000'
                        },
                        value: {
                            show: true,
                            color: '#000',
                            fontSize: '28px',
                            fontWeight: '700'
                        },
                        total: {
                            show: true,
                            color: '#000'
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
    var chart = new ApexCharts(document.querySelector("#pieChart1"), options);
    chart.render();
}

const pieChart2 = document.getElementById("pieChart2");
if (pieChart2) {
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
                            color: '#000'
                        },
                        value: {
                            show: true,
                            color: '#000',
                            fontSize: '28px',
                            fontWeight: '700'
                        },
                        total: {
                            show: true,
                            color: '#000'
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
    var chart = new ApexCharts(document.querySelector("#pieChart2"), options);
    chart.render();
}

const pieChart3 = document.getElementById("pieChart3");
if (pieChart3) {
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
                            color: '#000'
                        },
                        value: {
                            show: true,
                            color: '#000',
                            fontSize: '28px',
                            fontWeight: '700'
                        },
                        total: {
                            show: true,
                            color: '#000'
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
    var chart = new ApexCharts(document.querySelector("#pieChart3"), options);
    chart.render();
}

const pieChart4 = document.getElementById("pieChart4");
if (pieChart4) {
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
                            color: '#000'
                        },
                        value: {
                            show: true,
                            color: '#000',
                            fontSize: '28px',
                            fontWeight: '700'
                        },
                        total: {
                            show: true,
                            color: '#000'
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
    var chart = new ApexCharts(document.querySelector("#pieChart4"), options);
    chart.render();
}


    // Finance Static Chart
    const chartPendudukPerKecamatan = document.getElementById("chartPendudukPerKecamatan");
    if (chartPendudukPerKecamatan) {
        var options = {
            series: [
                {
                    name: "Laki-Laki",
                    data: [450, 540, 560, 540, 600, 570, 630, 600, 660, 560, 540, 600, 570, 630, 600, 660]
                },
                {
                    name: "Perempuan",
                    data: [760, 850, 1000, 970, 850, 1050, 900, 1130, 950, 1000, 970, 850, 1050, 900, 950, 201]
                }
            ],
            chart: {
                type: "bar",
                height: 402,
                toolbar: {
                    show: false
                }
            },
            colors: [
                "#605DFF", "#D838AE" 
            ],
            plotOptions: {
                bar: {
                    columnWidth: "19.96px"
                }
            },
            grid: {
                show: true,
                borderColor: "#F6F7F9"
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                width: 4,
                show: true,
                colors: ["transparent"]
            },
            xaxis: {
                categories: [
                    "Indralaya",
                    "Indralaya Selatan",
                    "Indralaya Utara",
                    "Pemulutan",
                    "Pemulutan Selatan",
                    "Pemulutan Barat",
                    "Payaraman",
                    "Tanjung Batu",
                    "Tanjung Raja",
                    "Muara Kuang",
                    "Kandis",
                    "Lubuk Keliat",
                    "Rambang Kuang",
                    "Rantau Alai",
                    "Rantau Panjang",
                    "Sungai Pinang"
                ],
                axisTicks: {
                    show: true,
                    color: '#F6F7F9'
                },
                axisBorder: {
                    show: false,
                    color: '#F6F7F9'
                },
                labels: {
                    show: true,
                    style: {
                        colors: "#64748B",
                        fontSize: "12px"
                    }
                }
            },
            yaxis: {
                tickAmount: 6,
                max: 1200,
                min: 0,
                labels: {
                    formatter: (val) => {
                        return val + " jiwa";
                    },
                    style: {
                        colors: "#64748B",
                        fontSize: "12px"
                    }
                },
                axisBorder: {
                    show: false,
                    color: '#F6F7F9'
                },
                axisTicks: {
                    show: false,
                    color: '#F6F7F9'
                }
            },
            tooltip: {
                y: {
                    formatter: function(val) {
                        return val + " jiwa";
                    }
                }
            },
            legend: {
                show: true,
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
                    shape: 'square'
                }
            }
        };
        var chart = new ApexCharts(document.querySelector("#chartPendudukPerKecamatan"), options);
        chart.render();
    }