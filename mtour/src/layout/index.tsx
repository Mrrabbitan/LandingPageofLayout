import React from "react";
import { Row, Col } from "antd";
import "./index.css";

const FrontPageComponent: React.FC = () => {
  return (
    <>
      <div className="logo">
        <img src="/logo.png" width="330px"></img>
      </div>
      <Row className="oneRow">
        <Col span={2} className="leftBlue"></Col>
        <Col span={2} className="leftBlueSec"></Col>
        <Col span={2} className="middleWhite"></Col>
        <Col span={2} className="rightBlue"></Col>
        {/* <Col span={2} className="orangeLine"></Col> */}
      </Row>
    </>
  );
};
export default FrontPageComponent;
