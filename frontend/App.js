const React = require ("react");
const Home = require("./src/pages/Home.jsx");

require ("./src/styles/App.css");
require ('./src/styles/bootstrap.min.css')


const App = () => {
  
  return (
    <div className="d-flex">
      <Home/>
      
    </div>
  )
}
module.exports = App;