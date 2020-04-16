import React from "react";
import "./index.css";
import ClaButtonComponents from "../clabutton/button";
const ClaRingComponent: React.FC = () => {
  return (
    <div className="total">
      {/* <div className="ringInside"></div> */}
      <div className="dataCollection btn_all">
        <ClaButtonComponents
          url={"https://msd-test.momenta.works/FilterTask/FilterBagMonitor"}
        ></ClaButtonComponents>
      </div>
      <div className="dataStorage btn_all">
        <ClaButtonComponents
          url={"https://milkyway.momenta.works/#/home/dataCollection"}
        ></ClaButtonComponents>
      </div>
      <div className="milkyWay btn_all">
        <ClaButtonComponents
          url={"https://cla-msquare.momenta.works/#/list/cla"}
        ></ClaButtonComponents>
      </div>
      <div className="inner">
        <img
          alt="cla_eve_loop_chi"
          src="/chiinner.png"
          height="550px"
          width="550px"
        ></img>
      </div>
      <div className="outer">
        <img
          alt="cla_eve_loop_chi"
          src="/chi_outer.png"
          height="720px"
          width="750px"
        ></img>
      </div>
    </div>
  );
};

export default ClaRingComponent;
