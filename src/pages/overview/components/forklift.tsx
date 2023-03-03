import { useEffect, useRef } from 'react';
import * as Echarts from 'echarts';
import Count from './count';
import styles from './_info.module.less';

const Forklift = () => {
  const chartRef: any = useRef();

  const data = {
    battery: 25104,
    battery_online: 4423,
    battery_offline: 20681,
    battery_error: 12,
    battery_idle: 1449,
    battery_charge: 446,
    battery_maturity: 2528,
  };

  useEffect(() => {
    const myChart = Echarts.init(chartRef.current);
    const option = {
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 3,
            borderColor: '#fff',
          },
          label: {
            show: false,
            position: 'center',
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 10,
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
  return (
    <div className={styles.card}>
      <div>
        <span className={styles.card_main}>车辆</span>
        <span className={styles.card_main_count}>{data.battery}</span>
      </div>
      <div className={styles.items}>
        <Count name="在线" color={'#f52d37'} count={data.battery_online} />
        <Count name="离线" color={'#A8A8A8'} count={data.battery_offline} />
      </div>
      <div className={styles.items}>
        <Count name="故障" color={'#FAC159'} count={data.battery_error} />
        <Count name="到期" color={'#4C4C4C'} count={data.battery_maturity} />
      </div>
      <div ref={chartRef} style={{ height: 120, width: 120 }}></div>
    </div>
  );
};

export default Forklift;
