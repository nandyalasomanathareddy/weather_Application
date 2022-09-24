import React from "react";
import { Form } from "react-bootstrap";
import "./footer.css"


function Footer(){
    return(
        <div className="harsha">
            <section className="sasi">
           <footer className="foot">
   <nav className="div">
   
      <h4>Rent car <br/> Service</h4>
            <p>Secure Your Car Hire Today. The Best Price Guaranteed.<br/> Book at Over 53,000 Locations. Search, <br/>Compare and Save Using the World's Bigg </p>
            </nav>
            <nav className="navy">
          <h4>Quick Links</h4>
          <ul className="rrr">
           <a>About</a><br/>
           <a>PrivacyPolicy</a><br/>
           <a>CarListing</a><br/>
           <a>Blog</a><br/>
           <a>Contact</a>
            
          </ul>
            </nav>

            <nav className="kav">
                <h4>Head Office</h4>
                <address>
                 123 Marthalli,Banglore,Karnataka<br/>
                 Phone:+919160613650<br/>
                 Email:somanathreddy01@gmail.com<br/>
                 Office Time: 10am-7pm
               
                </address>
            </nav>

            <nav className="src">
           <h4>Newsletter</h4>
           <p>Subscribe our newsletter</p>
           <input className="ema" type="email" placeholder="email"/>
            </nav>

           







           </footer>


            </section>

            <nav className="copy">
                <p className="cp"><hr/>
                    &copy;{new Date().getFullYear()}.Developed by Somanathredy.All rights reserved
                </p>

            </nav>

         
        </div>
    )
}
export default Footer;