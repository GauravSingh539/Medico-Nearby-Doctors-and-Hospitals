import {useEffect, useState} from "react";
import LocationContext from "./locationContext";
import hospitalContext from "../hospitals/hospitalContext";

const LocationState = (props) =>{

    const initialLocation = ""
    const[location,setLocation] = useState(initialLocation);

    const changeLocation= async(value)=>{
        await setLocation(value);
    }

     return(
        <LocationContext.Provider value = {{location,changeLocation}}>
            {props.children}
        </LocationContext.Provider>
    )

}

export default LocationState;