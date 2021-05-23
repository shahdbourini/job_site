import EditableTable from '../components/table/EditableTable';
import Buttons from '../components/buttons/Buttons';
import MainDropdown from '../components/main-dropdown/MainDropdown';
import Options from '../components/options/Options';
import { Popconfirm, Space } from 'antd';
import edit from '../images/edit.svg';
import deletee from '../images/delete.svg';
import React, { useState, useEffect } from 'react';

function JobTable(props) {
  const [result, setResult] = useState([]);
  const [dataSource, setDataSource] = useState([
    {
      key: '0',
      id: '0',
      title: '32',
      location: 'London',
      skills: 'skill1',
      CategoriesName: 'test1',
      CatName: 'test1',
      Sdate: '2021-02-23',
      Edate: '2023-02-23',
      status: 'Yes',
    },
    {
      key: '1',
      id: '1',
      title: '33',
      skills: 'skill2',
      CatName: 'test1',
      CategoriesName: 'test2',
      location: 'New York',
      Sdate: '2020-03-23',
      Edate: '2022-02-23',
      status: 'Yes',
    },
    {
      key: '2',
      id: '2',
      title: '34',
      skills: 'skill3',
      CatName: 'test1',
      CategoriesName: 'test3',
      location: 'Nablus',
      Sdate: '2019-02-25',
      Edate: '2019-10-23',
      status: 'No',
    },
    {
      key: '3',
      id: '3',
      title: '35',
      skills: 'skill4',
      CatName: 'test1',
      CategoriesName: 'test4',
      location: 'London',
      Sdate: '2021-02-23',
      Edate: '2023-02-23',
      status: 'Yes',
    },
    {
      key: '4',
      id: '4',
      title: '36',
      skills: 'skill5',
      CatName: 'test1',
      CategoriesName: 'test5',
      location: 'Palestine',
      Sdate: '2020-06-23',
      Edate: '2020-12-23',
      status: 'No',
    },
  ]);
  const columns = [
    {
      title: '#',
      dataIndex: 'id',
      width: '5%',
      // editable: true,
    },

    {
      title: 'Job Location',
      dataIndex: 'location',
    },

    {
      title: 'Start Date',
      dataIndex: 'Sdate',
    },

    {
      title: 'End Date',
      dataIndex: 'Edate',
    },

    {
      title: 'Status',
      dataIndex: 'status',
    },

    {
      title: '',
      dataIndex: 'operation',
      width: '20%',
      render: (_, record) => (
        <Space size="large" style={{ cursor: 'pointer', paddingLeft: `63px` }}>
          <img src={edit} alt="edit" />
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => props.handleDelete(record.key)}
          >
            <img src={deletee} alt="delete" />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  useEffect(() => {
    setResult(dataSource);
  }, []);

  const handleDelete = (id) => {
    const dataSource2 = [...result];
    setResult(dataSource2.filter((item) => item.id !== id));
  };

  const onChangeS = (value) => {
    console.log(value);
    const results = !value
      ? dataSource
      : dataSource.filter(
          (item) =>
            item.location.toLowerCase().includes(value.toLowerCase()) ||
            item.skills.toLowerCase().includes(value.toLowerCase()) ||
            item.CatName.toLowerCase().includes(value.toLowerCase())
        );

    if (value === 'all') {
      setResult(dataSource);
    } else {
      setResult(results);
    }
    console.log(results);
    console.log(result);
  };

  return (
    <>
      <Options jobTitleT="Job Title" />
      <Buttons />
      <MainDropdown onChangeS={onChangeS} />
      <EditableTable
        jobTitle="title"
        dataSource={dataSource}
        result={result}
        handleDelete={handleDelete}
        columns={columns}
      />
    </>
  );
}

export default JobTable;
