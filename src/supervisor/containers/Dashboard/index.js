import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Input } from 'reactstrap';
import axios from 'axios';

class SupervisorDashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      engineerName: '',
      vehicleData: [],
      selected: {},
      selectedData: [],
      serviceApprovalData: [],
      approved: 'Not Approved'
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

  handleSelect = (e, index) => {
    const selected = this.state.selected;
    selected[e.target.name] = e.target.checked;
    console.log(selected.engineerCheck);
    console.log(index);
    if (selected.engineerCheck) {
      this.state.vehicleData[index]['needEngineer'] = true;
    } else {
      this.state.vehicleData[index]['needEngineer'] = false;
    }
    console.log(this.state.vehicleData);
  }

  assignEngineer = () => {
    alert("inside assignEngineer");
    const assignEngineerData = {
      engineerName: this.state.engineerName,
      selectedData: this.state.vehicleData
    }
    axios.post(`http://localhost:3002/mock/assignEngineer`, assignEngineerData)
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

  componentDidMount() {
    axios.get(`http://localhost:3002/mock/getNewServiceVehcileList`)
      .then(response => {
        //console.log(response.data);
        this.setState({ vehicleData: response.data })
        console.log(this.state.vehicleData);
      })
      .catch(err => {
        alert(err);
      })

      axios.get(`http://localhost:3002/mock/getServiceAprovalDetails`)
      .then(response => {
        //console.log(response.data);
        this.setState({ serviceApprovalData: response.data })
        console.log(this.state.serviceApprovalData);
      })
      .catch(err => {
        alert(err);
      })
  }

  // viewDetails(details){
  //   alert(JSON.stringify(details));
  // }
  render() {
    const displayPosts = (
      <Tabs>
        <TabList style={{ "backgroundColor": "Yellow" }}>
          <Tab>Vehicle Assigned</Tab>
          <Tab>Vehicle Service Approval</Tab>
          <Tab>Vehicle Status</Tab>
        </TabList>

        <TabPanel>
          <div>
            <form>
              <div>
                <table>
                  <thead>
                    <tr>
                      <th>
                        <Input type="checkbox"
                          name="engineerCheck"
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
                <Input type="select" name="engineerName" id="exampleSelect"
                  className="FormField__Input"
                  value={this.state.engineerName}
                  onChange={this.handleChange}>
                  <option value="0">--SELECT--</option>
                  <option value="Akshay Thite">Akshay Thite</option>
                  <option value="Shilesh Mali">Shilesh Mali</option>
                </Input>
              </div>
              <br></br>
              <div>
                <Input
                  type="submit"
                  className="btn btn-primary w-100 mt-20"
                  value="ASSIGN"
                  id="registerButton"
                  onClick={() => this.assignEngineer()}
                />
              </div>
            </form>
          </div>
        </TabPanel>
        <TabPanel>
          <div>
            <form>
              <div>
                <table>
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Vehicle Type</th>
                      <th>Customer Name</th>
                      <th>Status</th>
                      <th>View Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.renderServiceApprovalData()}
                  </tbody>
                </table>
              </div>
            </form>
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>
      </Tabs>
    );
    return (
      <div>
        <h2 style={this.h2style}>Supervisor Dashboard</h2>
        {displayPosts}
      </div>
    );
  }

  renderVehicleData() {
    return this.state.vehicleData.map((vehicle, index) => (
      <tr key={index}>
        <td>
          <Input type="checkbox"
            name="engineerCheck"
            selected={this.state.selected[index]}
            onChange={(e) => this.handleSelect(e, index)}
          />
        </td>
        <td>{vehicle.date}</td>
        <td>{vehicle.vehicleType}</td>
        <td>{vehicle.customerName}</td>
      </tr>
    ));
  }

  renderServiceApprovalData() {
    return this.state.serviceApprovalData.map((service, index) => (
      <tr key={index}>        
        <td>{service.date}</td>
        <td>{service.vehicleType}</td>
        <td>{service.customerName}</td>
        <td>{service.approved}</td>
        <td>
          <button onClick = {() => this.viewDetails(service.status) }>View Details</button>
        </td>
        {(service.approved == "Not Approved") && <td>
          Engineer:{service.engineer}
          <Input type="select" name="approved"
            className="FormField__Input"
            value={this.state.approved}
            onChange={this.handleChange}>
            <option value="Not Approved">Not Approved</option>
            <option value="Approved">Approved</option>
          </Input>
        </td>}
      </tr>
    ));
  }
}

export default SupervisorDashboard;