import React from "react";
import { BrowserRouter } from "react-router-dom";
import {Route,Routes} from 'react-router-dom';
import Login from "./Login";
import SignUp from "./SignUp";
import Home from "./home";
import Navbar from "./navbar";
import HospitalState from "../context/hospitals/HospitalState";
import Doctor from "./Doctor";
import DoctorState from "../context/doctors/DoctorState";
import LocationState from "../context/location/LocationState";


function App(){
    return (
        <>
        <LocationState>
        <HospitalState>
            <DoctorState>
            <BrowserRouter >
                <Navbar />
                <div className = "container">
                    <Routes>
                        <Route path = "/" element = {<Home/>}/>
                        <Route  exact path= "/Login" element = {<Login/>} />
                        <Route exact path= "/SignUp" element = {<SignUp/>} />
                        <Route exact path= "/Doctor" element = {<Doctor/>} />
                    </Routes>
                </div>
            </BrowserRouter>
            </DoctorState>
        </HospitalState>
        </LocationState>
        </>
    )
}

export default App;