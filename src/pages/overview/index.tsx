import Bar from './components/bar';
import Battary from './components/battary';
import ErrorList from './components/error_list';
import Forklift from './components/forklift';
import MapList from './components/map_list/map_list';
import styles from './index.module.less';

const OverView = () => {
  return (
    <div className={styles.box}>
      <div className={styles.box_child}>
        <Forklift />
        <Battary />
        <MapList />
      </div>
      <div className={styles.box_child}>
        <Bar />
        <Bar />
        <ErrorList />
      </div>
    </div>
  );
};

export default OverView;
