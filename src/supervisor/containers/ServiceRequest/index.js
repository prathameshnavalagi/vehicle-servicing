import React, { Component } from "react";
import { Input } from 'reactstrap';
import axios from 'axios';

class SupervisorServiceRequest extends Component{
    constructor(props){
        super(props);
        this.state = {
            searchedNumber: "",
            category: "",
            vehicleName: "",
            vehicleModel: "",
            brand: "",
            registrationNumber: "",
            complaint: "",
            deliveryType: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.serviceRequest = this.serviceRequest.bind(this);
    }

    serviceRequest = () => {
        const serviceReqData = {
            category:this.state.category,
            vehicleName:this.state.vehicleName,
            vehicleModel:this.state.vehicleModel,
            brand:this.state.brand,
            registrationNumber:this.state.registrationNumber,
            complaint:this.state.complaint,
            deliveryType: this.state.deliveryType
        }
        alert(JSON.stringify(serviceReqData));
        axios.post('http://localhost:3600/Admin/Service/addServiceReq',serviceReqData)
        .then(response=>{
            alert("response="+JSON.stringify(response));
            if(response.data.trackingId!=null)
                alert(response.data.status);
            else
                alert(response.data.status);
        })
        .catch(err => {
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

    getUser = () => {
        if(this.state.searchedNumber==""){
            alert("Enter phone number to get user data");
        }else{
                axios.get('http://localhost:3002/mock/getUser/'+this.state.searchedNumber)
                .then(response=>{
                    alert("response="+JSON.stringify(response));
                    alert("status.."+response.status);
                    if(response.status == 201){
                        alert("Success");
                    }
                    else{
                        alert("This customer is not registered");
                    }
            })
            .catch(err => {
                alert("err="+JSON.stringify(err));
            })
        }
    }
    
    render(){
        return(
            <div>
                <h2>Service Request</h2>
                    <div>
                        <Input
                        type="text"
                        name="searchedNumber"
                        placeholder="Enter Phone Number"
                        className="form-control form-control-lg"
                        value={this.state.searchedNumber}
                        onChange={this.handleChange}
                        />
                        <button onClick={()=>this.getUser()}>Search</button>
                    </div>
                    <br></br>
                <form>
                    Category
                    <div>
                        <Input type="select" name="category" id="exampleSelect"
                            className="FormField__Input" 
                            value={this.state.category}
                            onChange={this.handleChange}>
                            <option value="0">--SELECT--</option>
                            <option value="4-wheeler">4-wheeler</option>
                            <option value="2-wheeler">2-wheeler</option>
                        </Input>
                    </div>
                    <br></br>                   
                    Vehicle Name
                    <div>
                        <Input
                        type="text"
                        name="vehicleName"
                        className="form-control form-control-lg"
                        value={this.state.vehicleName}
                        onChange={this.handleChange}
                        />
                    </div>
                    <br></br>
                    Vehicle Model
                    <div>
                        <Input
                        type="text"
                        name="vehicleModel"
                        className="form-control form-control-lg"
                        value={this.state.vehicleModel}
                        onChange={this.handleChange}
                        />
                    </div>
                    <br></br>
                    Vehicle Brand
                    <div>
                        <Input
                        type="text"
                        name="brand"
                        className="form-control form-control-lg"
                        value={this.state.brand}
                        onChange={this.handleChange}
                        />
                    </div>
                    <br></br>
                    Vehicle Registration Number
                    <div>
                        <Input
                        type="text"
                        name="registrationNumber"
                        className="form-control form-control-lg"
                        value={this.state.registrationNumber}
                        onChange={this.handleChange}
                        />
                    </div>
                    <br></br>
                    Complaint
                    <div>
                        <textarea name="complaint"
                        value={this.state.complaint}
                        onChange={this.handleChange}
                        />
                    </div>
                    <br></br>
                    Vehicle Delivery Type
                    <div>
                    <Input type="radio" name="deliveryType" onChange={this.handleChange} value ="pick up"/>{' '}Pickup
                    <Input type="radio" name="deliveryType" onChange={this.handleChange} value ="walk-in"/>{' '}Walk-in
                    </div>
                    <br></br>
                    <div>
                        <Input
                        type="submit"
                        className="btn btn-primary w-100 mt-20"
                        value="SUBMIT"
                        id="registerButton"
                        onClick={()=>this.serviceRequest()}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SupervisorServiceRequest;