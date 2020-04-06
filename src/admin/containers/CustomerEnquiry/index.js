import React, { Component } from "react";
import axios from 'axios';

class CustomerEnquiry extends Component{
    constructor(props){
        super(props)
        this.state = {
            customerEnquiries: []
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:3600/Admin/serviceRequest/viewCustomerEnquiries`)
            .then(response =>{
                console.log(response.data);
                this.setState({customerEnquiries: response.data}) 
                //console.log(this.state.vehicleCategoryData);
            })
            .catch(err=>{
                alert("err="+JSON.stringify(err));
            })
    }
    render(){
        return(
            <div>
                <h2>Customer Enquiry</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Customer Name</th>
                            <th>Customer Message</th>
                            {/* <th>Supervisor Name</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderCustomerEnquiriesData()}
                    </tbody>
                </table>
            </div>
        );
    }
    renderCustomerEnquiriesData() {
        return this.state.customerEnquiries.map((customerEnquiry,index)=>(
            <tr key={index}>
                <td>{customerEnquiry.createdTime}</td>
                <td>{customerEnquiry.name}</td>
                <td>{customerEnquiry.message}</td>
                {/* <td>{pendingService.category}</td> */}
            </tr>
        ));
    }
}

export default CustomerEnquiry;