import React from "react";
import { Route, BrowserRouter, Routes as Switch } from "react-router-dom";

//IMPORT ROUTES
import {ProtectedRoute , AdmPrivateRoute} from "../utils/protectedRoute";
import LoggedinRoute from "../utils/login/LoggedinRoute";
import LogoutRoute from "../utils/logoutRoute/logoutRoute";

//IMPORT PAGES
import Login from "../pages/login";
import Home from "../pages/home"
import PreCadastro1 from "../pages/precadastro/pc1";
import NovoPerfil from "../pages/novo perfil";
import Notificacao from "../pages/notificacao";
import Organograma from "../pages/organograma";
import PerfilColab from "../pages/perfilcolab";
import Funcionario from "../pages/tabela";
import UploadMateriais from "../pages/uploadMat";
import Admissao from "../pages/admissao";
import NovoDep from "../pages/novo departamento";
import NovoCargo from "../pages/novocargo" 
import Cursos from "../pages/cursos/cursos";
import Trilha from "../pages/trilha/trilha";


function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" element= {<LoggedinRoute>
                    <Login/>
                </LoggedinRoute>} />
                
                <Route path ="/home" element= {<ProtectedRoute redirectTo={"/"}>
                    <Home />
                </ProtectedRoute>} />

                <Route path="/CompletarCadastro" element={<ProtectedRoute redirectTo={"/"}>
                    <PreCadastro1/>
                </ProtectedRoute>} />

                <Route path="/Notificacao" element={<ProtectedRoute redirectTo={"/"}>
                    <Notificacao/>
                </ProtectedRoute>} />
                
                <Route path="/uploadMateriais" element={<ProtectedRoute redirectTo={"/"}>
                    <UploadMateriais/>
                </ProtectedRoute>} />

                <Route path="/NovoPerfil" element={<ProtectedRoute redirectTo={"/"}>
                    <AdmPrivateRoute redirectTo={"/home"} >
                        <NovoPerfil/>   
                    </AdmPrivateRoute>                     
                </ProtectedRoute>} />

                <Route path="/NovoDepartamento" element={<ProtectedRoute redirectTo={"/"}>
                    <AdmPrivateRoute redirectTo={"/home"} >
                        <NovoDep/>           
                    </AdmPrivateRoute>           
                </ProtectedRoute>} />

                <Route path="/NovoCargo" element={<ProtectedRoute redirectTo={"/"}>
                    <AdmPrivateRoute redirectTo={"/home"} >
                        <NovoCargo/>           
                    </AdmPrivateRoute>           
                </ProtectedRoute>} />

                <Route path="/Organograma" element={<ProtectedRoute redirectTo={"/"}>
                    <Organograma/>
                </ProtectedRoute>} />
                
                <Route path="/PerfilColaborador/:id" element={<ProtectedRoute redirectTo={"/"}>
                    <AdmPrivateRoute redirectTo={"/home"} >
                        <PerfilColab/>
                    </AdmPrivateRoute>
                </ProtectedRoute>} /> 

                <Route path ="/MeuPerfil" element={<ProtectedRoute redirectTo={"/"}>
                    <PerfilColab/>
                </ProtectedRoute>} />

                <Route path ="/Funcionario" element={<ProtectedRoute redirectTo={"/"}>
                    <AdmPrivateRoute redirectTo={"/home"} >
                        <Funcionario/>
                    </AdmPrivateRoute>
                </ProtectedRoute>} />

                <Route path="/logout" element={<LogoutRoute redirectTo={"/"}/>} />

                <Route path ="/admissao/:id" element={<ProtectedRoute redirectTo={"/"}>
                    <Admissao/>
                </ProtectedRoute>} />

                <Route path ="/Cursos" element={<ProtectedRoute redirectTo={"/"}>
                    <Cursos/>
                </ProtectedRoute>} />

                <Route path ="/Trilha" element={<ProtectedRoute redirectTo={"/"}>
                    <Trilha/>
                </ProtectedRoute>} />

            </Switch>
        </BrowserRouter>

    )
}

export default Routes;