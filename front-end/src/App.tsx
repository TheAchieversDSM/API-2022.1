import React, { Component } from 'react';
import './App.css';

// PAGES
import Login from './pages/login';
import Organograma from './pages/organograma';
import Notificacao from './pages/notificacao';
import NovoPerfil from './pages/novo perfil';
import PreCadastro1 from './pages/precadastro/pc1';
import PreCadastro2 from './pages/precadastro/pc2';
import PreCadastro3 from './pages/precadastro/pc3';


class App extends Component {
    render() {
        return (
            <div className="App">
        
                <PreCadastro1/>
                
            </div>
        );
    }
}

export default App;
