import React from "react";
import { Navbar, Form, Nav, NavDropdown, FormControl, Button, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import './navbar.css';
import Logo from "../../assets/images/BOBLogo.png"

class Navigationbar extends React.Component {
        render() {
                return (
                        <Navbar collapseOnSelect expand='lg'>
                                &nbsp; &nbsp;
                                <Navbar.Brand className="mr-auto">
                                        <a href="#">
                                                <Image className="logo" src={Logo} />
                                        </a>
                                </Navbar.Brand>
                                <Button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-controls="collapseable" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                </Button>
                                <div className="collapse navbar-collapse align-middle" id="navbarSupportedContent" >
                                        <ul className="navbar-nav ml-auto ">
                                                <li className="nav-item mt-2">
                                                        <a className="nav-link" href="#">
                                                                <span className="font-weight-bold">Dashboard</span>
                                                        </a>
                                                </li>
                                                <li className="nav-item mt-2">
                                                        <a className="nav-link" href="#">
                                                                <span className="text-md font-weight-bold">Birendra Bhujel</span>
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
