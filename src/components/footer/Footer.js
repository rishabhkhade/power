import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import { RiArrowRightSLine } from "react-icons/ri";
import { FiPhone } from "react-icons/fi";
import { FaRegEnvelope } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";

function Footer() {
  return (
    <>
      <div className="parent footer-parent">
        <div className="container footer-cont">

          <div className="foot-col foot-col1">
            <a className="foot-logo" style={{ color: "white" }}>logo</a>
            <p>Emppyreal Renewables & Power Pvt. Ltd. is an all verticals renewable energy EPC company established in 2017.
            </p>
          </div>
          <div className="foot-col foot-col2">
            <h4 className="foot-header">Important Links</h4>
            <div className="foot-links">
              <a>
                <span><RiArrowRightSLine /></span>
                About
              </a>
              <a>
                <span><RiArrowRightSLine /></span>
                About
              </a>
              <a>
                <span><RiArrowRightSLine /></span>
                About
              </a>
              <a>
                <span><RiArrowRightSLine /></span>
                About
              </a>
            </div>
          </div>
          <div className="foot-col foot-col3">
            <h4 className="foot-header">Other Links</h4>
            <div className="foot-links">
              <a>
                <span><RiArrowRightSLine /></span>
                About
              </a>
              <a>
                <span><RiArrowRightSLine /></span>
                About
              </a>
              <a>
                <span><RiArrowRightSLine /></span>
                About
              </a>
              <a>
                <span><RiArrowRightSLine /></span>
                About
              </a>
            </div>
          </div>
          <div className="foot-col foot-col4">
            <h4 className="foot-header">Contacts</h4>
            <div className="foot-links">
              <a>
                <span><FiPhone /></span>
                +91 80108 94591
              </a>
              <a>
                <span><FaRegEnvelope /></span>
                info@erpower.com
              </a>
              <a>
                <span><CiLocationOn /></span>
                Plot No 39A, 5th floor, Siddhivinayak Homes, Lakadganj, Nagpur- 440 008
              </a>
            </div>
          </div>
        </div>
        <div className="container foot2">
          © ER Power 2024
        </div>
      </div>
    </>
  );
}

export default Footer;
