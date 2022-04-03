import React, { Component } from 'react';
import OrgStruct from '../organoStruct/';

export default class OrganoChart extends Component {
    render() {
        return (
            <div style={{height: '100%'}}>

                <OrgStruct nodes={[
                    { id: 1, name: "Amber McKenzie", title: "CEO", img: "https://cdn.balkan.app/shared/empty-img-white.svg" },
                    { id: 2, pid: 1, name: "Ava Field", title: "IT Manager", img: "https://cdn.balkan.app/shared/empty-img-white.svg" },
                    { id: 3, pid: 1, name: "Rhys Harper",title: "HR Manager", img: "https://cdn.balkan.app/shared/empty-img-white.svg" },
                    { id: 4, pid: 2, name: "Mariana Ayumi",title: "IT Intern", img: "https://cdn.balkan.app/shared/empty-img-white.svg" },
                    { id: 5, pid: 2, name: "Maria Clara",title: "IT Intern" ,img: "https://cdn.balkan.app/shared/empty-img-white.svg" },
                    { id: 6, pid: 3, name: "Rikio Anzai", title: "HR Intern", img: "https://cdn.balkan.app/shared/empty-img-white.svg" },
                    { id: 7, pid: 3, name: "Gizeli Fonseca", title: "HR Intern", img: "https://cdn.balkan.app/shared/empty-img-white.svg" },                            
                ]} />
            </div>
        );
    }
}