import React, { Component } from "react";
import { Input } from 'reactstrap';

class VehicleCategory extends Component{
    render(){
        return(
            <div>
                <h2>Vehicle Category</h2>
                <form>
                    Add New Category
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
                        value="ADD"
                        id="addButton"
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default VehicleCategory;