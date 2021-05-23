import { Input, DatePicker, Button, Select, Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import './style-jobBoard.css';

function JobBoardCom(props) {
  const { Option } = Select;
  return (
    <>
      <Row gutter={[0, 8]} style={{ paddingTop: `30px` }}>
        <Col
          xs={{ span: 7, offset: 1 }}
          sm={{ span: 7, offset: 1 }}
          md={{ span: 4, offset: 1 }}
          lg={{ span: 4, offset: 1 }}
        >
          <DatePicker
            placeholder="Show result from"
            className="JobBoard-input"
            onChange={props.onChangeStart}
            selected={props.StartDate}
          />
        </Col>

        <Col
          xs={{ span: 7, offset: 0 }}
          sm={{ span: 7, offset: 0 }}
          md={{ span: 4, offset: 0 }}
          lg={{ span: 4, offset: 0 }}
        >
          <DatePicker
            placeholder="Show result to"
            className="JobBoard-input"
            onChange={props.onChangeEnd}
          />
        </Col>

        <Col
          xs={{ span: 7, offset: 0 }}
          sm={{ span: 7, offset: 0 }}
          md={{ span: 4, offset: 0 }}
          lg={{ span: 4, offset: 0 }}
        >
          <Select
            style={{ width: `95%`, borderRadius: `6px` }}
            className="JobBoard-input"
            placeholder="All Jobs"
            onChange={props.selectResult}
            value={props.job}
          >
            {/* <Option value="All">All</Option> */}
            <Option value="UI/UX Developer">UI/UX Developer</Option>
            <Option value="Computer Engineer">Computer Engineer</Option>
            <Option value="IT">IT</Option>
          </Select>
        </Col>

        <Col
          xs={{ span: 20, offset: 1 }}
          sm={{ span: 11, offset: 1 }}
          md={{ span: 9, offset: 0 }}
          lg={{ span: 10, offset: 0 }}
        >
          <div className="jobBoard">
            <Button onClick={props.applyFilter}>Apply</Button>
            <Button onClick={props.resetFilter}>Reset</Button>
            <Link to="/JobApplications">
              <Button>Table View</Button>
            </Link>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default JobBoardCom;
