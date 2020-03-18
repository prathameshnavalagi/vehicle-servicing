import React, { Component } from "react";
import { Input } from 'reactstrap';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import classes from '../AddUsers/users.css';

const options = ['Customer', 'Employee'];
const defaultOption = options[0];

class CustomerServiceRequest extends Component{
    render(){
        return(
            <div>
                <h2>Service Request</h2>
                <form>
                    Category
                    <div>                        
                        <Dropdown options={options} onChange={this._onSelect} value={defaultOption}
                        className={classes.Select} 
                        placeholder="Select an option" />
                    </div>
                    <br></br>                   
                    Vehicle Name
                    <div>
                        <Input
                        type="text"
                        className="form-control form-control-lg"
                        />
                    </div>
                    <br></br>
                    Vehicle Model
                    <div>
                        <Input
                        type="text"
                        className="form-control form-control-lg"
                        />
                    </div>
                    <br></br>
                    Vehicle Brand
                    <div>
                        <Input
                        type="text"
                        className="form-control form-control-lg"
                        />
                    </div>
                    <br></br>
                    Vehicle Registration Number
                    <div>
                        <Input
                        type="text"
                        className="form-control form-control-lg"
                        />
                    </div>
                    <br></br>
                    Complaint
                    <div>
                        <textarea name="complaint"/>
                    </div>
                    <br></br>
                    Vehicle Delivery Type
                    <div>
                        <Input type="radio" name="vehicleType" value="pickup" />Pickup
                        <Input type="radio" name="vehicleType" value="walkin" />Walk-in
                    </div>
                    <br></br>
                    <div>
                        <Input
                        type="submit"
                        className="btn btn-primary w-100 mt-20"
                        value="SUBMIT"
                        id="registerButton"
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default CustomerServiceRequest;