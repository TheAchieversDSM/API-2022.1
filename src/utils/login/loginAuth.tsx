import React from "react";
import { Navigate} from "react-router-dom"
import { getCookie } from "../cookieUtil/cookieUtil";

const LoginRoute = ({ redirect }) => {
    const Auth = getCookie("token") != null;
    
    return Auth ? <Navigate to={redirect}/> : (<h1></h1>)
}


export default LoginRoute;