import React from 'react';
import './Appointment.css';
import Calendar from 'react-calendar';
import { useState } from 'react';
import img from '../../images/Mask Group 1.png';


const Appointment = () => {
    const [date, setDate] = useState(new Date());

    const onChange = date =>{
        setDate(date);
    }

    return (
        <div className="positioning">
            <div className="row">
                <div className="col-lg-6">
                    <h1>Appointment</h1>
                    <div className="calender">
                        <h3>Choose A Date</h3>
                        <br/>
                        <Calendar onChange={onChange} value={date} />
                        <br/>
                        <button>{date.toDateString()}</button>
                    </div>
                </div>
            
                <div className="welcome col-lg-6  col-sm-6">
                    <img className="appointment-right-img" src={img} alt="pic shows"/>
                </div>
            </div>
            <br/>
            <h2>Available Appointment on {date.toDateString()}</h2>
        </div>
    );
};


export default Appointment;