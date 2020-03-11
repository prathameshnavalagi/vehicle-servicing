import React, { Component } from "react";
import { Input } from "reactstrap";

class Login extends Component{
    render(){
        return(
            <div>
                <h3>Login to your account</h3>
                <form>
                    <div>
                        <Input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Phone Number"
                        />
                    </div>
                    <div>
                        <Input
                        type="password"
                        className="form-control form-control-lg"
                        placeholder="Password"
                        maxLength="20"
                        />
                    </div>      
                    <div>
                        <input
                        type="submit"
                        className="btn btn-primary w-100 mt-20"
                        value="LOG IN"
                        id="logInButton"
                        />
                    </div>             
                </form>
            </div>
        );
    }
}

export default Login;