import React from "react";

class App extends React.Component{
    constructor(){
        super()
        this.state={
            name:"hello",
            value:"everyone"
        }
    }
    componentWillMount(){
        alert("this is willmount")
    }
    render(){
        return(
            <div>

          <p>{this.state.name} {this.state.value}</p>
          <p id="para"></p>
          <button onClick={this.change}>Click</button>
          <button onClick={this.delete}>Delet</button>
            </div>
        )
    }
    change=()=>{
        this.setState({
            name:"Good morning"
        })
    }
    delete=()=>{
        this.setState({
            name:false,
            value:false
        })
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({
                name:"good morning"
            })
        }, 2000);
       
    }
    componentDidUpdate(){
        document.getElementById("para").innerHTML="updating elemnts:" + this.state.name 
       }
    componentWillUpdate(){
        alert("this is willupdate")
    }
    
}

export default App;