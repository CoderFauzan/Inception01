import React from "react";
import  ReactDOM  from "react-dom/client";
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [ //Create an array of children
    React.createElement("h1", {}, "I'm a h1 tag"),
    React.createElement("h2", {}, "I'm a h2 tag"),
  ])
); //Nested div creation

const heading = React.createElement(
  "h1",
  { id: "heading1" },
  "Hello from react"
);

console.log(heading); //object
console.log(parent); //object

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
root.render(parent);
