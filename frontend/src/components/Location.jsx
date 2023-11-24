
import React ,{useContext} from "react";
import LocationContext from "../context/location/locationContext";
function Location(props){

    const context = useContext(LocationContext);
    const{location,changeLocation} = context;
    
    return(
        <form> 
            <select  value={location} onChange={e=>changeLocation(e.target.value)}>
                <option value="Location">Location</option>
                <option value="Raipur">Raipur</option>
                <option value="Bhilai">Bhilai</option>
            </select>
        </form>
    )
}
export default Location;