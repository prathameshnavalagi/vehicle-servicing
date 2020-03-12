import React, { Component } from 'react';
import './App.css';
import { 
  BrowserRouter as Router,
  Route
 } from "react-router-dom";
import Dashboard from "./containers/Dashboard";
import Register from "./containers/Register"
import Login from "./containers/Login";

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//       <Router>
//            <Route exact path="/" component={Dashboard}/>
//            <Route path="/register" component={Register}/>
//            <Route path="/login" component={Login}/>
//       </Router>
//       </div>
//     );
//   }
// }

// export default App;

function App() {
  return (
    <div className="App">
      <Login></Login>
    </div>
  );
}

export default App;
