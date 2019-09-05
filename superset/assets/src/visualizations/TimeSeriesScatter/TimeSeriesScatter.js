import echarts from 'echarts';
import d3 from 'd3';
import PropTypes from 'prop-types';

const propTypes = {
    data: PropTypes.array,
    width: PropTypes.number,
    height: PropTypes.number,
}; //检查类型，其中data包含viz.py中返回的数据，width和height为图表宽高

function TimeSeriesScatter(element, props) {
    const {
        width,
        height,
        data,
    } = props;
    // console.log(data) 可以检查一下data内容
    const div = d3.select(element, props);
    var html = '<div id="time_series_scatter" style="height:' + height + 'px; width:' + width + 'px;"></div>';
    div.html(html); //给echarts添加div
    var myChart = echarts.init(document.getElementById('time_series_scatter')); //初始化echarts，接下来的就是echarts内容了
    var option = {
        tooltip: {
            formatter: '{b}: {c}'
        },
        xAxis: {
            type: 'time',
            scale: true
        },
        yAxis: {
            type: 'value',
            scale: true
        },
        series: [{
            type: 'scatter',
            symbolSize: 20,
        }, {
            type: 'scatter',
            data: data,
        }]
    };

    myChart.setOption(option);
}

TimeSeriesScatter.displayName = 'Time Series Scatter';
TimeSeriesScatter.propTypes = propTypes;

export default TimeSeriesScatter;