import EditableTable from '../components/table/EditableTable';
import Buttons from '../components/buttons/Buttons';
import MainDropdown from '../components/main-dropdown/MainDropdown';
import Options from '../components/options/Options';
import PopUpButton from '../components/buttons/PopUpButton';
import { Popconfirm, Space } from 'antd';
import edit from '../images/edit.svg';
import deletee from '../images/delete.svg';
import React, { useState, useEffect } from 'react';

function JobCat(props) {
  const [countCat, setCountCat] = useState(0);
  const [resultCatTable, setResultCatTable] = useState([]);
  const [resultTemp, setResultTemp] = useState([]);
  const [CatName, setCatName] = useState('');
  const [visible2, setVisible2] = useState(false);

  const columns = [
    {
      title: '#',
      dataIndex: 'id',
      width: '5%',
      // editable: true,
    },

    {
      title: 'Categories Name',
      dataIndex: 'CatName',
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
            onConfirm={() => handleDeleteCat(record.key)}
          >
            <img src={deletee} alt="delete" />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  useEffect(() => {
    setResultTemp(resultCatTable);
  }, [resultTemp]);

  const handleDeleteCat = (id) => {
    setResultCatTable(resultCatTable.filter((item) => item.id !== id));
    setResultCatTable(resultTemp.filter((item) => item.id !== id));
  };

  const handleChangeCat = (event) => {
    setCatName(event.target.value);
  };

  const handleOkAddCat = () => {
    const count2 = countCat + 1;
    setResultCatTable((result) => [
      ...result,
      {
        CatName: CatName,
        key: count2,
        id: count2,
      },
    ]);
    setResultTemp(...resultCatTable);
    setCountCat(count2);
    // console.log(count);
    setVisible2(false);
  };

  const showModalAddJob = () => {
    setVisible2(true);
  };

  const handleCancelAddJob = () => {
    setVisible2(false);
  };

  const onChangeS = (value) => {
    const results = !value
      ? resultTemp
      : resultTemp.filter((item) =>
          item.CatName.toLowerCase().includes(value.toLowerCase())
        );

    if (value === 'all') {
      setResultCatTable(resultTemp);
    } else {
      // setInput(value);
      setResultCatTable(results);
    }
  };
  return (
    <>
      <Options JobLink="Job categories" />
      <PopUpButton
        title="Create new categories"
        Name="Categories name"
        handleCancelAddJob={handleCancelAddJob}
        showModalAddJob={showModalAddJob}
        visible2={visible2}
        handleOkAddCat={handleOkAddCat}
        handleChangeCat={handleChangeCat}
        CatName={props.CatName}
      />
      <MainDropdown onChangeS={onChangeS} />
      <EditableTable result={resultCatTable} columns={columns} />
    </>
  );
}

export default JobCat;
