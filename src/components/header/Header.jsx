import React from 'react'
import "./Header.scss"
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
            <div className="parent header-parent">
                <div className="container header-cont">
                    <Link style={{color:"white"}}>Logo</Link>
                    <div className="menu">
                        <Link className={'active'}>Home</Link>
                        <Link >About</Link>
                        <Link>Services</Link>
                        <Link>Projects</Link>
                        <Link>Download</Link>
                        <Link>Contact</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
