import  PropTypes from "prop-types"
import React from "react"

class App extends React.Component{
    render(){
        const {name,id}=this.props
        return(

                 <div>
                   
                        <p>Name:{name}</p>
                        <p>Id:{id}</p>




                 </div>


        )
    }
}

App.Prototype={
   
    name:PropTypes.string,
    id:PropTypes.number
}

App.defaultProps={

    name:"somu",
    id:47

}

export default App;