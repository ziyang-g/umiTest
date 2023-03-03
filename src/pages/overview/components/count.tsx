import { Badge } from 'antd';
import styles from './count.module.css';

//基本信息的统计单元格
const Count: React.FC<{
  name: string;
  color: string;
  count: number | string;
}> = (props) => {
  return (
    <div className={styles.item}>
      <Badge color={props.color} />
      <div>{props.name}</div>
      <div className={styles.count}>{props.count}</div>
    </div>
  );
};

export default Count;
