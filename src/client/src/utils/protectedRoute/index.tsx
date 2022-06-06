import React from "react";
import { Navigate } from "react-router-dom"
import { getCookie } from "../cookieUtil/cookieUtil";


export const ProtectedRoute = ({ children, redirectTo }) => {
    const Auth = getCookie("token") != null
    return Auth ? children : <Navigate to={redirectTo} />
}

export const AdmPrivateRoute = ({children,redirectTo}) => {
    const adm = getCookie("nivel") == "acessoTotal"
    return adm ? children : <Navigate to={redirectTo}/>
}

export const AdmGestorPrivateRoute = ({children,redirectTo}) => {
    const priv = getCookie("nivel") == "acessoGestor" ||  getCookie("nivel") == "acessoTotal"
    return priv ? children : <Navigate to={redirectTo}/>
}
