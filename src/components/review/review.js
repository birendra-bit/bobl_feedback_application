import React, { Component } from "react";
import { Col, Row, Container, Button } from "react-bootstrap";
import ScoreBoard from "../score_board/score_board";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

class Review extends Component {
    constructor(props = []) {
        super(props);
        this.state = {
            data: props.data,
        };
    }

    render() {
        console.log("this is the props: => ", this.props.data);
        return (
            <React.Fragment>
                <Container style={{ background: "#f1f1f159", padding: "30px 50px", marginTop: "30px", borderRadius: "10px", boxShadow: "6px 6px 21px #cececeb0, -6px -6px 21px #e2e2e2b0" }}>
                    <h1 style={{ textAlign: "center", color: "#0d6092" }}>
                        Review <FontAwesomeIcon icon={faCopy} />
                    </h1>
                    <hr />
                    {this.state.data.map((info) => {
                        return (
                            <Row>
                                <Col lg={12} md={12} sm={12} xs={12}>
                                    <h4 style={{ color: "#135b7b" }}>
                                        <u>{info.corporate_ds}</u>
                                    </h4>
                                </Col>
                                {info.competency.map((y) => {
                                    return (
                                        <Col lg={12} md={12} sm={12} xs={12}>
                                            <h5 style={{ margin: "10px 0 10px 20px" }}>
                                                <i>{y.title}</i>
                                            </h5>
                                            {y.detail.map((x, index) => {
                                                return (
                                                    <Row>
                                                        <Col lg={8} md={8} sm={8} xs={12} key={index} style={{ margin: "10px 0 0 40px" }}>
                                                            {x.content}
                                                        </Col>
                                                        <Col lg={3} md={3} sm={3} xs={12}>
                                                            <ScoreBoard qid={x.id} data_info={y} className={(x.id, "score")} review_or_feed={false} reviewScoreUpdate={this.props.reviewScoreUpdate} />
                                                        </Col>
                                                        <Col lg={{ span: 10, offset: 1 }} md={{ span: 10, offset: 1 }} sm={{ span: 10, offset: 1 }} xs={{ span: 10, offset: 1 }}>
                                                            <hr style={{ width: "100%" }} />
                                                        </Col>
                                                    </Row>
                                                );
                                            })}
                                            <br />
                                        </Col>
                                    );
                                })}
                                <br />
                                <br />
                            </Row>
                        );
                    })}
                    <Button className='btn-danger' style={{ float: "right", marginTop: "30px" }} onClick={() => this.props.incrementIndex("submit")}>
                        Submit
                    </Button>
                    <br />
                    <br />
                    <br />
                </Container>
            </React.Fragment>
        );
    }
}

export default Review;
