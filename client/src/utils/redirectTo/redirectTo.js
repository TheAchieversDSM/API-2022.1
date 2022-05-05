import React from "react";
import { Navigate} from "react-router-dom"


const redirectTo = ({ redirect }) => {
    console.log("ELE TA TENTANDO");
    return <Navigate to={redirect}/> 
}


export default redirectTo ;