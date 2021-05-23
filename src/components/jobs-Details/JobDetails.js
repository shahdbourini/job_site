import { Col, Row } from 'antd';
import ApplyForm from '../job-apply-form/ApplyForm';
import './style-JobDetails.css';

function JobDetails(props) {
  return (
    <div className="jopOpenings-body">
      <div className="jopOpenings-header">
        <h3>Senior UI/UX Developer </h3>
      </div>
      <Row gutter={[0, 8]} style={{ paddingTop: `110px` }}>
        <Col
          xs={{ span: 20, offset: 1 }}
          sm={{ span: 22, offset: 2 }}
          md={{ span: 20, offset: 3 }}
          lg={{ span: 14, offset: 5 }}
        >
          <div className="jopDetails-disc">
            <h3>Job description</h3>
          </div>
        </Col>

        <Col
          xs={{ span: 20, offset: 1 }}
          sm={{ span: 22, offset: 2 }}
          md={{ span: 20, offset: 3 }}
          lg={{ span: 14, offset: 5 }}
        >
          <div className="jopDetails-disc">
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem
            </p>
          </div>
        </Col>

        <Col
          xs={{ span: 20, offset: 1 }}
          sm={{ span: 22, offset: 2 }}
          md={{ span: 20, offset: 3 }}
          lg={{ span: 14, offset: 5 }}
        >
          <div className="jopDetails-disc">
            <p>
              <bold className="jobDetails-title">Location :</bold> Nablus,
              Rafidia Tour 9th floor
            </p>
          </div>
        </Col>
        <Col
          xs={{ span: 20, offset: 1 }}
          sm={{ span: 22, offset: 2 }}
          md={{ span: 20, offset: 3 }}
          lg={{ span: 14, offset: 5 }}
        >
          <div className="jopDetails-disc">
            <p>
              <bold className="jobDetails-title">Due Date :</bold> 27-12-2021
            </p>
          </div>
        </Col>
      </Row>
      <ApplyForm />
    </div>
  );
}

export default JobDetails;
