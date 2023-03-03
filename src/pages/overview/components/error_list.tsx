import { SwapOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useState } from 'react';
import AutoRefresh from './auto_refresh';
import ErrBattery from './error_battary/error_battary';
import ErrForklift from './error_forklift/error_forklift';
import styles from './error_list.module.less';

const ErrorList = () => {
  const [showList, setShowList] = useState<boolean>(true);

  const onClick = () => {
    if (showList) {
      setShowList(false);
    } else {
      setShowList(true);
    }
  };

  const getdata = () => {};
  return (
    <>
      <div className={styles.error_header}>
        <div className={styles.error_title}>
          <span>电池故障分析</span>
          <Button
            icon={<SwapOutlined style={{ fontSize: 20 }} />}
            style={{ marginLeft: 10 }}
            onClick={onClick}
          />
        </div>
        <AutoRefresh getdata={getdata} />
      </div>

      {showList ? <ErrForklift /> : <ErrBattery />}
    </>
  );
};
export default ErrorList;
