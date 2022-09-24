import React from "react"
import "./booktask.css"

class App extends React.Component{
    constructor(){
        super()
        this.state={
               p:"1",
               value:0
        }
        this.turn.bind(this)
       
    }
    
    count=()=>{
      
        this.setState({
            p:"The content was good"
        })
       
    }
    turn =(e)=>{
        this.setState({
            clickme:e.target.value
        })
    }
    componentDidUpdate(){
        console.log(this.state)
    }
    
    inc=()=>{
            this.setState({
                    value:this.state.value +1
        })
    }
    inc1=()=>{
        this.setState({
                value:this.state.value -1
    })
}
inc2=()=>{
    this.setState({
            value:0
})
}


    
    render(){
        return(
            <div>
                <section>
                    <img src="https://images-na.ssl-images-amazon.com/images/I/91YPlS-HzxL.jpg"/>
                    <h5>Title: The return king</h5>
                    <h6>Author: J.R.R.Tolken</h6>
                    <p className="p">{this.state.p}</p>
                   
                    <button className="btn" onClick={this.turn}>Click</button>
                    <input onChange={this.turn}/>
                    
                  
                </section>
         <br/>
                <section>
                    
                    <img src="https://images-eu.ssl-images-amazon.com/images/I/412mLS7HEVL._SX342_SY445_QL70_ML2_.jpg"width="80px" height="80px"/>
                    <h5>Title: The story of experiments with truth</h5>
                    <h6>Author:Mahathma Gandhi</h6>
                    <h4>Count:{this.state.value}</h4>
                    <h5>Name:Naveen</h5>
                    <nav className="nav">
                    <button onClick={this.inc}>inc</button>
                    <button onClick={this.inc1}>dec</button>
                    <button onClick={this.inc2}>Reset</button>
                    </nav>
                    
                  
                </section>
            <br/>
            
            <section>
                    <img src="https://images-na.ssl-images-amazon.com/images/I/518J5VBC17L.jpg"width="80px" height="80px"/>
                    <h5>Title: You can win</h5>
                    <h6>Author:Shiv Akhira
                    </h6>
                </section>
            
                
                



            </div>
        )
    }


}

// class App1 extends React.Component{
//     constructor(){
//         this.state={
//             value:0
//         }
//     }
//     inc =()=>{
//         this.setState({
//             value:this.state.value +1
//         })
//     }
//     render(){
//         return(
//             <div>
//                 <h3 onClick={this.inc}>Count</h3>
         

//             </div>
//         )
//     }
// }



export default App;