import { useEffect, useRef } from 'react';
import * as Echarts from 'echarts';

const Editable = () => {
  const chartRef: any = useRef();
  useEffect(() => {
    const myChart = Echarts.init(chartRef.current);
    const option = {
      tooltip: {
        trigger: 'item',
      },
      legend: {
        top: '5%',
        left: 'center',
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2,
          },
          label: {
            show: false,
            position: 'center',
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 40,
              fontWeight: 'bold',
              formatter: '{d}%', //环形图中间显示百分比
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' },
          ],
        },
      ],
    };

    myChart.setOption(option);
  }, []);

  return <div ref={chartRef} style={{ height: 800, width: '100%' }}></div>;
};

export default Editable;
