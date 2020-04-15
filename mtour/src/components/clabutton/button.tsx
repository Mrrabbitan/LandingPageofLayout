import React from "react";
import { Button } from "antd";

interface buttonparams {
  url: string;
}

const ClaButtonComponents: React.FC<buttonparams> = (props) => {
  const { url } = props;
  return (
    <>
      <a href={url}>
        <img src="/button.png" height="64px"></img>
      </a>
    </>
  );
};

export default ClaButtonComponents;
