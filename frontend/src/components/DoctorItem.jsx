import react from "react";
import { Link } from "react-router-dom";


function DoctorItem(props) {
    const {doctor} = props;
    console.log(doctor);
    return(
        <>

                <div className = "hospital-card">
                    <div className = "hospital-image">
                        <img src = {doctor.IMAGE} className="doctor-image"/>
                    </div>
                    <div className="doctor-name">
                        {doctor.NAME}
                    </div>
                    <div className = "hospital-rating">{doctor.RATING}</div>
                    <div className = "doctor-experience">Experience :{doctor.EXPERIENCE}</div>
                    <div className = "doctor-speciality">{doctor.SPECIALIST}</div>
                </div>

        </>
    );
}

export default DoctorItem;