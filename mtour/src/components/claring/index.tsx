import React from 'react'
import './index.css'
import ClaButtonComponents from '../clabutton/button'
const ClaRingComponent: React.FC = () => {
  const exchangUrlDataCollect = () => {
    if (window.location.pathname === '/mpilot-parking/') {
      return 'http://ultron.momenta.works/dashboard/'
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
    <div className="total">
      {/* 数据采集 */}
      <div className="dataCollection btn_all">
        <ClaButtonComponents url={exchangUrlDataCollect()} imgurl={'/button.gif'}></ClaButtonComponents>
      </div>
      {/* 数据回流 */}
      <div className="dataStorage btn_all">
        <ClaButtonComponents url={'https://milkyway.momenta.works/#/home/dataCollection'} imgurl={'/button.gif'}></ClaButtonComponents>
      </div>
      {/* 数据分析 */}
      <div className="milkyWay btn_all">
        <ClaButtonComponents url={exchangeUrlStore()} imgurl={'/button.gif'}></ClaButtonComponents>
      </div>
      {/* 数据标注 */}
      <div className="DataAnotation btn_all">
        <ClaButtonComponents url={'#/video'} imgurl={'/reverseButton.gif'}></ClaButtonComponents>
      </div>
      {/* <div className="ModleTrainingEng btn_all">
        <ClaButtonComponents
          url={"https://cla-msquare.momenta.works/#/list/cla"}
          imgurl={"/reverseButton.gif"}
        ></ClaButtonComponents>
      </div> */}
      {/* 测试验证 */}
      <div className="TestViladation btn_all">
        <ClaButtonComponents url={exchangeUrlTest()} imgurl={'/button.gif'}></ClaButtonComponents>
      </div>
      <div className="inner">
        <img className="inner_img" alt="cla_eve_loop_chi" src="/chiinner.png" height="460px" width="460px"></img>
      </div>
      <div className="outer">
        <img className="outer_img" alt="cla_eve_loop_chi" src="/chi_outer.png" height="620px" width="660px"></img>
      </div>
    </div>
  )
}

export default ClaRingComponent
