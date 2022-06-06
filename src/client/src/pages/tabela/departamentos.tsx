import React, { Component } from 'react';
import axios from "axios";
import Css from '../../assets/style/style';
import General from '../../components/general';
import tableSort from "tablesort"
import {getCookie } from '../../utils/cookieUtil/cookieUtil';
import TR from '../../components/tabela'
import TRSem from '../../components/tabela/indexSem';

class Departamento extends Component {
    state = {
        departamentos: []
    }
    tablesort = () =>{
        new tableSort(document.getElementById('tabela'))
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
        axios.get("http://localhost:5000/departamentos/getAllDepAndHeads").then((res) => {
            console.log(res.data);
            
            const departamentos = res.data
            this.setState({ departamentos })
        })
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
                                    <th onClick={this.tablesort}><a>Nome</a>   <i className="fa-solid fa-arrow-down-a-z fa"></i></th>   
                                    <th onClick={this.tablesort}><a>Head</a>   <i className="fa-solid fa-arrow-down-a-z"></i></th>

                                    
                                </tr>
                            </thead>
                            
                            <tbody>                  
                                    {this.state.departamentos.map(depart => <TRSem key={depart.dep_id} urlVisualizacao={`/VisualizarDepartamento/${depart.dep_id}`} urlEdicao={''} nome={depart.dep_descricao} departamento={depart.col_nome + "  -   " + depart.dep_head} cargo={""} />)}
            
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        )
    }
}

export default Departamento;