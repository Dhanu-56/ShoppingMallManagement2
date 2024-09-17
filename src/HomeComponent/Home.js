import React from 'react';
import { Link } from 'react-router-dom';

const Home= () => {
    return (
        <div className="home-container">
            <h1 className="home-title">Welcome to the Product Management</h1>
            <p className="home-subtitle">Manage your products efficiently and effortlessly.</p>
            <Link to="/products">
                <button className="home-button">Get Started</button>
            </Link>
        </div>
    );
};

export default Home;
