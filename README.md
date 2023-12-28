### ● What is Emmet? 

Emmet is a web development toolkit that greatly improves the efficiency of writing HTML and CSS code. 
It allows developers to write shorthand code that expands into well-formed HTML and CSS. 
Emmet abbreviations are designed to be intuitive and concise, enabling developers to write code more quickly and with fewer keystrokes.

### ● Difference between a Library and Framework?

The terms "library" and "framework" are often used in the context of software development, but they refer to different concepts. Here are the key differences between a library and a framework:

Control Flow:

Library: A library is a collection of pre-written code that you can use in your program. It provides specific functions or classes that you can call to perform tasks, but it doesn't dictate the overall structure or flow of your application.
Framework: A framework, on the other hand, provides a more comprehensive architecture for your application. It often includes a set of rules and guidelines that dictate the flow of control in your program. In a framework, the overall structure of your application is determined by the framework itself.

Inversion of Control (IoC):

Library: When you use a library, you are in control of the flow of your application. You call the library functions as needed.
Framework: In a framework, the control flow is inverted. The framework calls your code. It provides a skeleton where you plug in your code, following the framework's conventions.

Flexibility:

Library: Libraries are generally more flexible. You can choose which parts of the library to use and how to integrate them into your application.
Framework: Frameworks are more opinionated and may require you to follow specific patterns or structures. While this can speed up development, it may limit your flexibility.

Size and Scope:

Library: Libraries are typically smaller in scope and focused on specific tasks. They are meant to be reused in various projects.
Framework: Frameworks are more extensive and provide a broader set of tools and features. They often include libraries within them but also dictate the overall structure of your application.

Examples:

Library: jQuery (a JavaScript library for DOM manipulation), Requests (a Python library for making HTTP requests).
Framework: Django (a Python web framework), Ruby on Rails (a Ruby web framework), Angular (a JavaScript front-end framework).

### ● What is CDN? Why do we use it?

A CDN, or Content Delivery Network, is a network of distributed servers strategically located across the globe to deliver web content (such as images, stylesheets, scripts, and other resources) to users more efficiently. The primary purpose of a CDN is to improve the performance, reliability, and security of delivering web content to end-users.

Here are the main reasons why CDN is used:

Faster Content Delivery:

CDNs reduce latency by serving content from servers that are geographically closer to the user. When a user requests a resource, the CDN delivers it from the server that provides the fastest response time. This leads to quicker loading times for web pages and a better user experience.

Load Distribution:

CDNs distribute the load of delivering content across multiple servers. This helps prevent individual servers or data centers from becoming overloaded during periods of high traffic, ensuring consistent performance for users.

Scalability:

CDNs allow websites to scale more easily as they grow. By offloading the delivery of static assets to a CDN, the origin server can focus on handling dynamic content and application logic. This helps improve the scalability and reliability of web applications.

Reduction of Bandwidth Costs:

CDNs can help reduce the bandwidth costs for website owners. Since CDNs deliver content from servers located closer to users, it decreases the amount of data transferred over long distances and across the internet backbone, leading to cost savings.

Caching:

CDNs use caching mechanisms to store copies of static resources on their servers. When a user requests a resource, the CDN checks if it has a cached copy. If so, it delivers the cached version, reducing the need to fetch the resource from the origin server. This improves response times and reduces the load on the origin server.

Global Availability:

CDNs have a distributed network of servers worldwide, making it possible to serve content to users regardless of their geographic location. This global presence ensures a consistent and reliable user experience for a diverse audience.

Security:

CDNs often include security features to protect against common web threats, such as DDoS attacks. By filtering traffic at the edge of the network, CDNs can mitigate and absorb malicious traffic before it reaches the origin server.

### ● Why is React known as React?


React, the JavaScript library for building user interfaces, is known as "React" because of its fundamental concept of reacting to changes in data. The name reflects the reactive nature of the library, where the user interface reacts dynamically to changes in application state. This reactive programming paradigm is achieved through a virtual DOM (Document Object Model) and a unidirectional data flow.

Key aspects of why React is called "React":

Declarative Approach:

React takes a declarative approach to building UIs, where developers describe how the UI should look in different states, and React takes care of updating the actual DOM to match the desired state. Developers declare the desired UI state, and React reacts to changes in the application state.

Virtual DOM:

React uses a virtual DOM to optimize updates to the actual DOM. When the application state changes, React first updates a virtual representation of the DOM, and then it efficiently calculates the difference (diffing) between the virtual DOM and the real DOM. This minimizes the number of manipulations needed on the actual DOM, resulting in better performance.

Component-Based Architecture:

React encourages the development of UIs using a component-based architecture. Components are modular, reusable building blocks that encapsulate their own state and behavior. Each component can react independently to changes in its internal state, and the entire UI is composed of a tree of these interacting components.

Unidirectional Data Flow:

