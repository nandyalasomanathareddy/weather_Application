import React from "react";
import"./router.css"

import Home from "./home";
import About from "./aboutt";
import Contact from "./contact";
import Gallery from "./gallery"
import Page from "./page";



import{BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import Footer from "./footer";




class App extends React.Component{
    render(){
        return(
            <div className="daku">
             
                <Router>
                
                
                    
                <ul className="unorder">
                <li className="lih">R e a c t   D e v e l o p e r</li>
                
                  
                <li className="liger"><Link to="/p">Home</Link></li>
                <li  className="liger"><Link to="/a">About</Link></li>
                <li  className="liger"><Link to="/s">Contact</Link></li>
                <li  className="liger"><Link to="/g">Gallery</Link></li>
                <li  className="liger"><Link to="/n">Page</Link></li>
                <li  className="liger"><Link to="/s"><button><a href="#">Joinus</a></button></Link></li>
                </ul>
                <Routes>
                   <Route path="/p" element={<Home/>}/>
                   <Route path="/a" element={<About/>}/>
                   <Route path="/s" element={<Contact/>}/>
                   <Route path="g" element={<Gallery/>}/>
                   <Route path="/n" element={<Page/>}/>
                </Routes>
            
                   
                </Router>
              
                
                <main className="main">
                <ol className="ol">
                    <li className="line">Front End!</li>
                    <li  className="line">Back End!</li>
                    <li  className="line">Database</li>
                    <li  className="line">Career path</li>

                </ol>

                
                <h1 className="header1">Benifts of Working at Besant</h1>
                <p className="par">At KLAY, We believe, Happy Employees = Happy Children = Happy Customers!<br/>
Therefore, we provide benefits beyond the basic necessities like medical insurance and flexibility that support a balanced<br/>
life.
</p><br/><br/>
      <section className="subbu">
        <ol className="sec">
        <li>Staff Child Care</li>
                    <li className="line1">Medical Insurance/ESI</li>
                    <li className="line1">Provident Fund </li>
                    <li className="line1">Annual Bonus</li>
                    <li className="line1">Attendance</li>

        </ol>
         <p className="p">In order to enable employees to bring their children to work and provide them with world class education, we have an employee-child education policy in
place. Employees with young children who fit into the age group and schooling programmes offered in the Centre they are working at, can enrol their
child in to their age specific programmes. The fee for the schooling/day care program will be subsidised</p>


      </section>
      
               </main>
              
               <Footer></Footer>
                 
            </div>



        )
    }

}

export default App;