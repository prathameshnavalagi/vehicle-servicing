import React from 'react';
import classes from './Toolbar.css';
const toolbar = () => (
    <header className={classes.Toolbar}>      
        {/* <div><a href="/">HOME</a></div>
        <div>ABOUT US</div>
        <div>PRICING</div>
        <div>OUR OFFERS</div>
        <div>CONTACT US</div>
        <div><a href="/login">LOGIN</a></div>
        <div>SIGN UP</div> */}
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

export default toolbar;