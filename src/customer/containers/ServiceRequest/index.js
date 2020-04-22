import React, { Component } from "react";
import { Input } from 'reactstrap';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class CustomerServiceRequest extends Component{
    constructor(props){
        super(props);
        this.state = {
            category:'',
            vehicleName:'',
            vehicleModel:'',
            brand:'',
            registrationNumber:'',
            complaint:'',
            deliveryType:''
        }
        this.handleChange = this.handleChange.bind(this);
        this.register = this.bookVehicle.bind(this);
    }

    bookVehicle = () => {
        const vehicleBookingData = {
            category:this.state.category,
            vehicleName:this.state.vehicleName,
            vehicleModel:this.state.vehicleModel,
            brand:this.state.brand,
            registrationNumber:this.state.registrationNumber,
            complaint:this.state.complaint,
            deliveryType: this.state.deliveryType,
            customer_id: localStorage.getItem("userId")
        }
        alert(JSON.stringify(vehicleBookingData));
        axios.post('http://localhost:3600/vehicle/createVehicleServiceReq',vehicleBookingData)
        .then(response=>{
            alert("response="+JSON.stringify(response));
            if(response.data.trackingId!=null)
                alert(response.data.status);
            else
                alert(response.data.error);
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

    render(){
        return(
            <div>
                <h2>Service Request</h2>
                <form>
                    Category
                    <div>                        
                        <Input type="select" name="category" id="exampleSelect"
                            className="FormField__Input"
                            onChange={this.handleChange}>
                            <option value="0">--SELECT--</option>
                            <option value="2-wheeler">2-wheeler</option>
                            <option value="3-wheeler">3-wheeler</option>
                            <option value="4-wheeler">4-wheeler</option>
                        </Input>
                    </div>
                    <br></br>                   
                    Vehicle Name
                    <div>
                        <Input
                        type="text"
                        className="form-control form-control-lg"
                        name="vehicleName"
                        value={this.state.vehicleName}
                        onChange={this.handleChange}
                        />
                    </div>
                    <br></br>
                    Vehicle Model
                    <div>
                        <Input
                        type="text"
                        className="form-control form-control-lg"
                        name="vehicleModel"
                        value={this.state.vehicleModel}
                        onChange={this.handleChange}
                        />
                    </div>
                    <br></br>
                    Vehicle Brand
                    <div>
                        <Input
                        type="text"
                        className="form-control form-control-lg"
                        name="brand"
                        value={this.state.brand}
                        onChange={this.handleChange}
                        />
                    </div>
                    <br></br>
                    Vehicle Registration Number
                    <div>
                        <Input
                        type="text"
                        className="form-control form-control-lg"
                        name="registrationNumber"
                        value={this.state.registrationNumber}
                        onChange={this.handleChange}
                        />
                    </div>
                    <br></br>
                    Complaint
                    <div>
                        <textarea name="complaint"
                        value={this.state.complaint}
                        onChange={this.handleChange} />
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
                        onClick={()=>this.bookVehicle()}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(CustomerServiceRequest);