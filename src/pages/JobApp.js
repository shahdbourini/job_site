import EditableTable from '../components/table/EditableTable';
import Options from '../components/options/Options';
import SearchFilter from '../components/search-filter/SearchFilter';
import Buttons from '../components/buttons/Buttons';
import React, { useState, useEffect } from 'react';
import { Popconfirm, Space } from 'antd';
import edit from '../images/edit.svg';
import deletee from '../images/delete.svg';

function JobApp(props) {
  var results = '';
  const [result, setResult] = useState([
    {
      key: '0',
      id: '0',
      job: 'Computer Engineer',
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
      job: 'Building Engineer',
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
      job: 'UI/UX Designer',
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
      job: 'Civil Engineer',
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
      job: 'Electrical Engineer',
      skills: 'skill5',
      CatName: 'test1',
      CategoriesName: 'test5',
      location: 'Palestine',
      Sdate: '2020-06-23',
      Edate: '2020-12-23',
      status: 'No',
    },
  ]);
  const [ModalVisible, setModalVisible] = useState(false);
  const [status, setStatus] = useState();
  const [job, setJob] = useState();
  const [location, setLocation] = useState();
  const [StartDate, setStartDate] = useState();
  const [EndDate, setEndDate] = useState();
  const [resultTemp, setResultTemp] = useState([]);

  function onChangeStart(date, dateString) {
    setStartDate(dateString);
  }

  function onChangeEnd(date, dateString) {
    setEndDate(dateString);
  }
  function onChangeLocation(newValue) {
    setLocation(newValue);
  }

  useEffect(() => {
    setResultTemp(result);
  }, [resultTemp]);
  const onChangeStatus = (value) => {
    setStatus(value);
  };

  const onChangeJob = (value) => {
    setJob(value);
  };

  const handleDelete = (id) => {
    const dataSource2 = [...result];
    setResult(dataSource2.filter((item) => item.id !== id));
  };

  const onSearch = (value) => {
    const result = !value
      ? resultTemp
      : resultTemp.filter(
          (item) =>
            item.location.toLowerCase().includes(value.toLocaleLowerCase()) ||
            item.job.toLowerCase().includes(value.toLocaleLowerCase()) ||
            item.status.toLowerCase().includes(value.toLocaleLowerCase()) ||
            item.job.toLowerCase().includes(value.toLocaleLowerCase())
        );
    setResult(result);
  };

  const showModal = () => {
    setModalVisible(true);
  };
  /*2020-03-23  2022-02-23*/
  const handleOk = () => {
    if (!StartDate && !EndDate && !location && !job && !status) {
      results = result;
    } else if (!StartDate && !EndDate && location && !job && !status) {
      results = resultTemp.filter((item) =>
        item.location.toLowerCase().includes(location.toLowerCase())
      );
    } else if (!StartDate && EndDate && !location && !job && !status) {
      results = resultTemp.filter((item) => item.Edate <= EndDate);
    } else if (StartDate && !EndDate && !location && !job && !status) {
      results = resultTemp.filter((item) => item.Sdate >= StartDate);
    } else if (StartDate && EndDate && !location && !job && !status) {
      results = resultTemp.filter(
        (item) => item.Sdate > StartDate && item.Edate <= EndDate
      );
    } else if (!StartDate && !EndDate && location && job && !status) {
      results = resultTemp.filter(
        (item) =>
          item.location.toLowerCase().includes(location.toLowerCase()) &&
          item.job.toLowerCase().includes(job.toLowerCase())
      );
    } else if (!StartDate && EndDate && !location && job && !status) {
      results = resultTemp.filter(
        (item) =>
          item.Edate <= EndDate &&
          item.job.toLowerCase().includes(job.toLowerCase())
      );
    } else if (StartDate && !EndDate && !location && job && !status) {
      results = resultTemp.filter(
        (item) =>
          item.Sdate >= StartDate &&
          item.job.toLowerCase().includes(job.toLowerCase())
      );
    } else if (StartDate && EndDate && !location && job && !status) {
      results = resultTemp.filter(
        (item) =>
          item.Sdate >= StartDate &&
          item.Edate <= EndDate &&
          item.job.toLowerCase().includes(job.toLowerCase())
      );
    } else if (!StartDate && !EndDate && !location && job && !status) {
      results = resultTemp.filter((item) =>
        item.job.toLowerCase().includes(job.toLowerCase())
      );
    } else if (!StartDate && !EndDate && !location && !job && status) {
      results = resultTemp.filter((item) =>
        item.status.toLowerCase().includes(status.toLowerCase())
      );
    } else if (!StartDate && !EndDate && !location && job && status) {
      results = resultTemp.filter(
        (item) =>
          item.job.toLowerCase().includes(job.toLowerCase()) &&
          item.status.toLowerCase().includes(status.toLowerCase())
      );
    } else if (!StartDate && !EndDate && location && !job && status) {
      results = resultTemp.filter(
        (item) =>
          item.status.toLowerCase().includes(status.toLowerCase()) &&
          item.location.toLowerCase().includes(location.toLowerCase())
      );
    } else if (!StartDate && !EndDate && location && job && status) {
      results = resultTemp.filter(
        (item) =>
          item.job.toLowerCase().includes(job.toLowerCase()) &&
          item.status.toLowerCase().includes(status.toLowerCase()) &&
          item.location.toLowerCase().includes(location.toLowerCase())
      );
    } else if (!StartDate && EndDate && !location && !job && status) {
      results = resultTemp.filter(
        (item) =>
          item.status.toLowerCase().includes(status.toLowerCase()) &&
          item.Edate <= EndDate
      );
    } else if (!StartDate && EndDate && location && !job && status) {
      results = resultTemp.filter(
        (item) =>
          item.location.toLowerCase().includes(location.toLowerCase()) &&
          item.status.toLowerCase().includes(status.toLowerCase()) &&
          item.Edate <= EndDate
      );
    } else if (!StartDate && EndDate && !location && !job && status) {
      results = resultTemp.filter(
        (item) =>
          item.status.toLowerCase().includes(status.toLowerCase()) &&
          item.Edate <= EndDate
      );
    } else if (!StartDate && EndDate && !location && job && status) {
      results = resultTemp.filter(
        (item) =>
          item.job.toLowerCase().includes(job.toLowerCase()) &&
          item.status.toLowerCase().includes(status.toLowerCase()) &&
          item.Edate <= EndDate
      );
    } else if (StartDate && !EndDate && !location && !job && status) {
      results = resultTemp.filter(
        (item) =>
          item.status.toLowerCase().includes(status.toLowerCase()) &&
          item.Sdate >= StartDate
      );
    } else if (StartDate && !EndDate && location && job && status) {
      results = resultTemp.filter(
        (item) =>
          item.job.toLowerCase().includes(job.toLowerCase()) &&
          item.status.toLowerCase().includes(status.toLowerCase()) &&
          item.location.toLowerCase().includes(location.toLowerCase()) &&
          item.Sdate >= StartDate
      );
    } else if (StartDate && !EndDate && !location && !job && status) {
      results = resultTemp.filter(
        (item) =>
          item.status.toLowerCase().includes(status.toLowerCase()) &&
          item.Sdate >= StartDate
      );
    } else if (StartDate && !EndDate && !location && job && status) {
      results = resultTemp.filter(
        (item) =>
          item.status.toLowerCase().includes(status.toLowerCase()) &&
          item.job.toLowerCase().includes(job.toLowerCase()) &&
          item.Sdate >= StartDate
      );
    } else if (!StartDate && EndDate && location && job && status) {
      results = resultTemp.filter(
        (item) =>
          item.status.toLowerCase().includes(status.toLowerCase()) &&
          item.job.toLowerCase().includes(job.toLowerCase()) &&
          item.location.toLowerCase().includes(location.toLowerCase()) &&
          item.Edate <= EndDate
      );
    } else {
      results = resultTemp.filter(
        (item) =>
          item.Sdate >= StartDate &&
          item.Edate <= EndDate &&
          item.location.toLowerCase().includes(location.toLowerCase()) &&
          item.job.toLowerCase().includes(job.toLowerCase()) &&
          item.status.toLowerCase().includes(status.toLowerCase())
      );
    }
    setResult(results);
    setModalVisible(false);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };
  const columns = [
    {
      title: '#',
      dataIndex: 'id',
      width: '5%',
      // editable: true,
    },

    {
      title: 'Job Title',
      dataIndex: 'job',
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
            onConfirm={() => handleDelete(record.key)}
          >
            <img src={deletee} alt="delete" />
          </Popconfirm>
        </Space>
      ),
    },
  ];
  return (
    <>
      <Options JobLink="Job applications" />
      <Buttons />
      <div
        style={{
          paddingTop: `107px`,
          marginRight: `20%`,
          marginBottom: `56px`,
        }}
      >
        <SearchFilter onSearch={onSearch} showModal={showModal} />
      </div>
      <EditableTable
        result={result}
        handleOk={handleOk}
        handleCancel={handleCancel}
        ModalVisible={ModalVisible}
        onChangeStatus={onChangeStatus}
        onChangeLocation={onChangeLocation}
        onChangeStart={onChangeStart}
        onChangeEnd={onChangeEnd}
        onChangeJob={onChangeJob}
        handleDelete={handleDelete}
        columns={columns}
      />
    </>
  );
}

export default JobApp;
