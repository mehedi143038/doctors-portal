import React from 'react';
import './Homepage.css';
import { Link } from 'react-router-dom';
import img from '../../images/Mask Group 1.png';
import fluoride from "../../images/001-dental.png";
import cavity from '../../images/tooth (1).png';
import whitening from '../../images/tooth.png';
import baby from '../../images/Mask Group 3.png';
import doctor from '../../images/5790-removebg.png';
import winson from '../../images/Ellipse 1.png';
import katie from '../../images/Ellipse 2.png';
import stuart from '../../images/Ellipse 3.png';


const Homepage = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="welcome col-lg-6  col-sm-6">
                        <h1>Your New Smile</h1>
                        <h1>Starts Here</h1>
                        <p style={{color: 'black'}}>This is a Dental Service Center. Here we provide all types of Dental Services with the help of some experienced doctors. You are always welcomed to contact us about any of your dental problems.</p>
                        <Link className="appointment-btn" to="/appointment">
                            GET APPOINTMENT
                        </Link>
                    </div>
                    <div className="welcome col-lg-6  col-sm-6">
                        <img className="right-img" src={img} alt="pic shows"/>
                    </div>
                </div>

                <div className="contact row">
                    <div className="first-box col-lg-3 col-md-6 col-sm-6">
                        <h4>Opening Hours</h4>
                        <h6>We are open for 24 hours of the day and 7 days of the week.</h6>
                    </div>
                    <div className="second-box col-lg-3 col-md-6 col-sm-6">
                        <h4>Visit Our Location</h4>
                        <h6>Shewrapara, Mirpur, Dhaka</h6>
                    </div>
                    <div className="third-box col-lg-3 col-md-6 col-sm-6">
                        <h4>Contact Us Now</h4>
                        <h6>+8801765753030</h6>
                    </div>
                </div>

                <div className="service">
                    <h5>OUR SERVICES</h5>
                    <h1>Services We Provide</h1>
                </div>

                <div className="treatment row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <img src={fluoride} alt="fluoride"/>
                        <br/><br/>
                        <h5>Fluoride Treatment</h5>
                        <p className='paragraph-color'>This is a Dental Service Center. Here we provide all types of Dental Services with the help of some experienced doctors. You are always welcomed to contact us about any of your dental problems.</p>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <img src={cavity} alt="cavity           "/>
                        <br/><br/>
                        <h5>Cavity Filling</h5>
                        <p className='paragraph-color'>This is a Dental Service Center. Here we provide all types of Dental Services with the help of some experienced doctors. You are always welcomed to contact us about any of your dental problems.</p>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <img src={whitening} alt="whi           tening"/>
                        <br/><br/>
                        <h5>Teeth Whitening</h5>
                        <p className='paragraph-color'>This is a Dental Service Center. Here we provide all types of Dental Services with the help of some experienced doctors. You are always welcomed to contact us about any of your dental problems.</p>
                    </div>
                </div>
                <br/><br/><br/><br/><br/>

                <div className="row">
                    <div className="col-lg-5 col-md-5">
                        <img className='baby-img' src={baby} alt="Baby dental service pic"/>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <h1>Exceptional Dental</h1>
                        <h1>Care, On Your Terms</h1>
                        <p className='paragraph-color'>This is a Dental Service Center. Here we provide all types of Dental Services with the help of some experienced doctors. You are always welcomed to contact us about any of your dental problems. This is a Dental Service Center. Here we provide all types of Dental Services with the help of some experienced doctors. You are always welcomed to contact us about any of your dental problems.This is a Dental Service Center. Here we provide all types of Dental Services with the help of some experienced doctors. You are always welcomed to contact us about any of your dental problems.</p>
                        <br/>
                        <Link className="appointment-btn" to="/appointment">
                            Learn More
                        </Link>
                    </div>
                </div>
                <br/><br/><br/>

                <div className="row appointment-section">
                    <div className="col-lg-5 col-md-5">
                        <img className='doctor-img' src={doctor} alt="pic of doctor"/>
                    </div>
                    <div className="appointment-right col-lg-6 col-md-6">
                        <h4>APPOINTMENT</h4>
                        <h1>Make an Appointment</h1>
                        <h1>Today</h1>
                        <p>This is a Dental Service Center. Here we provide all types of Dental Services with the help of some experienced doctors.</p>
                        <br/>
                        <Link className="appointment-btn" to="/appointment">
                            Learn More
                        </Link>
                    </div>
                </div>
                <h5 className='center highlight'>TESTIMONIAL</h5>
                <h1 className='center'>What's Our Patients</h1>
                <h1 className='center'>Says</h1>
                <br/><br/>
                <div className='all-box'>
                    <div className="patient-box">
                        <p>This is a Dental Service Center. Here we provide all types of Dental Services with the help of some experienced doctors. You are always welcomed to contact us about any of your dental problems.</p>
                        <br/>
                        <div className="row">
                            <div className="col-lg-4 col-md-8 col-sm-4">
                            <img src={winson} alt="people"/>
                            </div>
                            <div className="col-lg-8 col-md-8 col-sm-8">
                                <h5>Winson Herry</h5>
                                <h6>California</h6>
                            </div>
                        </div>
                    </div>
                    <div className="patient-box">
                        <p>This is a Dental Service Center. Here we provide all types of Dental Services with the help of some experienced doctors. You are always welcomed to contact us about any of your dental problems.</p>
                        <br/>
                        <div className="row">
                            <div className="col-lg-4 col-md-8 col-sm-4">
                            <img src={katie} alt="people"/>
                            </div>
                            <div className="col-lg-8 col-md-8 col-sm-8">
                                <h5>Katie Perry</h5>
                                <h6>New York</h6>
                            </div>
                        </div>
                    </div>
                    <div className="patient-box">
                        <p>This is a Dental Service Center. Here we provide all types of Dental Services with the help of some experienced doctors. You are always welcomed to contact us about any of your dental problems.</p>
                        <br/>
                        <div className="row">
                            <div className="col-lg-4 col-md-8 col-sm-4">
                            <img src={stuart} alt="people"/>
                            </div>
                            <div className="col-lg-8 col-md-8 col-sm-8">
                                <h5>Christen Stuart</h5>
                                <h6>London</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <br/><br/>
                <h4 className='center highlight'>OUR BLOG</h4>
                <h1 className='center'>From Our Blog News</h1>
                <br/><br/>

                <div className='all-box'>
                    <div className="patient-box blog">
                        <p>This is a Dental Service Center. Here we provide all types of Dental Services with the help of some experienced doctors. You are always welcomed to contact us about any of your dental problems.</p>
                        <br/>
                        <div className="row">
                            <div className="col-lg-4 col-md-8 col-sm-4">
                            <img src={winson} alt="people"/>
                            </div>
                            <div className="col-lg-8 col-md-8 col-sm-8">
                                <h5>Winson Herry</h5>
                                <h6>California</h6>
                            </div>
                        </div>
                    </div>
                    <div className="patient-box blog">
                        <p>This is a Dental Service Center. Here we provide all types of Dental Services with the help of some experienced doctors. You are always welcomed to contact us about any of your dental problems.</p>
                        <br/>
                        <div className="row">
                            <div className="col-lg-4 col-md-8 col-sm-4">
                            <img src={katie} alt="people"/>
                            </div>
                            <div className="col-lg-8 col-md-8 col-sm-8">
                                <h5>Katie Perry</h5>
                                <h6>New York</h6>
                            </div>
                        </div>
                    </div>
                    <div className="patient-box blog">
                        <p>This is a Dental Service Center. Here we provide all types of Dental Services with the help of some experienced doctors. You are always welcomed to contact us about any of your dental problems.</p>
                        <br/>
                        <div className="row">
                            <div className="col-lg-4 col-md-8 col-sm-4">
                            <img src={stuart} alt="people"/>
                            </div>
                            <div className="col-lg-8 col-md-8 col-sm-8">
                                <h5>Christen Stuart</h5>
                                <h6>London</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <br/><br/>
                <h4 className='center highlight'>Our Doctors</h4>
                <div className='row'>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-6 doctor-space">
                        <img className="doctors" src={doctor} alt=""/>
                        <br/><br/>
                        <h5 className='center'>Dr.Claudio</h5>
                        <h6 className='center'>+8801765753030</h6>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-6 doctor-space">
                        <img className="doctors" src={doctor} alt=""/>
                        <br/><br/>
                        <h5 className='center'>Dr.Claudio</h5>
                        <h6 className='center'>+8801765753030</h6>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-6 doctor-space">
                        <img className="doctors" src={doctor} alt=""/>
                        <br/><br/>
                        <h5 className='center'>Dr.Claudio</h5>
                        <h6 className='center'>+8801765753030</h6>
                    </div>
                </div>

                <div className='contact-us'>
                    <h5 className='center highlight'>CONTACT US</h5>
                    <h1 className='center highlight'>Always Contact With Us</h1>
                    <br/><br/>
                    <input className='email' placeholder='Email Address*' type="text"/>
                    <br/><br/>
                    <input className='subject' placeholder='Subject*' type="text"/>
                    <br/><br/>
                    <input className='message' placeholder='Your Message*' type="text"/>
                    <br/><br/>
                    <button className='submit-btn'>Submit</button>
                </div>
                
            </div>
        </div>
    );
};

export default Homepage;