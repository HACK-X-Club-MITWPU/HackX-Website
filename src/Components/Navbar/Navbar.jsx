import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import './Navbar.css';
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function Navbar() {
    const routePath = useLocation();
    const [navShow, setNavShow] = useState(false);
    const handleClick = () => setNavShow(!navShow);
    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <img src={logo} className="navbar__logo__img" alt="hack-x-logo-png" />
                <h3 className="navbar__logo__h3">HACK-X</h3>
            </div>
            <div className="toggle-button">
                <button onClick={handleClick}>
                    {navShow ? <CloseIcon /> : <MenuIcon />}
                </button>
            </div>
            <ul className={`nav-menu ${!navShow && "hide"}`}>
                <li className="nav-links">{routePath.pathname[1].toUpperCase() + routePath.pathname.slice(2)}</li>
                <li>|</li>
                <li className="nav-links"><Link to="/team">Team</Link></li>
                <li className="nav-links"><Link to="/events">Events</Link></li>
                <li className="nav-links"><Link to="/">Achievments</Link></li>
                <li className="nav-links"><Link to="/about">About us</Link></li>
            </ul>
        </nav>
    )
}
