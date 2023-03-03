import styles from '../error_list.module.less';
import { Table } from 'antd';

type Props = {
  vin: string;
  err_code: string;
  explain: string;
  fix: string;
  name: string;
  start_time: string;
  type: string;
};

const data: any = [
  {
    vin: '3211',
    name: 'John',
    address: 'New York No. 1 Lake Park',
  },
  {
    vin: '3211',
    name: 'John',
    address: 'New York No. 1 Lake Park',
  },
  {
    vin: '3211',
    name: 'John',
    address: 'New York No. 1 Lake Park',
  },
];

const ErrForklift = () => {
  const columns = [
    {
      title: 'vin',
      width: '30%',
      ellipsis: true,
      dataIndex: 'vin',
      render: (_: any, record: Props) => {
        const onClick = () => {};
        return (
          <>
            <div
              onClick={onClick}
              style={{
                width: 90,
                cursor: 'pointer',
                textDecoration: 'underline',
              }}
            >
              {record.vin}
            </div>
            <div>{record.err_code}</div>
          </>
        );
      },
    },
    {
      title: 'name',
      ellipsis: true,
      dataIndex: 'name',
      render: (_: any, record: Props) => {
        return (
          <div style={{ color: record.type === 'panic' ? 'red' : '' }}></div>
        );
      },
    },
    {
      width: '35%',
      title: 'address',
      ellipsis: true,
      dataIndex: 'address',
    },
  ];

  return (
    <div className={styles.error_table}>
      <Table
        rowKey={'key'}
        columns={columns}
        dataSource={data}
        showHeader={false}
        pagination={false}
        expandable={{
          expandedRowRender: (record) => (
            <div style={{ whiteSpace: 'pre-line' }}>
              <span style={{ fontWeight: 600, fontSize: 15 }}>
                {'故障说明'}:
              </span>
              <br />
              {record.explain}
              <br />
              <span style={{ fontWeight: 600, fontSize: 15 }}>
                {'解决方法'}:
              </span>
              <br />
              {record.fix}
            </div>
          ),
        }}
      ></Table>
    </div>
  );
};

export default ErrForklift;
