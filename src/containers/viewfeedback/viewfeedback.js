import React, { Component } from "react";
import Feeds from "../../components/feeds/feeds";
import { Container, Col, Table, Row } from "react-bootstrap";
import Navigationbar from "../../components/navbar/navbar";

class ViewFeedBack extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    competency_code: "CD3: Delivery003",
                    competency: [
                        {
                            title: "To ensure closures and deliver on intended results prudently.",
                            detail: [
                                { content: "Always conscious about resources against results.", score: 5 },
                                { content: "Always conscious about resources against results.", score: "" },
                                { content: "Always conscious about resources against results.", score: "" },
                                { content: "Always conscious about resources against results.", score: "" },
                            ],
                        },
                        {
                            title: "To steer and implement changes, and deals with uncertainties.",
                            detail: [
                                { content: "Always conscious about resources against results.", score: "" },
                                { content: "Always conscious about resources against results.", score: "" },
                            ],
                        },
                        {
                            title: "To build organizational capacity and harness individual potentials",
                            detail: [
                                { content: "Always conscious about resources against results.", score: "" },
                                { content: "Always conscious about resources against results.", score: "" },
                                { content: "Always conscious about resources against results.", score: "" },
                            ],
                        },
                    ],
                },
                {
                    competency_code: "CD2: Drive004",
                    competency: [
                        {
                            title: "To communicate effectively.",
                            detail: [
                                { content: "Always conscious about resources against results.", score: "" },
                                { content: "Always conscious about resources against results.", score: "" },
                            ],
                        },
                        {
                            title: "To exemplify personal drive and integrity.",
                            detail: [
                                { content: "Always conscious about resources against results.", score: "" },
                                { content: "Always conscious about resources against results.", score: "" },
                            ],
                        },
                        {
                            title: "To cultivate positive and conducive work culture",
                            detail: [{ content: "Always conscious about resources against results.", score: "" }],
                        },
                    ],
                },
            ],
        };
    }
    render() {
      console.log(this.props.match.params.employee)
        return (
            <div>
                <Navigationbar />
                <Container>
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
                                            <strong>{x.competency_code}</strong>
                                        </Col>
                                        <Col lg={10}>
                                            {x.competency.map((c, i) => {
                                                return <Feeds key={i} index={i} data={c} />;
                                            })}
                                        </Col>
                                    </Row>
                                    <hr />
                                </React.Fragment>
                            );
                        })}
                    </Col>
                </Container>
            </div>
        );
    }
}

export default ViewFeedBack;
