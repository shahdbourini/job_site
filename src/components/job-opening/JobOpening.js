import { Input, Col, Row } from 'antd';
import ModallJob from '../job-opening/ModalJob';
import filter from '../../images/filter.png';
import './styleJobOpening.css';
import React, { useState, useEffect } from 'react';

function JobOpening(props) {
  const { Search } = Input;
  const [ModalVisible, setModalVisible] = useState(false);
  const showModal = () => {
    setModalVisible(true);
  };
  const handleOk = () => {
    setModalVisible(false);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };
  return (
    <div className="jopOpenings-body">
      <div className="jopOpenings-header">
        <h3>Job openings</h3>
      </div>

      <Row gutter={[0, 16]}>
        <Col
          xs={{ span: 20, offset: 1 }}
          sm={{ span: 22, offset: 2 }}
          md={{ span: 20, offset: 3 }}
          lg={{ span: 14, offset: 5 }}
        >
          <div className="jopOpenings-title">
            <p>
              <span className="jopOpening-welcome">Welcome!</span> <br />{' '}
              <bold style={{ float: `left` }}>
                We want people to thrive. We believe you do your best work when
                you feel your best.
              </bold>
            </p>
          </div>
        </Col>
        <Col
          xs={{ span: 20, offset: 1 }}
          sm={{ span: 22, offset: 2 }}
          md={{ span: 20, offset: 3 }}
          lg={{ span: 19, offset: 2 }}
        >
          <Search
            placeholder="input search text"
            onSearch={props.onSearch}
            bordered={false}
            style={{
              width: `60%`,
              boxShadow: `0px 3px 30px #00000029`,
              paddingTop: '8px',
              paddingBottom: '7px',
              background: `white`,
              borderRadius: '15px',
              marginBottom: `43px`,
            }}
            className="job-search jobOpenings"
          />

          <div
            style={{
              width: `43px`,
              background: `#509EFC`,
              borderRadius: `10px`,
              cursor: `pointer`,
              display: `inline-block`,
              marginLeft: `2%`,
              height: `41px`,
              marginTop: `4px`,
            }}
            onClick={showModal}
          >
            <img
              src={filter}
              style={{ width: `80%`, paddingTop: `1vh` }}
              alt="icon-filter"
            />
          </div>
        </Col>

        <Col
          xs={{ span: 20, offset: 1 }}
          sm={{ span: 22, offset: 2 }}
          md={{ span: 20, offset: 3 }}
          lg={{ span: 13, offset: 5 }}
        >
          <div className="jobOpenings-result">
            <p>
              <bold className="jobOpenings-jobs">Senior UI/UX Developer</bold>{' '}
              <bold className="jobOpenings-jobs2">
                {' '}
                ,Nablus- Rafidia branch
              </bold>{' '}
              <bold className="jobOpenings-jobs3">Today</bold>
            </p>
          </div>
        </Col>
        <Col
          xs={{ span: 20, offset: 1 }}
          sm={{ span: 22, offset: 2 }}
          md={{ span: 20, offset: 3 }}
          lg={{ span: 13, offset: 5 }}
        >
          <div className="jobOpenings-result">
            <p>
              <bold className="jobOpenings-jobs">Senior UI/UX Developer</bold>{' '}
              <bold className="jobOpenings-jobs2">
                {' '}
                ,Nablus- Rafidia branch
              </bold>{' '}
              <bold className="jobOpenings-jobs3">Today</bold>
            </p>
          </div>
        </Col>
      </Row>

      <ModallJob
        visible={ModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      />
    </div>
  );
}

export default JobOpening;
