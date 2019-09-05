import { t } from '@superset-ui/translation';
import { ChartMetadata, ChartPlugin } from '@superset-ui/chart';
import transformProps from './transformProps';
import thumbnail from './images/thumbnail.png';

const metadata = new ChartMetadata({
    name: t('ashun测试加的散点图TimeSeriesScatter'),
    description: '',
    credits: ['http://echarts.baidu.com/examples/editor.html?c=scatter-effect'],
    thumbnail,
});

export default class TimeSeriesScatterChartPlugin extends ChartPlugin {
    constructor() {
        super({
            metadata,
            transformProps,
            loadChart: () =>
                import ('./ReactTimeSeriesScatter.js'),
        });
    }
}