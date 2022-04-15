import React from "react";
import { useNavigate } from "react-router-dom"
import { getCookie } from "../cookieUtil/cookieUtil";

const LoginRoute = ({ redirect }) => {
    const Auth = getCookie("token") != null;
    const navigate = useNavigate()
    return Auth ? <>{navigate(redirect)}</> : (<h1>ERROR</h1>)
}


export default LoginRoute;