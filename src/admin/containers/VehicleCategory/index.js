import React, { Component } from "react";
import { Input } from 'reactstrap';
import axios from 'axios';

class VehicleCategory extends Component{
    constructor(props){
        super(props);
        this.state = {
            vehicleCategoryData: [],
            category: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.addVehicleCategory = this.addVehicleCategory.bind(this);
    } 

    componentDidMount() {
        axios.get(`http://localhost:3600/Admin/VehicleTypes/view`)
            .then(response =>{
                console.log(response.data);
                this.setState({vehicleCategoryData: response.data}) 
                //console.log(this.state.vehicleCategoryData);
            })
            .catch(err=>{
                this.props.errorInUserData(err)
            })
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

    addVehicleCategory = () => {
        const addCatReqData = {
            category:this.state.category
        }
        //alert("addCatReqData.."+ JSON.stringify(addCatReqData));
        axios.post('http://localhost:3600/Admin/VehicleTypes/add',addCatReqData)
        .then(response=>{
            alert("response="+JSON.stringify(response));
            if(response.data.statusCode === 200)
                alert(response.data.status);
            else
                alert(response.data.error);
        })
        .catch(err => {
            alert("err="+JSON.stringify(err));
        })
    }
    
    render(){
        return(
            <div>
                <h2>Vehicle Category</h2>
                <div>
                <table>
                    <tbody>
                        {this.renderVehicleCategoryData()}
                    </tbody>
                </table>
                </div>
                <br></br>
                <form>
                    Add New Category
                    <div>
                        <Input
                        type="text"
                        className="form-control form-control-lg"
                        name="category"
                        value={this.state.category}
                        onChange={this.handleChange}
                        />
                    </div>
                    <br></br>
                    <div>
                        <Input
                        type="submit"
                        className="btn btn-primary w-100 mt-20"
                        value="ADD"
                        id="addButton"
                        onClick={()=>this.addVehicleCategory()}
                        />
                    </div>
                </form>
            </div>
        );
    }

    renderVehicleCategoryData() {
        return this.state.vehicleCategoryData.map((vehicleCategory,index)=>(
            <tr key={index}>
                <td>{vehicleCategory.category}</td>
            </tr>
        ));
    }
}

export default VehicleCategory;


