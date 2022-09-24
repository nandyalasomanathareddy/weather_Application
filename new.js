import React from "react"
import "./cr.css"

class Red extends React.Component{
    render(){
        return(
            <div>
            
             <div className="List">

              <nav id="main"> 
              <div><h3 className="h3">DISTON</h3></div>
             
              <ul>
           
             
              
              <li><a >Home</a></li>
                    <li><a >Services</a></li>
                    <li><a>Features</a></li>
                    <li><a>Pricing</a></li>
                    <li><a>Team</a></li>
                    <li><a>Blog</a></li>
                    <li><a>Contact</a></li>

                    <div className="Btn">
                <button className="Butn">Try it Free</button>
                </div>
                    
                </ul>
                
                
                
              
                <main className="Main">
                <h1>We help starups launch their <br/> products</h1>
                <p>Etians sad intredum consequest proins vistibulum className at.</p>
                </main>
                </nav>
                </div>
                
                    <section>
                        
                        <h1>OUR SERVICES</h1>
                        
                        
                        <h6>We craft digital and dimentianal thinking to create category loading brand experiences <br/>that have meaning and add a value for our clients</h6>
                    </section>
                    <article>
                        <nav id="nav">
                        <img src="https://cdn-icons-png.flaticon.com/512/1383/1383676.png"width="50px"height="50px"/>
                    <h1>Digital Design<br/></h1>
                        <p>Some quick example text to bulid an the card bite and make <br/>at the block of the design</p>
                        </nav>
                        <nav id="nav1">
                            <img src="https://cdn-icons-png.flaticon.com/512/2071/2071669.png"width="50px"height="50px"/>
                    <h1>Unlimited Colors<br/></h1>
                    <p>Credley brand standards comliant users without extensable Services.<br/>anth esmoshed bondument at current</p>
                        </nav>
                        <nav id="nav2">
                            <img src="https://cdn-icons-png.flaticon.com/512/993/993723.png"width="50px"height="50px"/>
                    <h1>Strategy Solutions</h1>
                        <p>Strategy Solutions, Inc. (SSI) is a business development firm that provides strategic planning, market research and project management services to organizations and <br/> communities who want to grow and thrive.</p>
                        </nav>
                    </article>
            </div>
        )
    }
}
export default Red;