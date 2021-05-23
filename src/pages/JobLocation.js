import EditableTable from '../components/table/EditableTable';
import PopUpButton from '../components/buttons/PopUpButton';
import MainDropdown from '../components/main-dropdown/MainDropdown';
import Options from '../components/options/Options';
import { Popconfirm, Space } from 'antd';
import edit from '../images/edit.svg';
import deletee from '../images/delete.svg';
import React, { useState, useEffect } from 'react';

function JobLocation(props) {
  const [countLocation, setCountLocation] = useState(0);
  const [location, setLocation] = useState();
  const [jobLocation, setJobLocation] = useState();
  const [jobName, setJobName] = useState('');
  const [resultLocationTable, setResultLocationTable] = useState([]);
  const [resultTempLocation, setResultTempLocation] = useState([]);
  const [visible2, setVisible2] = useState(false);

  const columns = [
    {
      title: '#',
      dataIndex: 'id',
      width: '5%',
      // editable: true,
    },

    {
      title: 'Name',
      dataIndex: 'title',
    },

    {
      title: 'Location',
      dataIndex: 'location',
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
            onConfirm={() => handleDeleteLocations(record.key)}
          >
            <img src={deletee} alt="delete" />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  useEffect(() => {
    setResultTempLocation(resultLocationTable);
  }, [resultTempLocation]);

  const onChangeLocation = (value) => {
    setLocation(value);
  };
  const handleDeleteLocations = (id) => {
    const dataSource2 = [...resultLocationTable];
    setResultLocationTable(dataSource2.filter((item) => item.id !== id));
    setResultTempLocation(dataSource2.filter((item) => item.id !== id));
  };

  const SaveSelectLocation = (value) => {
    setJobLocation(value);
  };

  const handleChangeLocation = (event) => {
    setJobName(event.target.value);
  };

  const handleOkAddJob = () => {
    const count2 = countLocation + 1;
    setResultLocationTable((result) => [
      ...result,
      {
        title: jobName,
        location: jobLocation,
        key: count2,
        id: count2,
      },
    ]);
    setResultTempLocation(...resultLocationTable);
    setCountLocation(count2);
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
      ? resultTempLocation
      : resultTempLocation.filter((item) =>
          item.location.toLowerCase().includes(value.toLowerCase())
        );

    if (value === 'all') {
      setResultLocationTable(resultTempLocation);
    } else {
      // setInput(value);
      setResultLocationTable(results);
    }
  };
  return (
    <>
      <Options JobLink="Job Locations" />
      <PopUpButton
        title="Locations"
        Name="Job location name"
        selectName="Country"
        SaveSelectLocation={SaveSelectLocation}
        jobLocation={jobName}
        handleChangeLocation={handleChangeLocation}
        handleOkAddJob={handleOkAddJob}
        handleCancelAddJob={handleCancelAddJob}
        showModalAddJob={showModalAddJob}
        visible2={visible2}
      />
      <MainDropdown onChangeS={onChangeS} />
      <EditableTable result={resultLocationTable} columns={columns} />
    </>
  );
}

export default JobLocation;
