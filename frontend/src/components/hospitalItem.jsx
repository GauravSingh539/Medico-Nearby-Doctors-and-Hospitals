
import react from "react";
import { Link } from "react-router-dom";
function HospitalItem(props) {
    const {hospital} = props;
    //console.log(hospital.Name);
    return(
        <div className = "hospital-card">
            <div className = "hospital-image">
                <img src = {hospital.Image} alt = "Hospital-Image" className="hospital-image"/>
            </div>
            <div className="hospital-name">
                <Link to = "/Doctor" state = {{name:hospital.Name}} className="link">{hospital.Name}</Link>
            </div>
            <div className = "hospital-rating">{hospital.Rating}</div>
            <div className = "hospital-address">{hospital.Address}</div>
            <div className = "hospital-address">Contact :{hospital.ContactNumber}</div>
        </div>
    );
}

export default HospitalItem;