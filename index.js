import App from "./fire.js"
import ReactDOM from "react-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)


ReactDOM.render(<App/>,document.getElementById("root"))

