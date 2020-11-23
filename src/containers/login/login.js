import React from "react";
import LoginJumbotron from "../../components/login/login";
import { Row, Col, Container } from "react-bootstrap";
import "./login.css";

function Login() {
  return (
    <Container fluid={true} className="loginBackground">
      <Row className="justify-content-md-center h-100">
        <Col md={3} lg={3} sm={12} xs={12} className="my-auto">
          <LoginJumbotron />
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
