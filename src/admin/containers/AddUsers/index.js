import React, { Component } from "react";
import {
    Container,
    Input,
    FormGroup,
    Form,
    FormFeedback,
    Button
} from 'reactstrap';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { addUsers } from './actions'

class AddingUsers extends Component {
    constructor(props) {
        super(props);
        this.state = this.initialState();
        this.handleChange = this.handleChange.bind(this);
        this.register = this.register.bind(this);
    }

    initialState = () => {
        return (
            {
                category: '',
                name: '',
                address: '',
                city: '',
                phoneNumber: '',
                email: '',
                password: '',
                confirmPassword: '',
                submitted: false
            }
        )
    }

    register = async () => {
        alert("category.."+this.state.category);
        const addUserReqData = {
            category: this.state.category,
            name: this.state.name,
            address: this.state.address,
            city: this.state.city,
            email: this.state.email,
            password: this.state.password,
            phone: this.state.phoneNumber,
            registration_date: new Date()
        }
        alert(JSON.stringify(addUserReqData));
        await this.props.addUsers(addUserReqData);
        
    }

    handleChange = e => {
        let target = e.target;
        let name = target.name;
        let value = target.type == 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div>
                <Container>
                    <Form>
                        <h2>Add Users</h2>
                        {/* <form> */}
                    Category
                    <div>
                            {/* <FormGroup> */}
                            <Input type="select" 
                                name="category"
                                value={this.state.category}
                                id="exampleSelect"
                                className="FormField__Input"
                                onChange={this.handleChange}>
                                <option value="0">--SELECT--</option>
                                <option value="Customer">Customer</option>
                                <option value="Employee">Employee</option>
                            </Input>
                            {/* <div>
                                category:{submitted && !this.state.category}
                            </div> */}
                            {/* <FormFeedback invalid>Category can not be blank !</FormFeedback> */}
                            {/* </FormGroup> */}
                        </div>
                        <br></br>
                    Name
                    <div>
                            {/* <FormGroup> */}
                            <Input
                                type="text"
                                className="form-control form-control-lg"
                                name="name"
                                value={this.state.name}
                                onChange={this.handleChange}
                            />
                            {/* <FormFeedback invalid>name can not be blank !</FormFeedback>
                            </FormGroup> */}
                        </div>
                        <br></br>
                    Address
                    <div>
                            <Input
                                type="text"
                                className="form-control form-control-lg"
                                name="address"
                                value={this.state.address}
                                onChange={this.handleChange}
                            />
                        </div>
                        <br></br>
                    City
                    <div>
                            <Input
                                type="text"
                                className="form-control form-control-lg"
                                name="city"
                                value={this.state.city}
                                onChange={this.handleChange}
                            />
                        </div>
                        <br></br>
                    Phone Number
                    <div>
                            <Input
                                type="text"
                                className="form-control form-control-lg"
                                name="phoneNumber"
                                value={this.state.phoneNumber}
                                onChange={this.handleChange}
                            />
                        </div>
                        <br></br>
                    Email
                    <div>
                            <Input
                                type="text"
                                className="form-control form-control-lg"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                            />
                        </div>
                        <br></br>
                    Password
                    <div>
                            <Input
                                type="password"
                                className="form-control form-control-lg"
                                maxLength="20"
                                name="password"
                                value={this.state.password}
                                onChange={this.handleChange}
                            />
                        </div>
                        <br></br>
                    Confirm Password
                    <div>
                            <Input
                                type="password"
                                className="form-control form-control-lg"
                                maxLength="20"
                                name="confirmPassword"
                                value={this.state.confirmPassword}
                                onChange={this.handleChange}
                            />
                        </div>
                        <br></br>
                        <div>
                            <Input
                                type="submit"
                                className="btn btn-primary w-100 mt-20"
                                value="REGISTER"
                                id="registerButton"
                                onClick={() => this.register()}
                            />
                            {/* <Button onClick={this.register}>
                                Submit
                            </Button> */}
                        </div>
                        {/* </form> */}
                    </Form>
                </Container>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            addUsers: addUsers
        },
        dispatch
    );
}

const mapStateToProps = state => {
    return {
        addUserData: state.addUserReducer.addUserData || {}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddingUsers);