import React, { Component } from "react";
import { viewCustomerEnquiries } from "./actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class CustomerEnquiry extends Component {
    constructor(props) {
        super(props)
        this.state = this.initialState();
    }

    initialState = () => {
        return(
            {
                customerEnquiries: [],
                customerMsgs: [],
                customerMsg: "",
                name: "",
                showResults: false
            }
        )
    }

    componentDidMount() {
        this.props.viewCustomerEnquiries();
    }

    handleChange = (e,index) => {
        // this.setState({
        //     name: e.target.value
        // });
        console.log(index+" "+e.target.value);
        this.state.customerMsg = e.target.value;
        console.log("after set value:"+this.state.customerMsg);
    };

    showReplyBox = e => {
        e.preventDefault();
        //alert(e.target.value)
        this.setState({
            showResults: true
        });
    };

    render() {
        return (
            <div>
                <h2>Customer Enquiry</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Customer Name</th>
                            <th>Customer Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderCustomerEnquiriesData()}
                    </tbody>
                </table>
            </div>
        );
    }
    renderCustomerEnquiriesData() {
        if(this.props.customerEnquiries.length > 0){
            return this.props.customerEnquiries.map((customerEnquiry, index) => (
                <tr key={index}>
                    <td>{customerEnquiry.createdTime}</td>
                    <td>{customerEnquiry.name}</td>
                    <td>{customerEnquiry.message}</td>
                    <td>
                        <button onClick={this.showReplyBox}>Reply</button>
                        <div
                            // nameClass="showName"
                            style={{ display: this.state.showResults ? "block" : "none" }}
                        >
                            <input
                                placeholder="name"
                                name="customerMsg"
                                value={this.state.customerMsgs[index]}
                                onChange={e => this.handleChange(e, index)}
                            />
                        </div>
                    </td>
                </tr>
            ));
        }
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            viewCustomerEnquiries: viewCustomerEnquiries
        },
        dispatch
    );
}

const mapStateToProps = state =>{
    return {
        customerEnquiries: state.customerEnquiryReducer.customerEnquiries || {}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerEnquiry);