import React from "react";
import { useState } from "react";

function App(){
    const [loading,setLoading]=useState("")

    const change=()=>{
        setLoading("goodmorning")
    }
    const change1=()=>{
        setLoading("")
    }
    const change3=(e)=>{
        setLoading(e.target.value)

    }
    
    return(
       <div>
      <h2>Hello world</h2>
       <input onChange={change3}/>
      <p>{loading}</p>
      <button onClick={change} onDoubleClick={change1}>click</button>
     
       </div>
    )
}
export default App;