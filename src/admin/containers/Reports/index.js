import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { connect }from 'react-redux';
import axios from 'axios';
import * as reportActions from './actions';

class Reports extends Component{
    constructor(props){
        super(props);
        this.state={
            reportData: []
        }
    }
    
    componentDidMount(){
        axios.get(`http://localhost:3002/mock/getReport`)
        .then(response =>{
            //console.log("response..",response);
            this.setState({reportData: response.data });
        })
        .catch(err=>{
            alert(err);
        })
    }

    render(){
        return(
            <div>
                <h2>Reports</h2>
                {/* <button type="submit" onClick={this.getUserData}>Get Uers</button> */}
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Vehicle Type</th>
                            <th>Customer Name</th>
                        </tr>
                    </thead>
                    <tbody>
                         {this.renderReportData()}
                    </tbody>
                </table>
            </div>
        );
    }
    
    renderReportData() {
        return this.state.reportData.map((report,index)=>(
            <tr key={index}>
                <td>{report.date}</td>
                <td>{report.vehicleType}</td>
                <td>{report.customerName}</td>
            </tr>
        ));
    }
}

export default Reports;