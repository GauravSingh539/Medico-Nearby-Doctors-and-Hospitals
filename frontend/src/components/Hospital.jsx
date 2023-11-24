import React , {useContext,useEffect} from "react";
import hospitalContext from "../context/hospitals/hospitalContext";
import HospitalItem from "./hospitalItem";
import LocationContext from "../context/location/locationContext";
import Home from "./home";

function Hospital(props){
    const context = useContext(hospitalContext);
    const{hospitals,getHospitals} = context;
    const{location,changeLocation} = useContext(LocationContext)
    
    console.log(location);
    useEffect(()=>{
        getHospitals(location)
    },[changeLocation]);


    return(
        hospitals.map((hospital)=>{
            return(<HospitalItem key = {hospital._id} hospital  = {hospital}/>)
        })       
    )
}
export default Hospital;