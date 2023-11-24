//import React , {useContext,useEffect} from "react";
import Hospital from "./Hospital";
import { useState} from "react";
import Location from "./Location";
//import hospitalContext from "../context/hospitals/hospitalContext";

function Home(){

    return(
        <>
            <div className = "top-container">
                <h1>Nearby Hospitals</h1>
                <Location />
            </div>

            
            <div className="card-container">     
                <Hospital />
            </div>
        </>
    )
}

export default Home;