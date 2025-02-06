
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
                            color: '#64748B'
                        },
                        value: {
                            show: true,
                            color: '#3A4252',
                            fontSize: '28px',
                            fontWeight: '700'
                        },
                        total: {
                            show: true,
                            color: '#64748B'
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
                colors: '#64748B'
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
        height: 342,
        toolbar: {
            show: false
        }
    },
    colors: [
        "#FFF"
    ],
    plotOptions: {
        bar: {
            horizontal: true
        }
    },
    grid: {
        show: true,
        borderColor: "#FFF"
    },
    dataLabels: {
        enabled: false
    },
    xaxis: {
        categories: [
            "Usia 0-5 Tahun",
            "Usia 6-19 Tahun",
            "Usia 20-60 Tahun",
            "Usia Lebih dari 60 Tahun",
        ],
        axisTicks: {
            show: true,
            color: '#ECEEF2'
        },
        axisBorder: {
            show: true,
            color: '#ECEEF2'
        },
        labels: {
            show: true,
            style: {
                colors: "#FFF",
                fontSize: "12px"
            }
        }
    },
    yaxis: {
        labels: {
            style: {
                colors: "#FFF",
                fontSize: "12px"
            }
        },
        axisBorder: {
            show: true,
            color: '#ECEEF2'
        },
        axisTicks: {
            show: true,
            color: '#ECEEF2'
        }
    }
};
var chart = new ApexCharts(document.querySelector("#chartPopulationByAge"), options);
chart.render();
}