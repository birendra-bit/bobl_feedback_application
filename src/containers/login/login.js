import React from "react";
import NavigationBar from "../../components/navbar/navbar";
import { Button, Container, Col, Row, Form } from "react-bootstrap"
import "./login.css"

function Login() {
        return (
                <Container fluid={true}>
                        <Row>
                                <Col md={12} lg={12} sm={12} xs={12} style={{ border: "1px solid red" }}>
                                        {/* <NavigationBar /> */}
                                </Col>
                                <Col md={12} lg={12} sm={12} xs={12} className={"loginBackground"} style={{ border: "1px solid green" }}>
                                        <h1> djhfkjshfkjdshfkjsd </h1>
                                </Col>
                        </Row>
                </Container>
        );
}

export default (Login);

