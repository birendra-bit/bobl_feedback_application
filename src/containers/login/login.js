import React from "react";
import LoginJumbotron from "../../components/login/login";
import { Row, Col, Container } from "react-bootstrap"
import "./login.css"

function Login() {
        return (
                <Container fluid={true} className="loginBackground">
                        <Row>
                                <Col md={4} lg={4} sm={4} xs={4}>
                                        <LoginJumbotron />
                                </Col>
                        </Row>
                </Container>
        );
}

export default (Login);


