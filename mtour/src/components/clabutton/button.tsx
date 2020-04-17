import React from "react";

interface buttonparams {
  url?: string;
  imgurl?: string;
}

const ClaButtonComponents: React.FC<buttonparams> = (props) => {
  const { url, imgurl } = props;
  return (
    <>
      <a href={url}>
        <img alt="switch_language" src={imgurl} height="64px"></img>
      </a>
    </>
  );
};

export default ClaButtonComponents;
