import React, { useState } from 'react';
import { Switch, message, Statistic } from 'antd';
import styles from './auto_refresh.module.less'

const AutoRefresh: React.FC<{ getdata: () => void }> = (props) => {
  const [nextTime, setNextTime] = useState<number>();
  const [show, setShow] = useState(false);
  const { Countdown } = Statistic;

  //是否开启倒计时
  const startCount = (e: any) => {
    setShow(e);
    if (e) {
      setNextTime(Date.now() + 10 * 1000);
      message.success('开启定时刷新');
    } else {
      message.success('关闭定时刷新');
    }
  };

  //倒计时结束触发事件
  const countdownFinish = () => {
    if (!show) return;
    setNextTime(Date.now() + 10 * 1000);
    props.getdata();
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }} className={styles.auto_button}>
      {show ? (
        <Countdown value={nextTime} format="mm:ss" onFinish={countdownFinish} />
      ) : null}
      <Switch
        size="small"
        style={{ marginLeft: 10 }}
        checkedChildren={'关闭刷新'}
        unCheckedChildren={'自动刷新'}
        defaultChecked={false}
        onChange={startCount}
      />
    </div>
  );
};

export default AutoRefresh;
