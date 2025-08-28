import React from 'react'
import "./Header.scss"
import { Link, NavLink } from 'react-router-dom'
import logo from "../../assets/download.svg"

function Header() {
    return (
        <>
              <div className="parent header-parent">
                <div className="container header-cont">
                    <NavLink className='logo-icon' to="/">
                        <img src={logo} alt="" />
                        <p>Er Power</p>
                    </NavLink>
                    <div className="menu">
                        <NavLink to="/" end>Home</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/services">Services</NavLink>
                        <NavLink to="/projects">Projects</NavLink>
                        <NavLink to="/download">Download</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
