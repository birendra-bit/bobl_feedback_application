import React from "react";
import { Link } from "react-router-dom";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import "./viewcontent.css";
import CheckImage from "../../assets/images/check.png";

const viewContent = () => (
    <Container>
        <Row className='mt-5 justify-content-center'>
            <Col className='' md={12} lg={12} sm={12} xs={12} style={{ textAlign: "center", marginBottom: "-50px", zIndex: "5" }}>
                <img src={CheckImage} alt='success-check-icon' className='check-image-success' />
            </Col>
            <Col className='' md={4} lg={4} sm={4} xs={12}>
                <Card className='m-auto feedback-given-success-message'>
                    <Card.Body>
                        <Card.Title className='on-success'>Your Feedback Submission is Successful</Card.Title>
                    </Card.Body>
                    <br />
                    <Link to='/dashboard'>
                        <Button className='btn-success btn-block m-auto' style={{ width: "50%" }}>
                            OK
                        </Button>
                    </Link>
                </Card>
            </Col>
        </Row>
    </Container>
);

export default viewContent;
