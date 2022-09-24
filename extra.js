import React from "react";

import"./extra.css";
import Home from "./home";
import About from "./about";
import Contact from "./contact";
import Gallery from "./gallery"
import Page from "./page"


import{BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";

class App extends React.Component{
    render(){
        return(
            <div>
                <Router>
                
                    
                <ul >
                
                  <li className="lih">R e a c t   D e v e l o p e r</li>
                <li><Link to="/h">Home</Link></li>
                <li><Link to="/j">About</Link></li>
                <li><Link to="/k">Contact</Link></li>
                <li><Link to="/l">Gallery</Link></li>
                <li><Link to="/m">Page</Link></li>
                <li><button><a href="#">Joinus</a></button></li>


                </ul>
                <Routes>
                   <Route path="/h" element={<Home/>}/>
                   <Route path="/i" element={<About/>}/>
                   <Route path="/j" element={<Contact/>}/>
                   <Route path="/k" element={<Gallery/>}/>
                   <Route path="/l" element={<Page/>}/>
                  
                </Routes>
                </Router>
                </div>
        )
    }
}
export default App;