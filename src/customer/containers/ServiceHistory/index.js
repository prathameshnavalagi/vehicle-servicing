import React, { Component } from "react";
import axios from 'axios';

class CustomerServiceHistory extends Component{
    constructor(props){
        super(props);
        this.state={
            historyData: []
        }
    }
    
    componentDidMount(){
        axios.get(`http://localhost:3002/mock/getServiceHistory`)
        .then(response =>{
            //console.log("response..",response);
            if(response.data.length > 0){
                this.setState({historyData: response.data });
            }else{
                alert("No records");
            }
        })
        .catch(err=>{
            alert(err);
        })
    }

    render(){
        return(
            <div>
                <h2>Service History</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Service Date</th>
                            <th>Vehicle Type</th>
                        </tr>
                    </thead>
                    <tbody>
                         {this.renderHistoryData()}
                    </tbody>
                </table>
            </div>
        );
    }
    
    getDetails(index){
        alert(JSON.stringify(this.state.historyData[index].status));
    }
    renderHistoryData() {
        return this.state.historyData.map((history,index)=>(
            <tr key={index}>                
                <td>{history.date}</td>
                <td>{history.vehicleType}</td>
                <td>
                    <button onClick = {() => this.getDetails(index)}>View Details</button>
                </td>
            </tr>
        ));
    }
}

export default CustomerServiceHistory;