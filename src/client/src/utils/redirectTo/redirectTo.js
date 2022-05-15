import React from "react";
import { Navigate} from "react-router-dom"

const redirectTo = ({ redirect }) => {
    return <Navigate to={redirect}/> 
}

export default redirectTo ;