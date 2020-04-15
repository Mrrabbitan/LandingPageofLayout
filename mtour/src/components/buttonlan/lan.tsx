import React, { useEffect, useState } from "react";
import { Button } from "antd";
import "./index.css";
const ReactButtonComponet: React.FC = () => {
  let language =
    window.location.hash !== "#/en" ? "切换至英文" : "Switch to Chinese";
  const [lan, setLan] = useState<string>(language);

  const clickToChange = () => {
    if (window.location.hash !== "#/en") {
      window.location.hash = "#/en";
      language = "Switch to Chinese";
      setLan(language);
    } else {
      window.location.hash = "#/zh";
      language = "切换至英文";
      setLan(language);
    }
  };
  useEffect(() => {}, [lan]);
  return (
    <div className="buttonToChange">
      <Button
        type="primary"
        size="large"
        style={{
          textAlign: "right",
          width: "170px",
          height: "30px",
          border: "none",
          color: "#0068e8",
          fontWeight: "bold",
          fontSize: "16px",
          cursor: "pointer",
          outline: "none",
          background: "white",
        }}
        onClick={clickToChange}
        ghost
      >
        {lan}
      </Button>
    </div>
  );
};

export default ReactButtonComponet;
