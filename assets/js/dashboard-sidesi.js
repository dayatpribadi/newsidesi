
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

document.addEventListener("DOMContentLoaded", function () {
    const pieChart1 = document.getElementById("pieChart1");
    if (pieChart1) {
        var options = {
            series: [196200, 190741],
            chart: {
                height: 414,
                type: "donut"
            },
            labels: ["Laki-Laki", "Perempuan"],
            colors: ["#90C7FF", "#AD63F6"],
            fill: {
                type: "gradient", // Efek gradasi agar lebih 3D
                gradient: {
                    shade: "light",
                    type: "vertical",
                    gradientToColors: ["#3A8DFF", "#8131F3"], // Gradasi ke warna yang lebih gelap
                    stops: [-50, 100]
                }
            },
            stroke: {
                show: true,
                width: 6, // Stroke agar lebih jelas
                colors: ["#FFF"]
            },
            plotOptions: {
                pie: {
                    expandOnClick: true, // Memperbesar slice saat diklik
                    donut: {
                        size: '65%',
                        labels: {
                            show: true,
                            name: {
                                color: '#000',
                                fontSize: '16px',
                                fontWeight: '600'
                            },
                            value: {
                                show: true,
                                color: '#000',
                                fontSize: '24px',
                                fontWeight: '700'
                            },
                            total: {
                                show: true,
                                label: 'Total',
                                color: '#000',
                                fontSize: '18px',
                                fontWeight: '600',
                                formatter: function (w) {
                                    return w.globals.seriesTotals.reduce((a, b) => a + b, 0).toLocaleString();
                                }
                            }
                        }
                    }
                }
            },
            dataLabels: {
                enabled: false
            },
            tooltip: {
                enabled: true,
                y: {
                    formatter: function (val) {
                        return val.toLocaleString();
                    }
                }
            },
            legend: {
                show: false,
                fontSize: '14px',
                position: 'bottom',
                horizontalAlign: 'center',
                itemMargin: {
                    horizontal: 10,
                    vertical: 10
                },
                labels: {
                    colors: '#000'
                },
                markers: {
                    size: 10,
                    shape: 'circle'
                },
                formatter: function (seriesName, opts) {
                    return seriesName + ": <strong>" + opts.w.globals.series[opts.seriesIndex].toLocaleString() + "</strong>";
                }
            }
        };

        var chart = new ApexCharts(document.querySelector("#pieChart1"), options);
        chart.render();
    }
});

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
                data: [760, 850, 1000, 970, 850, 1050, 900, 1130, 950, 1000, 970, 850, 1050, 900, 950, 20]
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




// GRAFIK HALAMAN PODES

document.addEventListener("DOMContentLoaded", function () {
    const chartBpd = document.getElementById("chartBpd");
    if (chartBpd) {
        var options = {
            series: [95, 5],
            chart: {
                height: 414,
                type: "donut"
            },
            labels: ["Ada", "Tidak Ada"],
            colors: ["#3A8DFF", "#F39C12"],
            fill: {
                type: "gradient", // Efek gradasi agar lebih 3D
                gradient: {
                    shade: "light",
                    type: "vertical",
                    gradientToColors: ["#3A8DFF", "#8131F3"], // Gradasi ke warna yang lebih gelap
                    stops: [-50, 100]
                }
            },
            stroke: {
                show: true,
                width: 0, // Stroke agar lebih jelas
                colors: ["#FFF"]
            },
            plotOptions: {
                pie: {
                    expandOnClick: true, // Memperbesar slice saat diklik
                    donut: {
                        size: '65%',
                        labels: {
                            show: true,
                            name: {
                                color: '#FFF',
                                fontSize: '16px',
                                fontWeight: '600'
                            },
                            value: {
                                show: true,
                                color: '#FFF',
                                fontSize: '24px',
                                fontWeight: '700'
                            },
                            total: {
                                show: true,
                                label: 'Total',
                                color: '#FFF',
                                fontSize: '18px',
                                fontWeight: '600',
                                formatter: function (w) {
                                    return w.globals.seriesTotals.reduce((a, b) => a + b, 0).toLocaleString();
                                }
                            }
                        }
                    }
                }
            },
            dataLabels: {
                enabled: false
            },
            tooltip: {
                enabled: true,
                y: {
                    formatter: function (val) {
                        return val.toLocaleString();
                    }
                }
            },
            legend: {
                show: false,
                fontSize: '14px',
                position: 'bottom',
                horizontalAlign: 'center',
                itemMargin: {
                    horizontal: 10,
                    vertical: 10
                },
                labels: {
                    colors: '#000'
                },
                markers: {
                    size: 10,
                    shape: 'circle'
                },
                formatter: function (seriesName, opts) {
                    return seriesName + ": <strong>" + opts.w.globals.series[opts.seriesIndex].toLocaleString() + "</strong>";
                }
            }
        };

        var chart = new ApexCharts(document.querySelector("#chartBpd"), options);
        chart.render();
    }
});

