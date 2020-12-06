import { defineComponent, nextTick } from "vue";
import echarts from "echarts";
import style from "./s.module.scss";

export default defineComponent({
    name: "Echarts",
    props: {
        msg: String,
    },
    setup(props) {
        nextTick(() => {
            const chartsDom: HTMLDivElement = document.getElementById('echarts') as HTMLDivElement
            const charts: echarts.ECharts = echarts.init(chartsDom)
            const options: echarts.EChartOption = {
                title: {
                    text: 'ECharts 入门示例'
                },
                tooltip: {},
                xAxis: {
                    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }]
            }
            charts.setOption(options)
        })
        return () => (
            <>
                <h1>echarts: {props.msg}</h1>
                <div class={style.echart} id="echarts" ></div>
                <hr />
            </>
        )
    },
});
