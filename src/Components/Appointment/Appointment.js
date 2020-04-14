import React from 'react';
import './Appointment.css';
import Calendar from 'react-calendar';
import { useState } from 'react';
import { render } from 'react-dom';

const Appointment = () => {
    const [date, setDate] = useState(new Date());

    const onChange = date =>{
        setDate(date);
    }

    return (
        <div className="positioning">
            <h1>Appointment</h1>
            <div className="calender">
                <h3>Choose A Date</h3>
                <br/>
                <Calendar onChange={onChange} value={date} />
                <br/>
                {date.toDateString()}
            </div>
        </div>
    );
};

render(<Appointment />, document.querySelector("#root"));

export default Appointment;