import React from "react"
import "./des.css"

class App extends React.Component{
  render(){
    return(
      <div>
      <div className="Temp">
      <div className="Suddi">
        <div className="Head">
         <h3>DORSIN</h3>
        </div>
        <div>
           <ul className="List">
            <li><a >Home</a></li>
            <li><a>Service</a></li>
            <li><a>Features</a></li>
            <li><a>Pricing</a></li>
            <li><a>Terms</a></li>
            <li><a>Plog</a></li>
            <li><a>Contact</a></li>
           </ul>
        </div>
        <div className="Try">
            <button className="But">Try a Free</button>
        </div>
      </div>
      <div className="Help">
          <h1>We Help startups launch their</h1>
          <h1>Products</h1>
          <p>Etians sad intredum consequest proins vistibulum className at. </p>
        </div>
      </div>
      <div>
       <App1/>
      </div>
      </div>
    )
  }
}

class App1 extends React.Component{
  render(){
    return(
      <div>
        <div className="Our">
          <h1>OUR SERVICE</h1>
          <hr className="Horizantal"/>
          <p>We craft digital and thinking to crate category loading brand expernce that have the meaningand add value for our clients</p>
        </div>
        <div className="Digital">
          <div className="Design">
            <img src="https://cdn-icons-png.flaticon.com/128/1383/1383676.png" width="50px" height="50px"/>
            <h3>Digital Design</h3>
            <p>Some quick exmples text to the card an dmake the but of the cards content Malin gives platforms </p>
          </div>
          <div className="Unlimited">
          <img src="https://cdn-icons-png.flaticon.com/128/2071/2071669.png" width="50px" height="50px"/>
            <h3>Unlimited Colors</h3>
            <p>Credcly brand standrds compnent users Without experince servises </p>
          </div>
          <div className="Stratagy">
          <img src="https://cdn-icons-png.flaticon.com/128/993/993686.png" width="50px" height="50px"/>
            <h3>Stratagy Solutions</h3>
            <p>Credcly brand standrds compnent users Without experince servises </p>
          </div>
        </div>

      </div>
    )
  }
}
   export default App;