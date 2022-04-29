import React, { Component } from 'react';
import axios from 'axios';

export default class OrganoNode extends Component {

    render () {
        const node = {id: this.props.id, name: this.props.name, pid: this.props.pid, title: this.props.title, img: this.props.img}
        return (
            <>
                
                        {node}
                    
                
            </>
        )
    }
}