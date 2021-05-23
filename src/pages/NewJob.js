import { Col, Row, Input, Select } from 'antd';
import './style.css';
const { TextArea } = Input;
const { Option } = Select;
function NewJob(props) {
  return (
    <div className="newJob-body">
      <div className="container">
        <div className="newJob-title">
          <h3>Create New Job</h3>
        </div>

        <Row className="newJob-titleRow">
          <Col
            xs={{ span: 18, offset: 5 }}
            sm={{ span: 9, offset: 5 }}
            md={{ span: 10, offset: 5 }}
            lg={{ span: 2, offset: 1 }}
          >
            <span className="newJob-leftSpan">Job Title</span>
          </Col>

          <Col
            xs={{ span: 18, offset: 5 }}
            sm={{ span: 9, offset: 5 }}
            md={{ span: 10, offset: 5 }}
            lg={{ span: 20, offset: 0 }}
          >
            <Input type="text" className="newJob-rightInput" />
          </Col>
        </Row>

        <Row className="newJob-titleRow">
          <Col
            xs={{ span: 18, offset: 5 }}
            sm={{ span: 9, offset: 5 }}
            md={{ span: 10, offset: 5 }}
            lg={{ span: 4, offset: 1 }}
          >
            <span className="newJob-leftSpan">Job Description</span>
          </Col>

          <Col
            xs={{ span: 18, offset: 5 }}
            sm={{ span: 9, offset: 5 }}
            md={{ span: 10, offset: 5 }}
            lg={{ span: 22, offset: 1 }}
          >
            <TextArea
              rows={10}
              style={{ boxShadow: '0px 3px 30px #00000029' }}
            />
          </Col>
        </Row>

        <Row className="newJob-titleRow">
          <Col
            xs={{ span: 18, offset: 5 }}
            sm={{ span: 9, offset: 5 }}
            md={{ span: 10, offset: 5 }}
            lg={{ span: 4, offset: 1 }}
          >
            <span className="newJob-leftSpan">Job Requirement</span>
          </Col>

          <Col
            xs={{ span: 18, offset: 5 }}
            sm={{ span: 9, offset: 5 }}
            md={{ span: 10, offset: 5 }}
            lg={{ span: 22, offset: 1 }}
          >
            <TextArea
              rows={10}
              style={{ boxShadow: '0px 3px 30px #00000029' }}
            />
          </Col>
        </Row>

        <Row className="newJob-titleRow">
          <Col
            xs={{ span: 18, offset: 5 }}
            sm={{ span: 9, offset: 5 }}
            md={{ span: 10, offset: 5 }}
            lg={{ span: 4, offset: 1 }}
          >
            <span className="newJob-leftSpan">Job locations</span>
          </Col>

          <Col
            xs={{ span: 18, offset: 5 }}
            sm={{ span: 9, offset: 5 }}
            md={{ span: 10, offset: 5 }}
            lg={{ span: 18, offset: 0 }}
          >
            <Select
              showSearch
              style={{ width: `100%`, boxShadow: '0px 3px 30px #00000029' }}
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value="jack">topic1</Option>
              <Option value="lucy">topic2</Option>
              <Option value="tom">topic3</Option>
            </Select>
          </Col>
        </Row>

        <Row className="newJob-titleRow">
          <Col
            xs={{ span: 18, offset: 5 }}
            sm={{ span: 9, offset: 5 }}
            md={{ span: 10, offset: 5 }}
            lg={{ span: 4, offset: 1 }}
          >
            <span className="newJob-leftSpan">Job categories</span>
          </Col>

          <Col
            xs={{ span: 18, offset: 5 }}
            sm={{ span: 9, offset: 5 }}
            md={{ span: 10, offset: 5 }}
            lg={{ span: 18, offset: 0 }}
          >
            <Select
              showSearch
              style={{
                width: `100%`,
                boxShadow: '0px 3px 30px #00000029',
                backgroundColor: `#F9FAFD`,
              }}
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value="jack">topic1</Option>
              <Option value="lucy">topic2</Option>
              <Option value="tom">topic3</Option>
            </Select>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default NewJob;
