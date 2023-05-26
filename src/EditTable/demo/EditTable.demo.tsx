import React, { useState } from 'react';
import { EditTable } from 'wumu-edit-table';
import './demo.css';

export default () => {
  const [editId, onEdit] = useState('0-select');
  const selectData = [
    { value: 'senlin超长文字 看看', label: 'senlin超长文字 ' },
    { value: 'senlin1', label: 'senlin1' },
    { value: 'senlin2', label: 'senlin2' },
    { value: 'senlin1', label: 'senlin1' },
  ];
  const columns = [
    {
      title: '序号',
      dataIndex: 'index',
      width: 60,
      align: 'center',
      fixed: 'left',
    },
    {
      title: '选择',
      dataIndex: 'select',
      width: 200,
      inputType: 'select',
      inputOptions: { selectData },
    },
    { title: '版本号', dataIndex: 'verison', width: 300 },
    { title: '更新日志', dataIndex: 'log', align: 'right', width: 300 },
    { title: '备注', dataIndex: 'remark' },
  ];
  const dataSource = [
    { verison: '0.0.1', log: 'init project', remark: '👊based on dumi v2' },
    { verison: '0.0.2', log: 'add header Render' },
    { verison: '0.0.3', log: 'feat style' },
    { verison: '💥0.1.0', log: 'add changeHandle', remark: '基础功能已经可用' },
    { verison: '0.1.2', log: 'add api docs', remark: '✨新增api文档' },
    {
      verison: '🎊0.1.3',
      log: 'add github pages',
      remark:
        '地址: https://wumusenlin.github.io/wumu-edit-table/components/edit-table',
    },
  ];
  const [list, setList] = useState(
    dataSource.map((x, index) => ({ ...x, index })),
  );

  const addLine = () => {
    setList((preList) => preList.concat([{}]));
  };
  const deleteLine = () => {
    setList((preList) => preList.slice(0, -1));
  };
  const deleteAll = () => {
    setList([]);
  };
  const onChange = (newList: any, options: any) => {
    console.log('options', options);
    setList(newList);
  };
  console.log('editId', editId);
  return (
    <div className="wumu-demo">
      <div style={{ display: 'flex', marginBottom: '16px' }}>
        <button onClick={addLine} type="button" className="wumu-demo-button">
          新增一行到最后
        </button>
        <button onClick={deleteLine} type="button" className="wumu-demo-button">
          删除最后一行
        </button>
        <button onClick={deleteAll} type="button" className="wumu-demo-button">
          删除所有数据
        </button>
      </div>
      <EditTable
        editId={editId}
        onEdit={(id) => {
          console.log('id', id);
          onEdit(id);
        }}
        columns={columns}
        dataSource={list}
        onChange={onChange}
      />
    </div>
  );
};
