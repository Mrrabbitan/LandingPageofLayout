import React from "react";
import { Row, Col } from "antd";
import style from "./index.less";

const FrontPageComponent: React.FC = () => {
  return (
    <>
      <Row>
        <Col className={style.leftBlue}></Col>
        <Col className={style.leftBlueSec}></Col>
        <Col className={style.middleWhite}></Col>
        <Col className={style.rightBlue}></Col>
      </Row>
    </>
  );
};
export default FrontPageComponent;
