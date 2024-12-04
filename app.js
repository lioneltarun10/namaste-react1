import React from "react";
import ReactDOM from "react-dom/client";


const elem = <div>React Element</div>



// JSX - is not HTML in JS , its a HTML like syntax
const title = (
  
<h1 className="head" tabIndex="5">
 {elem} Namaste react using JSX
    </h1>
    )


// Component Composition
const HeadingComponent = () => (
    <div id="container">  
    {title}
        <h1 className="heading">Namaste React Functional Component</h1>
   </div>
)



const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<HeadingComponent></HeadingComponent>)
