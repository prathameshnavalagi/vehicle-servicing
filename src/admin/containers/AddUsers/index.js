import React, { Component } from "react";
import { Input } from 'reactstrap';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class AddingUsers extends Component{
    constructor(props){
        super(props);
        this.state = {
            category:'',
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
        const addUserReqData = {
            category:this.state.category,
            name:this.state.name,
            address:this.state.address,
            city:this.state.city,
            email:this.state.email,
            password: this.state.password,
            phone: this.state.phoneNumber,
            registration_date: new Date()
        }
        alert("addUserReqData.." + JSON.stringify(addUserReqData));        
        if(this.state.category==="Customer"){
            axios.post('http://localhost:3600/Admin/addUsers/customer',addUserReqData)
            .then(response=>{
                alert("response="+JSON.stringify(response));
                if(response.data.id!=null)
                    alert(response.statusText);
                else
                    alert(response.data.error);
            })
            .catch(err => {
                alert("err="+JSON.stringify(err));
            })
        }else if(this.state.category==="Employee"){
            axios.post('http://localhost:3600/Admin/addUsers/employee',addUserReqData)
            .then(response=>{
                alert("response="+JSON.stringify(response));
                if(response.data.id!=null)
                    alert(response.statusText);
                else
                    alert(response.data.error);
            })
            .catch(err => {
                alert("err="+JSON.stringify(err));
            })
        }else{
            alert("Please Select Category");
        }   
    }
    
    handleChange = (e,propertyName) =>{
        if(propertyName==='phone')
            this.setState({phoneNumber: e.target.value});
        if(propertyName==='pass')
            this.setState({password: e.target.value});
        if(propertyName==='category')
            this.setState({category: e.target.value});
        if(propertyName==='address')
            this.setState({address: e.target.value});
        if(propertyName==='city')
            this.setState({city: e.target.value});
        if(propertyName==='confirmPassword')
            this.setState({confirmPassword: e.target.value});
        if(propertyName==='email')
            this.setState({email: e.target.value});
        if(propertyName==='name')
            this.setState({name: e.target.value});
    }

    render(){
        return(
            <div>
                <h2>Add Users</h2>
                <form>
                    Category
                    <div>
                        <Input type="select" name="category" id="exampleSelect"
                            className="FormField__Input" 
                            onChange={($event)=>this.handleChange($event,"category")}>
                            <option value="0">--SELECT--</option>
                            <option value="Customer">Customer</option>
                            <option value="Employee">Employee</option>
                        </Input>
                    </div>
                    <br></br>
                    Name
                    <div>
                        <Input
                        type="text"
                        className="form-control form-control-lg"
                        value={this.state.name}
                        onChange={($event)=>this.handleChange($event,"name")}
                        />
                    </div>
                    <br></br>
                    Address
                    <div>
                        <Input
                        type="text"
                        className="form-control form-control-lg"
                        value={this.state.address}
                        onChange={($event)=>this.handleChange($event,"address")}
                        />
                    </div>
                    <br></br>
                    City
                    <div>
                        <Input
                        type="text"
                        className="form-control form-control-lg"
                        value={this.state.city}
                        onChange={($event)=>this.handleChange($event,"city")}
                        />
                    </div>
                    <br></br>
                    Phone Number
                    <div>
                        <Input
                        type="text"
                        className="form-control form-control-lg"
                        value={this.state.phoneNumber}
                        onChange={($event)=>this.handleChange($event,"phone")}
                        />
                    </div>
                    <br></br>
                    Email
                    <div>
                        <Input
                        type="text"
                        className="form-control form-control-lg"
                        value={this.state.email}
                        onChange={($event)=>this.handleChange($event,"email")}
                        />
                    </div>
                    <br></br>
                    Password
                    <div>
                        <Input
                        type="password"
                        className="form-control form-control-lg"
                        maxLength="20"
                        value={this.state.password}
                        onChange={($event)=>this.handleChange($event,"pass")}
                        />
                    </div>
                    <br></br>
                    Confirm Password
                    <div>
                        <Input
                        type="password"
                        className="form-control form-control-lg"
                        maxLength="20"
                        value={this.state.confirmPassword}
                        onChange={($event)=>this.handleChange($event,"confirmPassword")}
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

export default withRouter(AddingUsers);