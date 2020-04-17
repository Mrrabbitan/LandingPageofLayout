import React from "react";
import "./index.css";

const FrontPageComponent: React.FC = () => {
  return (
    <>
      <div className="logo">
        <img alt="momentaLogo" src="/logo.png" width="330px"></img>
      </div>
      <div className="oneRow">
        <div className="leftBlue"></div>
        <div className="leftBlueSec"></div>
        <div className="middleWhite"></div>
        <div className="rightBlue"></div>
        {/* <Col span={2} className="orangeLine"></Col> */}
      </div>
    </>
  );
};
export default FrontPageComponent;
