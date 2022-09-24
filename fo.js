import React from "react";
import "./fo.css"
class App extends React.Component{
    constructor(){
        super()
        this.state={
            fname:"",
            lname:"",
            email:"",
            password:"",
            cpassword:""
        }
    }
    handlefn=(e)=>{
    this.setState({
    fname:e.target.value
    })
    }
    handleln=(e)=>{
        this.setState({
            lname:e.target.value
        })
    }
    handleem=(e)=>{
        this.setState({
            email:e.target.value
        })
    }
    handleps=(e)=>{
        this.setState({
            password:e.target.value
        })
    }
    handlecp=(e)=>{
        this.setState({
            cpassword:e.target.value
        })
    }
    handlesub=()=>{
        if(this.state.fname.length <6){
            alert("please enter more than 5 char.")
        }
        else if(this.state.password !== this.state.cpassword){
            alert("check the password")
        }
        else{
            alert("Register succesfully submited"     + this.state.fname +     this.state.lname      +   this.state.email)
        
        }

    }
    

render(){
    return(
        <div>
            <h2>Form Validation</h2>
            <form onSubmit={this.handlesub} className="for">
                <label>FirstName:</label>
                <input value={this.state.fname} required type="text" placeholder="enter firstname" onChange={this.handlefn}/>
                <br/><br/>
                <label>LastName:</label>
                <input value={this.state.lname} required type="text" placeholder="enter lasttname" onChange={this.handleln}/>
                <br/><br/>
                <label>Email:</label>
                <input value={this.state.email} required type="email" placeholder="enter email" onChange={this.handleem}/>
                <br/><br/>
                <label>Password:</label>
                <input value={this.state.password} type="password" placeholder="enter password" onChange={this.handleps}/>
                <br/><br/>
                <label>Confirmpassword:</label>
                <input value={this.state.cpassword} type="password" placeholder="confirm passowrd" onChange={this.handlecp}/>
                <br/><br/>
                <input type="submit" value="Register" className="btn"/>

            </form>




        </div>

    )
}


}
export default App;