import React, { useEffect, useState } from 'react';
import './Navbar.css'
import { Link, useLocation } from 'react-router-dom';
import { Button } from 'bootstrap';

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
                <Link onClick={() => handleClick("link1")} className={`navbar-brand px-1 ${activeLink === "link1" ? "active" : ""}`} to="/" >InfoMaster</Link>

                <div className="container-fluid px-0 ">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li style={{ marginLeft: "-15px" }} className="nav-item">
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
                    <button style={{ marginRight: "8.5%", fontWeight: 'bolder' }} className='btn btn-secondary btn-md'>Add Student</button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;