import React, { Component } from 'react';
import { Input } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import * as loginActions from "./actions";

class Login extends Component{
    render(){
        return(
            <div>
                <h2> Login </h2>
                <form>
                    Phone Number
                    <div>
                        <Input
                        type="text"
                        className="form-control form-control-lg"
                        />
                    </div>
                    <br></br>
                    Password
                    <div>
                        <Input
                        type="password"
                        className="form-control form-control-lg"
                        maxLength="20"
                        />
                    </div>
                    <br></br>
                    <div>
                        <Input
                        type="submit"
                        className="btn btn-primary w-100 mt-20"
                        value="LOGIN"
                        id="logInButton"
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;