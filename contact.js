import React from "react";
import"./contact.css";
import Footer from "./footer";
class Contact extends React.Component{
    constructor(){
        super()
        this.state={
            empty:"",
            fname:"",
            lname:"",
            email:"",
            password:""  
        }
    }
    changee=()=>{
        this.setState({
            empty:"you should acquire and continue upgrading your knowledge of applicable programming language skills. Consider taking courses in relevantlanguages—like Python, HTML, CSS, and Javascript."
           
        })
    }
    changee1=()=>{
        this.setState({
            empty:""
        })
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
   
    handlesub=()=>{
        if(this.state.fname.length <6){
            alert("please enter more than 5 char.")
        }
        else if(this.state.password.length <10){
            alert("Message contain more than 10letters")
        }
        else{
            alert("Register succesfully submited"     + this.state.fname +     this.state.lname      +   this.state.email)
        
        }

    }
    
    render(){
        return(
            <div className="noor">
                
            <section className="jilan">
            <main className="haeeb">
           
            <form onSubmit={this.handlesub} className="for">
            <h4 className="human1">Fill & Get upto<br/>
25% OFF in<br/>
Courese Fees</h4>
                <label></label>
                <input className="inp" value={this.state.fname} required type="text" placeholder="Name*" onChange={this.handlefn}/>
                <br/>
                <label></label>
                <input className="inp" value={this.state.lname} required type="text" placeholder="10 digt mobile no*" onChange={this.handleln}/>
                <br/>
                <label></label>
                <input className="inp" value={this.state.email} required type="email" placeholder="Email*" onChange={this.handleem}/>
                <br/>
                <label></label>
                <input className="inp" value={this.state.password} type="text" placeholder="Message" onChange={this.handleps}/>
                <br/><br/>
                <input type="submit" value="I am Intrested, Tell me more.." className="butn1"/>

            </form>
                 </main>
           
            <h4 className="human">Full Stack Developer Training & Placements</h4> 
            
             
             
              
            
             
             
              <p className="pan">To be an effective full-stack developer, you should acquire and continue upgrading your
knowledge of applicable programming language skills. Consider taking courses in relevant
languages—like Python, HTML, CSS, and Javascript.<br/><br/>
To be an effective full-stack developer, {this.state.empty}

</p>
<button onClick={this.changee} onDoubleClick={this.changee1} className="butn">Learnmore</button>
      
<br/><br/><br/><br/><br/><br/><br/>
                <Footer></Footer>
                </section>
               
            </div>
        )
    }
}
export default Contact;