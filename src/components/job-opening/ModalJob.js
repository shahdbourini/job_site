import { Input, Modal, Select, Col, Row, DatePicker } from 'antd';

function ModalJob(props) {
  const { Option } = Select;
  const { Search } = Input;
  function onChange(date, dateString) {
    console.log(date, dateString);
  }
  return (
    <>
      <Modal
        title="Filter By"
        visible={props.visible}
        onOk={props.onOk}
        onCancel={props.onCancel}
      >
        <Row gutter={[0, 16]}>
          <Col
            xs={{ span: 7, offset: 1 }}
            sm={{ span: 6, offset: 1 }}
            md={{ span: 7, offset: 1 }}
            lg={{ span: 7, offset: 1 }}
          >
            {/* <Input type="text " placeholder="Show result from" /> */}
            <DatePicker
              placeholder="Show result from"
              onChange={props.onChangeStart}
            />
          </Col>

          <Col
            xs={{ span: 7, offset: 1 }}
            sm={{ span: 6, offset: 1 }}
            md={{ span: 7, offset: 1 }}
            lg={{ span: 7, offset: 1 }}
          >
            <Select
              style={{
                width: `100%`,
              }}
              placeholder="All locations "
              onChange={props.onChangeLocation}
            >
              <Option value="all">All</Option>
              <Option value="New York">New York</Option>
              <Option value="London">London</Option>
              <Option value="Palestine">Palestine</Option>
              <Option value="Nablus">Nablus</Option>
            </Select>
          </Col>

          <Col
            xs={{ span: 7, offset: 1 }}
            sm={{ span: 6, offset: 1 }}
            md={{ span: 7, offset: 1 }}
            lg={{ span: 7, offset: 1 }}
          >
            <Select
              showSearch
              style={{
                width: `100%`,
              }}
              placeholder="All job "
              optionFilterProp="children"
              onChange={props.onChangeS}
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value="all">All</Option>
              <Option value="New York">yes</Option>
              <Option value="London">no</Option>
            </Select>
          </Col>
        </Row>
      </Modal>
    </>
  );
}

export default ModalJob;
