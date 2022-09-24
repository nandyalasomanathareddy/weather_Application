import React from "react";

class App extends React.Component{
    constructor(){
          super();
       this.state={
            fname:"",
            lname:"",
            email:"",
            psword:"",
            cpsword:""
        }
    }
    hold=(a)=>{
        this.setState=({
            fname:a.target.value
        })
    }
    holda=(a)=>{
        this.setState=({
            lname:a.target.value
        })
    }
    holdb=(a)=>{
        this.setState=({
            email:a.target.value
        })
    }
    holdc=(a)=>{
        this.setState=({
            psword:a.target.value
        })
    }
    holdd=(e)=>{
        this.setState=({
            cpsword:e.target.value
        })
    
    }
    
      sbmit=()=>{
        if(this.state.fname.length<5){
            alert("Name enter more than 5cha")
        }
        else if(this.state.psword !== this.state.cpsword){
            alert("check the password")
        }
        else{
            alert("form sucessfuly complete")
        }
      }
    render(){
        return(
            <div>
                <h2>Form Validation</h2>
                <form onSubmit={this.sbmit}>
             <label>First Name:</label>
             <input value={this.state.fname} required type="text" placeholder="Enter firstname" onChange={this.hold} />
             <br/><br/>
             <label>Last Name:</label>
             <input value={this.state.lname} required type="text" placeholder="Enter lastname" onChange={this.holda}/>
             <br/><br/>
            <label>Email:</label>
            <input value={this.state.email} required type="email" placeholder="Enter email" onChange={this.holdb}/>
            <br/><br/>
            <label>Password:</label>
            <input value={this.state.psword} required type="password" placeholder="Password" onChange={this.holdc}/>
            <br/><br/>
            <label>Confirm Password</label>
            <input value={this.state.cpsword} required type="password" placeholder="Confirm password" onChange={this.holdd}/>
            <br/><br/>

              <input type="submit" value="Register" ></input>


                </form>



            </div>


        )
    }
}

export default App;