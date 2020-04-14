import React from 'react';
import './Homepage.css';
import { Link } from 'react-router-dom';

const Homepage = () => {
    return (
        <div>
            <div className="container">
                <h2>Your New Smile</h2>
                <h2>Starts Here</h2>
                <Link to="/appointment">
                    <button className="btn btn-primary">GET APPOINTMENT</button>
                </Link>
            </div>
        </div>
    );
};

export default Homepage;