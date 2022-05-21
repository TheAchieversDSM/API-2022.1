import React, { Component } from 'react';
import axios from "axios";
import Css from '../../assets/style/style';
import General from '../../components/general';
import {getCookie } from '../../utils/cookieUtil/cookieUtil';
import TR from '../../components/tabela'

class Funcionario extends Component {
    state = {
        colaboradores: []
    }
    search = () =>{
      
            // Declare variables
            var input, filter, table, tr, td, i, txtValue;
            input = document.getElementById("searchBox");
            filter = input.value.toUpperCase();
            table = document.getElementById("tabela");
            tr = table.getElementsByTagName("tr");
          
            // Loop through all table rows, and hide those who don't match the search query
            for (i = 0; i < tr.length; i++) {
              td = tr[i].getElementsByTagName("td")[0];
              if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                  tr[i].style.display = "";
                } else {
                  tr[i].style.display = "none";
                }
              }
            }
          
    }
    componentDidMount() {
        axios.get('http://localhost:5000/infocolab/getAll')
            .then((res) => {
                const colaboradores = res.data;
                
                this.setState({colaboradores})                
            }
        )
    }

    render() {
        return(
            <>
            <General />
            <div className="conteudo">
                <div className="func">
                 <input type="text" id="searchBox" onKeyUp={this.search} placeholder="Procure por um nome..."/>
                        <table id="tabela">
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>Departamento</th>
                                    <th>Cargo</th>
                                </tr>
                            </thead>
                            
                            <tbody>
                     
                                    {this.state.colaboradores.map(colaborador => <TR key={colaborador.col_id} url={`/PerfilColaborador/${colaborador.col_id}`} nome={colaborador.col_nome} departamento={colaborador.dep_descricao} cargo={colaborador.car_descricao} />)}
            
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        )
    }
}

export default Funcionario;