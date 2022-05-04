import React from "react";
import { Navigate } from "react-router-dom"
import { getCookie } from "../cookieUtil/cookieUtil";


export const ProtectedRoute = ({ children, redirectTo }) => {
    const Auth = getCookie("token") != null
    return Auth ? children : <Navigate to={redirectTo} />
}

export const AdmPrivateRoute = ({children,redirectTo}) => {
    const adm = getCookie("nivel") == "1"
    return adm ? children : <Navigate to={redirectTo} />
}
