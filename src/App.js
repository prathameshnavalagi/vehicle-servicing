import React, { Component } from 'react';
import Layout from './website/components/Layout/Layout';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

//Website
import Login from './website/containers/Login';
import Home from './website/containers/HomePage';
import Register from './website/containers/SignUp';
import About from './website/containers/AboutUs';
import Price from './website/containers/Price';
import Offers from './website/containers/Offers';
import Contact from './website/containers/ContactUs';

//Admin
import AdminDashboard from './admin/containers/Dashboard';
import AddingUsers from './admin/containers/AddUsers';
import ManagingUsers from './admin/containers/ManageUsers';
import ServiceRequest from './admin/containers/ServiceRequest';
import NewService from './admin/containers/NewService';
import PendingService from './admin/containers/PendingService';
import VehicleCategory from './admin/containers/VehicleCategory';
import Reports from './admin/containers/Reports';
import CustomerEnquiry from './admin/containers/CustomerEnquiry';

//Customer
import CustomerServiceRequest from './customer/containers/ServiceRequest/index';
import CustomerService from './customer/containers/Service/index';
import CustomerServiceHistory from './customer/containers/ServiceHistory/index';

//Supervisor
import SupervisorService from './supervisor/containers/Service/index';
import SupervisorServiceRequest from './supervisor/containers/ServiceRequest/index';

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

            <Route path="/adminDashboard" component={ AdminDashboard }/>
            <Route path="/addUsers" component={ AddingUsers }/>
            <Route path="/manageUsers" component={ ManagingUsers }/>
            <Route path="/serviceRequest" component={ ServiceRequest }/>
            <Route path="/newService" component={ NewService }/>
            <Route path="/pendingService" component={ PendingService }/>
            <Route path="/vehicleCategory" component={ VehicleCategory }/>
            <Route path="/reports" component={ Reports }/>
            <Route path="/customerEnquiry" component={ CustomerEnquiry }/>

            <Route path="/customerServiceRequest" component={ CustomerServiceRequest }/>
            <Route path="/customerService" component={ CustomerService }/>
            <Route path="/customerServiceHistory" component={ CustomerServiceHistory }/>
            <Route path="/supervisorService" component={ SupervisorService }/>
            <Route path="/supervisorServiceRequest" component={ SupervisorServiceRequest }/>            
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
