import React from "react";
import logo from "../../assets/img/logo.png"
import './Navbar.css'

export default function Navbar(){
    return(
        <nav className="navbar">
            <img src={logo}  />
            <h3>HACK-X</h3>
            <div className="nav-menu">
                <ul>
                    <li>Events</li>
                    <li>|</li>
                    <li>Team</li>
                    <li>Events</li>
                    <li>Achievements</li>
                    <li>About us</li>
                </ul>
            </div>
        </nav>
    )
}
