import React from "react";
import { Navbar, Form, Nav, NavDropdown, FormControl, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import './navbar.css';

class Navigationbar extends React.Component {
        render() {
                return (
                        <Navbar collapseOnSelect expand='lg'>
                                <Navbar.Brand>
                                        <a href="#">
                                                <img className="img-thumbnail logo" src="../../../boblogo.png" />
                                        </a>
                                </Navbar.Brand>
                                <Button className="navbar-toggler" type="button" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-controls="collapseable" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                </Button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                                        <ul className="navbar-nav ml-auto">
                                                <li className="nav-item ">
                                                        <a className="nav-link" href="#">
                                                                <span className="text-sm font-weight-bold">Dashboard</span>
                                                        </a>
                                                </li>
                                                <li className="nav-item ">
                                                        <a className="nav-link" href="#">
                                                                <span className="text-sm font-weight-bold">Birendra Bhujel</span>
                                                        </a>
                                                </li>
                                                <li className="nav-item ">
                                                        <a className="nav-link" href="#">
                                                                <img className="profile" src="../../../user-male-icon.png" />
                                                        </a>
                                                </li>
                                        </ul>
                                </div>
                        </Navbar>
                );
        }
}
export default Navigationbar;
