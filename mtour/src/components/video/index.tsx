import React from "react";
import ReactPlayer from "react-player";
import { Row, Col } from "antd";
import "./index.css";
const VideoComponentFromPage: React.FC = () => {
  return (
    <div className="videoTask">
      <Row>
        <Col span={24}>
          <ReactPlayer
            url="lidar.mp4"
            controls={true}
            width={"100%"}
            height={"100%"}
            // playing={true}
          ></ReactPlayer>
        </Col>
      </Row>
    </div>
  );
};

export default VideoComponentFromPage;
