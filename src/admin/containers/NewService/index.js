import React, { Component } from "react";
import { Input } from 'reactstrap';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import classes from '../AddUsers/users.css';
import axios from 'axios';

const options = ['Customer', 'Employee'];
const defaultOption = options[0];

class NewService extends Component{
    constructor(props){
        super(props);
        this.state = {
            supervisorName: '',
            vehicleData : []
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = e => {
        let target = e.target;
        let value = target.type == 'checkbox' ? target.checked : target.value;
        let name = target.name;
        this.setState({
            [name]: value
        });
    }

    componentDidMount() {
        axios.get(`http://localhost:3002/mock/getNewServiceVehcileList`)
            .then(response =>{
                //console.log(response.data);
                this.setState({vehicleData: response.data}) 
                console.log(this.state.vehicleData);
            })
            .catch(err=>{
                this.props.errorInUserData(err)
            })
    }
    render(){
        return(
            <div>
                <h2>New Service</h2>
                <form>
                    <div>
                    <h2>Vehcle List</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Vehicle Type</th>
                                <th>Customer Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderVehicleData()}
                        </tbody>
                        </table>
                    </div>
                    <br></br>
                    Select Supervisor
                    <div>                        
                        <Input type="select" name="supervisorName" id="exampleSelect"
                            className="FormField__Input" 
                            value={this.state.supervisorName}
                            onChange={this.handleChange}>
                            <option value="0">--SELECT--</option>
                            <option value="4-wheeler">4-wheeler</option>
                            <option value="2-wheeler">2-wheeler</option>
                        </Input>
                    </div>
                    <br></br>
                    <div>
                        <Input
                        type="submit"
                        className="btn btn-primary w-100 mt-20"
                        value="ASSIGN"
                        id="registerButton"
                        />
                    </div>
                </form>
            </div>
        );
    }
    renderVehicleData() {
        return this.state.vehicleData.map((vehicle,index)=>(
            <tr key={index}>
                <td>{vehicle.date}</td>
                <td>{vehicle.vehicleType}</td>
                <td>{vehicle.customerName}</td>
            </tr>
        ));
    }
}

export default NewService;