import type { ProFormInstance } from '@ant-design/pro-components';
import {
  ProForm,
  ProFormCascader,
  ProFormDatePicker,
  ProFormDateRangePicker,
  ProFormDigit,
  ProFormList,
  ProFormMoney,
  ProFormSelect,
  ProFormText,
  ProFormTreeSelect,
} from '@ant-design/pro-components';
import { message, TreeSelect } from 'antd';
import moment from 'moment';
import { useRef } from 'react';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const treeData = [
  {
    title: 'Node1',
    value: '0-0',
    key: '0-0',
    children: [
      {
        title: 'Child Node1',
        value: '0-0-0',
        key: '0-0-0',
      },
    ],
  },
  {
    title: 'Node2',
    value: '0-1',
    key: '0-1',
    children: [
      {
        title: 'Child Node3',
        value: '0-1-0',
        key: '0-1-0',
      },
      {
        title: 'Child Node4',
        value: '0-1-1',
        key: '0-1-1',
      },
      {
        title: 'Child Node5',
        value: '0-1-2',
        key: '0-1-2',
      },
    ],
  },
];

export default () => {
  const formRef = useRef<
    ProFormInstance<{
      name: string;
      company?: string;
      useMode?: string;
    }>
  >();
  return (
    <ProForm<{
      name: string;
      company?: string;
      useMode?: string;
    }>
      onFinish={async (values) => {
        await waitTime(2000);
        console.log(values);
        const val1 = await formRef.current?.validateFields();
        console.log('validateFields:', val1);
        const val2 = await formRef.current?.validateFieldsReturnFormatValue?.();
        console.log('validateFieldsReturnFormatValue:', val2);
        message.success('ζδΊ€ζε');
      }}
      formRef={formRef}
      params={{ id: '100' }}
      formKey="base-form-use-demo"
      dateFormatter={(value, valueType) => {
        console.log('---->', value, valueType);
        return value.format('YYYY/MM/DD HH:mm:ss');
      }}
      request={async () => {
        await waitTime(100);
        return {
          name: 'θθθ?Ύθ?‘ζιε¬εΈ',
          useMode: 'chapter',
        };
      }}
      autoFocusFirstInput
    >
      <ProForm.Group>
        <ProFormText
          width="md"
          name="name"
          required
          dependencies={[['contract', 'name']]}
          addonBefore={<a>ε?’ζ·εη§°εΊθ―₯ζδΉθ·εΎοΌ</a>}
          addonAfter={<a>ηΉε»ζ₯ηζ΄ε€</a>}
          label="η­ΎηΊ¦ε?’ζ·εη§°"
          tooltip="ζιΏδΈΊ 24 δ½"
          placeholder="θ―·θΎε₯εη§°"
          rules={[{ required: true, message: 'θΏζ―εΏε‘«ι‘Ή' }]}
        />
        <ProFormText width="md" name="company" label="ζζΉε¬εΈεη§°" placeholder="θ―·θΎε₯εη§°" />
      </ProForm.Group>
      <ProForm.Group>
        <ProFormDigit name="count" label="δΊΊζ°" width="lg" />
      </ProForm.Group>
      <ProForm.Group>
        <ProFormText
          name={['contract', 'name']}
          width="md"
          label="εεεη§°"
          placeholder="θ―·θΎε₯εη§°"
        />
        <ProFormDateRangePicker width="md" name={['contract', 'createTime']} label="εεηζζΆι΄" />
      </ProForm.Group>
      <ProForm.Group>
        <ProFormSelect
          options={[
            {
              value: 'chapter',
              label: 'ηη« εηζ',
            },
          ]}
          readonly
          width="xs"
          cacheForSwr
          name="useMode"
          label="εεηΊ¦ε?ηζζΉεΌ"
        />
        <ProFormSelect.SearchSelect
          width="xs"
          options={[
            {
              value: 'time',
              label: 'ε±₯θ‘ε?η»ζ­’',
              type: 'time',
              options: [
                {
                  value: 'time1',
                  label: 'ε±₯θ‘ε?η»ζ­’1',
                },
                {
                  value: 'time2',
                  label: 'ε±₯θ‘ε?η»ζ­’2',
                },
              ],
            },
          ]}
          name="unusedMode"
          label="εεηΊ¦ε?ε€±ζζΉεΌ"
        />
        <ProFormMoney
          width="md"
          name="money"
          label="εεηΊ¦ε?ιι’"
          fieldProps={{
            numberPopoverRender: true,
          }}
        />
      </ProForm.Group>
      <ProFormText width="sm" name="id" label="δΈ»εεηΌε·" />
      <ProFormText name="project" width="md" disabled label="ι‘Ήη?εη§°" initialValue="xxxxι‘Ήη?" />
      <ProFormText width="xs" name="mangerName" disabled label="εε‘η»η" initialValue="ε―ι" />
      <ProFormCascader
        width="md"
        request={async () => [
          {
            value: 'zhejiang',
            label: 'ζ΅ζ±',
            children: [
              {
                value: 'hangzhou',
                label: 'ζ­ε·',
                children: [
                  {
                    value: 'xihu',
                    label: 'θ₯ΏζΉ',
                  },
                ],
              },
            ],
          },
          {
            value: 'jiangsu',
            label: 'Jiangsu',
            children: [
              {
                value: 'nanjing',
                label: 'Nanjing',
                children: [
                  {
                    value: 'zhonghuamen',
                    label: 'Zhong Hua Men',
                  },
                ],
              },
            ],
          },
        ]}
        name="areaList"
        label="εΊε"
        initialValue={['zhejiang', 'hangzhou', 'xihu']}
        addonAfter={'qixian'}
      />
      <ProFormTreeSelect
        initialValue={['0-0-0']}
        label="ζ ε½’δΈζιζ©ε¨"
        width={600}
        request={async () => treeData}
        fieldProps={{
          fieldNames: {
            label: 'title',
          },
          treeCheckable: true,
          showCheckedStrategy: TreeSelect.SHOW_PARENT,
          placeholder: 'Please select',
        }}
      />
      <ProFormDatePicker
        name="date"
        transform={(value) => {
          return {
            date: moment(value).unix(),
          };
        }}
      />
      <ProFormList name="datas" initialValue={[{ date: '2022-10-12 10:00:00' }]}>
        {() => {
          return (
            <ProFormDatePicker
              name="date"
              transform={(value) => {
                return {
                  date: moment(value).unix(),
                };
              }}
            />
          );
        }}
      </ProFormList>
    </ProForm>
  );
};