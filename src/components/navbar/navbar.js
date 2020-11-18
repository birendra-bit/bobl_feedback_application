import React from "react";
import { Navbar, Form, Nav, NavDropdown, FormControl, Button } from "react-bootstrap";

class Navigationbar extends React.Component {
        render() {
                return (
                        <Navbar collapseOnSelect expand='lg'>
                                <Navbar.Brand href='/' className='companyName'>

                                </Navbar.Brand>
                                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                                <Navbar.Collapse id='responsive-navbar-nav'>
                                        <Nav className='mr-auto'>
                                                <Nav.Link href='/about_and_contact'>Contact Us</Nav.Link>
                                        </Nav>
                                        <Nav>
                                                <Nav.Link href='donate'>Donate</Nav.Link>
                                        </Nav>
                                        <Form inline>
                                                <Button variant='link' className='login' onClick={this.handleShowLogin}>
                                                        Login
                                </Button>
                                                <Button className='button buttonText' onClick={this.handleShow}>
                                                        <span>Sign Up</span>
                                                </Button>
                                        </Form>
                                </Navbar.Collapse>
                        </Navbar>
                );
        }
}
export default Navigationbar;
