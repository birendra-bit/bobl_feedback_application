import React from "react";
import { Row, Col } from "react-bootstrap";
import "./feeds.css";

const feeds = (props) => {
    let ol = (
        <ol type='A'>
            {props.data.detail.map((x, i) => {
                return (
                    <li key={i}>
                        <Row style={{ margin: "3px 0" }}>
                            <Col lg={12}>
                                {x.content}
                                {x.score ? (
                                    <span className='badge badge-info' style={{ float: "right" }}>
                                        please rate
                                    </span>
                                ) : (
                                    <span className='badge badge-info' style={{ float: "right" }}>
                                        6
                                    </span>
                                )}
                            </Col>
                            {/* <Col lg={2}></Col> */}
                        </Row>
                        <hr />
                    </li>
                );
            })}
        </ol>
    );
    return (
        <div>
            <div className='title'>
                <strong>{props.index + 1}. </strong>
                <span>{props.data.title}</span>
            </div>
            {ol}
        </div>
    );
};

export default feeds;
