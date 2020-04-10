import React, { Component } from "react";
import { Input } from 'reactstrap';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as loginActions from "./actions";
class Home extends Component{

    constructor(props){
        super(props);
        this.state = {
            trackingId: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.trackStatus = this.trackStatus.bind(this);
    } 

    handleChange = e => {
        //debugger;
                let target = e.target;
                let name = target.name;
                let value = target.type == 'checkbox' ? target.checked : target.value;
                this.setState({
                    [name]: value
                });
        }
    
    trackStatus = () => {
        alert("trackingId.."+ this.state.trackingId);
        // axios.get('',addUserReqData)
        // .then(response=>{
        //     alert("response="+JSON.stringify(response));
        //     if(response.data.id!=null)
        //         alert(response.statusText);
        //     else
        //         alert(response.data.error);
        // })
        // .catch(err => {
        //     alert("err="+JSON.stringify(err));
        // })
    }
    render(){        
        return(
            <div>
               <h3>Add More Life to Your Vehicle</h3>
               <div>
                    <Input
                    type="text"
                    className="form-control form-control-lg"
                    maxLength="20"
                    name="trackingId"
                    value={this.state.trackingId}
                    onChange={this.handleChange}
                    />
                    <Input
                    type="submit"
                    className="btn btn-primary w-100 mt-20"
                    onClick={()=>this.trackStatus()}
                    />
                </div>
                <br></br>
                Or
                <br></br>
               <p>Call Us On <b>9876543210</b></p>
            </div>
        );
    }
}


export default Home;