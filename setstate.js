import React from "react"

class App extends React.Component{
    constructor(){
        super()
      this.state={
        value:0
      }
      }
      increase=()=>{
        this.setState({
            value:this.state.value +1
        })
      }
      decrease=()=>{
        this.setState({

        
        value:this.state.value -1
        })
      }

      reset=()=>{
        this.setState({
            value:0
        })
      }

    render(){
        return(
            <div>
           
             <h2 >{this.state.value}</h2>
             <button onClick={this.increase}>Increase</button>
            <button onClick={this.decrease}>Dec</button>
            <button onClick={this.reset}>Reset</button>
            </div>
        )
    }
}
export default App;
