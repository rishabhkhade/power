import React from "react";
import "./PageTop.scss";

const PageTop = ({ text, subText }) => {
  return (
    <>
      <div className="pagetop-parent bg-img-cover">
        <div className="pagetop-cont">
          <h2>
            {text}
            <span>{subText}</span>
          </h2>
        </div>
      </div>
    </>
  );
};

export default PageTop;
