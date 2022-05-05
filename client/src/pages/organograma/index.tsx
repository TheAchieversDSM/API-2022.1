import React, { Component } from "react";
import axios from "axios";
// LOCAL CSS
import './organograma.css'

// COMPONENTS

import OrganoChart from "../../components/organoChart";
import Button from "../../components/button/button";
import General from "../../components/general";
import Css from "../../assets/style/style";

export default class Organograma extends Component {
    render() {
        return (
            <>
                <General />
                <Css ref="./organograma.css" />
                <div className="conteudo">
                    <OrganoChart />

                </div>
            </>
        )
    }
}