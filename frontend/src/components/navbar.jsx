import React from "react";
import { Link } from 'react-router-dom';

function Navbar(){

    
        
    
    return (
        <div style = {{height : "94px"}}>
        <div className = "header">
        <div className = "nav w-nav">
            <div className = "nav-content-wrapper">
                <div className = "nav-content-primary-wrapper">
                    <div className = "nav-content-primary">
                        <div className = "nav-left"><Link to = "/" className = "link">Medico.in</Link></div>
                        {/* <nav role = "navigation" className = "nav-menu-wrapper w-nav-menu">
                            <div className = "nav-menu-content">
                                <Link to = "/" className= "nav-link">Home</Link>
                                <Link to = "/Login" className= "nav-link">Login</Link> 
                                <Link to = "/SignUp" className = "nav-link">SignUp</Link>
                            </div>
                        </nav> */}
                        <div className = "nav-buttons">
                            <Link to = "/Login" className = "button-tb">Log In</Link>
                            <Link to = "/SignUp" className = "button-tb">Sign Up</Link> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    );
}

export default Navbar;