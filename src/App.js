import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Login from './containers/Login';
import Home from './containers/HomePage';
import Register from './containers/SignUp';
import About from './containers/AboutUs';
import Price from './containers/Price';
import Offers from './containers/Offers';
import Contact from './containers/ContactUs';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
        </Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={ Home }/>
            <Route path="/login" component={ Login }/>
            <Route path="/register" component={ Register }/>
            <Route path="/about" component={ About }/>
            <Route path="/pricing" component={ Price }/>
            <Route path="/offers" component={ Offers }/>
            <Route path="/contact" component={ Contact }/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
