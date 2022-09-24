import PropTypes from "prop-types"
import React from "react"

 class App extends React.Component{
    render(){
        const {name,email,idno}= this.props
        return(
            
            <section>
             <img src={img} alt="person"/>
            <h6>Name:{name}</h6>
            <h6>Email:{email}</h6>
            <h6>IDno:{idno}</h6>
            
           


            </section>
        )
    }
 }

 // proptypes---> validating the data types


   //function write
//  function App({name,id}){
//     return(
//         <div>
//          <p>name:{name}</p>
//          <p>id:{id}</p>


//         </div>
//     )
//  }

 App.Prototype={
    name:PropTypes.string,
    // email:PropTypes.string,
    idno:PropTypes.number
    
 }

 App.defaultProps={
    name:"raghav",
    email:"somu@gmail.com",
    idno:123
    //id:123
 }

 export default App;