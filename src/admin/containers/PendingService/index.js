import React, { Component } from "react";
import axios from 'axios';
import { Input } from 'reactstrap';

class PendingService extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pendingServicesData: [],
            selected: {},
            supervisorNames: [],
            supervisorName: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        axios.get(`http://localhost:3002/mock/getPendingServices`)
            .then(response => {
                //console.log(response.data);
                this.setState({ pendingServicesData: response.data })
                console.log(this.state.pendingServicesData);
            })
            .catch(err => {
                this.props.errorInUserData(err)
            })
    }

    handleChange = (e, index) => {
        console.log(e.target.value + " " + index);
        this.state.supervisorName = e.target.value;
    }

    assignSupervisor(index) {
        const assignSupervisorData = {
            supervisorName: this.state.supervisorName,
            index
        }
        //alert(JSON.stringify(assignSuperVisorData));
        axios.post(`http://localhost:3002/mock/assignToPendingServiceSupervisor`, assignSupervisorData)
            .then(response => {
                //alert(response);
                if (response.data.status == 201) {
                    alert(response.data.message);
                } else {
                    alert(response.data.message);
                }
            })
            .catch(err => {
                alert(err);
            })
    }

    render() {
        return (
            <div>
                <h2>Pending Service</h2>
                <form>
                    <table>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Vehicle Type</th>
                                <th>Customer Name</th>
                                <th>Supervisor Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderPendingServicesData()}
                        </tbody>
                    </table>
                </form>
            </div>
        );
    }

    renderPendingServicesData() {
        return this.state.pendingServicesData.map((pendingService, index) => (
            <tr key={index}>
                <td>{pendingService.date}</td>
                <td>{pendingService.vehicleType}</td>
                <td>{pendingService.customerName}</td>
                <td>
                    <Input type="select" name="supervisorName" id="exampleSelect"
                        className="FormField__Input"
                        value={this.state.supervisorNames[index]}
                        onChange={e => this.handleChange(e, index)}>
                        <option value="0">--SELECT--</option>
                        <option value="Shruti Adyalkar">Shruti Adyalkar</option>
                        <option value="Satyabaji Sahu">Satyabaji Sahu</option>
                    </Input>
                </td>
                <td>
                    <button
                        onClick={() => this.assignSupervisor(index)}>
                        Assign
                    </button>
                </td>
            </tr>
        ));
    }
}

export default PendingService;