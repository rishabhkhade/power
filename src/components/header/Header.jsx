import React, { useState } from "react";
import "./Header.scss";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/download.svg";
import Hamburger from "hamburger-react";

function Header() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="parent header-parent">
        <div className="container header-cont">
          <NavLink className="logo-icon" to="/">
            <img src={logo} alt="" />
            <p>Er Power</p>
          </NavLink>
          <div className="menu">
            <NavLink to="/" end>
              Home
            </NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/download">Download</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
          <div class="hamburger">
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
        </div>

        <div class={isOpen ? "mob_nav_section active" : "mob_nav_section"}>
          <div className="menu">
            <NavLink to="/" end onClick={()=>setOpen(false)}  >
              Home
            </NavLink>
            <NavLink to="/about"  onClick={()=>setOpen(false)} >About</NavLink>
            <NavLink to="/services" onClick={()=>setOpen(false)} >Services</NavLink>
            <NavLink to="/projects" onClick={()=>setOpen(false)} >Projects</NavLink>
            <NavLink to="/download" onClick={()=>setOpen(false)} >Download</NavLink>
            <NavLink to="/contact" onClick={()=>setOpen(false)} >Contact</NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
