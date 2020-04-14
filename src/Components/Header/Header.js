import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className = "textPosition">
            <h2 className="title">Doctor's portal</h2>
            <div className="headerLinks">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="#service">Dental Service</a>
                <a href="#review">Reviews</a>
                <a href="#blog">Blog</a>
                <a href="#contact">Contact Us</a>
            </div>
        </div>
    );
};

export default Header;