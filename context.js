import React from "react";
import { RouterProvider } from "react-router-dom";
let Context = React.createContext()
function App(){
    return(
        <div>
            <Context.Provider value={"helo super python"}>
            <h6>Besaant</h6>
            </Context.Provider>
        </div>
    )
}