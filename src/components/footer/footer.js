import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./footer.css";
import Logo from "../../assets/images/login-bob-logo.png";
import { Col } from "react-bootstrap";

const Footer = (props) => (
    <React.Fragment>
        <br />
        <br />
        <br />
        <footer className='footer text-center font-weight-bold'>
            <Col md={12} lg={12} sm={12} xs={12}>
                Copyright © 2020 Bank of Bhutan. All rights reserved. <img src={Logo} className='footer-logo' />
            </Col>
        </footer>
    </React.Fragment>
);

export default Footer;
