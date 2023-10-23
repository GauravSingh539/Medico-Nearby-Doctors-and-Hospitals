import React from "react";
import { useNavigate } from 'react-router-dom';

function Navbar(){

    const navigate = useNavigate();

    function handleClick(event){
        const id = event.currentTarget.id;
        if(id === "Login"){
            navigate("./Login")
        }
        else{
            navigate("./SignUp")
        }
        event.preventDefault();
        
    }
    return (
    <header>
        <div>
            <div className="navbar">
                <h1>Medico</h1>
                <img src = "" alt = "logo"></img>
                <ul className = "user-section">
                    <li><button onClick = {handleClick} id = "SignUp">Sign Up</button></li>
                    <li><button onClick = {handleClick} id = "Login">Login</button></li>
                </ul>
            </div>
        </div>
    </header>
    )
}

export default Navbar;