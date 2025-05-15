import React from 'react'
import "./Header.scss"
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
            <div className="parent header-parent">
                <div className="container header-cont">
                    <Link style={{ color: "white" }}>Logo</Link>
                    <div className="menu">
                        <Link to="/">Home</Link>
                        <Link to="/about" >About</Link>
                        <Link to="/services">Services</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/download">Download</Link>
                        <Link to="/contact">Contact</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
