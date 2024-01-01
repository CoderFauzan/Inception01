# React and JSX Essentials

## 1. What is JSX?
- **Description:** JSX (JavaScript XML) is a syntax extension for JavaScript, commonly used with React. It allows the representation of HTML elements and components in a JavaScript file, simplifying the description of UI components.

## 2. Superpowers of JSX:
- **Expressiveness:** JSX provides a concise and expressive way to describe UI components.
- **Component Rendering:** Enables easy rendering of React components.
- **JavaScript Integration:** Allows embedding JavaScript expressions within HTML-like syntax.

## 3. Role of `type` attribute in script tag?
- **Description:** The `type` attribute in the script tag specifies the MIME type of the script. Common options include:
  - `type="text/javascript"` (deprecated, default in HTML5).
  - `type="module"` for ECMAScript modules.
  - `type="application/javascript"` for regular JavaScript.

## 4. `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in JSX:
- `{TitleComponent}`: Represents a reference to a component, not rendering it. Used for passing components as props.
- `{<TitleComponent/>}`: Renders the `TitleComponent` using a self-closing tag.
- `{<TitleComponent></TitleComponent>}`: Also renders the `TitleComponent` using an opening and closing tag. The self-closing tag is equivalent in JSX.


