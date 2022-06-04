import React, { Component } from 'react';
import axios from "axios";
import Css from '../../assets/style/style';
import General from '../../components/general';
import tableSort from "tablesort"
import {getCookie } from '../../utils/cookieUtil/cookieUtil';
import TR from '../../components/tabela'

class Cargo extends Component {
    state = {
        cargos: []
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
        axios.get("http://localhost:5000/cargos").then((res) => {
            console.log(res.data);
            
            const cargos = res.data
            this.setState({ cargos })
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
                                    <th onClick={this.tablesort}><a>Cargo</a>   <i className="fa-solid fa-arrow-down-a-z fa"></i></th>
                                    <th onClick={this.tablesort}><a>Salário</a>   <i className="fa-solid fa-arrow-down-a-z"></i></th>

                                    
                                </tr>
                            </thead>
                            
                            <tbody>                  
                                    {this.state.cargos.map(car => <TR key={car.car_id} urlVisualizacao={`/PerfilColaborador/${car.car_id}`} urlEdicao={`/PerfilColaborador/${car.car_id}`}  nome={car.car_descricao} departamento={car.car_salario} cargo={""} />)}
            
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        )
    }
}

export default Cargo;