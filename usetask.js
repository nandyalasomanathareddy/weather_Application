import React from "react";
import"./usetask.css"
import {useState} from "react"
function App(){
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [number,setNumber]=useState("")
    const [password,setPassword]=useState("")
    const [cpassword,setCpassword]=useState("")
  
    const change=(e)=>{
        setName(e.target.value)
    }
    const change1=(e)=>{
        setEmail(e.target.value)
    }
    const change2=(e)=>{
        setNumber(e.target.value)
    }
    const change3=(e)=>{
        setPassword(e.target.value)
    }
    const change4=(e)=>{
        setCpassword(e.target.value)
    }
    const submit =()=>{
        if(name.length < 6){
            alert("enter more than 6")
        }
        else if(password !== cpassword){
            alert("check the password")
        }
        else{
            alert("Account sucessfully completed")
        }
        
        
    }
    
        return(
            <div>
                <center>
                <form onSubmit={submit}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Facebook_icon.svg/2048px-Facebook_icon.svg.png"width="50px"height="50px"/>
                    <h3>Facebook Register</h3>
          <input value={name} required type="text" placeholder="enter name" onChange={change}/><br/><br/>

          <input value={email} required type="email" placeholder="enter email" onChange={change1}/><br/><br/>
          <input value={number} required type="number" placeholder="enter mobile number" onChange={change2}/><br/><br/>
          <input value={password} required type="password" placeholder="passowrd" onChange={change3}/><br/><br/>
          <input value={cpassword} required type="password" placeholder="confirm password" onChange={change4}/><br/><br/>
          <input className="btn" type="submit" value="Register"/>
          </form>

          </center>
            </div>
        )
}
export default App;