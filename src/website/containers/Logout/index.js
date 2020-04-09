import React, { Component } from 'react';

class Logout extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        localStorage.clear();
        this.props.history.push('/login');
        window.location.reload();
    }

    render(){
        return(
            <div>

            </div>
        );
    }
}

export default Logout;