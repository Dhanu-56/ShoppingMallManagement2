import React from 'react';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import Home from './HomeComponent/Home';
import Navbar from './NavbarComponent/Navbar';
import ProductApp from './ProductAppComponent/ProductAppComponent';
import ProductAppComponent  from  './ProductAppComponent/ProductAppComponent';
import './App.css';


function App () {
    return (
        <Router>
            <div>
                <Navbar />
                <div className="container">
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/products" element={<ProductAppComponent/>} />
                    </Routes>
            </div>
            </div>
        </Router>
    );
};

export default App;
