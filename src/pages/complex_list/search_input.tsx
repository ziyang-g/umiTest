import React from 'react';
import { Input, Checkbox } from 'antd';
import styles from './search_input.module.less';

interface Props {
  onSearch: (newValue: any) => void;
  onSelectType: (newValue: string) => void;
  selectType: string;
  defaultValue: string;
}

const SearchInput: React.FC<Props> = (props) => {
  const onSearchChange = (v: any) => {
    props.onSearch(v);
  };

  const checkChange = (e: boolean) => {
    return e ? props.onSelectType('forklift') : props.onSelectType('battery');
  };

  return (
    <div className={styles.search}>
      <Input.Group>
        <Checkbox
          checked={props.selectType === 'forklift'}
          onChange={(e) => {
            checkChange(e.target.checked);
          }}
        >
          {'车辆'}
        </Checkbox>
        <Checkbox
          checked={props.selectType === 'battery'}
          onChange={(e) => {
            checkChange(!e.target.checked);
          }}
        >
          {'电池'}
        </Checkbox>
        <Input.Search
          size={'small'}
          placeholder={'请输入搜索内容'}
          style={{ width: '20rem' }}
          onPressEnter={onSearchChange}
          onSearch={onSearchChange}
          defaultValue={props.defaultValue}
        ></Input.Search>
        <div></div>
      </Input.Group>
    </div>
  );
};

export default SearchInput;
