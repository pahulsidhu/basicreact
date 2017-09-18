import React from "react";

export default class Header extends React.Component{

    handleChange(e){
        const name=e.target.value;
        this.props.chnginput(name);
    }

    render(){
       
        return(
            
            <div>
            <header>header it is {this.props.test} </header>
            <input value={this.props.test} onChange={this.handleChange.bind(this)}/>
            </div>
        );
    }

}