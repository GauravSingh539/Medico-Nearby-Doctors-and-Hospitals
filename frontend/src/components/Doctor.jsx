import React , {useContext,useEffect} from "react";
import doctorContext from "../context/doctors/doctorContext";
import DoctorItem from "./DoctorItem";
import { useLocation } from "react-router-dom";

function Doctor(){
    const location = useLocation();
    const hosName = location.state;
    const{name} = hosName;
    const context = useContext(doctorContext);
    const{doctors,getDoctors} = context;

    useEffect(()=>{
        getDoctors(name)
    },[]);

    return(
        <>
            <div className = "top-container">
                <h1>Nearby Doctors</h1>
                {/* <form> 
                    <select  value={location} onChange={e=>changeLocation(e.target.value)}>
                        <option value="Location">Location</option>
                        <option value="Raipur">Raipur</option>
                        <option value="Bhilai">Bhilai</option>
                    </select>
                </form> */}
            </div>
            <div className = "card-container">
                {doctors.map((doctor)=> {
                    return(
                        <DoctorItem key = {doctor._id} doctor  = {doctor}/>
                    )
                })}  
            </div>
        </>   
    )
}
export default Doctor;