import 'antd/dist/antd.css';
import { Button } from 'antd';
import AddNew from '../AddNew-Popup/AddNew';

function PopUpButton(props) {
  return (
    <>
      <Button
        type="primary"
        style={{
          marginBottom: 16,
          background: `#509EFC 0% 0% no-repeat padding-box`,
          borderRadius: `6px`,
          opacity: `1`,
          float: `right`,
          marginTop: `107px`,
          marginRight: `10%`,
        }}
        onClick={props.showModalAddJob}
      >
        CREATE NEW
      </Button>
      <AddNew
        handleOk={props.handleOkAddJob}
        handleCancel={props.handleCancelAddJob}
        visible={props.visible2}
        title={props.title}
        Name={props.Name}
        selectName={props.selectName}
        SaveSelectLocation={props.SaveSelectLocation}
        jobLocation={props.JobName}
        handleChangeLocation={props.handleChangeLocation}
        SkillName={props.SkillName}
        handleChangeSkills={props.handleChangeSkills}
        SaveSelectSkills={props.SaveSelectSkills}
        handleOkAddSkills={props.handleOkAddSkills}
        handleOkAddCat={props.handleOkAddCat}
        handleChangeCat={props.handleChangeCat}
        CatName={props.CatName}
      />
    </>
  );
}

export default PopUpButton;
