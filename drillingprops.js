import {useState} from "react"

function App(){
    const [val,setVal]=useState("Good institue in bng")
    
    
    return(
        <div>
            <h4>Besant technology{val}</h4>
            <App1 value={val}/>
        </div>
    )
}

function App1({value}){
    return(
        <div>
            <h1>Besant technology chennai{value}</h1>
          
           <App2 value={value}/>

        </div>
    )
}

function App2({value}){
    return(
        <div>
            <h1>Besant technology chennai{value}</h1>
            
       <form>
           <select>
<option>OPen   this   select   Group</option>
           <option>Mba</option>
           <option>Mca</option>
           </select>
           



       </form>
        </div>
    )
}
export default App;