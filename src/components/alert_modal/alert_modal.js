import React from "react";
import { Jumbotron, Button, Row, Col } from "react-bootstrap";
import "./alert_modal.css";
import { $ } from "jquery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";

function AlertModal() {
    function close() {
        console.log("helellelelele");
        $("#alert_jumbotron").css("display", "none");
    }
    return (
        <Row>
            <Col md={12} lg={12} sm={12} xs={12}>
                <Jumbotron id='alert_jumbotron'>
                    <h1>
                        Incomplete <FontAwesomeIcon icon={faThumbsDown} style={{ fontSize: "25px", color: "#007bff" }} />
                    </h1>
                    <hr />
                    <h5 style={{ marginBottom: "50px" }}>Please answer all the questions!</h5>
                    <p>
                        <Button variant='primary' onClick={() => close} className='close_button'>
                            close
                        </Button>
                    </p>
                </Jumbotron>
            </Col>
        </Row>
    );
}
export default AlertModal;
