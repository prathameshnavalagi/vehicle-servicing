import React, { Component } from "react";
import { Input } from 'reactstrap';
import axios from 'axios';

class ManagingUsers extends Component{    
    constructor(props){
        super(props);
        this.state = {
            searchedNumber:'',
            phoneNumber:'',
            name:'',
            address:'',
            city:'',
            email:'',
            password:'',
            confirmedPassword:''
        }  
        this.handleChange = this.handleChange.bind(this);
        this.getUser = this.getUser.bind(this);      
    }

    handleChange = e => {
        let target = e.target;
        let name = target.name;
        let value = target.type == 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        })
    }

    getUser = () => {
        //alert(this.state.searchedNumber);
        //alert("response.."+JSON.stringify(response));
        if(this.state.searchedNumber==""){
            alert("Enter phone number to get user data");
        }else{
                axios.get('http://localhost:3002/mock/getUser/'+this.state.searchedNumber)
                .then(response=>{
                    alert("response="+JSON.stringify(response));
                    alert("status.."+response.status);
                    if(response.status == 201){
                        let userData = response.data;
                        this.setState({
                            phoneNumber:userData.phone,
                            name:userData.name,
                            address:userData.address,
                            city:userData.city
                        })
                    }
                    else{
                        alert(response.statusText);
                    }
            })
            .catch(err => {
                alert("err="+JSON.stringify(err));
            })
        }
    }

    updateUser = () => {
        alert("inside updateUser");
        //let userData = response.data;
        const updateUserDataReq = {
            name:this.state.name,
            address:this.state.address,
            city:this.state.city,
            phoneNumber: this.state.phoneNumber
        }
        axios.post('http://localhost:3002/mock/updateUser',updateUserDataReq)
        .then(response=>{
            alert("response="+JSON.stringify(response));
            if(response.data.status == 201)
                alert(response.data.message);
            else
                alert(response.statusText);
        })
        .catch(err => {
            alert("err="+JSON.stringify(err));
        })
    }

    render(){
        return(
            <div>
                <h2>Manage Users</h2>
                    Search
                    <div>
                        <Input
                            type="text"
                            className="form-control form-control-lg"
                            name="searchedNumber"
                            value={this.state.searchedNumber}
                            onChange={this.handleChange}
                        />
                        <button onClick={()=>this.getUser()}>Search</button>
                    </div>
                    <br></br>
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
                        style={{"backgroundColor":"Gray"}}
                        className="form-control form-control-lg"
                        name="phoneNumber"
                        value={this.state.phoneNumber}
                        onChange={this.handleChange}
                        readOnly                        
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
                        name="confirmedPassword"
                        value={this.state.confirmedPassword}
                        onChange={this.handleChange}
                        />
                    </div>
                    <br></br>
                    <div>
                        <Input
                        type="submit"
                        className="btn btn-primary w-100 mt-20"
                        value="UPDATE"
                        id="registerButton"
                        onClick={() => this.updateUser()}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default ManagingUsers;