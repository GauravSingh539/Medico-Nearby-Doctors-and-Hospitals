import {useState} from "react";
import hospitalContext from "./hospitalContext";



const HospitalState = (props)=>{

    const initialHospital = [];
    const host = "http://localhost:5000";
    const [hospitals,setHospitals] = useState(initialHospital);

    const getHospitals = async(City)=>{
        //API Call
        try{const response = await fetch(`${host}/api/fetchData/getHospitals`,{
            method:"POST",
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({City})
        });
        const data =  await response.json();

        setHospitals(data);
        }catch(error){
            console.log(error);
        }
    }

 
    return(
        <hospitalContext.Provider value = {{hospitals,getHospitals}}>
            {props.children}
        </hospitalContext.Provider>
    )
}

export default HospitalState;