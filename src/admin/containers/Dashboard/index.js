import React, { Component } from "react";
import axios from 'axios';

class AdminDashboard extends Component{
    constructor(props){
        super(props)
        this.state = {
            totalServiceRequestCount: [],
            newServiceRequest: [],
            totalEnquiries: []
        }
    }

    componentDidMount() {
        //totalServiceRequestCount
        axios.get(`http://localhost:3600/Admin/serviceRequest/totalCount`)
        .then(response =>{
            console.log(response.data);
            this.setState({totalServiceRequestCount: response.data}) 
            console.log(this.state.totalServiceRequestCount);
        })
        .catch(err=>{
            alert("err="+JSON.stringify(err));
        })

        //newServiceRequest
        axios.get(`http://localhost:3600/Admin/serviceRequest/newRequestCount`)
        .then(response =>{
            console.log(response.data);
            this.setState({newServiceRequest: response.data}) 
            console.log(this.state.newServiceRequest);
        })
        .catch(err=>{
            alert("err="+JSON.stringify(err));
        })

        //totalEnquiries
        axios.get(`http://localhost:3600/Admin/serviceRequest/viewTotalEnquiries`)
        .then(response =>{
            console.log(response.data);
            this.setState({totalEnquiries: response.data}) 
            console.log(this.state.totalEnquiries);
        })
        .catch(err=>{
            alert("err="+JSON.stringify(err));
        })
    }
    render(){
        return(
            <div>
                <div>
                    <h3>Total Service Request:</h3>
                    {this.state.totalServiceRequestCount.status}
                    <br></br>
                    <h3>New Service Request:</h3>
                    {this.state.newServiceRequest.status}
                    <br></br>
                    <h3>Total Enquiries:</h3>
                    {this.state.totalEnquiries.result}
                    <br></br>
                </div>
            </div>
        );
    }
    // renderCustomerEnquiriesData() {
    //     return this.state.customerEnquiries.map((customerEnquiry,index)=>(
    //         <tr key={index}>
    //             <td>{customerEnquiry.createdTime}</td>
    //             <td>{customerEnquiry.name}</td>
    //             <td>{customerEnquiry.message}</td>
    //             {/* <td>{pendingService.category}</td> */}
    //         </tr>
    //     ));
    // }
}

export default AdminDashboard;