import React, { useState } from "react";
import { Switch } from "antd";
import "./index.css";
const ReactButtonComponet: React.FC = () => {
  let language = window.location.hash !== "#/en" ? false : true;
  // const [lan, setLan] = useState<string>(language);

  const [checked, setChecked] = useState<boolean>(language);

  const clickToChange = () => {
    if (window.location.hash !== "#/en") {
      window.location.hash = "#/en";
      // language = "Switch to Chinese";
      setChecked(true);
      // setLan(language);
    } else {
      window.location.hash = "#/zh";
      // language = "切换至英文";
      setChecked(false);
      // setLan(language);
    }
  };
  // useEffect(() => {}, [lan]);
  return (
    <div className="buttonToChange">
      {/* <Button
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
      </Button> */}
      <Switch
        checkedChildren="转为中文"
        unCheckedChildren="English"
        onClick={clickToChange}
        checked={checked}
      ></Switch>
    </div>
  );
};

export default ReactButtonComponet;
