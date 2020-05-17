import React, { Component } from "react";
import axios from 'axios';
import { bindActionCreators } from "redux";

class AdminDashboard extends Component {
    constructor(props) {
        super(props)
        this.initialState = this.state;
    }

    initialState = () => {
        return (
            {
                totalServiceRequestCount: [],
                newServiceRequest: [],
                totalEnquiries: []
            }
        );
    }

    // componentDidMount() {
    //     //totalServiceRequestCount
    //     axios.get(`http://localhost:3600/Admin/serviceRequest/totalCount`)
    //         .then(response => {
    //             console.log(response.data);
    //             this.setState({ totalServiceRequestCount: response.data })
    //             console.log(this.state.totalServiceRequestCount);
    //         })
    //         .catch(err => {
    //             alert("err=" + JSON.stringify(err));
    //         })

    //     //newServiceRequest
    //     axios.get(`http://localhost:3600/Admin/serviceRequest/newRequestCount`)
    //         .then(response => {
    //             console.log(response.data);
    //             this.setState({ newServiceRequest: response.data })
    //             console.log(this.state.newServiceRequest);
    //         })
    //         .catch(err => {
    //             alert("err=" + JSON.stringify(err));
    //         })

    //     //totalEnquiries
    //     axios.get(`http://localhost:3600/Admin/serviceRequest/viewTotalEnquiries`)
    //         .then(response => {
    //             console.log(response.data);
    //             this.setState({ totalEnquiries: response.data })
    //             console.log(this.state.totalEnquiries);
    //         })
    //         .catch(err => {
    //             alert("err=" + JSON.stringify(err));
    //         })
    // }

    componentDidMount(){
        this.props.getTotalServiceRequest();
        this.props.getNewSeviceRequest();
        this.props.getTotalEnquiries();
    }   

    render() {
        return (
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
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            getTotalServiceRequest: getTotalServiceRequest,
            getNewSeviceRequest: getNewSeviceRequest,
            getTotalEnquiries: getTotalEnquiries
        },
        dispatch
    );
}

const mapStateToProps = state => {
    return {
        totalServiceRequestCount: state.dashBoardReducer.totalServiceRequestCount || {},
        newServiceRequest: state.dashBoardReducer.newServiceRequest || {},
        totalEnquiries: state.dashBoardReducer.totalEnquiries || {}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard);