import React, { Component } from 'react';
import Css from '../../assets/style/style';
import General from '../../components/general';
import {getCookie } from '../../utils/cookieUtil/cookieUtil';

class Home extends Component {

    render() {

        return(
            <>
            <General />

            <Css ref="./home.css" />
            <div className="conteudo">
                <div className="func">
                        <table>
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>CPF</th>
                                    <th>Cargo</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>Alvin</td>
                                    <td>Eclair</td>
                                    <td>$0.87</td>
                                </tr>
                                <tr>
                                    <td>Alan</td>
                                    <td>Jellybean</td>
                                    <td>$3.76</td>
                                </tr>
                                <tr>
                                    <td>Jonathan</td>
                                    <td>Lollipop</td>
                                    <td>$7.00</td>
                                </tr>
                                </tbody>
                            </table>
                </div>
            </div>
            </>
        )
    }

}

export default Home;