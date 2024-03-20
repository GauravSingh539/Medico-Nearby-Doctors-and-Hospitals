import React ,{useState} from "react";
import { Link } from "react-router-dom";

function SignUp(){
    const host = "http://localhost:5000";
    const addUser = async(firstName,middleName,lastName,email,password,address,contact,city,state,zip)=>{
        //API Call
        await fetch(`${host}/api/auth/createUser`,{
            method:'POST',
            headers: {
                //"Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({
                firstName:firstName,
                middleName:middleName,
                lastName:lastName,
                email:email,
                password:password,
                address:address,
                contact:contact,
                city:city,
                state:state,
                zip:zip
            })
        })
    }

    const handleSubmit = (e)=>{
        console.log("Yo");
        e.preventDefault();
        addUser(firstName,middleName,lastName,email,password,address,contact,city,state,zip);

    }

    const[firstName,setFirstName] = useState("");
    const[middleName,setMiddleName]= useState("");
    const[lastName,setLastName] = useState("");
    const[email,setEmail] = useState("");
    const[password,setPassword]= useState("");
    const[address,setAddress]= useState("");
    const[contact,setContact]= useState("");
    const[city,setCity] = useState("");
    const[state,setState] = useState("");
    const[zip,setZip]= useState("");
    return(
        <>
            <div className = "top-container" >
                <h1 style = {{left:"43%"}}>Register</h1>
            </div>
            <form className="row g-3" onSubmit={handleSubmit}>
                <div className="col-md-4">
                    <label className="form-label">First Name<span style = {{color:"red",fontSize:"18px"}}> *</span></label>
                    <input type="text" className="form-control" id="inputFirstName" value = {firstName} onChange={(e)=> setFirstName(e.target.value)} required></input>
                </div>
                <div className="col-md-4">
                    <label  className="form-label">Middle Name</label>
                    <input type="text" className="form-control" id="inputMiddleName" value = {middleName} onChange={(e)=> setMiddleName(e.target.value)}></input>
                </div>
                <div className="col-md-4">
                    <label className="form-label">Last Name<span style = {{color:"red",fontSize:"18px"}}> *</span></label>
                    <input type="text" className="form-control" id="inputLastName" value = {lastName} onChange={(e)=> setLastName(e.target.value)}required ></input>
                </div>
                <div className="col-md-6">
                    <label className="form-label">Email<span style = {{color:"red",fontSize:"18px"}}> *</span></label>
                    <input type="email" className="form-control" id="inputEmail" value = {email} onChange={(e)=> setEmail(e.target.value)} required></input>
                </div>
                <div className="col-md-6">
                    <label  className="form-label">Password<span style = {{color:"red",fontSize:"18px"}}> *</span></label>
                    <input type="password" className="form-control" id="inputPassword" value = {password} onChange={(e)=> setPassword(e.target.value)} required></input>
                </div>
                <div className="col-md-9">
                    <label  className="form-label">Address<span style = {{color:"red",fontSize:"18px"}}> *</span></label>
                    <input type="text" className="form-control" id="inputAddress" value = {address} onChange={(e)=> setAddress(e.target.value)} placeholder="1234 Main St" required></input>
                </div>
                <div className="col-md-3">
                    <label  className="form-label">Mobile No.<span style = {{color:"red",fontSize:"18px"}}> *</span></label>
                    <input type="number" className="form-control" id="inputContact"value = {contact} onChange={(e)=> setContact(e.target.value)} placeholder="" required></input>
                </div>
                <div className="col-md-6">
                    <label className="form-label">City<span style = {{color:"red",fontSize:"18px"}}> *</span></label>
                    <input type="text" className="form-control" id="inputCity" value = {city} onChange={(e)=> setCity(e.target.value)} required></input>
                </div>
                <div className="col-md-4">
                    <label  className="form-label">State<span style = {{color:"red",fontSize:"18px"}}> *</span></label>
                    <input type="text" className="form-control" id="inputstate" value = {state} onChange={(e)=> setState(e.target.value)} required></input>
                </div>
                <div className="col-md-2">
                    <label className="form-label">Zip<span style = {{color:"red",fontSize:"18px"}}> *</span></label>
                    <input type="text" className="form-control" id="inputZip" value = {zip} onChange={(e)=> setZip(e.target.value)}required></input>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Sign in</button>
                </div>
            </form>
        </>
    )
}

export default SignUp;