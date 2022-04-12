import React, { Component } from "react";
import { Navigate, Route } from "react-router-dom"
import { useAuth } from "react-use-auth"



type props = {
    Path: string,
    Element: any,
}

class RotaProtegida extends Component<props>{
    render() {
         var user = true

        return user ? (
            <Route path={this.props.Path} element={this.props.Element} />
        ):(
            <Navigate to={{pathname: '/'}} />
        )



    }    

}


export default RotaProtegida;