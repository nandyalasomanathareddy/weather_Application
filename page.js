import React from "react";
import "./page.css"
class Page extends React.Component{
    render(){
        return(
            <div className="sus">
            <h1 className="dv">R e a c t    d e v e l o p e r</h1>
            <section className="prem">
                <nav className="nav1">
            <h2 className="man">Developer</h2>
            <p className="asm">React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update <br/>and render just the right components when your data changes.<br/>

Declarative views make your code more predictable and easier to debug.</p>
</nav>
<main className="senior">
     <h2>Component-Based </h2>
     <p>Build encapsulated components that manage their own state, then compose them to make complex UIs.

Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.</p>
</main>
<article className="arti">
<h2>Learn Once, Write Anywhere</h2>
<p>We don't make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.

React can also render on the server using Node and power mobile apps using React Native.</p>
<br/>

</article>


     </section><br/>

    
            </div>
            
        )
    }
}
export default Page;