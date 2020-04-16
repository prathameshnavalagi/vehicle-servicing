import React, { Component } from "react";
import { Input } from 'reactstrap';
import response from "./ManageUserData";

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
        //alert(this.state.phoneNumber);
        //alert("response.."+JSON.stringify(response));
        if(this.state.searchedNumber === ''){
            alert("Enter phone number to serach");
        }else{
            let userData = response.data;
            //alert("userData.." + JSON.stringify(userData));
            let dataPresent = false;
            let presentUserData = {};
            for(let user in userData){
                if(this.state.searchedNumber === userData[user].phone){
                    //alert("user from file.."+userData[user].phone);
                    dataPresent = true;
                    presentUserData = userData[user];
                    alert("presentUserData.."+ JSON.stringify(presentUserData));
                    break;
                }else{
                    dataPresent = false;
                }
            }
            if(dataPresent){
                alert("User present for "+ presentUserData.phone);
                this.setState({
                    name: presentUserData.name,
                    address: presentUserData.address,
                    city: presentUserData.city,
                    phoneNumber: presentUserData.phone
                })
            }else{
                alert("User for this phone number does not exist");
            }
        }
    }

    updateUser = () => {
        alert("inside updateUser");
        let userData = response.data;
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
        axios.post('http://localhost:3000/mock/updateUser',updateUserDataReq)
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