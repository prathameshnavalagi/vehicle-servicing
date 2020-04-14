import React, { Component } from 'react';
import { Input } from 'reactstrap';
import axios from 'axios';

class Contact extends Component{

    constructor(props){
        super(props);
        this.state = {
            name: '',
            emailId: '',
            phoneNo: '',
            message: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.contactUs = this.contactUs.bind(this);
    }

    contactUs = () => {
        const contactUsData = {
            name:this.state.name,
            emailId:this.state.emailId,
            phoneNo:this.state.phoneNo,
            message:this.state.message
        }
        alert(JSON.stringify(contactUsData));
        axios.post('http://localhost:3600/contactus',contactUsData)
        .then(response=>{
            alert("response="+JSON.stringify(response));
            if(response.data.message!=null)
                alert(response.data.message);
            else
                alert(response.data.error);
        })
        .catch(err => {
            alert("err="+JSON.stringify(err));
        })
    }
    
    handleChange = e => {
        //debugger;
        let target = e.target;
        let value = target.type == 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
            [name]: value
        });
    }
    
    render() {
        return (
            <div>
                <h2>Contact Us</h2>
                <form>
                    Name
                    <div>
                        <Input
                        type="text"
                        className="form-control form-control-lg"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        />
                    </div>
                    <br></br>
                    Email
                    <div>
                        <Input
                        type="text"
                        className="form-control form-control-lg"
                        name="emailId"
                        value={this.state.emailId}
                        onChange={this.handleChange}
                        />
                    </div>
                    <br></br>
                    Phone Number
                    <div>
                        <Input
                        type="text"
                        className="form-control form-control-lg"
                        name="phoneNo"
                        value={this.state.phoneNo}
                        onChange={this.handleChange}
                        />
                    </div>
                    <br></br>
                    Message
                    <div>
                        <Input
                        type="textarea"
                        className="form-control form-control-lg"
                        name="message"
                        value={this.state.message}
                        onChange={this.handleChange}
                        />
                    </div>
                    <br></br>
                    <div>
                        <Input
                        type="submit"
                        className="btn btn-primary w-100 mt-20"
                        value="SEND MESSAGE"
                        id="registerButton"
                        onClick={()=>this.contactUs()}
                        />
                    </div>
                </form>
            </div>            
        );
    }
}

export default Contact;