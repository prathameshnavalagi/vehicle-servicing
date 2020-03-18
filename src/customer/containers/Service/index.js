import React, { Component } from "react";
import { Input } from 'reactstrap';
const options = ['Customer', 'Employee'];
const defaultOption = options[0];

class CustomerService extends Component{
    render(){
        return(
            <div>
                <h2>Customer Service</h2>
                <form>
                    <div>
                        <Input
                        type="text"
                        className="form-control form-control-lg"
                        />
                        <Input
                        type="submit"
                        className="btn btn-primary w-100 mt-20"
                        value="CHECK STATUS"
                        id="checkStatus"
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default CustomerService;