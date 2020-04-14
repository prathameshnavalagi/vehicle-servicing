import React, { Component } from 'react';
import { Input } from 'reactstrap';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class OtpVerification extends Component{
    constructor(props){
        super(props);
        this.state = {
            otp:''
        }
        this.handleChange = this.handleChange.bind(this);
        this.verifyOtp = this.verifyOtp.bind(this);
    }

    verifyOtp = () => {
        const verificationData = {
            otp: this.state.otp
        }
        //alert(JSON.stringify(loginReqData));  
        // axios.post('http://localhost:3600/auth',loginReqData)
        // .then(response=>{
        //     alert(JSON.stringify(response));  
        //     alert(response.data.userrole.role_name); 
        //     localStorage.setItem("userToken",response.data.accessToken);
        //     localStorage.setItem("userRole",response.data.userrole.role_name);
        //     localStorage.setItem("userId",response.data.userId);
        //     if(response.data.userrole.role_name === "NORMAL_USER"){
        //         alert("inside NORMAL_USER");  
        //         this.props.history.push('/customerServiceRequest');
        //         window.location.reload();
        //     }else if(response.data.userrole.role_name === "ADMIN"){
        //         alert("inside ADMIN");  
        //         this.props.history.push('/adminDashboard');
        //         window.location.reload();
        //     }else if(response.data.userrole.role_name === "SUPERVISOR"){
        //         alert("inside SUPERVISOR");  
        //         this.props.history.push('/supervisorDashboard');
        //         window.location.reload();
        //     }else{
        //         alert("Website");
        //         this.props.history.push('/');
        //         window.location.reload();
        //     }
        // })
        // .catch(err => {
        //     alert(JSON.stringify(err));  
        //     this.props.history.push('/');
        //     window.location.reload();
        // })
    }
    
    handleChange = e => {
        //debugger;
        let target = e.target;
        let value = target.type == 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
            [name]: value
        });
    }

    render(){
        return(
            <div>
                <p> Please continue OTP mailed at your email address </p>
                <form>
                    <div>
                        <Input
                        type="text"
                        name="otp"
                        value={this.state.phoneNumber}
                        onChange={this.handleChange}
                        className="form-control form-control-lg"
                        />
                    </div>
                    <br></br>
                    <div>
                        <Input
                        type="submit"
                        className="btn btn-primary w-100 mt-20"
                        value="VERIFY"
                        id="verifyOtpButton"
                        onClick={()=>this.verifyOtp()}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default OtpVerification;