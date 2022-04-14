import React from "react";
import { useNavigate } from "react-router-dom"

const LoginRoute = ({ redirect }) => {
    const Auth = localStorage.getItem("token") != null;
    const navigate = useNavigate()
    return Auth ? <>{navigate(redirect)}</> : (<h1>ERROR</h1>)
}


export default LoginRoute;