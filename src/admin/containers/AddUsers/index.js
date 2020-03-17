import React, { Component } from "react";
import { Input } from 'reactstrap';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import classes from './index.css';

const options = ['one', 'two', 'three'];
const defaultOption = options[0];

class Users extends Component{
    render(){
        return(
            <div>
                <h2>Add Users</h2>
                <form>
                    Category
                    <div>                        
                        <Dropdown options={options} onChange={this._onSelect} value={defaultOption}
                        className={classes.Select} 
                        placeholder="Select an option" />
                    </div>
                    <br></br>
                    Name
                    <div>
                        <Input
                        type="text"
                        className="form-control form-control-lg"
                        />
                    </div>
                    <br></br>
                    Address
                    <div>
                        <Input
                        type="text"
                        className="form-control form-control-lg"
                        />
                    </div>
                    <br></br>
                    City
                    <div>
                        <Input
                        type="text"
                        className="form-control form-control-lg"
                        />
                    </div>
                    <br></br>
                    Phone Number
                    <div>
                        <Input
                        type="text"
                        className="form-control form-control-lg"
                        />
                    </div>
                    <br></br>
                    Email
                    <div>
                        <Input
                        type="text"
                        className="form-control form-control-lg"
                        />
                    </div>
                    <br></br>
                    Password
                    <div>
                        <Input
                        type="password"
                        className="form-control form-control-lg"
                        maxLength="20"
                        />
                    </div>
                    <br></br>
                    Confirm Password
                    <div>
                        <Input
                        type="password"
                        className="form-control form-control-lg"
                        maxLength="20"
                        />
                    </div>
                    <br></br>
                    <div>
                        <Input
                        type="submit"
                        className="btn btn-primary w-100 mt-20"
                        value="REGISTER"
                        id="registerButton"
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default Users;