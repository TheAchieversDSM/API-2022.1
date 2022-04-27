import React from "react";
import { Navigate } from "react-router-dom"
import { getCookie } from "../cookieUtil/cookieUtil";


const LoggedinRoute = ({children}) => {
    const Auth = getCookie("token") != null
    return Auth ? <Navigate to={"/home"}/> : children
}

export default LoggedinRoute;