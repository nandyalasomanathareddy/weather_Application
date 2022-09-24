import React from "react";
class App extends React.Component{
    constructor(){
        super()
        this.state={
            color:"Red"
        }
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({
                color:"Blue"
            })
        }, 2000);
    }
  componentDidUpdate(){
    document.getElementById("wwe").innerHTML="Updated color:"+this.state.color
  }
  getSnapshotBeforeUpdate(prevProps,prevState){
    document.getElementById("wwe2").innerHTML="Before upated color:"+prevState.color
  }

    render(){
        return(
     <div>
        <center>
      <h3>{this.state.color}</h3>
     <h2 id="wwe"></h2>
     <h4 id="wwe2"></h4>
      </center>
     </div>


        )
    }
}





















//     shouldComponentUpdate(){
//         document.getElementById("div").innerHTML= true
//     }

export default App;