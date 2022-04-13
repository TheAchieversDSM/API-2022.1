import React from "react";
import { Navigate, Route } from "react-router-dom"

const PrivateRoute = ({children,redirectTo}) => {
    const Auth = localStorage.getItem("token") != null;
    return Auth ?  children : <Navigate to={redirectTo}/>
}

export default PrivateRoute;