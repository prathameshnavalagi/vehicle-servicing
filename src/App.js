import React, { Component } from 'react';
import Layout from './website/components/Layout/Layout';
import { ProtectedRoute } from './website/components/ProtectedRoute';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

//Website
import Login from './website/containers/Login/index';
import Home from './website/containers/HomePage/index';
import Register from './website/containers/SignUp/index';
import About from './website/containers/AboutUs/index';
import Price from './website/containers/Price/index';
import Offers from './website/containers/Offers/index';
import Contact from './website/containers/ContactUs/index';
import Logout from './website/containers/Logout/index';
import OtpVerification from './website/containers/otpVerification/index';

//Admin
import AdminDashboard from './admin/containers/Dashboard/index';
import AddingUsers from './admin/containers/AddUsers/index';
import ManagingUsers from './admin/containers/ManageUsers/index';
import ServiceRequest from './admin/containers/ServiceRequest/index';
import NewService from './admin/containers/NewService/index';
import PendingService from './admin/containers/PendingService/index';
import VehicleCategory from './admin/containers/VehicleCategory/index';
import Reports from './admin/containers/Reports/index';
import CustomerEnquiry from './admin/containers/CustomerEnquiry/index';

//Customer
import CustomerDashboard from './customer/containers/Dashboard/index';
import CustomerServiceRequest from './customer/containers/ServiceRequest/index';
import CustomerServiceHistory from './customer/containers/ServiceHistory/index';

//Supervisor
import SupervisorDashboard from './supervisor/containers/Dashboard/index';
import SupervisorServiceRequest from './supervisor/containers/ServiceRequest/index';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
        </Layout>
        <Router>
          <Switch>   
            {/* <Route path="*" component={() => "404 NOT FOUND"}/>*/}

            {/* Website */}
            <Route exact path="/" component={ Home }/>
            <Route path="/login" component={ Login }/>
            <Route path="/register" component={ Register }/>
            <Route path="/about" component={ About }/>
            <Route path="/pricing" component={ Price }/>
            <Route path="/offers" component={ Offers }/>
            <Route path="/contact" component={ Contact }/>
            <Route path="/otpVerification" component={ OtpVerification }/>

            {/* Admin */}
            <ProtectedRoute path="/adminDashboard" component={ AdminDashboard }/>
            <ProtectedRoute path="/addUsers" component={ AddingUsers }/>
            <ProtectedRoute path="/manageUsers" component={ ManagingUsers }/>
            <ProtectedRoute path="/serviceRequest" component={ ServiceRequest }/>
            <ProtectedRoute path="/newService" component={ NewService }/>
            <ProtectedRoute path="/pendingService" component={ PendingService }/>
            <ProtectedRoute path="/vehicleCategory" component={ VehicleCategory }/>
            <ProtectedRoute path="/reports" component={ Reports }/>
            <ProtectedRoute path="/customerEnquiry" component={ CustomerEnquiry }/>

            {/* Customer */}
            <ProtectedRoute path="/customerDashboard" component={ CustomerDashboard }/>
            <ProtectedRoute path="/customerServiceRequest" component={ CustomerServiceRequest }/>
            <ProtectedRoute path="/customerServiceHistory" component={ CustomerServiceHistory }/>

            {/* Supervisor */}
            <ProtectedRoute path="/supervisorDashboard" component={ SupervisorDashboard }/>
            <ProtectedRoute path="/supervisorServiceRequest" component={ SupervisorServiceRequest }/>   

            <Route path="/logout" component={ Logout }/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
