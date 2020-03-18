import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { connect }from 'react-redux';
import axios from 'axios';
import * as reportActions from './actions';

class Reports extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    getUserData=()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(response =>{
            console.log("response..",response);
            const personsData = response.data;
            this.props.saveUserData(personsData);
        })
        .catch(err=>{
            this.props.errorInUserData(err)
        })
    }

    render(){
        return(
            <div>
                <h2>Reports</h2>
                <button type="submit" onClick={this.getUserData}>Get Uers</button>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.userData &&
                         this.renderUserData(this.props.userData)}
                    </tbody>
                </table>
            </div>
        );
    }
    renderUserData = userData => {
        return userData.map((x,index)=>(
            <tr key={index}>
                <td>{x.name}</td>
            </tr>
        ));
    }
}



const mapDispatchToProps = dispatch =>
bindActionCreators(
    {
        ...reportActions
    },
    dispatch
)

const mapStateToProps = state=>{
    return{
        userData:state.report.userData
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Reports);