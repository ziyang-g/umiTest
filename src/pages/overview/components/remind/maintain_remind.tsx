import { ToolFilled } from '@ant-design/icons';
import styles from './remind.module.less';

const MaintainRemind = () => {
  return (
    <div className={styles.remind}>
      <div className={styles.remind_left}>
        <ToolFilled style={{ fontSize: 50 }} />
        <span>保养提醒</span>
      </div>
      <div className={styles.remind_right}>
        提醒：您有车辆需要更换XX配件，请注意保养。
      </div>
    </div>
  );
};

export default MaintainRemind;
