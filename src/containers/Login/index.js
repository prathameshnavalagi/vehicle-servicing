import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as loginActions from "./actions";
class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            testCount: 0
        };
    }

    onClickAdd = () => {
        this.props.increaseCounter(this.state.testCount);
    };
    
    onChangeCounter = e => {
        this.setState({ testCount: e.target.value });
    }; 

    onClickReduce = () => {
        let val = this.state.testCount - 1;
        this.props.reduceCounter(val);
        this.setState({ testCount: this.state.testCount - 1 });
    };

    render(){
        return(
            <div>
                {/* <h3>Login to your account</h3>
                <form>
                    <div>
                        <Input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Phone Number"
                        />
                    </div>
                    <div>
                        <Input
                        type="password"
                        className="form-control form-control-lg"
                        placeholder="Password"
                        maxLength="20"
                        />
                    </div>      
                    <div>
                        <input
                        type="submit"
                        className="btn btn-primary w-100 mt-20"
                        value="LOG IN"
                        id="logInButton"
                        />
                    </div>              */}
                    <div>
                        <h2>Counter in local state: {this.state.testCount}</h2>
                    </div>
                    <div>
                        <h2>Counter in redux store: {this.props.testCount}</h2>
                    </div>
                    <div>
                        <input 
                        type="text"
                        value={this.state.testCount}
                        onChange={this.onChangeCounter}
                        />
                        (onChange event fired for this input field that updates the counter in local state)
                    </div>
                    <div>
                        <button onClick={this.onClickAdd}>Update counter</button>(Updates counter in redux store)
                    </div>
                    <div>
                        <button onClick={this.onClickReduce}>Reduce Counter</button>(Updates counter in redux store and local)
                    </div>
                {/* </form> */}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { testCount: state.loginReducer.testCount };
};

const mapDispatchToProps = dispatch =>
 bindActionCreators(
    {
        ...loginActions
    },
    dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(Login);