const chartPemerintahans = document.getElementById("chartPemerintahans");
if (chartPemerintahans) {
    var options = {
        series: [
            {
                name: "Pemerintahan",
                data: [227, 14, 0, 0]
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
                "Desa", "Kelurahan", "UPT/SPT", "Nagari"
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
            tickAmount: 2,
            show: false,
            max: 100,
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
    var chart = new ApexCharts(document.querySelector("#chartPemerintahans"), options);
    chart.render();
}

document.addEventListener("DOMContentLoaded", function () {
    const donutChart11 = document.getElementById("donutChart11");
    if (donutChart11) {
        var options = {
            series: [95, 5],
            chart: {
                height: 414,
                type: "donut"
            },
            labels: ["Sudah", "Belum"],
            colors: ["#361E7D", "#F39C12"],
            fill: {
                type: "gradient", // Efek gradasi agar lebih 3D
                gradient: {
                    shade: "light",
                    type: "vertical",
                    gradientToColors: ["#3A8DFF", "#8131F3"], // Gradasi ke warna yang lebih gelap
                    stops: [-50, 100]
                }
            },
            stroke: {
                show: true,
                width: 6, // Stroke agar lebih jelas
                colors: ["#FFF"]
            },
            plotOptions: {
                pie: {
                    expandOnClick: true, // Memperbesar slice saat diklik
                    donut: {
                        size: '65%',
                        labels: {
                            show: true,
                            name: {
                                color: '#000',
                                fontSize: '16px',
                                fontWeight: '600'
                            },
                            value: {
                                show: true,
                                color: '#000',
                                fontSize: '24px',
                                fontWeight: '700'
                            },
                            total: {
                                show: true,
                                label: 'Total',
                                color: '#000',
                                fontSize: '18px',
                                fontWeight: '600',
                                formatter: function (w) {
                                    return w.globals.seriesTotals.reduce((a, b) => a + b, 0).toLocaleString();
                                }
                            }
                        }
                    }
                }
            },
            dataLabels: {
                enabled: false
            },
            tooltip: {
                enabled: true,
                y: {
                    formatter: function (val) {
                        return val.toLocaleString();
                    }
                }
            },
            legend: {
                show: false,
                fontSize: '14px',
                position: 'bottom',
                horizontalAlign: 'center',
                itemMargin: {
                    horizontal: 10,
                    vertical: 10
                },
                labels: {
                    colors: '#000'
                },
                markers: {
                    size: 10,
                    shape: 'circle'
                },
                formatter: function (seriesName, opts) {
                    return seriesName + ": <strong>" + opts.w.globals.series[opts.seriesIndex].toLocaleString() + "</strong>";
                }
            }
        };

        var chart = new ApexCharts(document.querySelector("#donutChart11"), options);
        chart.render();
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const donutChart12 = document.getElementById("donutChart12");
    if (donutChart12) {
        var options = {
            series: [68, 32],
            chart: {
                height: 414,
                type: "donut"
            },
            labels: ["Sudah", "Belum"],
            colors: ["#361E7D", "#F39C12"],
            fill: {
                type: "gradient", // Efek gradasi agar lebih 3D
                gradient: {
                    shade: "light",
                    type: "vertical",
                    gradientToColors: ["#3A8DFF", "#8131F3"], // Gradasi ke warna yang lebih gelap
                    stops: [-50, 100]
                }
            },
            stroke: {
                show: true,
                width: 6, // Stroke agar lebih jelas
                colors: ["#FFF"]
            },
            plotOptions: {
                pie: {
                    expandOnClick: true, // Memperbesar slice saat diklik
                    donut: {
                        size: '65%',
                        labels: {
                            show: true,
                            name: {
                                color: '#000',
                                fontSize: '16px',
                                fontWeight: '600'
                            },
                            value: {
                                show: true,
                                color: '#000',
                                fontSize: '24px',
                                fontWeight: '700'
                            },
                            total: {
                                show: true,
                                label: 'Total',
                                color: '#000',
                                fontSize: '18px',
                                fontWeight: '600',
                                formatter: function (w) {
                                    return w.globals.seriesTotals.reduce((a, b) => a + b, 0).toLocaleString();
                                }
                            }
                        }
                    }
                }
            },
            dataLabels: {
                enabled: false
            },
            tooltip: {
                enabled: true,
                y: {
                    formatter: function (val) {
                        return val.toLocaleString();
                    }
                }
            },
            legend: {
                show: false,
                fontSize: '14px',
                position: 'bottom',
                horizontalAlign: 'center',
                itemMargin: {
                    horizontal: 10,
                    vertical: 10
                },
                labels: {
                    colors: '#000'
                },
                markers: {
                    size: 10,
                    shape: 'circle'
                },
                formatter: function (seriesName, opts) {
                    return seriesName + ": <strong>" + opts.w.globals.series[opts.seriesIndex].toLocaleString() + "</strong>";
                }
            }
        };

        var chart = new ApexCharts(document.querySelector("#donutChart12"), options);
        chart.render();
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const donutChart13 = document.getElementById("donutChart13");
    if (donutChart13) {
        var options = {
            series: [50, 35, 15],
            chart: {
                height: 414,
                type: "donut"
            },
            labels: ["Sebagian Besar", "Sebagian Kecil", "Tidak Ada"],
            colors: ["#00A7F4", "#361E7D", "#F39C12"],
            fill: {
                type: "gradient", // Efek gradasi agar lebih 3D
                gradient: {
                    shade: "light",
                    type: "vertical",
                    gradientToColors: ["#3A8DFF", "#8131F3"], // Gradasi ke warna yang lebih gelap
                    stops: [-50, 100]
                }
            },
            stroke: {
                show: true,
                width: 6, // Stroke agar lebih jelas
                colors: ["#FFF"]
            },
            plotOptions: {
                pie: {
                    expandOnClick: true, // Memperbesar slice saat diklik
                    donut: {
                        size: '65%',
                        labels: {
                            show: true,
                            name: {
                                color: '#000',
                                fontSize: '16px',
                                fontWeight: '600'
                            },
                            value: {
                                show: true,
                                color: '#000',
                                fontSize: '24px',
                                fontWeight: '700'
                            },
                            total: {
                                show: true,
                                label: 'Total',
                                color: '#000',
                                fontSize: '18px',
                                fontWeight: '600',
                                formatter: function (w) {
                                    return w.globals.seriesTotals.reduce((a, b) => a + b, 0).toLocaleString();
                                }
                            }
                        }
                    }
                }
            },
            dataLabels: {
                enabled: false
            },
            tooltip: {
                enabled: false,
                y: {
                    formatter: function (val) {
                        return val.toLocaleString();
                    }
                }
            },
            legend: {
                show: false,
                fontSize: '14px',
                position: 'bottom',
                horizontalAlign: 'center',
                itemMargin: {
                    horizontal: 10,
                    vertical: 10
                },
                labels: {
                    colors: '#000'
                },
                markers: {
                    size: 10,
                    shape: 'circle'
                },
                formatter: function (seriesName, opts) {
                    return seriesName + ": <strong>" + opts.w.globals.series[opts.seriesIndex].toLocaleString() + "</strong>";
                }
            }
        };

        var chart = new ApexCharts(document.querySelector("#donutChart13"), options);
        chart.render();
    }
});

const chartSampah = document.getElementById("chartSampah");
if (chartSampah) {
var options = {
    series: [
        {
            name: "Sampah",
            data: [200, 19, 20, 60
            ]
        }
    ],
    chart: {
        type: "bar",
        height: 320,
        toolbar: {
            show: false
        }
    },
    colors: [
        "#8ED838", "#00A7F4", "#361E7D", "#F39C12"
    ],
    plotOptions: {
        bar: {
            horizontal: true,
            distributed: true
        },
    },
    grid: {
        show: true,
        borderColor: "#361E7D"
    },
    legend: {
        show: false
    },
    dataLabels: {
        enabled: false
    },
    xaxis: {
        categories: [
            "Tempat Sampah",
            "Lubang",
            "Sungai",
            "Got",
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
var chart = new ApexCharts(document.querySelector("#chartSampah"), options);
chart.render();
}

const chartSumberAir = document.getElementById("chartSumberAir");
if (chartSumberAir) {
    var options = {
        series: [
            {
                name: "Sumber Air Minum",
                data: [0, 100, 60, 0, 12, 40, 2 ,20, 2, 0]
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
            offsetY: -30,
            style: {
                fontSize: "13px",
                colors: ["#361E7D"]
            }
        },
        xaxis: {
            show: true,
            categories: [
                "Air Kemasan Bermerk", 
                "Air Isi Ulang", 
                "Ledeng dengan meteran", 
                "Ledeng tanpa meteran",
                "Sumur Bor",
                "Sumur",
                "Mata Air",
                "Sungai",
                "Air Hujan",
                "Lainnya"
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
                show: false,
                style: {
                    colors: "#8695AA",
                    fontSize: "12px"
                }
            }
        },
        colors: [
            "#8ED838", "#00A7F4", "#361E7D", "#F39C12", "#E195AB", "#BFBBA9", "#48A6A7", "#C5BAFF", "#872341"
        ],
        yaxis: {
            tickAmount: 1,
            show: true,
            max: 100,
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
                show: true,
                color: '#8ED838'
            },
            axisTicks: {
                show: true,
                color: '#8ED838'
            }
        },
        grid: {
            show: true,
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
    var chart = new ApexCharts(document.querySelector("#chartSumberAir"), options);
    chart.render();
}

const chartFasilBab = document.getElementById("chartFasilBab");
if (chartFasilBab) {
    var options = {
        series: [
            {
                name: "Jamban",
                data: [227, 14, 0, 0]
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
            show: false,
            categories: [
                "Jamban Sendiri", "Jamban Bersama", "Jamban Umum", "Bukan Jamban"
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
                show: false,
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
            tickAmount: 2,
            show: false,
            max: 100,
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
    var chart = new ApexCharts(document.querySelector("#chartFasilBab"), options);
    chart.render();
}

const chartFasilBab2 = document.getElementById("chartFasilBab2");
if (chartFasilBab2) {
    var options = {
        series: [
            {
                name: "Septik Tank",
                data: [227, 14, 0, 0]
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
            show: false,
            categories: [
                "Tank", "Lubang Tanah", "Sawah", "Lainnya"
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
                show: false,
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
            tickAmount: 2,
            show: false,
            max: 100,
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
    var chart = new ApexCharts(document.querySelector("#chartFasilBab2"), options);
    chart.render();
}

document.addEventListener("DOMContentLoaded", function () {
    const donutGaskota = document.getElementById("donutGaskota");
    if (donutGaskota) {
        var options = {
            series: [95, 5],
            chart: {
                height: 414,
                type: "donut"
            },
            labels: ["Ada", "Belum"],
            colors: ["#361E7D", "#F39C12"],
            fill: {
                type: "gradient", // Efek gradasi agar lebih 3D
                gradient: {
                    shade: "light",
                    type: "vertical",
                    gradientToColors: ["#3A8DFF", "#8131F3"], // Gradasi ke warna yang lebih gelap
                    stops: [-50, 100]
                }
            },
            stroke: {
                show: true,
                width: 6, // Stroke agar lebih jelas
                colors: ["#FFF"]
            },
            plotOptions: {
                pie: {
                    expandOnClick: true, // Memperbesar slice saat diklik
                    donut: {
                        size: '65%',
                        labels: {
                            show: true,
                            name: {
                                color: '#000',
                                fontSize: '16px',
                                fontWeight: '600'
                            },
                            value: {
                                show: true,
                                color: '#000',
                                fontSize: '24px',
                                fontWeight: '700'
                            },
                            total: {
                                show: true,
                                label: 'Total',
                                color: '#000',
                                fontSize: '18px',
                                fontWeight: '600',
                                formatter: function (w) {
                                    return w.globals.seriesTotals.reduce((a, b) => a + b, 0).toLocaleString();
                                }
                            }
                        }
                    }
                }
            },
            dataLabels: {
                enabled: false
            },
            tooltip: {
                enabled: true,
                y: {
                    formatter: function (val) {
                        return val.toLocaleString();
                    }
                }
            },
            legend: {
                show: false,
                fontSize: '14px',
                position: 'bottom',
                horizontalAlign: 'center',
                itemMargin: {
                    horizontal: 10,
                    vertical: 10
                },
                labels: {
                    colors: '#000'
                },
                markers: {
                    size: 10,
                    shape: 'circle'
                },
                formatter: function (seriesName, opts) {
                    return seriesName + ": <strong>" + opts.w.globals.series[opts.seriesIndex].toLocaleString() + "</strong>";
                }
            }
        };

        var chart = new ApexCharts(document.querySelector("#donutGaskota"), options);
        chart.render();
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const donutElpijiTiga = document.getElementById("donutElpijiTiga");
    if (donutElpijiTiga) {
        var options = {
            series: [95, 5],
            chart: {
                height: 414,
                type: "donut"
            },
            labels: ["Ada", "Belum"],
            colors: ["#361E7D", "#F39C12"],
            fill: {
                type: "gradient", // Efek gradasi agar lebih 3D
                gradient: {
                    shade: "light",
                    type: "vertical",
                    gradientToColors: ["#3A8DFF", "#8131F3"], // Gradasi ke warna yang lebih gelap
                    stops: [-50, 100]
                }
            },
            stroke: {
                show: true,
                width: 6, // Stroke agar lebih jelas
                colors: ["#FFF"]
            },
            plotOptions: {
                pie: {
                    expandOnClick: true, // Memperbesar slice saat diklik
                    donut: {
                        size: '65%',
                        labels: {
                            show: true,
                            name: {
                                color: '#000',
                                fontSize: '16px',
                                fontWeight: '600'
                            },
                            value: {
                                show: true,
                                color: '#000',
                                fontSize: '24px',
                                fontWeight: '700'
                            },
                            total: {
                                show: true,
                                label: 'Total',
                                color: '#000',
                                fontSize: '18px',
                                fontWeight: '600',
                                formatter: function (w) {
                                    return w.globals.seriesTotals.reduce((a, b) => a + b, 0).toLocaleString();
                                }
                            }
                        }
                    }
                }
            },
            dataLabels: {
                enabled: false
            },
            tooltip: {
                enabled: true,
                y: {
                    formatter: function (val) {
                        return val.toLocaleString();
                    }
                }
            },
            legend: {
                show: false,
                fontSize: '14px',
                position: 'bottom',
                horizontalAlign: 'center',
                itemMargin: {
                    horizontal: 10,
                    vertical: 10
                },
                labels: {
                    colors: '#000'
                },
                markers: {
                    size: 10,
                    shape: 'circle'
                },
                formatter: function (seriesName, opts) {
                    return seriesName + ": <strong>" + opts.w.globals.series[opts.seriesIndex].toLocaleString() + "</strong>";
                }
            }
        };

        var chart = new ApexCharts(document.querySelector("#donutElpijiTiga"), options);
        chart.render();
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const donutElpijiLima = document.getElementById("donutElpijiLima");
    if (donutElpijiLima) {
        var options = {
            series: [95, 5],
            chart: {
                height: 414,
                type: "donut"
            },
            labels: ["Ada", "Belum"],
            colors: ["#361E7D", "#F39C12"],
            fill: {
                type: "gradient", // Efek gradasi agar lebih 3D
                gradient: {
                    shade: "light",
                    type: "vertical",
                    gradientToColors: ["#3A8DFF", "#8131F3"], // Gradasi ke warna yang lebih gelap
                    stops: [-50, 100]
                }
            },
            stroke: {
                show: true,
                width: 6, // Stroke agar lebih jelas
                colors: ["#FFF"]
            },
            plotOptions: {
                pie: {
                    expandOnClick: true, // Memperbesar slice saat diklik
                    donut: {
                        size: '65%',
                        labels: {
                            show: true,
                            name: {
                                color: '#000',
                                fontSize: '16px',
                                fontWeight: '600'
                            },
                            value: {
                                show: true,
                                color: '#000',
                                fontSize: '24px',
                                fontWeight: '700'
                            },
                            total: {
                                show: true,
                                label: 'Total',
                                color: '#000',
                                fontSize: '18px',
                                fontWeight: '600',
                                formatter: function (w) {
                                    return w.globals.seriesTotals.reduce((a, b) => a + b, 0).toLocaleString();
                                }
                            }
                        }
                    }
                }
            },
            dataLabels: {
                enabled: false
            },
            tooltip: {
                enabled: true,
                y: {
                    formatter: function (val) {
                        return val.toLocaleString();
                    }
                }
            },
            legend: {
                show: false,
                fontSize: '14px',
                position: 'bottom',
                horizontalAlign: 'center',
                itemMargin: {
                    horizontal: 10,
                    vertical: 10
                },
                labels: {
                    colors: '#000'
                },
                markers: {
                    size: 10,
                    shape: 'circle'
                },
                formatter: function (seriesName, opts) {
                    return seriesName + ": <strong>" + opts.w.globals.series[opts.seriesIndex].toLocaleString() + "</strong>";
                }
            }
        };

        var chart = new ApexCharts(document.querySelector("#donutElpijiLima"), options);
        chart.render();
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const donutMinyakTanah = document.getElementById("donutMinyakTanah");
    if (donutMinyakTanah) {
        var options = {
            series: [95, 5],
            chart: {
                height: 414,
                type: "donut"
            },
            labels: ["Ada", "Belum"],
            colors: ["#361E7D", "#F39C12"],
            fill: {
                type: "gradient", // Efek gradasi agar lebih 3D
                gradient: {
                    shade: "light",
                    type: "vertical",
                    gradientToColors: ["#3A8DFF", "#8131F3"], // Gradasi ke warna yang lebih gelap
                    stops: [-50, 100]
                }
            },
            stroke: {
                show: true,
                width: 6, // Stroke agar lebih jelas
                colors: ["#FFF"]
            },
            plotOptions: {
                pie: {
                    expandOnClick: true, // Memperbesar slice saat diklik
                    donut: {
                        size: '65%',
                        labels: {
                            show: true,
                            name: {
                                color: '#000',
                                fontSize: '16px',
                                fontWeight: '600'
                            },
                            value: {
                                show: true,
                                color: '#000',
                                fontSize: '24px',
                                fontWeight: '700'
                            },
                            total: {
                                show: true,
                                label: 'Total',
                                color: '#000',
                                fontSize: '18px',
                                fontWeight: '600',
                                formatter: function (w) {
                                    return w.globals.seriesTotals.reduce((a, b) => a + b, 0).toLocaleString();
                                }
                            }
                        }
                    }
                }
            },
            dataLabels: {
                enabled: false
            },
            tooltip: {
                enabled: true,
                y: {
                    formatter: function (val) {
                        return val.toLocaleString();
                    }
                }
            },
            legend: {
                show: false,
                fontSize: '14px',
                position: 'bottom',
                horizontalAlign: 'center',
                itemMargin: {
                    horizontal: 10,
                    vertical: 10
                },
                labels: {
                    colors: '#000'
                },
                markers: {
                    size: 10,
                    shape: 'circle'
                },
                formatter: function (seriesName, opts) {
                    return seriesName + ": <strong>" + opts.w.globals.series[opts.seriesIndex].toLocaleString() + "</strong>";
                }
            }
        };

        var chart = new ApexCharts(document.querySelector("#donutMinyakTanah"), options);
        chart.render();
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const donutKayuBakar = document.getElementById("donutKayuBakar");
    if (donutKayuBakar) {
        var options = {
            series: [95, 5],
            chart: {
                height: 414,
                type: "donut"
            },
            labels: ["Ada", "Belum"],
            colors: ["#361E7D", "#F39C12"],
            fill: {
                type: "gradient", // Efek gradasi agar lebih 3D
                gradient: {
                    shade: "light",
                    type: "vertical",
                    gradientToColors: ["#3A8DFF", "#8131F3"], // Gradasi ke warna yang lebih gelap
                    stops: [-50, 100]
                }
            },
            stroke: {
                show: true,
                width: 6, // Stroke agar lebih jelas
                colors: ["#FFF"]
            },
            plotOptions: {
                pie: {
                    expandOnClick: true, // Memperbesar slice saat diklik
                    donut: {
                        size: '65%',
                        labels: {
                            show: true,
                            name: {
                                color: '#000',
                                fontSize: '16px',
                                fontWeight: '600'
                            },
                            value: {
                                show: true,
                                color: '#000',
                                fontSize: '24px',
                                fontWeight: '700'
                            },
                            total: {
                                show: true,
                                label: 'Total',
                                color: '#000',
                                fontSize: '18px',
                                fontWeight: '600',
                                formatter: function (w) {
                                    return w.globals.seriesTotals.reduce((a, b) => a + b, 0).toLocaleString();
                                }
                            }
                        }
                    }
                }
            },
            dataLabels: {
                enabled: false
            },
            tooltip: {
                enabled: true,
                y: {
                    formatter: function (val) {
                        return val.toLocaleString();
                    }
                }
            },
            legend: {
                show: false,
                fontSize: '14px',
                position: 'bottom',
                horizontalAlign: 'center',
                itemMargin: {
                    horizontal: 10,
                    vertical: 10
                },
                labels: {
                    colors: '#000'
                },
                markers: {
                    size: 10,
                    shape: 'circle'
                },
                formatter: function (seriesName, opts) {
                    return seriesName + ": <strong>" + opts.w.globals.series[opts.seriesIndex].toLocaleString() + "</strong>";
                }
            }
        };

        var chart = new ApexCharts(document.querySelector("#donutKayuBakar"), options);
        chart.render();
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const donutBiogas = document.getElementById("donutBiogas");
    if (donutBiogas) {
        var options = {
            series: [95, 5],
            chart: {
                height: 414,
                type: "donut"
            },
            labels: ["Ada", "Belum"],
            colors: ["#361E7D", "#F39C12"],
            fill: {
                type: "gradient", // Efek gradasi agar lebih 3D
                gradient: {
                    shade: "light",
                    type: "vertical",
                    gradientToColors: ["#3A8DFF", "#8131F3"], // Gradasi ke warna yang lebih gelap
                    stops: [-50, 100]
                }
            },
            stroke: {
                show: true,
                width: 6, // Stroke agar lebih jelas
                colors: ["#FFF"]
            },
            plotOptions: {
                pie: {
                    expandOnClick: true, // Memperbesar slice saat diklik
                    donut: {
                        size: '65%',
                        labels: {
                            show: true,
                            name: {
                                color: '#000',
                                fontSize: '16px',
                                fontWeight: '600'
                            },
                            value: {
                                show: true,
                                color: '#000',
                                fontSize: '24px',
                                fontWeight: '700'
                            },
                            total: {
                                show: true,
                                label: 'Total',
                                color: '#000',
                                fontSize: '18px',
                                fontWeight: '600',
                                formatter: function (w) {
                                    return w.globals.seriesTotals.reduce((a, b) => a + b, 0).toLocaleString();
                                }
                            }
                        }
                    }
                }
            },
            dataLabels: {
                enabled: false
            },
            tooltip: {
                enabled: true,
                y: {
                    formatter: function (val) {
                        return val.toLocaleString();
                    }
                }
            },
            legend: {
                show: false,
                fontSize: '14px',
                position: 'bottom',
                horizontalAlign: 'center',
                itemMargin: {
                    horizontal: 10,
                    vertical: 10
                },
                labels: {
                    colors: '#000'
                },
                markers: {
                    size: 10,
                    shape: 'circle'
                },
                formatter: function (seriesName, opts) {
                    return seriesName + ": <strong>" + opts.w.globals.series[opts.seriesIndex].toLocaleString() + "</strong>";
                }
            }
        };

        var chart = new ApexCharts(document.querySelector("#donutBiogas"), options);
        chart.render();
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const donutArang = document.getElementById("donutArang");
    if (donutArang) {
        var options = {
            series: [95, 5],
            chart: {
                height: 414,
                type: "donut"
            },
            labels: ["Ada", "Belum"],
            colors: ["#361E7D", "#F39C12"],
            fill: {
                type: "gradient", // Efek gradasi agar lebih 3D
                gradient: {
                    shade: "light",
                    type: "vertical",
                    gradientToColors: ["#3A8DFF", "#8131F3"], // Gradasi ke warna yang lebih gelap
                    stops: [-50, 100]
                }
            },
            stroke: {
                show: true,
                width: 6, // Stroke agar lebih jelas
                colors: ["#FFF"]
            },
            plotOptions: {
                pie: {
                    expandOnClick: true, // Memperbesar slice saat diklik
                    donut: {
                        size: '65%',
                        labels: {
                            show: true,
                            name: {
                                color: '#000',
                                fontSize: '16px',
                                fontWeight: '600'
                            },
                            value: {
                                show: true,
                                color: '#000',
                                fontSize: '24px',
                                fontWeight: '700'
                            },
                            total: {
                                show: true,
                                label: 'Total',
                                color: '#000',
                                fontSize: '18px',
                                fontWeight: '600',
                                formatter: function (w) {
                                    return w.globals.seriesTotals.reduce((a, b) => a + b, 0).toLocaleString();
                                }
                            }
                        }
                    }
                }
            },
            dataLabels: {
                enabled: false
            },
            tooltip: {
                enabled: true,
                y: {
                    formatter: function (val) {
                        return val.toLocaleString();
                    }
                }
            },
            legend: {
                show: false,
                fontSize: '14px',
                position: 'bottom',
                horizontalAlign: 'center',
                itemMargin: {
                    horizontal: 10,
                    vertical: 10
                },
                labels: {
                    colors: '#000'
                },
                markers: {
                    size: 10,
                    shape: 'circle'
                },
                formatter: function (seriesName, opts) {
                    return seriesName + ": <strong>" + opts.w.globals.series[opts.seriesIndex].toLocaleString() + "</strong>";
                }
            }
        };

        var chart = new ApexCharts(document.querySelector("#donutArang"), options);
        chart.render();
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const donutBriket = document.getElementById("donutBriket");
    if (donutBriket) {
        var options = {
            series: [95, 5],
            chart: {
                height: 414,
                type: "donut"
            },
            labels: ["Ada", "Belum"],
            colors: ["#361E7D", "#F39C12"],
            fill: {
                type: "gradient", // Efek gradasi agar lebih 3D
                gradient: {
                    shade: "light",
                    type: "vertical",
                    gradientToColors: ["#3A8DFF", "#8131F3"], // Gradasi ke warna yang lebih gelap
                    stops: [-50, 100]
                }
            },
            stroke: {
                show: true,
                width: 6, // Stroke agar lebih jelas
                colors: ["#FFF"]
            },
            plotOptions: {
                pie: {
                    expandOnClick: true, // Memperbesar slice saat diklik
                    donut: {
                        size: '65%',
                        labels: {
                            show: true,
                            name: {
                                color: '#000',
                                fontSize: '16px',
                                fontWeight: '600'
                            },
                            value: {
                                show: true,
                                color: '#000',
                                fontSize: '24px',
                                fontWeight: '700'
                            },
                            total: {
                                show: true,
                                label: 'Total',
                                color: '#000',
                                fontSize: '18px',
                                fontWeight: '600',
                                formatter: function (w) {
                                    return w.globals.seriesTotals.reduce((a, b) => a + b, 0).toLocaleString();
                                }
                            }
                        }
                    }
                }
            },
            dataLabels: {
                enabled: false
            },
            tooltip: {
                enabled: true,
                y: {
                    formatter: function (val) {
                        return val.toLocaleString();
                    }
                }
            },
            legend: {
                show: false,
                fontSize: '14px',
                position: 'bottom',
                horizontalAlign: 'center',
                itemMargin: {
                    horizontal: 10,
                    vertical: 10
                },
                labels: {
                    colors: '#000'
                },
                markers: {
                    size: 10,
                    shape: 'circle'
                },
                formatter: function (seriesName, opts) {
                    return seriesName + ": <strong>" + opts.w.globals.series[opts.seriesIndex].toLocaleString() + "</strong>";
                }
            }
        };

        var chart = new ApexCharts(document.querySelector("#donutBriket"), options);
        chart.render();
    }
});








// Slider BAB
const frontBabSlider = document.getElementById("frontBabSlider");
if (frontBabSlider) {
    var swiper = new Swiper(".mySwiper2", {
        spaceBetween: 25,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false
        },
        breakpoints: {
            640: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 1
            },
            1024: {
                slidesPerView: 1
            }
        }
    });
}