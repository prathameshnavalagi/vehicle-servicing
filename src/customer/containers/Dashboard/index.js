import React, { Component } from "react";
import axios from 'axios';

class CustomerDashboard extends Component{
    constructor(props){
        super(props)
        this.state = {
            vehicleServicingDetails: ""
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:3600/vehicle/getServiceBillingDetails/5dfcb4716957382c988affd4`)
        .then(response =>{
            //console.log(response.data);
            this.setState({vehicleServicingDetails: response.data.vehicle_service_req}) 
            console.log(this.state.vehicleServicingDetails.updatedOn);
        })
        .catch(err=>{
            alert("err="+JSON.stringify(err));
        })
    }
    render(){
        return(
            <div>
                <h3>Vehicle Servicing Details</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Service Date</th>
                            <th>Vehicle Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        <td>{this.state.vehicleServicingDetails.updatedOn}</td>
                        {/* <td>{this.state.vehicleServicingDetails.category}</td> */}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default CustomerDashboard;