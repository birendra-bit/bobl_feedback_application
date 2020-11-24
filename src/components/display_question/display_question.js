import React from "react";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./display_question.css";

const DisplayQuestion = (props) => (
    <Row className='display_question_parent_div'>
        <Col md={12}>
            {console.log("this is the data: ", props.data)}
            <h5>{props.data.competency_code}</h5>
            {props.data.competency.map((info) => (
                <React.Fragment>
                    <p>{info.title}</p>
                    <p style={{ color: "red" }}>{info.detail}</p>
                </React.Fragment>
            ))}
        </Col>
    </Row>
);
export default DisplayQuestion;
