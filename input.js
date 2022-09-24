import React from "react"
import "./input.css"

class Red extends React.Component{
    render(){
        return( 
            <div className="Input">
                <form>
                <h3>Login</h3>
                <label>Name:</label>
             <input type="text"/><br/><br/>
             <label>Adress:</label>
             <textarea></textarea><br/><br/>
             <label>Pincode:</label>
             <input type="number"/><br/><br/>
             </form>
             <Red1/>
                
            </div>
        )
    }
}
class Red1 extends React.Component{
    render(){
        return( 
            <div className="Btn">
                
             <button>Login</button><br/><br/>
             
            
             
           
            </div>
        )
    }
}

export default Red;