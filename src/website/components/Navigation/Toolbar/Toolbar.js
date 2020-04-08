import React from 'react';
import classes from './Toolbar.css';
console.log("in toolbar");
//localStorage.setItem("userRole","any");
console.log("userRole:", localStorage.getItem("userRole"));
const toolbar = () => {
    //userRole = localStorage.getItem("userRole");
    if(localStorage.getItem("userRole")==="ADMIN"){
        return(           
            <header className={classes.Toolbar}>
                <ul>
                    <li><a href="/adminDashboard">DASHBOARD</a></li>
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