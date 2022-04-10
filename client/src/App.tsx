import React, { Component } from 'react';
import './App.css';

//import Routes from './routes';

// PAGES
import Login from './pages/login';
import Organograma from './pages/organograma';
import Notificacao from './pages/notificacao';
import NovoPerfil from './pages/novo perfil';
import PreCadastro1 from './pages/precadastro/pc1';
import PreCadastro2 from './pages/precadastro/pc2';
import PreCadastro3 from './pages/precadastro/pc3';
import PerfilColab from './pages/pefil colab';


class App extends Component {
    render() {
        return (
            <div className="App">
        
                <NovoPerfil  />
                
            </div>
        );
    }
}

export default App;
