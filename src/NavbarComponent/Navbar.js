import React from 'react';
import { Link } from 'react-router-dom'; 

function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">Home
               
            </div>
            <ul className="nav-links">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/products" className="nav-link">Products</Link>
                </li>
                <li className="nav-item">
                    <Link to="/about" className="nav-link">About</Link>
                </li>
                <li className="nav-item">
                    <Link to="/contact" className="nav-link">Contact</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
