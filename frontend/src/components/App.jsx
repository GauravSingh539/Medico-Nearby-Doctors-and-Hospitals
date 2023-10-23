import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route} from 'react-router-dom';
import Login from "./Login";
import SignUp from "./SignUp";
import Home from "./home";




function App(){
    return (
        <BrowserRouter >
            <Routes>
                <Route path = "/" element = {<Home />} />
                <Route path= "/Login" element = {<Login />} />
                <Route path= "/SignUp" element={<SignUp />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;