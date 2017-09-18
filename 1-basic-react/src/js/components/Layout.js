import React from "react";

import Header from "./Header"
import Footer from "./Footer"

 export default class Layout extends React.Component {

    constructor(){
        super();
        this.state={name:"Enter Name"};
        this.name='pahul';
    }

    changeInput(name){
        this.setState({name});

    }
    render(){
        const title="waah yr"
        return(
            <div>
            <Header chnginput={this.changeInput.bind(this)} test={this.state.name}/>
            
            <h1>hey there</h1>
            <h2>{this.name} </h2>
            <Footer/>
            </div>
        );
    }
}