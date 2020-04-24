import React from "react";
import "./index.css";

const FrontPageComponent: React.FC = () => {
  return (
    <>
      <div className="logo">
        <img
          className="logo_left"
          alt="momentaLogo"
          src="/logo.png"
          width="190px"
        ></img>
        <img
          className="logo_right"
          alt="momentaLogo_right"
          src="/print.svg"
        ></img>
      </div>
      <div className="oneRow">
        <div className="leftBlue"></div>
        <div className="leftBlueSec">
          <img
            alt="description"
            className="printStyle"
            src="/logo_right.svg"
          ></img>
        </div>
        <div className="middleWhite"></div>
        <div className="rightBlue"></div>
        {/* <Col span={2} className="orangeLine"></Col> */}
      </div>
    </>
  );
};
export default FrontPageComponent;
