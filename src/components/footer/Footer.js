import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import { RiArrowRightSLine } from "react-icons/ri";

function Footer() {
  return (
    <>
      <div className="parent footer-parent">
        <div className="container footer-cont">
          <div className="logo">
            <h2>logo</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam ut
              est vel saepe, nam quas nihil repellendus a laborum repudiandae.
            </p>
          </div>
          <div className="imp-links">
            <h3>Important Links</h3>
            <div class="nav-menu">
              <Link class="about">
                <span>
                  <RiArrowRightSLine />
                </span>
                <Link>About</Link>
              </Link>

              <Link class="about">
                <span>
                  <RiArrowRightSLine />
                </span>
                <Link>About</Link>
              </Link>

              <Link class="about">
                <span>
                  <RiArrowRightSLine />
                </span>
                <Link>About</Link>
              </Link>

              <Link class="about">
                <span>
                  <RiArrowRightSLine />
                </span>
                <Link>About</Link>
              </Link>
            </div>
          </div>
          <div className="other-links"></div>
          <div className="contact"></div>
        </div>
      </div>
    </>
  );
}

export default Footer;
