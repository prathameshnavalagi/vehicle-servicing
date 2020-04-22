import React, { Component } from "react";
import axios from 'axios';
import { Input } from 'reactstrap';

class CustomerDashboard extends Component{
    constructor(props){
        super(props)
        this.state = {
            vehicleServicingDetails: [],
            trackingId: '',
            detailsAvailable: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.getBillingDetails = this.getBillingDetails.bind(this);  
    }

    handleChange = e => {
        let target = e.target;
        let name = target.name;
        let value = target.type == 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        })
    }

    getBillingDetails() {
        alert("inside getBillingDetails");
        axios.get(`http://localhost:3002/mock/getServiceBillingDetails/`+ this.state.trackingId)
        .then(response =>{
            //console.log(response.data);
            if(response.data.length > 0){
                this.setState({
                    vehicleServicingDetails: response.data,
                    detailsAvailable: true
                })
                //console.log(this.state.vehicleServicingDetails);
            }else{
                alert("No records");
                this.setState({
                    vehicleServicingDetails: [],
                    detailsAvailable: false
                })
            }
        })
        .catch(err=>{
            alert("err="+JSON.stringify(err));
        })
    }

    render(){
        return(
            <div>
                <br></br>
                <div>
                    <Input
                    type="text"
                    className="form-control form-control-lg"
                    name="trackingId"
                    placeholder="Tracking ID"
                    value={this.state.trackingId}
                    onChange={this.handleChange}
                    />
                    <Input
                    type="submit"
                    className="btn btn-primary w-100 mt-20"
                    value="CHECK STATUS"
                    id="registerButton"
                    onClick={()=>this.getBillingDetails()}
                    />
                </div>
                {this.state.detailsAvailable && <div>
                    <h3>Vehicle Servicing Details</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Vehicle Type</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderBillingData()}
                        </tbody>
                    </table>
                </div>}
            </div>
        );
    }

    renderBillingData() {
        return this.state.vehicleServicingDetails.map((details,index)=>(
            <tr key={index}>
                <td>{details.date}</td>
                <td>{details.vehicleType}</td>
                <td>{details.status}</td>
            </tr>
        ));
    }
}
export default CustomerDashboard;