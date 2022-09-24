import React from "react";
import Footer from "./footer";
import "./gallery.css"
class Gallery extends React.Component{
    render(){
        return(
            <div className="sai">
                <main className="ravi">
                <img className="img1" src="https://images.pexels.com/photos/8617902/pexels-photo-8617902.jpeg?auto=compress&cs=tinysrgb&w=800" width="200px" height="200px"/>
                <img className="img2" src="https://images.pexels.com/photos/8457705/pexels-photo-8457705.jpeg?auto=compress&cs=tinysrgb&w=800" width="200px" height="250px"/>
                <img src="https://images.pexels.com/photos/8613059/pexels-photo-8613059.jpeg?auto=compress&cs=tinysrgb&w=800" width="250px" height="250px"/>
                <img src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800" width="250px" height="250px"/>
                <img src="https://images.pexels.com/photos/8613319/pexels-photo-8613319.jpeg?auto=compress&cs=tinysrgb&w=800" width="250px" height="250px"/>
                <img src="https://images.pexels.com/photos/296301/pexels-photo-296301.jpeg?auto=compress&cs=tinysrgb&w=800" width="250px" height="250px"/>
                <img src="https://images.pexels.com/photos/939702/pexels-photo-939702.jpeg?auto=compress&cs=tinysrgb&w=800" width="250px" height="250px"/>
                <img src="https://images.pexels.com/photos/1149022/pexels-photo-1149022.jpeg?auto=compress&cs=tinysrgb&w=800" width="250px" height="250px"/>
                </main>
                <section className="sera">
                <h4 className="kgf" >Get to know us better</h4>
                
              
                </section>
                <Footer></Footer>
             
                
             
              
              
            
              
             


            </div>
        )
    }
}


export default Gallery;