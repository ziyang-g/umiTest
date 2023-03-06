import { WarningFilled } from '@ant-design/icons';
import styles from './remind.module.less';

const AbnormalRemind = () => {
  return (
    <div className={styles.remind}>
      <div className={styles.remind_left}>
        <WarningFilled style={{ fontSize: 50 }} />
        <span>异常提醒</span>
      </div>
      <div className={styles.remind_right}>
        提醒：您有低电量锂电池长时间未使用 +5
      </div>
    </div>
  );
};

export default AbnormalRemind;
