import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as loginActions from "./actions";
class Home extends Component{
    render(){        
        return(
            <div>
               <h2> Home Page </h2>
               <h3>Add More Life to Your Vehicle</h3>
               <p>Call Us On <b>9876543210</b></p>
            </div>
        );
    }
}


export default Home;