import React, { Component } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import View from "../../components/view/givefeedback";
import axios from "axios";
import Navigationbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import ViewContent from "../../components/view/viewcontent";

class ViewFeeds extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userDeatil: {},
            index: -1,
            data: [],
            childIndex: 0,
            lastDataId: "",
            isAllSubmitted: false,
        };
    }
    //increment index to display next data
    incrementIndexHandler = (args) => {
        if (args === "next") {
            let pIndex = this.state.index;
            let cIndex = this.state.childIndex;
            let cLength = this.state.data[pIndex].competency.length;

            cIndex < cLength - 1
                ? this.setState((prevState) => ({
                      childIndex: prevState.childIndex + 1,
                  }))
                : this.setState((prevState) => ({
                      index: prevState.index + 1,
                      childIndex: 0,
                  }));
        } else {
            let data_to_be_posted = {
                recipient: this.props.match.params.employee,
                docstatus: 1,
                item: [],
            };

            let iscomplete = true;
            this.state.data.map((d) => {
                return d.competency.map((x) => {
                    return x.detail.map((y) => {
                        if (!y.score) {
                            iscomplete = false;
                            return;
                        } else {
                            let qId_and_score = { detail_code: "", rating: "" };
                            qId_and_score.detail_code = y.id;
                            qId_and_score.rating = y.score;
                            data_to_be_posted.item.push(qId_and_score);
                        }
                    });
                });
            });

            if (iscomplete === false) {
                alert("not completed");
            } else {
                // given all Qs are answered post to database
                console.log("about to update the data");
                this.updateData(data_to_be_posted);
            }
        }
    };

    updateData = async (data_to_be_posted) => {
        console.log("this is the data to be posted: ", data_to_be_posted);
        const header = {
            "Content-Type": "application/json",
        };
        try {
            await axios.post("/api/resource/Feedback", data_to_be_posted, header);
        } catch (err) {
            console.error(err);
        }
        // Display the success message after all the data is submnimtted
        this.setState({
            isAllSubmitted: true,
        });
    };

    //decrement index to display previous data
    decrementIndexHandler = () => {
        this.state.childIndex === 0
            ? this.setState((prevState) => ({
                  index: prevState.index - 1,
                  childIndex: prevState.data[this.state.index].competency.length - 1,
              }))
            : this.setState((prevState) => ({
                  childIndex: prevState.childIndex - 1,
              }));
    };
    // update score on click
    scoreUpdate = (id, score) => {
        let i = this.state.index;
        let j = this.state.childIndex;
        this.state.data[i].competency[j].detail.map((x) => {
            if (x.id === id) {
                x.score = score;
            }
        });
    };
    getQuestions = async () => {
        try {
            let res = await axios.get("/api/method/erpnext.feedback_api.get_competency");
            this.setState({ data: res.data.message, index: 0 });
            let i = this.state.data.length - 1;
            let j = this.state.data[i].competency.length - 1;
            let laztId = this.state.data[i].competency[j].detail[0].id;
            this.setState({
                lastDataId: laztId,
            });
        } catch (err) {
            alert("something went wrong", err);
        }
    };
    getUserDetail = async () => {
        let url = `/api/method/erpnext.feedback_api.user_detail?user=`;
        try {
            let resp = await axios.get(url + sessionStorage.getItem("user"));
            this.setState({
                userDeatil: resp.data.message[0],
            });
        } catch (err) {
            alert("something went wrong", err);
        }
    };
    componentDidMount() {
        this.getQuestions();
        this.getUserDetail();
    }
    render() {
        return (
            <React.Fragment>
                <Navigationbar userDetail={this.state.userDeatil} />
                <br />
                <Container>
                    <hr />
                    {!this.state.isAllSubmitted ? (
                        <p style={{ marginLeft: "20px" }}>
                            <span style={{ fontSize: "large", color: "#7b7b7b" }}>
                                <b>Giving Feedback to: </b>
                            </span>
                            &nbsp;&nbsp;
                            <span style={{ color: "#929292" }}> {this.props.match.params.name},</span>
                            &nbsp;&nbsp;
                            <span style={{ color: "#929292" }}>{this.props.match.params.designation}</span>
                        </p>
                    ) : (
                        ""
                    )}
                    <hr />

                    {this.state.index >= 0 ? (
                        <Row>
                            <Col xs={12} sm={12} md={12} lg={12}>
                                <Row>
                                    <Col lg={12}>
                                        {!this.state.isAllSubmitted ? (
                                            <div>
                                                <View header={this.state.data[this.state.index].corporate_ds} data={this.state.data[this.state.index].competency[this.state.childIndex]} incrementIndex={this.incrementIndexHandler} decrementIndex={this.decrementIndexHandler} laztId={this.state.lastDataId} scoreUpdate={this.scoreUpdate} index={this.state.childIndex} pIndex={this.state.index} />
                                            </div>
                                        ) : (
                                            <ViewContent />
                                        )}
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    ) : (
                        ""
                    )}
                </Container>
                <Footer />
            </React.Fragment>
        );
    }
}

export default ViewFeeds;
