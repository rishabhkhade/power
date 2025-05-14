import React from "react";
import "./Indicator.scss";

function Indicator({ text, bg, bgline, textcolor }) {
  return (
    <div>
      <div class="section-indicator">
        <div class="line" style={{ background: bg }}></div>
        <span style={{color:textcolor}}>{text}</span>
      </div>
    </div>
  );
}

export default Indicator;
