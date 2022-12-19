import { PageContainer } from '@ant-design/pro-components';
import * as echarts from 'echarts';
import { useEffect, useState } from 'react';

const Overview = ({ data }: { data: any }) => {
  const chartDom: any = document.getElementById('taskInfo_content');
  const [dataList, setDataList] = useState<any>([]);
  useEffect(() => {
    setDataList(['除险保安', '疫情防疫', '防台防汛']);
  }, [data]);
  useEffect(() => {
    if (chartDom) {
      const myChart = echarts.init(chartDom);
      let option;
      option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // Use axis to trigger tooltip
            type: 'shadow', // 'shadow' as default; can also be 'line' or 'shadow'
          },
        },
        color: '#4ff',

        legend: {
          //图例
          textStyle: {
            fontSize: 12,
            color: '#fff',
          },
          orient: 'vertical',
          top: '1%',
          x: '81%',
          y: 'center',
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
          show: false,
          tooltip: {
            show: false,
          },
        },
        xAxis: {
          type: 'value',
          splitLine: {
            show: false,
          },
        },
        yAxis: {
          type: 'category',
          data: dataList,
          nameGap: 15,
          axisLabel: {
            textStyle: {
              color: '#fff',
            },
          },
          name: '单位：次数',
        },
        series: [
          {
            name: '执行次数',
            type: 'bar',
            stack: 'total',
            label: {
              show: true,
            },
            emphasis: {
              focus: 'series',
            },
            data: [30, 15, 25],
            barWidth: 8,
            itemStyle: {
              normal: {
                color: function () {
                  return new echarts.graphic.LinearGradient(
                    1,
                    1,
                    0,
                    0,
                    [
                      { offset: 0, color: '#02FBFF' },
                      { offset: 1, color: '#163749' },
                    ],
                    false,
                  );
                },
              },
            },
          },
        ],
      };

      myChart.setOption(option);
    }
  }, [chartDom, data]);

  return (
    <PageContainer>
      <div id="taskInfo_content"></div>
    </PageContainer>
  );
};

export default Overview;
