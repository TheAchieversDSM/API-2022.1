import React, { Component } from 'react';
import OrgChart from '@balkangraph/orgchart.js';


// LOCAL CSS
import './organoStruct.css'



export default class extends Component {
    constructor(props) {
        super(props);
        this.divRef = React.createRef();
    }

    shouldComponentUpdate() {
        return true;
    }

    componentDidUpdate() {
        OrgChart.templates.polina.menuButton =
            '<div style="position:absolute;right:{p}px;top: 10px; width:40px;height:30px;cursor:pointer" data-ctrl-menu="rect">'
            + '<hr style="background-color: #3AC6C4 ;opacity: 1; height: 3px; width: 40px; border: none;  fill="#039BE5">'
            + '<hr style="background-color: #3AC6C4 ;opacity: 1; height: 3px; width: 40px; border: none;  fill="#039BE5">'
            + '<hr style="background-color: #3AC6C4 ;opacity: 1; height: 3px; width: 40px; border: none; fill="#039BE5">'
            + '</div>';
        OrgChart.SEARCH_PLACEHOLDER = "Pesquisar";
        OrgChart.templates.polina.link = '<path stroke-linejoin="round" stroke="#aeaeae" stroke-width="1px" fill="none" d="{edge}" />';
        OrgChart.templates.polina.node = '<rect x="0" y="0" height="80" width="300" fill="#039BE5" stroke-width="4" stroke="#3AC6C4" rx="40" ry="40"></rect>';
        OrgChart.templates.polina.field_0 = '<text width="130" style="font-size: 18px;" fill="#000000" x="150" y="45" text-anchor="middle" class="field_0">{val}</text>';
        OrgChart.templates.polina.field_1 = '<text width="130" text-overflow="multiline" style="font-size: 12px;" fill="#ffffff" x="270" y="20" text-anchor="end" class="field_1">{val}</text>';
        OrgChart.templates.polina.editFormHeaderColor = '#53C4CD';

        this.chart = new OrgChart(this.divRef.current, {
            template: "polina",
            layout: OrgChart.treeLeftOffset,
            enableSearch: false,
            mouseScrool: OrgChart.action.none,
            
            toolbar: {
                zoom: true,
                expandAll: true
            },
            nodeBinding: {
                field_0: "Nome",
                field_1: "Cargo",
                field_2: "Email",
                field_3: "Departamento",
                img_0: "foto"
            },
            editForm: {
                titleBinding: "Nome",
                buttons: {
                    pdf: {text: "Exportar para PDF" },
                    share: {text: "Compartilhar" },
                    edit: null,
                    remove: null
                }
            },
            menu: {
                pdf: { 
                    text: "Exportar para PDF",
                    icon: OrgChart.icon.pdf(24, 24, "#53C4CD"),
                },
                png: { 
                    text: "Exportar para PNG",
                    icon: OrgChart.icon.png(24, 24, "#53C4CD")
                 },
                svg: { 
                    text: "Exportar para SVG",
                    icon: OrgChart.icon.svg(24, 24, "#53C4CD") 
                },
                csv: { 
                    text: "Exportar para CSV" ,
                    icon: OrgChart.icon.csv(24, 24, "#53C4CD") 
                }
            },



            nodes: this.props.node
            
            
        });
        console.log(this.chart.nodes);

    }


    render() {
        return (
            <>
                <link rel="stylesheet" href="./style.css" />
                <div id="tree" ref={this.divRef}></div>
            </>
        );
    }
}