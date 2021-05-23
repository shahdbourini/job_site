import { Form, Input, Button } from 'antd';
import './style-jobApply.css';

function ApplyForm(props) {
  const layout = {
    labelCol: {
      lg: { span: 2, offset: 3 },
      md: { span: 3, offset: 3 },
      sm: { span: 3, offset: 3 },
      xs: { span: 4, offset: 1 },
    },
    wrapperCol: {
      lg: { span: 16, offset: 0 },
      md: { span: 14, offset: 0 },
      sm: { span: 13, offset: 1 },
      xs: { span: 7, offset: 1 },
    },
  };

  return (
    <>
      <Form
        {...layout}
        name="nest-messages"
        style={{
          paddingTop: `57px`,
        }}
      >
        <Form.Item name={['user', 'name']} label="Full Name:">
          <Input className="ApplyForm-input" />
        </Form.Item>
        <Form.Item name={['user', 'birth']} label="Date of birth:">
          <Input className="ApplyForm-input" />
        </Form.Item>
        <Form.Item name={['user', 'location']} label="Location:">
          <Input className="ApplyForm-input" />
        </Form.Item>
        <Form.Item name={['user', 'cv']} label="Upload CV:">
          <Input className="ApplyForm-input" />
        </Form.Item>
        <Form.Item name={['user', 'info']} label="More info:">
          <Input.TextArea rows={4} className="ApplyForm-input" />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            lg: { span: 10, offset: 8 },
            md: { span: 10, offset: 8 },
            sm: { span: 10, offset: 8 },
            xs: { span: 5, offset: 2 },
          }}
        >
          <Button type="primary" htmlType="submit" className="ApplyForm-submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
// wrapperCol={{ ...layout.wrapperCol, offset: 10 }}

export default ApplyForm;
