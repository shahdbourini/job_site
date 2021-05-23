import { Modal, Select, Button, Input } from 'antd';
import { useState } from 'react';
import './style-addNew.css';
import { useLocation } from 'react-router-dom';

function AddNew(props) {
  const { Option } = Select;
  const location = useLocation();
  return (
    <>
      {location.pathname === '/Skills' && (
        <Modal
          visible={props.visible}
          title={props.title}
          onOk={props.handleOkAddSkills}
          onCancel={props.handleCancel}
          width="330px"
          footer={[
            <Button key="back" onClick={props.handleCancel}>
              Close
            </Button>,
            <Button
              key="submit"
              type="primary"
              onClick={props.handleOkAddSkills}
            >
              Add
            </Button>,
          ]}
        >
          <Select
            className="AddNew-Popup"
            showSearch
            style={{
              width: `80%`,
              marginLeft: `13%`,
            }}
            placeholder={props.selectName}
            onChange={props.SaveSelectSkills}
          >
            <Option value="skill1">skill1</Option>
            <Option value="skill2">skill2</Option>
            <Option value="skill3">skill3</Option>
            <Option value="skill4">skill4</Option>
          </Select>

          <Input
            className="AddNew-Input"
            type="text"
            placeholder={props.Name}
            value={props.SkillName}
            onChange={props.handleChangeSkills}
            style={{ marginTop: '22px', width: `80%`, marginLeft: `13%` }}
          />
        </Modal>
      )}

      {location.pathname === '/JobLocations' && (
        <Modal
          visible={props.visible}
          title={props.title}
          onOk={props.handleOkAddSkills}
          onCancel={props.handleCancel}
          width="330px"
          footer={[
            <Button key="back" onClick={props.handleCancel}>
              Close
            </Button>,
            <Button key="submit" type="primary" onClick={props.handleOk}>
              Add
            </Button>,
          ]}
        >
          <Select
            className="AddNew-Popup"
            showSearch
            style={{
              width: `80%`,
              marginLeft: `13%`,
            }}
            placeholder={props.selectName}
            onChange={props.SaveSelectLocation}
          >
            <Option value="New York">New York</Option>
            <Option value="London">London</Option>
            <Option value="Palestine">Palestine</Option>
            <Option value="Nablus">Nablus</Option>
          </Select>
          <Input
            className="AddNew-Input"
            type="text"
            placeholder={props.Name}
            value={props.jobName}
            onChange={props.handleChangeLocation}
            style={{ marginTop: '22px', width: `80%`, marginLeft: `13%` }}
          />
        </Modal>
      )}

      {location.pathname === '/JobCategories' && (
        <Modal
          visible={props.visible}
          title={props.title}
          onOk={props.handleOkAddSkills}
          onCancel={props.handleCancel}
          width="330px"
          footer={[
            <Button key="back" onClick={props.handleCancel}>
              Close
            </Button>,
            <Button key="submit" type="primary" onClick={props.handleOkAddCat}>
              Add
            </Button>,
          ]}
        >
          <Input
            className="AddNew-Input"
            type="text"
            placeholder={props.Name}
            value={props.CatName}
            onChange={props.handleChangeCat}
            style={{ width: `80%`, marginLeft: `13%` }}
          />
        </Modal>
      )}
    </>
  );
}

export default AddNew;
