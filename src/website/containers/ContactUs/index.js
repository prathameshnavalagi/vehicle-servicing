import React, { Component } from 'react';
import { Input } from 'reactstrap';

class Contact extends Component{
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
                    Phone Number
                    <div>
                        <Input
                        type="text"
                        className="form-control form-control-lg"
                        />
                    </div>
                    <br></br>
                    Message
                    <div>
                        <Input
                        type="text"
                        className="form-control form-control-lg"
                        />
                    </div>
                    <br></br>
                    <div>
                        <Input
                        type="submit"
                        className="btn btn-primary w-100 mt-20"
                        value="SEND MESSAGE"
                        id="registerButton"
                        />
                    </div>
                </form>
            </div>            
        );
      }
}

export default Contact;