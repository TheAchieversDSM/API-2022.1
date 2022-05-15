import React ,{Component} from "react";
import {Link} from "react-router-dom"

type props ={
    id: any
}

class Text extends Component <props>{
    render(){
        return (
            <div className="input-field col s12">
                <textarea id={this.props.id} className="materialize-textarea"></textarea>
                <label htmlFor="textarea1">Descrição do que está errado ou que está faltando</label>
            </div>
        )
    }
}

export default Text;