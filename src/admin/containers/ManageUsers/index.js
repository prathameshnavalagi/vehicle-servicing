import React, { Component } from "react";
import { Input } from 'reactstrap';

class ManagingUsers extends Component{
    render(){
        return(
            <div>
                <h2>Manage Users</h2>
                <form>    
                    Search
                    <div>
                        <Input
                            type="text"
                            className="form-control form-control-lg"
                        />
                        <button>Search</button>
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
                        value="UPDATE"
                        id="registerButton"
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default ManagingUsers;