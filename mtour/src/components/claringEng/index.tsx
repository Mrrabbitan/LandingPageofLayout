import React from "react";
import "./index.css";
import ClaButtonComponents from "../clabutton/button";
const ClaRingComponentEng: React.FC = () => {
  return (
    <div className="totalEng">
      {/* <div className="ringInside"></div> */}
      <div className="dataCollectionEng btn_all">
        <ClaButtonComponents
          url={"https://msd-test.momenta.works/FilterTask/FilterBagMonitor"}
        ></ClaButtonComponents>
      </div>
      <div className="dataStorageEng btn_all">
        <ClaButtonComponents
          url={"https://cla-msd-od.momenta.works/#/list/odBag"}
        ></ClaButtonComponents>
      </div>
      <div className="milkyWayEng btn_all">
        <ClaButtonComponents
          url={"https://milkyway.momenta.works/#/home/dataCollection"}
        ></ClaButtonComponents>
      </div>
      <div className="innerEng">
        <img
          alt="cla_eve_loop_eng"
          src="/eng_inner.png"
          height="550px"
          width="550px"
        ></img>
      </div>
      <div className="outerEng">
        <img
          alt="cla_eve_loop_eng"
          src="/eng_outer.png"
          height="720px"
          width="950px"
        ></img>
      </div>
    </div>
  );
};

export default ClaRingComponentEng;
