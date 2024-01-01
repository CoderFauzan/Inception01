# Web Development FAQs

A collection of frequently asked questions (FAQs) related to web development concepts.

## Q: What is Emmet?

Emmet is a web development toolkit that enhances HTML and CSS coding efficiency by allowing developers to use shorthand syntax for quick expansion into well-formed code.

## Q: Difference between Library and Framework?

- **Control Flow:**
  - *Library:* Collection of pre-written code, used at developer's discretion.
  - *Framework:* Dictates overall application structure and flow.

- **Inversion of Control (IoC):**
  - *Library:* Developer controls flow.
  - *Framework:* Framework controls flow, calls developer's code.

- **Flexibility:**
  - *Library:* More flexible, specific tasks.
  - *Framework:* Opinionated, specific patterns.

- **Size and Scope:**
  - *Library:* Smaller, focused, reusable.
  - *Framework:* Broader, includes tools and features.

- **Examples:**
  - *Library:* jQuery, Requests.
  - *Framework:* Django, Ruby on Rails, Angular.

## Q: What is CDN and Why Use It?

CDN (Content Delivery Network) is a network of distributed servers for efficient web content delivery. Used for:
- Faster content delivery.
- Load distribution.
- Scalability.
- Bandwidth cost reduction.
- Caching.
- Global availability.
- Security.

## Q: Why is React known as React?

React is named for its reactive nature. It reacts to changes in data, employing a declarative approach, a virtual DOM, component-based architecture, unidirectional data flow, and reactivity.

## Q: What is crossorigin in script tag?

The `crossorigin` attribute in a `<script>` tag controls how browsers handle loading and executing scripts from external domains. It's crucial for overcoming Same-Origin Policy restrictions and enforcing Cross-Origin Resource Sharing (CORS).

## Q: Difference between react.development.js and react.production.js files via CDN?

- **react.development.js:**
  - For development environments.
  - Larger file size, more human-readable.
  - Detailed console warnings for debugging.

- **react.production.js:**
  - For production environments.
  - Smaller file size, optimized for performance.
  - Minimal console output for end-users.

## Q: What is async and defer?

- **async:**
  - Fetches and executes script simultaneously.
  - Order of execution not guaranteed.
  - Use when order is not critical.

- **defer:**
  - Defers script execution until after HTML parsing.
  - Executes in order of appearance in HTML.
  - Use when order of execution is crucial.
