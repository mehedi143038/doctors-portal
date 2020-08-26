import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className = "textPosition">
            <nav className="navbar justify-content-end navbar-expand-lg navbar-light bg-light">
                <div className="headerLinks">
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="#service">Dental Service</a>
                    <a href="#review">Reviews</a>
                    <a href="#blog">Blog</a>
                    <a href="#contact">Contact Us</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;