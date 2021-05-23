import PopUpButton from '../components/buttons/PopUpButton';
import MainDropdown from '../components/main-dropdown/MainDropdown';
import EditableTable from '../components/table/EditableTable';
import Options from '../components/options/Options';
import { Popconfirm, Space } from 'antd';
import edit from '../images/edit.svg';
import deletee from '../images/delete.svg';
import React, { useState, useEffect } from 'react';

function Skills(props) {
  const [countSkill, setCountSkill] = useState(0);
  const [skills, setSkills] = useState();
  const [SkillName, setSkillName] = useState();
  const [resultSkills, setResultSkills] = useState([]);
  const [resultTemp, setResultTemp] = useState([]);
  const [visible2, setVisible2] = useState(false);

  const columns = [
    {
      title: '#',
      dataIndex: 'id',
      width: '5%',
      // editable: true,
    },

    {
      title: 'Categories name',
      dataIndex: 'skills',
    },

    {
      title: 'Skill name',
      dataIndex: 'CategoriesName',
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
            onConfirm={() => handleDeleteSkills(record.key)}
          >
            <img src={deletee} alt="delete" />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  useEffect(() => {
    setResultTemp(resultSkills);
  }, [resultTemp]);

  const handleDeleteSkills = (id) => {
    setResultSkills(resultSkills.filter((item) => item.id !== id));
    setResultSkills(resultTemp.filter((item) => item.id !== id));
  };

  const SaveSelectSkills = (value) => {
    setSkills(value);
  };

  const handleChangeSkills = (event) => {
    setSkillName(event.target.value);
  };

  const handleOkAddSkills = () => {
    const count2 = countSkill + 1;
    setResultSkills((result) => [
      ...result,
      {
        skills: skills,
        CategoriesName: SkillName,
        key: count2,
        id: count2,
      },
    ]);
    setResultTemp(...resultSkills);
    setCountSkill(count2);
    setVisible2(false);
  };
  const showModalAddJob = () => {
    setVisible2(true);
  };

  const handleCancelAddJob = () => {
    setVisible2(false);
  };

  const onChangeS = (value) => {
    const temp = [...resultSkills];
    const results = !value
      ? resultTemp
      : resultTemp.filter((item) =>
          item.skills.toLowerCase().includes(value.toLowerCase())
        );

    if (value === 'all') {
      setResultSkills(resultTemp);
    } else {
      // setInput(value);
      setResultSkills(results);
    }
  };

  return (
    <>
      <Options JobLink="Skills" />
      <PopUpButton
        title="Create Skills"
        selectName="Categories Name"
        Name="Skill Name"
        SkillName={SkillName}
        handleChangeSkills={handleChangeSkills}
        SaveSelectSkills={SaveSelectSkills}
        handleCancelAddJob={handleCancelAddJob}
        showModalAddJob={showModalAddJob}
        visible2={visible2}
        handleOkAddSkills={handleOkAddSkills}
      />
      <MainDropdown onChangeS={onChangeS} />
      <EditableTable
        onChangeS={props.onChangeS}
        result={resultSkills}
        columns={columns}
      />
    </>
  );
}

export default Skills;
