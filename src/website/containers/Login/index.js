import React, { Component } from 'react';
import { Input } from 'reactstrap';
// import { bindActionCreators } from 'redux';
// import { connect } from "react-redux";
// import * as loginActions from "./actions";
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            phoneNumber:'9876543210',
            password:'Test@1234'
        }
        this.handleChange = this.handleChange.bind(this);
        this.login = this.login.bind(this);
    }

    login = () => {
        const loginReqData = {
            password: this.state.password,
            phone: this.state.phoneNumber
        }
        //alert(JSON.stringify(loginReqData));  
        axios.post('http://localhost:3600/auth',loginReqData)
        .then(response=>{
            alert(JSON.stringify(response));  
            alert(response.data.userrole.role_name); 
            localStorage.setItem("userRole",response.data.userrole.role_name);
            if(response.data.userrole.role_name === "NORMAL_USER"){
                alert("inside NORMAL_USER");  
                this.props.history.push('/customerService');
                window.location.reload();
            }else if(response.data.userrole.role_name === "ADMIN"){
                alert("inside ADMIN");  
                this.props.history.push('/adminDashboard');
                window.location.reload();
            }else{
                alert("Website");
                this.props.history.push('/');
                window.location.reload();
            }
        })
        .catch(err => {
            alert(JSON.stringify(err));  
            this.props.history.push('/');
            window.location.reload();
        })
    }
    
    handleChange = (e,propertyName) =>{
        //alert(e.target.value);
        if(propertyName==='phone')
            this.setState({phoneNumber: e.target.value});
        if(propertyName==='pass')
            this.setState({password: e.target.value});
    }

    render(){
        return(
            <div>
                <h2> Login </h2>
                <form>
                    Phone Number
                    <div>
                        <Input
                        type="text"
                        value={this.state.phoneNumber}
                        onChange={($event)=>this.handleChange($event,"phone")}
                        className="form-control form-control-lg"
                        />
                    </div>
                    <br></br>
                    Password
                    <div>
                        <Input
                        type="password"
                        value={this.state.password}
                        onChange={($event)=>this.handleChange($event,"pass")}
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
                        onClick={()=>this.login()}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(Login);