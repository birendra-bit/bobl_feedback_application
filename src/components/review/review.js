import React, { Component } from "react";
import { Col, Row, Container, Button } from "react-bootstrap";
import Navigationbar from "../../components/navbar/navbar";
import ScoreBoard from "../score_board/score_board";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

class Review extends Component {
    constructor(props = []) {
        super(props);
        this.state = {
            data: [
                {
                    corporate_ds: "CD1: Direction",
                    competency: [
                        {
                            title: "To focus strategically and inspire a sense of purpose",
                            explanation: "a. Understands vision of the Bank and aligns all its plans and strategies to the vision;<br/>b. Have sense of the importance of aligning individuals and their roles to the vision.<br/>c. Has charm and integrity that drives employees to give their best.<br/>",
                            detail: [
                                {
                                    content: "a. Always talks about the big picture and ensures others understand it.",
                                    score: "1",
                                    id: "Q038",
                                },
                                {
                                    content: "b. Encourages alignment of individuals and their activities to the goal of the Bank.",
                                    score: "2",
                                    id: "Q039",
                                },
                                {
                                    content: "c. Builds synergy and sense of shared purpose.",
                                    score: "3",
                                    id: "Q040",
                                },
                                {
                                    content: "d. Always makes decisions in the interest of the Bank and its employees.",
                                    score: "3",
                                    id: "Q041",
                                },
                            ],
                        },
                        {
                            title: "To harness information and opportunities.",
                            explanation: "a. Always aware about changes and developments taking place within and outside the country, especially in areas concerning the <br/>        business of the Bank.<br/>b. Understands threats and opportunities offered by the ever-changing environment. <br/>",
                            detail: [
                                {
                                    content: "a. Shares information and explains how the Bank would or would not be impacted.",
                                    score: "4",
                                    id: "Q042",
                                },
                                {
                                    content: "b. Encourages subordinates to read and keep themselves updated.",
                                    score: "5",
                                    id: "Q043",
                                },
                                {
                                    content: "c. Appreciates when subordinates bring in useful new information.",
                                    score: "3",
                                    id: "Q044",
                                },
                            ],
                        },
                        {
                            title: "To show judgment and intelligence.",
                            explanation: "a. Capable of engaging in critical thinking.<br/>b. Understands current and future risks and benefits.<br/>c. Has understanding of importance of innovation and continuous improvements.<br/><br/>",
                            detail: [
                                {
                                    content: "a. Shows clarity of objectives, reasons, issues and implications.",
                                    score: "3",
                                    id: "Q045",
                                },
                                {
                                    content: "b. Seeks logical sequence.",
                                    score: "3",
                                    id: "Q046",
                                },
                                {
                                    content: "c. Encourages and appreciates new ideas and solutions.",
                                    score: "3",
                                    id: "Q047",
                                },
                            ],
                        },
                    ],
                },
                {
                    corporate_ds: "CD2: Drive",
                    competency: [
                        {
                            title: "To cultivate positive and conducive work culture",
                            explanation: "a. Always approachable and appreciative of subordinates.<br/>b. Understands diversity and importance of maintaining synergy.<br/>c. Emphasis on fairness and friendliness.<br/>d. Pursuit of employee-friendly policies and initiatives.<br/>",
                            detail: [
                                {
                                    content: "a. Always stresses on the common purpose and working together as one, helping each other.",
                                    score: "3",
                                    id: "Q048",
                                },
                                {
                                    content: "b. Promotes and ensures there is fairness in the reward and recognition system.",
                                    score: "3",
                                    id: "Q049",
                                },
                                {
                                    content: "c. Always demonstrates qualities that unify everyone to work as effective team.",
                                    score: "3",
                                    id: "Q050",
                                },
                                {
                                    content: "d. principle of integrity. discrimination, favoritism and nepotism but works based on principle of integrity.",
                                    score: "3",
                                    id: "Q051",
                                },
                            ],
                        },
                        {
                            title: "To exemplify personal drive and integrity.",
                            explanation: "a. There is high level of sincere self-association with the Bank.<br/>b. Known for working based on what is right and wrong and what is good and bad.<br/>c. Always guided by the interest of the Bank.<br/>",
                            detail: [
                                {
                                    content: "a. Shows sincere commitment and concern for the Bank.",
                                    score: "3",
                                    id: "Q052",
                                },
                                {
                                    content: "b. Always ensures decisions and actions are as per the country’s laws, and other rules and regulations including those of the Bank.",
                                    score: "3",
                                    id: "Q053",
                                },
                                {
                                    content: "c. Always works based on principles, ethics and values.",
                                    score: "3",
                                    id: "Q054",
                                },
                            ],
                        },
                        {
                            title: "To communicate effectively.",
                            explanation: "a. Opening up oneself to others and also understanding others.<br/>b. There is transparent sharing of information.<br/>c. There is clarity in logic, principle, objectives and expectations.<br/>",
                            detail: [
                                {
                                    content: "a. Always shows readiness to be open and frank and tries to understand the other party by listening actively.",
                                    score: "3",
                                    id: "Q055",
                                },
                                {
                                    content: "b. Always shares decisions, directives and other necessary information.",
                                    score: "3",
                                    id: "Q056",
                                },
                                {
                                    content: "c. Always explains the ‘why’ behind decisions and directives.",
                                    score: "3",
                                    id: "Q057",
                                },
                            ],
                        },
                    ],
                },
                {
                    corporate_ds: "CD3: Delivery",
                    competency: [
                        {
                            title: "To build organizational capacity and harness individual potentials",
                            explanation: "a. Understands the type of capacities and capabilities required for the Bank.<br/>b. There are efforts to maintain and enhance such in line with the vision.<br/>c. Both manifested and latent potentials of individual employees are harnessed.<br/>",
                            detail: [
                                {
                                    content: "a. Shows knowledge and understanding of different abilities and skills required for the Bank in various Departments.",
                                    score: "3",
                                    id: "Q058",
                                },
                                {
                                    content: "b. Channels resources for training and development of employees.",
                                    score: "3",
                                    id: "Q059",
                                },
                                {
                                    content: "c. Encourages and supports employees to be at their best.",
                                    score: "3",
                                    id: "Q060",
                                },
                            ],
                        },
                        {
                            title: "To steer and implement changes, and deals with uncertainties. ",
                            explanation: "a. Change agent of the Bank.<br/>b. Designs and defines effective organizational strategies.<br/>c. Cautious of risks and competitions, but presence of courage to decide.<br/>",
                            detail: [
                                {
                                    content: "a. Shows logical understanding of changes and innovations required.",
                                    score: "3",
                                    id: "Q061",
                                },
                                {
                                    content: "b. Shows knowledge and understanding of how to achieve objectives.",
                                    score: "3",
                                    id: "Q062",
                                },
                                {
                                    content: "c. Always shows caution about possible risks, but shows courage to make decisions based on principles.",
                                    score: "3",
                                    id: "Q063",
                                },
                            ],
                        },
                        {
                            title: "To ensure closures and deliver on intended results prudently.",
                            explanation: "a. Emphasis on the culture of quality, timeline and targets. <br/>b. Focus on constant watch on policies, plans and activities. <br/>c. Culture of delegation. <br/>d. Always conscious about resources against results.",
                            detail: [
                                {
                                    content: "a. Gives importance to quality products and services and ensures progress is as per policies and plans.",
                                    score: "3",
                                    id: "Q064",
                                },
                                {
                                    content: "b. Emphasizes and ensures compliance to timeline and targets, but shows understanding of reasonable and rational deviations.",
                                    score: "3",
                                    id: "Q065",
                                },
                                {
                                    content: "c. Delegates power and roles appropriately.",
                                    score: "2",
                                    id: "Q066",
                                },
                                {
                                    content: "d. Manages resources efficiently.",
                                    score: "5",
                                    id: "Q067",
                                },
                            ],
                        },
                    ],
                },
            ],
        };
    }

    render() {
        return (
            <React.Fragment>
                <Navigationbar />
                <Container style={{ background: "#e6e6e6", padding: "30px 50px", marginTop: "30px", borderRadius: "10px" }}>
                    <h1 style={{ textAlign: "center", color: "#0d6092" }}>
                        Review <FontAwesomeIcon icon={faCopy} />
                    </h1>
                    <hr />
                    {this.state.data.map((info) => {
                        // console.log("---->", info);
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
                                                            {/* <ScoreBoard qid={x.id} data_info={y} className={(x.id, "score")} scoreUpdate={props.scoreUpdate} /> */}
                                                            <ScoreBoard qid={x.id} data_info={y} className={(x.id, "score")} review_or_feed={false} />
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
                    <Button className='btn-danger' style={{ float: "right", marginTop: "30px" }}>
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
