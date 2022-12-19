import { PageContainer } from '@ant-design/pro-components';
import { useEffect, useRef } from 'react';
import * as Echarts from 'echarts';

const Test = () => {
  const barRef: any = useRef();
  const lineRef: any = useRef();
  useEffect(() => {
    // 基于准备好的dom，初始化echarts实例
    const myChart = Echarts.init(barRef.current);
    const myChart2 = Echarts.init(lineRef.current);

    // 指定图表的配置项和数据
    const option = {
      title: {
        text: 'ECharts 入门示例',
      },

      tooltip: { trigger: 'axis' },
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          rotate: 30, // 刻度标签旋转的角度，旋转的角度从 -90 度到 90 度
          margin: 20, // 刻度标签与轴线之间的距离
        },
        axisPointer: {
          show: true,
        },
      },
      yAxis: {
        interval: 1000,
        type: 'value',
        axisLabel: {
          interval: 1,
        },
        splitLine: { show: false },
      },
      series: [
        {
          name: '省份分布',
          type: 'bar',
          data: [2895, 2808, 2169, 1044, 912, 609],
        },
      ],
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);

    const option2 = {
      title: {
        text: '设备上线数(一周)',
      },
      tooltip: {
        trigger: 'axis',
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: [
            '2022-12-3',
            '2022-12-4',
            '2022-12-5',
            '2022-12-6',
            '2022-12-7',
            '2022-12-8',
            '2022-12-9',
          ],
          axisLine: {
            show: false,
          },
          show: false,
        },
      ],
      yAxis: [
        {
          type: 'value',
          splitLine: { show: false },
          show: false,
        },
      ],
      series: [
        {
          name: '车辆上线数',
          type: 'line',
          stack: 'Total',
          emphasis: {
            focus: 'series',
          },
          data: [120, 132, 101, 134, 90, 230, 210],
          showSymbol: false, //去掉折线上的圆点，但是鼠标划入会显示圆点
          lineStyle: {
            color: '#1890ff',
            width: 2.5,
          },
          areaStyle: {
            //区域填充渐变颜色
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: '#1890ff', // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: '#b6d5eb', // 100% 处的颜色
                },
              ],
              global: false, // 缺省为 false
            },
          },
        },
        {
          name: '电池上线数',
          type: 'line',
          stack: 'Total',
          areaStyle: {
            //区域填充渐变颜色
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: '#17c393', // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: '#b1e1d4', // 100% 处的颜色
                },
              ],
              global: false, // 缺省为 false
            },
          },
          emphasis: {
            focus: 'series',
          },
          data: [220, 182, 191, 234, 290, 330, 310],
          showSymbol: false,
          lineStyle: {
            color: '#17c393',
            width: 2.5,
          },
        },
      ],
    };

    myChart2.setOption(option2);
  }, []);

  return (
    <PageContainer>
      <div ref={barRef} style={{ height: 400, width: '50%' }}></div>
      <div ref={lineRef} style={{ height: 400, width: '50%' }}></div>
    </PageContainer>
  );
};
export default Test;
