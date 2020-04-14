import React, { Component } from 'react';
import Layout from './website/components/Layout/Layout';
import { ProtectedRoute } from './website/components/ProtectedRoute';
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
import Logout from './website/containers/Logout';
import OtpVerification from './website/containers/otpVerification';

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
            {/* <Route path="*" component={() => "404 NOT FOUND"}/>          */}
            <Route exact path="/" component={ Home }/>
            <Route path="/login" component={ Login }/>
            <Route path="/register" component={ Register }/>
            <Route path="/about" component={ About }/>
            <Route path="/pricing" component={ Price }/>
            <Route path="/offers" component={ Offers }/>
            <Route path="/contact" component={ Contact }/>
            <Route path="/otpVerification" component={ OtpVerification }/>

            <ProtectedRoute path="/adminDashboard" component={ AdminDashboard }/>
            <ProtectedRoute path="/addUsers" component={ AddingUsers }/>
            <ProtectedRoute path="/manageUsers" component={ ManagingUsers }/>
            <ProtectedRoute path="/serviceRequest" component={ ServiceRequest }/>
            <ProtectedRoute path="/newService" component={ NewService }/>
            <ProtectedRoute path="/pendingService" component={ PendingService }/>
            <ProtectedRoute path="/vehicleCategory" component={ VehicleCategory }/>
            <ProtectedRoute path="/reports" component={ Reports }/>
            <ProtectedRoute path="/customerEnquiry" component={ CustomerEnquiry }/>

            <ProtectedRoute path="/customerDashboard" component={ CustomerDashboard }/>
            <ProtectedRoute path="/customerServiceRequest" component={ CustomerServiceRequest }/>
            <ProtectedRoute path="/customerServiceHistory" component={ CustomerServiceHistory }/>

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
