import React, { Component } from "react";
import { Input } from 'reactstrap';
import axios from 'axios';

class Register extends Component{

    constructor(props){
        super(props);
        this.state = {
            name:'',
            address:'',
            city:'',
            phoneNumber:'',
            email:'',
            password:'',
            confirmPassword:''
        }
        this.handleChange = this.handleChange.bind(this);
        this.register = this.register.bind(this);
    }

    register = () => {
        const registrationData = {
            name:this.state.name,
            address:this.state.address,
            city:this.state.city,
            email:this.state.email,
            password: this.state.password,
            phone: this.state.phoneNumber,
            registration_date: new Date()
        }
        alert(JSON.stringify(registrationData));
        axios.post('http://localhost:3600/users/customer',registrationData)
        .then(response=>{
            alert("response="+JSON.stringify(response));
            if(response.data.id != null){
                alert(response.data.id);
                localStorage.setItem('registrationId',response.data.id);
                alert("Registered Successfully");
                this.props.history.push('/login');
                //this.props.history.push('/otpVerification');
                window.location.reload();
            }else{
                alert(response.data.error);
            }
        }).catch(err => {
            alert("err="+JSON.stringify(err));
        })        
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
                <h2> Register </h2>
                <form>
                    Name
                    <div>
                        <Input
                        type="text"
                        className="form-control form-control-lg"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        />
                    </div>
                    <br></br>
                    Address
                    <div>
                        <Input
                        type="text"
                        className="form-control form-control-lg"
                        name="address"
                        value={this.state.address}
                        onChange={this.handleChange}
                        />
                    </div>
                    <br></br>
                    City
                    <div>
                        <Input
                        type="text"
                        className="form-control form-control-lg"
                        name="city"
                        value={this.state.city}
                        onChange={this.handleChange}
                        />
                    </div>
                    <br></br>
                    Phone Number
                    <div>
                        <Input
                        type="text"
                        className="form-control form-control-lg"
                        name="phoneNumber"
                        value={this.state.phoneNumber}
                        onChange={this.handleChange}
                        />
                    </div>
                    <br></br>
                    Email
                    <div>
                        <Input
                        type="text"
                        className="form-control form-control-lg"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        />
                    </div>
                    <br></br>
                    Password
                    <div>
                        <Input
                        type="password"
                        className="form-control form-control-lg"
                        maxLength="20"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        />
                    </div>
                    <br></br>
                    Confirm Password
                    <div>
                        <Input
                        type="password"
                        className="form-control form-control-lg"
                        maxLength="20"
                        name="confirmPassword"
                        value={this.state.confirmPassword}
                        onChange={this.handleChange}
                        />
                    </div>
                    <br></br>
                    <div>
                        <Input
                        type="submit"
                        className="btn btn-primary w-100 mt-20"
                        value="REGISTER"
                        id="registerButton"
                        onClick={()=>this.register()}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default Register;