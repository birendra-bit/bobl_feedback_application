import React, { useState } from "react";
import { Navbar, Button, Image, Modal, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";
import Logo from "../../assets/images/BOBLogo.png";
import UserImage from "../../assets/images/user-male-icon.png";

function Navigationbar() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <React.Fragment>
            <Navbar collapseOnSelect expand='lg' className='nav'>
                &nbsp; &nbsp;
                <Navbar.Brand className='mr-auto'>
                    <a href='./'>
                        <Image className='logo' src={Logo} />
                    </a>
                </Navbar.Brand>
                <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-controls='collapseable' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse align-middle' id='navbarSupportedContent'>
                    <ul className='navbar-nav ml-auto '>
                        <li className='nav-item mt-2' style={{ marginLeft: "20px" }}>
                            <a className='nav-link' href='.'>
                                <span className='font-weight-bold'>Dashboard</span>
                            </a>
                        </li>
                        <li className='nav-item mt-2' style={{ paddingTop: "10px" }}>
                            <span className='text-md font-weight-bold username' onClick={handleShow}>
                                Birendra Bhujel
                            </span>
                        </li>
                        <li className='nav-item username'>
                            <img alt='' className='profile' src='../../../user-male-icon.png' onClick={handleShow} />
                        </li>
                    </ul>
                </div>
            </Navbar>

            <Modal show={show} onHide={handleClose} animation={true}>
                <Modal.Body style={{ padding: "20px" }}>
                    <Row>
                        <Col md={5}>
                            <img src={UserImage} alt='user' className='user_image' />
                        </Col>
                        <Col md={7} style={{ marginTop: "20px" }}>
                            <p>
                                <span className='info'> Name: </span> Phuntsho Norbu{" "}
                            </p>
                            <p>
                                <span className='info'> Designation: </span>CEO
                            </p>
                            <p>
                                <span className='info'> Department: </span> NA
                            </p>
                            <p>
                                <span className='info'> Branch: </span> Headquater
                            </p>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={handleClose} style={{ padding: "1px 7px", color: "white" }}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    );
}
export default Navigationbar;
