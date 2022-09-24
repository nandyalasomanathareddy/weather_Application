import React from "react";

 class App extends React.Component{
    render(){
        const {name,email,idno,img}= this.props
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

 class App1 extends React.Component{
    render(){
        return(
            <section>
             <h3>Empolye Details</h3>
             <App name="Sudharshan" email="sudha123@gmail.com" idno="123@sudha" img="https://randomuser.me/api/portraits/thumb/men/65.jpg"/>
             <App name="Somu" email="somunana12@gmail.com" idno="124@so" img="https://randomuser.me/api/portraits/thumb/men/34.jpg"/>
            </section>
        )
    }
 }
 export default App1;
 