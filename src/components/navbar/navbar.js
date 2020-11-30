import React, { useState } from "react";
import { Navbar, Button, Image, Modal, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";
import Logo from "../../assets/images/navbar-logo.png";
import UserImage from "../../assets/images/user-male-icon.png";
import { Link } from "react-router-dom";

function Navigationbar() {
    const [show, setShow] = useState(false); // show and hide user profile.
    const user_info = {
        // user info for user profile.
        name: "Birendra",
        designation: "Manager",
        branch: "Thimphu Main Branch",
        department: "HR",
    };

    return (
        <React.Fragment>
            <Navbar collapseOnSelect expand='lg' className='nav'>
                <Navbar.Brand className='navbar-logo-container'>
                    <Link to='/dashboard'>
                        <Image className='logo' src={Logo} />
                    </Link>
                </Navbar.Brand>
                <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse align-middle' id='navbarSupportedContent'>
                    <ul className='navbar-nav ml-auto '>
                        <li className='nav-item mt-2' style={{ marginLeft: "20px" }}>
                            <Link to='/dashboard' className='nav-link'>
                                <span className='font-weight-bold'>Dashboard</span>
                            </Link>
                        </li>
                        <li className='nav-item mt-2' style={{ paddingTop: "10px" }}>
                            <span className='text-md font-weight-bold username' onClick={() => setShow(true)}>
                                {sessionStorage.getItem("user")}
                            </span>
                        </li>
                        <li className='nav-item username'>
                            <img alt='' className='profile' src='../../../user-male-icon.png' onClick={() => setShow(true)} />
                        </li>
                    </ul>
                </div>
            </Navbar>

            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Body style={{ padding: "20px" }}>
                    <Row>
                        <Col md={5} lg={5} sm={5} xs={5}>
                            <img src={UserImage} alt='user' className='user_image' />
                        </Col>
                        <Col md={7} lg={7} sm={7} xs={7} style={{ marginTop: "20px" }}>
                            <p>
                                <span className='info'> Name: </span> {user_info.name}
                            </p>
                            <p>
                                <span className='info'> Designation: </span>
                                {user_info.designation}
                            </p>
                            <p>
                                <span className='info'> Department: </span> {user_info.department}
                            </p>
                            <p>
                                <span className='info'> Branch: </span> {user_info.branch}
                            </p>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Link to='/logout'>
                        <Button variant='secondary' style={{ padding: "1px 7px", color: "white" }}>
                            logout
                        </Button>
                    </Link>
                    <Button variant='secondary' onClick={() => setShow(false)} style={{ padding: "1px 7px", color: "white" }}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    );
}
export default Navigationbar;
