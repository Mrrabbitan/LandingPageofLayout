import React from 'react'
import './index.css'
import ClaButtonComponents from '../clabutton/button'
const ClaRingComponentEng: React.FC = () => {
  const exchangUrlDataCollect = () => {
    if (window.location.pathname === '/mpilot-parking/') {
      return 'http://ultron.momenta.works/rec_data/trigger_info#'
    } else {
      return 'https://msd-test.momenta.works/FilterTask/FilterBagMonitor'
    }
  }

  const exchangeUrlStore = () => {
    console.log(window.location.pathname)
    if (window.location.pathname === '/mpilot-parking/') {
      return 'https://cla-mpilot-parking.momenta.works/#/list/cla'
    } else {
      return 'https://cla-msquare.momenta.works/#/list/cla'
    }
  }

  const exchangeUrlTest = () => {
    if (window.location.pathname === '/mpilot-parking/') {
      return 'https://benchmark.momenta.works/parking/batch/list'
    } else {
      return 'https://benchmark.momenta.works/msb/module/fusion/'
    }
  }
  return (
    <div className="totalEng">
      {/* 数据采集 */}
      <div className="dataCollectionEng btn_all">
        <ClaButtonComponents url={exchangUrlDataCollect()} imgurl={'/button.gif'}></ClaButtonComponents>
      </div>
      {/* 数据回流 */}
      <div className="dataStorageEng btn_all">
        <ClaButtonComponents url={'https://milkyway.momenta.works/#/home/dataCollection'} imgurl={'/button.gif'}></ClaButtonComponents>
      </div>
      {/* 数据分析 */}
      <div className="milkyWayEng btn_all">
        <ClaButtonComponents url={exchangeUrlStore()} imgurl={'/button.gif'}></ClaButtonComponents>
      </div>
      {/* 数据标注 */}
      <div className="DataAnotationEng btn_all">
        <ClaButtonComponents url={'#/video'} imgurl={'/reverseButton.gif'}></ClaButtonComponents>
      </div>
      {/* <div className="ModleTrainingEng btn_all">
        <ClaButtonComponents
          url={"https://cla-msquare.momenta.works/#/list/cla"}
          imgurl={"/reverseButton.gif"}
        ></ClaButtonComponents>
      </div> */}
      {/* 测试验证 */}
      <div className="TestViladationEng btn_all">
        <ClaButtonComponents url={exchangeUrlTest()} imgurl={'/button.gif'}></ClaButtonComponents>
      </div>
      <div className="innerEng">
        <img className="inner_imgEng" alt="cla_eve_loop_eng" src="/eng_inner.png" height="460px" width="460px"></img>
      </div>
      <div className="outerEng">
        <img className="outer_imgEng" alt="cla_eve_loop_eng" src="/eng_outer.png" height="600px" width="790px"></img>
      </div>
    </div>
  )
}

export default ClaRingComponentEng
