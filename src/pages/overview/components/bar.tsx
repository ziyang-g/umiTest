import { useEffect, useRef } from 'react';
import styles from './bar.module.less';
import * as Echarts from 'echarts';

const Bar = () => {
  const barRef: any = useRef();

  useEffect(() => {
    // 基于准备好的dom，初始化echarts实例
    const myChart = Echarts.init(barRef.current);

    // 指定图表的配置项和数据
    const option = {
      title: {
        text: '电能统计/kWh',
        top: 10,
        left: 10,
      },
      legend: {
        show: true,
        top: 10,
        right: 10,
      },

      tooltip: { trigger: 'axis' },
      xAxis: {
        data: ['11.09', '11.10', '11.11', '11.12', '11.13', '11.14'],
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          //rotate: 30,  刻度标签旋转的角度，旋转的角度从 -90 度到 90 度
          margin: 20, // 刻度标签与轴线之间的距离
        },
        axisPointer: {
          show: true,
        },
      },
      yAxis: {
        show: false,
        type: 'value',
      },
      series: [
        {
          name: '充电',
          type: 'bar',
          data: [295, 288, 269, 144, 912, 619],
          color: '#4382F6',
          barGap: 0, //柱子间距
          itemStyle: {
            normal: {
              label: {
                show: true, //顶端数据开启显示
                position: 'top', //在上方显示
              },
              textStyle: {
                //数值样式
                color: '#000000',
                fontSize: 14,
              },
              barBorderRadius: [4, 4, 4, 4], //柱子圆角
            },
          },
        },
        {
          name: '放电',
          type: 'bar',
          data: [895, 808, 99, 744, 612, 319],
          color: '#CDD8E8',
          barGap: 0, //柱子间距
          itemStyle: {
            normal: {
              label: {
                show: true, //顶端数据开启显示
                position: 'top', //在上方显示
              },
              textStyle: {
                //数值样式
                color: '#000000',
                fontSize: 14,
              },
              barBorderRadius: [4, 4, 4, 4],
            },
          },
        },
      ],
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  }, []);

  return <div className={styles.bar} ref={barRef}></div>;
};

export default Bar;
