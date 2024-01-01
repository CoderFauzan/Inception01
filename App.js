import React from "react";
import ReactDOM from "react-dom/client";

//React element

const heading = (
  <h1 id="heading" className="head">
    HI from jsx element
  </h1>
);
const Title = () => (
  <h1 id="heading" className="head">
    HI from component
  </h1>
);

//component composition
//React component
const HeadingComponent = () => (
  <div id="container">
    {heading}
    <h1>function component</h1>
    <Title />
    {Title()}
    <Title></Title>
  </div>
);

console.log(heading);
console.log(HeadingComponent);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(<HeadingComponent />);
