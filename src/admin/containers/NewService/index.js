import React, { Component } from "react";
import { Input } from 'reactstrap';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import classes from '../AddUsers/users.css';

const options = ['Customer', 'Employee'];
const defaultOption = options[0];

class NewService extends Component{
    render(){
        return(
            <div>
                <h2>New Service</h2>
                <form>
                    <div>
                        <h3>Vehcle List</h3>
                    </div>
                    Select Supervisor
                    <div>                        
                        <Dropdown options={options} onChange={this._onSelect} value={defaultOption}
                        className={classes.Select} 
                        placeholder="Select an option" />
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
}

export default NewService;