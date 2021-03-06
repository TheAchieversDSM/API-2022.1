import React from "react";
import { Navigate } from "react-router-dom"
import { getCookie, deleteCookie } from "../cookieUtil/cookieUtil";


const LogoutRoute = ({ redirectTo }) => {
    deleteCookie("token")
    deleteCookie("id")
    deleteCookie("firstAcess")
    deleteCookie("nivel")
    deleteCookie("tipoPessoa")
    deleteCookie("aguardoConfirmacao")
    deleteCookie("tipoPessoa")
    return <Navigate to={redirectTo} />
}

export default LogoutRoute;