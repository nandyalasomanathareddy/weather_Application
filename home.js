import React from "react";
import Footer from "./footer";
import"./home.css";



class Home extends React.Component{
    constructor(){
        super()
        this.state={
            value:""
        }
    }
     change=()=>{
        this.setState({
            value:" Join hands with an NGO and ser the poor. Donate for education and help children attain ageappropriate learning."
            
        })
     }
     chang1=()=>{
        this.setState({
            value:""
        })
     }

    
    render(){
        return(
           
            <div className="siva">
                
                
                
            <section className="rana">
            <main className="abhi">
                 <img className="image" src="https://images.pexels.com/photos/4143791/pexels-photo-4143791.jpeg?auto=compress&cs=tinysrgb&w=800" width="250px" height="250px"/>
                 </main>
           
            <h4 className="header4">Kids Learning Center</h4> 
              <h2 className="header2">New Approach to<br/>Kids Education</h2>
             
             
              
            
             
             
              <p className="para1">Make education possible for every child. Join hands with an<br/>
NGO and serve the poor. Donate for education and help<br/>
children attain age-appropriate learning. Make education<br/>
Make education possible for every child. Join hands with an<br/>
{this.state.value}


</p>
<input type="button" onClick={this.change} onDoubleClick={this.chang1} className="btn1" value="Learnmore"/>
<br/>
                <Footer></Footer>


                
                </section>
           
         
               
                
            </div>
            
        )
    }
    }

   
export default Home;