import { QuestionCircleOutlined } from '@ant-design/icons';
import {
  PageContainer,
  ProColumns,
  ProTable,
  TableDropdown,
} from '@ant-design/pro-components';
import { Tooltip } from 'antd';
import { useRef, useState } from 'react';
import SearchInput from './search_input';
import styles from './index.module.less';
// import { useNavigate } from 'react-router-dom';

export type TableListItem = {
  key: number;
  name: string;
  containers: number;
  creator: string;
  status: string;
  createdAt: number;
  memo: string;
};

const Complexlist = () => {
  const ref = useRef<any>();
  // let history: { location: { state: { dis: string; vin: string } } } = useNavigate();
  const [selectType, setSelectType] = useState<any>();
  const [key, setKey] = useState<any>();
  const onSearch = (e: any) => {
    if (e.key === 'Enter') {
      // e = e.target.value.trim().replace(/\s+/g, '');
    } else {
      // e = e.trim().replace(/\s+/g, '');
    }
    ref.current.reloadAndRest();
    setKey(e);
  };

  const valueEnum: any = {
    0: 'close',
    1: 'running',
    2: 'online',
    3: 'error',
  };

  const tableListDataSource: TableListItem[] = [];

  const creators = ['付小小', '曲丽丽', '林东东', '陈帅帅', '兼某某'];

  for (let i = 0; i < 40; i += 1) {
    tableListDataSource.push({
      key: i,
      name: 'AppName',
      containers: Math.floor(Math.random() * 100),
      creator: creators[Math.floor(Math.random() * creators.length)],
      status: valueEnum[Math.floor(Math.random() * 10) % 4],
      createdAt: Date.now() - Math.floor(Math.random() * 100000),
      memo:
        i % 2 === 1
          ? '很长很长很长很长很长很长很长的文字要展示但是要留下尾巴'
          : '简短备注文案',
    });
  }

  const columns: ProColumns<TableListItem>[] = [
    {
      title: '应用名称',
      width: 80,
      dataIndex: 'name',
      render: (_) => <a>{_}</a>,
    },
    {
      title: '容器数量',
      dataIndex: 'containers',
      align: 'right',
      sorter: (a, b) => a.containers - b.containers,
    },
    {
      title: '状态',
      width: 80,
      dataIndex: 'status',
      initialValue: 'all',
      valueEnum: {
        all: { text: '全部', status: 'Default' },
        close: { text: '关闭', status: 'Default' },
        running: { text: '运行中', status: 'Processing' },
        online: { text: '已上线', status: 'Success' },
        error: { text: '异常', status: 'Error' },
      },
    },
    {
      title: '创建者',
      width: 80,
      dataIndex: 'creator',
      valueEnum: {
        all: { text: '全部' },
        付小小: { text: '付小小' },
        曲丽丽: { text: '曲丽丽' },
        林东东: { text: '林东东' },
        陈帅帅: { text: '陈帅帅' },
        兼某某: { text: '兼某某' },
      },
    },
    {
      title: (
        <>
          创建时间
          <Tooltip placement="top" title="这是一段描述">
            <QuestionCircleOutlined style={{ marginInlineStart: 4 }} />
          </Tooltip>
        </>
      ),
      width: 140,
      key: 'since',
      dataIndex: 'createdAt',
      valueType: 'date',
      sorter: (a, b) => a.createdAt - b.createdAt,
    },
    {
      title: '备注',
      dataIndex: 'memo',
      ellipsis: true,
      copyable: true,
    },
    {
      title: '操作',
      width: 180,
      key: 'option',
      valueType: 'option',
      render: () => [
        <a key="link">链路</a>,
        <a key="link2">报警</a>,
        <a key="link3">监控</a>,
        <TableDropdown
          key="actionGroup"
          menus={[
            { key: 'copy', name: '复制' },
            { key: 'delete', name: '删除' },
          ]}
        />,
      ],
    },
  ];

  return (
    <PageContainer title={false} style={{ background: '#DEE3E7' }}>
      <div className={styles.main}>
        <SearchInput
          onSearch={onSearch}
          onSelectType={setSelectType}
          selectType={selectType}
          defaultValue={key}
        />
        <ProTable<TableListItem>
          scroll={{ x: 1000, y: 'calc(100vh - 283px)' }}
          columns={columns}
          request={(params, sorter, filter) => {
            // 表单搜索项会从 params 传入，传递给后端接口。
            console.log(params, sorter, filter);
            return Promise.resolve({
              data: tableListDataSource,
              success: true,
            });
          }}
          rowKey="key"
          pagination={{
            showQuickJumper: true,
          }}
          search={false}
          dateFormatter="string"
        />
      </div>
    </PageContainer>
  );
};

export default Complexlist;
