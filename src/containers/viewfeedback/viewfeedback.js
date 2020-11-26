import React, { Component, setState } from "react";
import Feeds from "../../components/feeds/feeds";
import { Container, Col, Row, Button, Jumbotron } from "react-bootstrap";
import Navigationbar from "../../components/navbar/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import "./viewfeedback.css";
import { $ } from "jquery";
import { useParams } from "react-router-dom";

class ViewFeedBack extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            user_completed: true,
            data: [],
            // data: [
            //     {
            //         competency_code: "CD3: Delivery003",
            //         competency: [
            //             {
            //                 title: "To ensure closures and deliver on intended results prudently.",
            //                 detail: [
            //                     { content: "Always conscious about resources against results.", score: "", id: "q11a" },
            //                     { content: "Always conscious about resources against results.", score: "", id: "q11b" },
            //                     { content: "Always conscious about resources against results.", score: "", id: "q11c" },
            //                     { content: "Always conscious about resources against results.", score: "", id: "q11d" },
            //                 ],
            //             },
            //             {
            //                 title: "To steer and implement changes, and deals with uncertainties.",
            //                 detail: [
            //                     { content: "Always conscious about resources against results.", score: "", id: "q12a" },
            //                     { content: "Always conscious about resources against results.", score: "", id: "q12b" },
            //                 ],
            //             },
            //             {
            //                 title: "To build organizational capacity and harness individual potentials",
            //                 detail: [
            //                     { content: "Always conscious about resources against results.", score: "", id: "q13a" },
            //                     { content: "Always conscious about resources against results.", score: "", id: "q13b" },
            //                     { content: "Always conscious about resources against results.", score: "", id: "q13c" },
            //                 ],
            //             },
            //         ],
            //     },
            //     {
            //         competency_code: "CD2: Drive004",
            //         competency: [
            //             {
            //                 title: "To communicate effectively.",
            //                 detail: [
            //                     { content: "Always conscious about resources against results.", score: "", id: "q21a" },
            //                     { content: "Always conscious about resources against results.", score: "", id: "q21b" },
            //                 ],
            //             },
            //             {
            //                 title: "To exemplify personal drive and integrity.",
            //                 detail: [
            //                     { content: "Always conscious about resources against results.", score: "", id: "q22a" },
            //                     { content: "Always conscious about resources against results.", score: "", id: "q22b" },
            //                 ],
            //             },
            //             {
            //                 title: "To cultivate positive and conducive work culture",
            //                 detail: [{ content: "Always conscious about resources against results.", score: "", id: "q23a" }],
            //             },
            //         ],
            //     },
            // ],
        };
    }

    componentDidMount() {
        axios.get("/api/method/erpnext.feedback_api.get_competency").then((res) => {
            this.setState({ data: res.data.message });
            const persons = res.data.message;
            console.log(persons);
        });
    }

    // updates the score on the state
    scoreUpdate = (id, score) => {
        this.state.data.map((d) => {
            return d.competency.map((x) => {
                return x.detail.map((y) => {
                    if (y.id === id) {
                        y.score = score;
                    }
                    return true;
                });
            });
        });
    };

    // validate if the all the questions have been answered
    validateAndUpdate = () => {
        let iscomplete = true;
        this.state.data.map((d) => {
            return d.competency.map((x) => {
                return x.detail.map((y) => {
                    if (!y.score) {
                        iscomplete = false;
                    }
                });
            });
        });
        if (iscomplete) {
            console.log("hello");
        } else {
            alert("please complete all the answer");
            // $(".show_alert").css("display", "none");
        }
    };

    render() {
        return (
            <div>
                <Navigationbar />
                <Row className='show_alert'>
                    <Col md={12} lg={12} sm={12} xs={12}>
                        <Jumbotron id='alert_jumbotron'>
                            <h1>
                                Incomplete <FontAwesomeIcon icon={faThumbsDown} style={{ fontSize: "25px", color: "#007bff" }} />
                            </h1>
                            <hr />
                            <h5 style={{ marginBottom: "50px" }}>Please answer all the questions!</h5>
                            <p>
                                <Button variant='primary' className='close_button'>
                                    close
                                </Button>
                            </p>
                        </Jumbotron>
                    </Col>
                </Row>
                <Container>
                    <Row>
                        <Col sm={12} md={12} lg={12} xs={12}>
                            <br />
                            <span style={{ fontWeight: "bold", color: "#4d79ff" }}>Feedback given to:</span>
                            &nbsp;&nbsp;
                            <span style={{ fontWeight: "bold" }}>Pema Wangmo, HR, Bumthang Branch</span>
                            <hr />
                            {this.state.data.map((x, index) => {
                                return (
                                    <React.Fragment key={index}>
                                        <Row>
                                            <Col lg={2}>
                                                <strong>{x.corporate_ds}</strong>
                                            </Col>
                                            <Col lg={10}>
                                                {x.competency.map((c, i) => {
                                                    return <Feeds key={i} index={i} data={c} scoreUpdate={this.scoreUpdate} />;
                                                })}
                                            </Col>
                                        </Row>
                                        <hr />
                                    </React.Fragment>
                                );
                            })}
                            <Button style={{ background: "#2aa6de", float: "right", marginBottom: "50px" }} onClick={() => this.validateAndUpdate()}>
                                Submit
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default ViewFeedBack;
