import React from 'react';
import classes from './Toolbar.css';
console.log("in toolbar");
console.log("userRole:", localStorage.getItem("userRole"));
console.log("userToken:", localStorage.getItem("userToken"));
console.log("userFullName:", localStorage.getItem("userFullName"));
const toolbar = () => {
    //userRole = localStorage.getItem("userRole");
    if(localStorage.getItem("userRole")==="ADMIN"){
        return(           
            <header className={classes.Toolbar}>
                <ul>
                    <li><a href="/adminDashboard">DASHBOARD</a></li>
                    <li><a href="/addUsers">ADD USERS</a></li>
                    <li><a href="/manageUsers">MANAGE USERS</a></li>
                    <li><a href="/serviceRequest">SERVICE REQUEST</a></li>
                    <li><a href="/newService">NEW SERVICE</a></li>
                    <li><a href="/pendingService">PENDING SERVICE</a></li>
                    <li><a href="/vehicleCategory">VEHICLE CATEGORY</a></li>
                    <li><a href="/reports">REPORTS</a></li>
                    <li><a href="/customerEnquiry">CUSTOMER ENQUIRY</a></li>
                    <li><a href="/logout">LOGOUT</a></li>
                    <p style={{ "color": "Yellow","align":"right" }}>
                        {localStorage.getItem("userFullName")}
                    </p>
                </ul>
                <nav>
                </nav>
            </header>           
        )
    }else if(localStorage.getItem("userRole")==="NORMAL_USER"){
        return(           
            <header className={classes.Toolbar}>
                <ul>
                    <li><a href="/customerDashboard">DASHBOARD</a></li>
                    <li><a href="/customerServiceRequest">SERVICE REQUEST</a></li>
                    <li><a href="/customerServiceHistory">SERVICE HISTORY</a></li>
                    <li><a href="/logout">LOGOUT</a></li>
                    <p style={{ "color": "Yellow","align":"right" }}>
                        {localStorage.getItem("userFullName")}
                    </p>
                </ul>
                <nav>
                </nav>
            </header>           
        )
    }else if(localStorage.getItem("userRole")==="SUPERVISOR"){
        return(           
            <header className={classes.Toolbar}>
                <ul>
                    <li><a href="/supervisorDashboard">DASHBOARD</a></li>
                    <li><a href="/supervisorServiceRequest">SERVICE REQUEST</a></li>
                    <li><a href="/logout">LOGOUT</a></li>
                    <p style={{ "color": "Yellow","align":"right" }}>
                        {localStorage.getItem("userFullName")}
                    </p>
                </ul>
                <nav>
                </nav>
            </header>           
        )
    }else{
        return(    
            <header className={classes.Toolbar}>
                <ul>
                    <li><a href="/">HOME</a></li>
                    <li><a href="/about">ABOUT US</a></li>
                    <li><a href="/pricing">PRICING</a></li>
                    <li><a href="/offers">OUR OFFERS</a></li>
                    <li><a href="/contact">CONTACT US</a></li>
                    <li><a href="/login">LOGIN</a></li>
                    <li><a href="/register">SIGN UP</a></li>
                </ul>
                <nav>
                </nav>
            </header>
        );
    }
}

export default toolbar;