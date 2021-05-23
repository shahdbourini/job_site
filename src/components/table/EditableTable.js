import React, { useContext, useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Table, Input, Popconfirm, Space, Select } from 'antd';
import './style-table.css';
import edit from '../../images/edit.svg';
import deletee from '../../images/delete.svg';
import { Link } from 'react-router-dom';
import Modall from '../Modal/Modall';

function EditableTable(props) {
  // console.log(props.ModalVisible);
  // useEffect(() => {
  //   setResult(dataSource);
  // }, []);

  // const {
  //   jobTitleT,
  //   jobTitle,
  //   jobLocation,
  //   jobLocationT,
  //   skills,
  //   skillsT,
  //   CategoriesNameT,
  //   CategoriesName,
  //   startDate,
  //   endDate,
  //   startDateT,
  //   endDateT,
  //   statusT,
  //   statuss,
  //   num,
  // } = props;

  // const columns = [
  //   {
  //     title: '#',
  //     dataIndex: 'id',
  //     width: '5%',
  //     // editable: true,
  //   },
  //   {
  //     title: jobTitleT,
  //     dataIndex: jobTitle,
  //   },
  //   {
  //     title: skillsT,
  //     dataIndex: skills,
  //   },
  //   {
  //     title: CategoriesNameT,
  //     dataIndex: CategoriesName,
  //   },
  //   {
  //     title: jobLocationT,
  //     dataIndex: jobLocation,
  //   },
  //   {
  //     title: startDateT,
  //     dataIndex: startDate,
  //   },
  //   {
  //     title: endDateT,
  //     dataIndex: endDate,
  //   },
  //   {
  //     title: statusT,
  //     dataIndex: statuss,
  //   },
  //   {
  //     title: '',
  //     dataIndex: 'operation',
  //     width: '20%',
  //     render: (_, record) => (
  //       <Space size="large" style={{ cursor: 'pointer', paddingLeft: `63px` }}>
  //         <img src={edit} alt="edit" />
  //         <Popconfirm
  //           title="Sure to delete?"
  //           onConfirm={() => props.handleDelete(record.key)}
  //         >
  //           <img src={deletee} alt="delete" />
  //         </Popconfirm>
  //       </Space>
  //     ),
  //   },
  // ];

  return (
    <>
      <Modall
        visible={props.ModalVisible}
        onOk={props.handleOk}
        onCancel={props.handleCancel}
        onChangeStatus={props.onChangeStatus}
        onChangeLocation={props.onChangeLocation}
        onChangeJob={props.onChangeJob}
        onChangeStart={props.onChangeStart}
        onChangeEnd={props.onChangeEnd}
      />

      <Table
        rowClassName={() => 'editable-row'}
        dataSource={props.result}
        columns={props.columns}
      />
    </>
  );
}

export default EditableTable;
