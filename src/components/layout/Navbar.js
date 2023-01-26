import React, { useEffect, useState } from 'react';
import './Navbar.css'
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [activeLink, setActiveLink] = useState(null);
    const location = useLocation();

    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location]);

    const handleClick = link => {
        setActiveLink(link);
    };

    return (
        <div className='navbar1'>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary " >
                <div className="container-fluid">
                    <Link onClick={() => handleClick("link1")} className={`navbar-brand ${activeLink === "link1" ? "active" : ""}`} to="/" >InfoMaster</Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link onClick={() => handleClick("link1")} className={`nav-link ${activeLink === '/' ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link onClick={() => handleClick("link2")} className={`nav-link ${activeLink === '/about' ? "active" : ""}`} to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link onClick={() => handleClick("link3")} className={`nav-link ${activeLink === '/contact' ? "active" : ""}`} to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;