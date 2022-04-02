import React, { Component } from 'react';
import OrgChart from '@balkangraph/orgchart.js';

// LOCAL CSS
import './style.css'

    export default class extends Component {

            constructor(props) {
                super(props);
                this.divRef = React.createRef();
            }

            shouldComponentUpdate() {
                return false;
            }

            componentDidMount() {
                OrgChart.templates.polina.menuButton =
                '<div style="position:absolute;right:{p}px;top: 10px; width:40px;height:30px;cursor:pointer;" data-ctrl-menu="">'
                + '<hr style="background-color: #3AC6C4 ;opacity: 1; height: 3px; width: 40px; border: none;">'
                + '<hr style="background-color: #3AC6C4 ;opacity: 1; height: 3px; width: 40px; border: none;">'
                + '<hr style="background-color: #3AC6C4 ;opacity: 1; height: 3px; width: 40px; border: none;">'
                + '</div>';
                OrgChart.SEARCH_PLACEHOLDER = "Pesquisar";
                OrgChart.templates.polina.link = '<path stroke-linejoin="round" stroke="#aeaeae" stroke-width="1px" fill="none" d="{edge}" />';
                OrgChart.templates.polina.node = '<rect x="0" y="0" height="80" width="300" fill="#039BE5" stroke-width="4" stroke="#3AC6C4" rx="40" ry="40"></rect>';
                OrgChart.templates.polina.field_0 = '<text width="130" style="font-size: 18px;" fill="#000000" x="150" y="45" text-anchor="middle" class="field_0">{val}</text>';
                OrgChart.templates.polina.field_1 = '<text width="130" text-overflow="multiline" style="font-size: 12px;" fill="#ffffff" x="270" y="20" text-anchor="end" class="field_1">{val}</text>';
                this.chart = new OrgChart (this.divRef.current , {
                mode: "dark",
                template: "polina",
                layout: OrgChart.treeLeftOffset,
                enableSearch: false,
                mouseScrool: OrgChart.action.none,
                nodeBinding: {
                    field_0: "name",
                    field_1: "title",
                    img_0: "img"
                },
                menu: {
                    pdf: { text: "Exportar para PDF" },
                    png: { text: "Exportar para PNG" },
                    svg: { text: "Exportar para SVG" },
                    csv: { text: "Exportar para CSV" }
                },

                nodes: this.props.nodes,

                });
            }

            render() {
                return (
                    <><link rel="stylesheet" href="./style.css" />
                    <div id="tree" ref={this.divRef}></div></>
                );
            }
        }