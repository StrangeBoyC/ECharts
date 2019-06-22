window.addEventListener('load',function () {
    let main = document.querySelectorAll('.echarts');

    let bar = echarts.init(main[0]);
    let barOption = {
        title: {
            text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
            data:['销量']
        },
        xAxis: {
            data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }]
    };

    bar.setOption(barOption);

    let line = echarts.init(main[1]);
    let lineOption = {
        tooltip : {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap : false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        legend: {
            data:['邮件营销']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            name:'邮件营销',
            stack: '总量',
            areaStyle: {},
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line'
        }]
    };
    line.setOption(lineOption);

    let sex = echarts.init(main[2]);
    let sexOption={
        backgroundColor: '#2c343c',

        title: {
            text: 'WUIF1905 男女比例',
            left: 'center',
            top: 20,
            textStyle: {
                color: '#ccc'
            }
        },

        series : [
            {
                name:'男女比例',
                type:'pie',
                data:[
                    {value:40, name:'男生'},
                    {value:16, name:'女生'},

                ].sort(function (a, b) { return a.value - b.value; }),

            }
        ]
    };
    sex.setOption(sexOption);



},false)