React follows a unidirectional data flow, meaning that data flows in a single direction through the application. This makes it easier to understand and reason about how data changes propagate through the UI. Changes to the application state trigger updates to the UI components in a predictable manner.

Reactivity:

Reactivity is a core principle of React. UI components automatically update in response to changes in the underlying data or state. This reactive behavior simplifies the development process and helps create dynamic and interactive user interfaces.

### ● What is crossorigin in script tag?

The crossorigin attribute in a <script> tag is used to control how the browser handles loading and executing scripts from external domains (i.e., domains different from the one serving the HTML document). This attribute is particularly relevant when dealing with scripts that may be subject to the Same-Origin Policy, a security measure implemented by web browsers to prevent certain types of web attacks.

The crossorigin attribute can have the following values:

Anonymous:

<script crossorigin="anonymous" src="..."></script>
In this mode, the browser fetches the script without sending any credentials (such as cookies or HTTP authentication) along with the request. This is suitable for scripts that are intended to be public and don't require authentication.

Use Credentials:

<script crossorigin="use-credentials" src="..."></script>
This mode allows the browser to include credentials (such as cookies) with the request when fetching the script. It is used when the script requires authentication to be loaded.

When to use crossorigin:

Same-Origin Policy Restrictions:

The Same-Origin Policy generally restricts web pages from making requests for resources (including scripts) on a different domain from the one that served the web page. The crossorigin attribute allows scripts to be loaded from different domains while adhering to security policies.

Cross-Origin Resource Sharing (CORS):

When a script is loaded from a different domain, the server hosting the script needs to include the appropriate CORS headers to allow the browser to fetch and execute the script. The crossorigin attribute helps enforce these policies.

### ● What is diference between React and ReactDOM

React is a JavaScript library designed for building user interfaces with a focus on creating reusable UI components. It employs a declarative approach to describe how the UI should look based on the application's state, making it easier to understand and maintain code. React utilizes a virtual DOM to optimize performance by updating only the parts of the actual DOM that have changed.

On the other hand, ReactDOM is a specific package within the React ecosystem that facilitates the interaction between React and the browser's Document Object Model (DOM). ReactDOM provides essential methods like render() to render React components into the actual DOM and update them efficiently. It serves as the bridge, ensuring that the virtual DOM managed by React is seamlessly translated into changes in the visible user interface on the web page.

### ● What is difference between react.development.js and react.production.js files via CDN?

When using React via a CDN (Content Delivery Network), you might come across two different versions of the React library: react.development.js and react.production.js. These files are provided for different environments and serve distinct purposes:

react.development.js:

Environment: This file is intended for development environments.
Characteristics:
Larger file size: The development version includes additional warning messages, comments, and debugging information to aid developers in identifying issues and understanding the behavior of their React applications.
Less optimized: The code is written in a way that makes it more human-readable and aids in debugging.
Console warnings: This version produces more detailed warnings and error messages in the browser console, helping developers identify and fix potential issues during development.

react.production.js:

Environment: This file is intended for production environments.
Characteristics:
Smaller file size: The production version is minified and stripped of unnecessary comments and debugging information, resulting in a smaller file size. This reduces the amount of data that needs to be transferred to the user's browser, improving page load times.
Optimized: The code is optimized for performance, and certain development-specific checks and features are removed.
Minimal console output: This version typically includes only essential warnings and errors in the console, reducing the amount of information exposed to end-users.

When deploying a React application to production, it is recommended to use the react.production.js file to benefit from the smaller file size and optimized performance. During development, the react.development.js file can be used to take advantage of the additional debugging information and warnings that aid in identifying and fixing issues more easily.

When integrating React via a CDN, you can choose the appropriate version based on your environment (development or production) and the specific requirements of your application.

### ● What is async and defer? -

async and defer are attributes used with the <script> tag in HTML to control the way external scripts are loaded and executed on a web page.

async:

When you include the async attribute in a script tag, it tells the browser to continue parsing the HTML document while simultaneously fetching and executing the script. The order in which scripts with the async attribute are executed is not guaranteed to be sequential, and they will run as soon as they are downloaded, potentially out of order relative to other elements on the page.
Use async when the order of script execution is not critical, and the script can run independently of other scripts or the DOM.
html

<script async src="example.js"></script>


defer:

The defer attribute, like async, is used to load external scripts. However, scripts with the defer attribute will be executed in the order in which they appear in the HTML document, but they will be deferred until the HTML parsing is complete. The scripts will be executed after the document has been parsed but before the DOMContentLoaded event.
Use defer when the order of script execution is important, and you want to ensure that the scripts are executed in the order they appear in the HTML document.
html

<script defer src="script1.js"></script>
<script defer src="script2.js"></script>


In summary:

Use async when script execution order is not critical, and scripts can run independently.
Use defer when script execution order matters, and you want to defer execution until after HTML parsing.
