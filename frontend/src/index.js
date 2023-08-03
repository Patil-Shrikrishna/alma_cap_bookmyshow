const React = require ('react');
const ReactDOM = require ('react-dom');
const App = require ("../App");
const  {createRoot}  = require("react-dom/client") ;

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <App />
);