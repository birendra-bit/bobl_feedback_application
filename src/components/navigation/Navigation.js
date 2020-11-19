import React from 'react';
import './Navigation.css'

const Navigation = () =>(
    <nav className="navbar navbar-expand-lg align-middle">
       <img className="logo" src="../../../boblogo.png"/>
       <div className="ml-auto d-flex ">
        <a href="#">
            <span className="text-sm font-weight-bold">Dashboard</span>
        </a>&nbsp;&nbsp;&nbsp;
        <span className="text-sm font-weight-bold">|</span>&nbsp;&nbsp;&nbsp;
        <a href="#">
            <span className="text-sm font-weight-bold">Your Name</span>
        </a>
        <a href="#">
            <img className="profile" src="../../../user-male-icon.png"/>
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       </div>
    </nav>
)

export default Navigation