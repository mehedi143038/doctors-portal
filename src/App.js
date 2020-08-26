import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Header from './Components/Header/Header';
import Homepage from './Components/Homepage/Homepage';
import Appointment from './Components/Appointment/Appointment';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
    <Header></Header>
    <Router>
      <Switch>
        <Route path="/appointment">
          <Appointment></Appointment>
        </Route>
        <Route path="/">
          <Homepage></Homepage>
        </Route>
      </Switch>
    </Router>
    <Footer></Footer>
    </div>
  );
}

export default App;
