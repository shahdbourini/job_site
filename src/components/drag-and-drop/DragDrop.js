import React, { useState, useEffect } from 'react';
import { Col, Row } from 'antd';
import './style-dragDrop.css';

export default function DragDrop(props) {
  var Newtasks = {
    Applied: [],
    Phone: [],
    Interview: [],
    Hired: [],
  };

  var countApplied1 = 0;
  var countPhone2 = 0;
  var countInterview3 = 0;
  var countHired4 = 0;
  const [countApplied, setCountApplied] = useState();
  const [countPhone, setCountPhone] = useState();
  const [countIntreview, setCountInterview] = useState();
  const [countHired, setCountHired] = useState();

  useEffect(() => {
    props.tasks.map((a) => {
      if (a.category === 'Applied') {
        countApplied1 = countApplied1 + 1;
      } else if (a.category === 'Phone') {
        countPhone2 = countPhone2 + 1;
      } else if (a.category === 'Interview') {
        countInterview3 = countInterview3 + 1;
      } else if (a.category === 'Hired') {
        countHired4 = countHired4 + 1;
      }
    });
    setCountApplied(countApplied1);
    setCountPhone(countPhone2);
    setCountInterview(countInterview3);
    setCountHired(countHired4);
  }, [props.tasks]);

  props.tasks.forEach((t) => {
    Newtasks[t.category].push(
      <Row
        gutter={[0, 8]}
        style={{ paddingTop: `14px`, cursor: `pointer` }}
        key={t.id}
        draggable
        onDragStart={(e) => props.onDragStart(e, t.id)}
      >
        <Col
          xs={{ span: 24, offset: 0 }}
          sm={{ span: 24, offset: 0 }}
          md={{ span: 24, offset: 0 }}
          lg={{ span: 24, offset: 0 }}
        >
          <div className="DragDrop-cards">
            <div>
              <div className="DragDrop-cards-title">
                <div className="DragDrop-WhiteBox"></div>
                <span>{t.name}</span>
                <br />
                <p>{t.special}</p>
              </div>
              <div className="DragDrop-CardDetails">
                <span>Interviewer : {t.Interviewer}</span>
                <br />
                <span>Applied date: {t.AppliedDate}</span>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    );
  });

  return (
    <>
      <Row gutter={[0, 8]} style={{ paddingTop: `30px` }}>
        <Col
          xs={{ span: 10, offset: 1 }}
          sm={{ span: 10, offset: 1 }}
          md={{ span: 5, offset: 1 }}
          lg={{ span: 5, offset: 1 }}
          onDragOver={(e) => props.onDragOver(e)}
          onDrop={(e) => props.onDrop(e, 'Applied')}
        >
          <div className="DragDrop-title">
            <div>
              <h5>Applied</h5>
              <div className="DragDrop-BlueBox">{countApplied}</div>
            </div>
          </div>

          {Newtasks.Applied}
        </Col>

        <Col
          xs={{ span: 10, offset: 1 }}
          sm={{ span: 10, offset: 1 }}
          md={{ span: 5, offset: 0 }}
          lg={{ span: 5, offset: 0 }}
          className="DragDrop-col"
          onDragOver={(e) => props.onDragOver(e)}
          onDrop={(e) => props.onDrop(e, 'Phone')}
        >
          <div className="DragDrop-title">
            <div>
              <h5>Phone Screen</h5>
              <div className="DragDrop-BlueBox">{countPhone}</div>
            </div>
          </div>
          {Newtasks.Phone}
        </Col>

        <Col
          xs={{ span: 10, offset: 1 }}
          sm={{ span: 10, offset: 1 }}
          md={{ span: 6, offset: 0 }}
          lg={{ span: 5, offset: 0 }}
          className="DragDrop-col"
          onDragOver={(e) => props.onDragOver(e)}
          onDrop={(e) => props.onDrop(e, 'Interview')}
        >
          <div className="DragDrop-title">
            <div>
              <h5>Interview</h5>
              <div className="DragDrop-BlueBox">{countIntreview}</div>
            </div>
          </div>
          {Newtasks.Interview}
        </Col>

        <Col
          xs={{ span: 10, offset: 1 }}
          sm={{ span: 10, offset: 1 }}
          md={{ span: 5, offset: 0 }}
          lg={{ span: 5, offset: 0 }}
          className="DragDrop-col"
          onDragOver={(e) => props.onDragOver(e)}
          onDrop={(e) => props.onDrop(e, 'Hired')}
        >
          <div className="DragDrop-title">
            <div>
              <h5>Hired</h5>
              <div className="DragDrop-BlueBox">{countHired}</div>
            </div>
          </div>
          {Newtasks.Hired}
        </Col>
      </Row>
    </>
  );
}
