import React from "react";
import { Route, BrowserRouter, Routes as Switch } from "react-router-dom";

import PrivateRoute from "./protectedRoute";
import Login from "../pages/login";
import PreCadastro1 from "../pages/precadastro/pc1";
import PreCadastro2 from "../pages/precadastro/pc2";
import PreCadastro3 from "../pages/precadastro/pc3";
import NovoPerfil from "../pages/novo perfil";
import Notificacao from "../pages/notificacao";
import Organograma from "../pages/organograma";
import PerfilColab from "../pages/perfilcolab";

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" element={<Login />} />

                <Route path="/PreCad1" element={<PrivateRoute redirectTo={"/"}>
                    <PreCadastro1/>
                </PrivateRoute>} />

                <Route path="/PreCad2" element={<PrivateRoute redirectTo={"/"}>
                    <PreCadastro2/>
                </PrivateRoute>} />

                <Route path="/PreCad3" element={<PrivateRoute redirectTo={"/"}>
                    <PreCadastro3/>
                </PrivateRoute>} />

                <Route path="/Notificacao" element={<PrivateRoute redirectTo={"/"}>
                    <Notificacao/>
                </PrivateRoute>} />

                <Route path="/NovoPerfil" element={<PrivateRoute redirectTo={"/"}>
                    <NovoPerfil/>
                </PrivateRoute>} />

                <Route path="/Organograma" element={<PrivateRoute redirectTo={"/"}>
                    <Organograma/>
                </PrivateRoute>} />

                <Route path ="/PerfilColaborador"element={<PrivateRoute redirectTo={"/"}>
                    <PerfilColab/>
                </PrivateRoute>} />

            </Switch>
        </BrowserRouter>

    )
}

export default Routes;