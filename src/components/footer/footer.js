import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./footer.css";
import Logo from "../../assets/images/navbar-logo.png";
import { Col } from "react-bootstrap";

const Footer = (props) => (
    <React.Fragment>
        <br />
        <br />
        <br />
        <footer className='footer text-center font-weight-bold'>
            <Col md={12} lg={12} sm={12} xs={12}>
                <img src={Logo} className='footer-logo' alt='footer-logo' />
                <p style={{ marginBottom: "0", fontSize: "10px" }}>Copyright © 2020 Bank of Bhutan All rights reserved.</p>
            </Col>
        </footer>
    </React.Fragment>
);

export default Footer;
