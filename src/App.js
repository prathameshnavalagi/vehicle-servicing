import React, { Component } from 'react';
import Layout from './website/components/Layout/Layout';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Login from './website/containers/Login';
import Home from './website/containers/HomePage';
import Register from './website/containers/SignUp';
import About from './website/containers/AboutUs';
import Price from './website/containers/Price';
import Offers from './website/containers/Offers';
import Contact from './website/containers/ContactUs';
import Users from './admin/containers/AddUsers';

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
            <Route path="/addUsers" component={ Users }/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
