import React, { Component } from 'react';
import { Input } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";

class About extends Component{
    render(){
        return(
            <div>
                <div>
                    <h2> About Us </h2>
                    <p>
                        Vehicle Servicing aims to make your two wheeler ownership simple, effective and stress free.
                    </p>
                </div>
                <div>
                    <Input
                    type="submit"
                    className="btn btn-primary w-100 mt-20"
                    value="BOOK NOW"
                    id="registerButton"
                    />
                    <br></br>
                    <br></br>
                    <Input
                    type="submit"
                    className="btn btn-primary w-100 mt-20"
                    value="CONTACT US"
                    id="registerButton"
                    />
                    <br></br>
                    <br></br>
                    <Input
                    type="submit"
                    className="btn btn-primary w-100 mt-20"
                    value="OUR SERVICES"
                    id="registerButton"
                    />
                </div>
            </div>           
        );
    }
}

export default About;