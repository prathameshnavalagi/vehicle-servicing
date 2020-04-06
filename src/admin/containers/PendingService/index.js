import React, { Component } from "react";
import axios from 'axios';

class PendingService extends Component{
    constructor(props){
        super(props);
        this.state={
            pendingServicesData: []
        }           
    }

    componentDidMount() {
        axios.get(`http://localhost:3600/Admin/Service/viewPendingServices`)
            .then(response =>{
                //console.log(response.data);
                this.setState({pendingServicesData: response.data}) 
                console.log(this.state.pendingServicesData);
            })
            .catch(err=>{
                this.props.errorInUserData(err)
            })
    }

    render(){
        return(
            <div>
                <h2>Pending Service</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Vehicle Type</th>
                            <th>Customer Name</th>
                            {/* <th>Supervisor Name</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderPendingServicesData()}
                    </tbody>
                </table>
            </div>
        );
    }
    renderPendingServicesData() {
        return this.state.pendingServicesData.map((pendingService,index)=>(
            <tr key={index}>
                <td>{pendingService.updatedOn}</td>
                <td>{pendingService.vehicle_name}</td>
                <td>{pendingService.customer_id.name}</td>
                {/* <td>{pendingService.category}</td> */}
            </tr>
        ));
    }
}

export default PendingService;