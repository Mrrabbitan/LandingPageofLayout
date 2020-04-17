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
          imgurl={"/button.gif"}
        ></ClaButtonComponents>
      </div>
      <div className="dataStorageEng btn_all">
        <ClaButtonComponents
          url={"https://milkyway.momenta.works/#/home/dataCollection"}
          imgurl={"/button.gif"}
        ></ClaButtonComponents>
      </div>
      <div className="milkyWayEng btn_all">
        <ClaButtonComponents
          url={"https://cla-msquare.momenta.works/#/list/cla"}
          imgurl={"/button.gif"}
        ></ClaButtonComponents>
      </div>
      <div className="DataAnotationEng btn_all">
        <ClaButtonComponents
          url={"#/video"}
          imgurl={"/reverseButton.gif"}
        ></ClaButtonComponents>
      </div>
      {/* <div className="ModleTrainingEng btn_all">
        <ClaButtonComponents
          url={"https://cla-msquare.momenta.works/#/list/cla"}
          imgurl={"/reverseButton.gif"}
        ></ClaButtonComponents>
      </div> */}
      <div className="TestViladationEng btn_all">
        <ClaButtonComponents
          url={"https://benchmark.momenta.works/msb/module/fusion/"}
          imgurl={"/button.gif"}
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
