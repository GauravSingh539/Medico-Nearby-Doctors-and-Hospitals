import {useState} from "react";
import doctorContext from "./doctorContext";



const DoctorState = (props)=>{

    const initialDoctor = [];
    const host = "http://localhost:5000";
    const [doctors,setDoctors] = useState(initialDoctor);

    const getDoctors = async(HOSPITAL)=>{
        //API Call
        try{const response = await fetch(`${host}/api/fetchData/getDoctors`,{
            method:"POST",
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({HOSPITAL})
        });
        console.log(HOSPITAL);
        const data =  await response.json();
        console.log(data);
        setDoctors(data);
        }catch(error){
            console.log(error);
        }
    }

 
    return(
        <doctorContext.Provider value = {{doctors,getDoctors}}>
            {props.children}
        </doctorContext.Provider>
    )
}

export default DoctorState;