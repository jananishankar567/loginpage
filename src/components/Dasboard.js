//import React from 'react'

import { Button } from "react-bootstrap"
import { AuthContext } from "./AuthContext"
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

const Dasboard=()=> {
    const {logout}=useContext(AuthContext);
    const navigate=useNavigate();
    const handleLogout=()=>{
        logout();
        navigate("/");
    }
  return (
    <div style={{textAlign:"center",marginTop:"50px"}}>
        <h3>Welcome to Dashboard</h3>
        <Button variant="outline-danger" onClick={handleLogout}>Logout</Button>
    </div>
  )
}

export default Dasboard