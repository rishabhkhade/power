import React from "react";
import "./QuoteSection.scss";
import logo from "../../assets/logo_power.png"

const QuoteSection = () => {
  return (
    <section className="quote-section">
      <div className="quote-container">
        <div className="logo"> 
          <img src={logo} alt="er power logo" />
        </div>
        <p className="quote">
          “Once you got a solar panel on a roof, energy is free”
        </p>
      </div>
    </section>
  );
};

export default QuoteSection;
