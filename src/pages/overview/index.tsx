import { PageContainer } from '@ant-design/pro-components';
import Bar from './components/bar';
import Battary from './components/battary';
import ErrorList from './components/error_list';
import Forklift from './components/forklift';
import MapList from './components/map_list/map_list';
import AbnormalRemind from './components/remind/abnormal_remind';
import MaintainRemind from './components/remind/maintain_remind';
import styles from './index.module.less';

const OverView = () => {
  return (
    <PageContainer title={false} style={{ background: '#DEE3E7' }}>
      <div className={styles.box}>
        <div className={styles.box_child}>
          <Forklift />
          <Battary />
          <MapList />
          <AbnormalRemind />
        </div>
        <div className={styles.box_child}>
          <Bar />
          <Bar />
          <ErrorList />
          <MaintainRemind />
        </div>
      </div>
    </PageContainer>
  );
};

export default OverView;
