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
            vehicleData: [],
            selected: {}
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleChange = e => {
        let target = e.target;
        let value = target.type == 'checkbox' ? target.checked : target.value;
        let name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleSelect = (e,index) => {
        const selected = this.state.selected;        
        selected[e.target.name] = e.target.checked;
        console.log(selected.supervisorCheck);
        if(selected.supervisorCheck){
            this.state.vehicleData[index]['supervisorAssigned'] = true;
        }else{
            this.state.vehicleData[index]['supervisorAssigned'] = false;
        }
        console.log(this.state.vehicleData);
    }

    assignSupervisor = () => {
        alert("inside assignSupervisor");
        const assignSupervisorData = {
            supervisorName: this.state.supervisorName,
            selectedData: this.state.vehicleData
        }
        axios.post(`http://localhost:3002/mock/assignSupervisor`,assignSupervisorData)
            .then(response =>{
                alert(response);
                if(response.data.status == 201){
                    alert(response.data.message);
                }else{
                    alert(response.data.message);
                }
            })
            .catch(err=>{
                this.props.errorInUserData(err)
            })
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
                                <th>
                                    <Input type="checkbox" 
                                    name="supervisorCheck"
                                    // onChange={this.handleChange} 
                                    />
                                </th>
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
                            <option value="Shruti Adyalkar">Shruti Adyalkar</option>
                            <option value="Satyabaji Sahu">Satyabaji Sahu</option>
                        </Input>
                    </div>
                    <br></br>
                    <div>
                        <Input
                        type="submit"
                        className="btn btn-primary w-100 mt-20"
                        value="ASSIGN"
                        id="registerButton"
                        onClick = {() => this.assignSupervisor()}
                        />
                    </div>
                </form>
            </div>
        );
    }
    renderVehicleData() {
        return this.state.vehicleData.map((vehicle,index)=>(
            <tr key={index}>
                <td>
                    <Input type="checkbox" 
                    name="supervisorCheck" 
                    selected = {this.state.selected[index]}
                    onChange = {(e) => this.handleSelect(e,index)}
                    />
                </td>
                <td>{vehicle.date}</td>
                <td>{vehicle.vehicleType}</td>
                <td>{vehicle.customerName}</td>
            </tr>
        ));
    }
}

export default NewService;