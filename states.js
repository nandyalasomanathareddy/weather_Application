import React from "react"

class App extends React.Component{
    constructor(){
        super()
        this.state={
            name:"raghavsir",
            role:"Teaching python"
        }
    }
     
    change=()=>{
        this.setState({
            name:"kanan",
            Role:"institute Manger"
        
        })
    }
        change1=()=>{
            this.setState({

            
            name:"somu",
            role:"student"
            })
       }
       
    
    render(){
        return(
            <div>
                <h3>Python developer</h3>
                <p>Name:{this.state.name}</p>
                <p>Role:{this.state.role}</p>
                <button onClick={this.change}>Change</button>
                <button onClick={this.change1}>change1</button>
             
               

                <br/>

                <h2>0</h2>
            </div>
        )
    }
}
  

export default App;