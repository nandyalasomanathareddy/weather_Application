import PropTypes from "prop-types";
import React from "react";

 class App extends React.Component{
    render(){
        const {name,email,idno,img}= this.props
        return(
            
            <section>
             {/* <img src={img} alt="person"/> */}
            <h6>Name:{name}</h6>
            <h6>Email:{email}</h6>
            <h6>IDno:{idno}</h6>
            
           


            </section>
        )
    }
 }

 //validating the data types

 App.prototype={
    name:PropTypes.String,
    email:PropTypes.String,
    idno:PropTypes.number
    
 }

 App.defaultprops={
    name:"raghav",
    email:"sopllk",
    idno:123
 }