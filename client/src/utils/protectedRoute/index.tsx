import React from "react";
import { Navigate, Route } from "react-router-dom"
import { getCookie } from "../cookieUtil/cookieUtil";


const PrivateRoute = ({ children, redirectTo }) => {
    const Auth = getCookie("token") != null
    return Auth ? children : <Navigate to={redirectTo} />
}

export default PrivateRoute;