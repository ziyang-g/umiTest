import { Button, Modal,Tabs,Space, Table,Tag,DatePicker,Image} from 'antd';
import React, { useState } from 'react';
import type { ColumnsType } from 'antd/es/table';
import moment from 'moment';
import 'moment/locale/zh-cn';
import locale from 'antd/es/locale/zh_CN';
import styles from './index.less';


const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const columns: ColumnsType<DataType> = [
    {
      title: '巡防日期',
      dataIndex: 'date',
      key: 'date',
    //   render: text => <a>{text}</a>,
    },
    {
      title: '巡防内容',
      dataIndex: 'content',
      key: 'content',
    }, 
    {
      title: '巡防类型',
      key: 'tags',
      dataIndex: 'tags',
      render: (_, { tags }) => (
        <>
          {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: '巡防图片',
      key: 'picture',
      render: (_, record) => (
        <Space size={10}>
                  <Image
                      width={30} style={{ marginRight: '10px' }}
                      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                  />
                  <Image
                      width={30}
                      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                  />
                  <Image
                      width={30}
                      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                  />
        </Space>
      ),
    },
  ];
  
  const data: DataType[] = [
    {
      key: '1',
      date: '2015-01-01 18:05:06',
      content: '内容1内容2内容3内容4内容5',
      tags: ['nice111'],
    },
    {


      key: '2',
      date: '2015-01-01 18:05:06',
      content: '内容1内容2内容3内容4内容5',
      tags: ['loser'],
    },
    {
      key: '3',
      date: '2015-01-01 18:05:06',
      content: '内容1内容2内容3内容4内容5',
      tags: ['cool'],
    },
  ];
  

  interface DataType {
    key: string;
    date: string;
    content: string;
    tags: string[];
  }

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal width={800} bodyStyle={{padding:'0px',borderRadius:'5px',border:'1px solid #0b457a'}}
      open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null}>
              <Tabs defaultActiveKey="1" className={styles.tabs}>
                  <Tabs.TabPane tab="巡防记录" key="1" >
                    <Table columns={columns} dataSource={data} />
                  </Tabs.TabPane>
                  <Tabs.TabPane tab="人物分析" key="2">
                    <Table columns={columns} dataSource={data} />
                  </Tabs.TabPane>
              </Tabs>
      </Modal>
    </>
  );
};

export default App;