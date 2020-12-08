import React, { Component } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import View from "../../components/view/givefeedback";
import axios from "axios";
import Navigationbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import ViewContent from "../../components/view/viewcontent";
import Review from "../../components/review/review";
import { getRequest } from "../../api/api";

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
      showDescription: false,
      isAllReviewed: false,
      showModal: false,
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
    } else if (args === "review") {
      let iscomplete = true;
      this.state.data.map((d) => {
        return d.competency.map((x) => {
          return x.detail.map((y) => {
            if (!y.score) {
              iscomplete = false;
              return iscomplete;
            }
          });
        });
      });
      if (iscomplete === false) {
        this.setState({
          showModal: true,
        });
      } else {
        this.setState({
          isAllReviewed: true,
        });
      }
    } else {
      let data_to_be_posted = {
        recipient: this.props.match.params.employee,
        docstatus: 1,
        item: [],
      };
      this.state.data.map((d) => {
        return d.competency.map((x) => {
          return x.detail.map((y) => {
            let qId_and_score = { detail_code: "", rating: "" };
            qId_and_score.detail_code = y.id;
            qId_and_score.rating = y.score;
            data_to_be_posted.item.push(qId_and_score);
          });
        });
      });
      this.updateData(data_to_be_posted);
    }
  };
  //hide alret modal
  hideModalHandler = () => {
    this.setState({
      showModal: false,
    });
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
  // update score on click when the user in on give feedback
  scoreUpdate = (id, score) => {
    let i = this.state.index;
    let j = this.state.childIndex;
    this.state.data[i].competency[j].detail.map((x) => {
      if (x.id === id) {
        x.score = score;
      }
    });
  };
  reviewScoreUpdate = (id, score) => {
    this.state.data.map((d) => {
      return d.competency.map((x) => {
        return x.detail.map((y) => {
          if (y.id === id) {
            y.score = score;
          }
        });
      });
    });
  };
  getQuestions = async () => {
    let res = await getRequest(
      "/api/method/erpnext.feedback_api.get_competency"
    );
    this.setState({ data: res.data.message, index: 0 });
    let i = this.state.data.length - 1;
    let j = this.state.data[i].competency.length - 1;
    let laztId = this.state.data[i].competency[j].detail[0].id;
    this.setState({
      lastDataId: laztId,
    });
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
        <Navigationbar />
        <br />
        <Container>
          {!this.state.isAllReviewed ? (
            <React.Fragment>
              <hr />
              <p style={{ marginLeft: "20px" }}>
                <span style={{ fontSize: "large", color: "#7b7b7b" }}>
                  <b>Giving Feedback to: </b>
                </span>
                &nbsp;&nbsp;
                <span style={{ color: "#929292" }}>
                  <i>{this.props.match.params.name},</i>
                </span>
                &nbsp;&nbsp;
                <span style={{ color: "#929292" }}>
                  <i>{this.props.match.params.designation}</i>
                </span>
              </p>
              <hr />
            </React.Fragment>
          ) : (
            ""
          )}

          {this.state.index >= 0 ? (
            <Row>
              <Col xs={12} sm={12} md={12} lg={12}>
                <Row>
                  <Col lg={12}>
                    {!this.state.isAllReviewed ? (
                      <div>
                        <View
                          header={
                            this.state.data[this.state.index].corporate_ds
                          }
                          data={
                            this.state.data[this.state.index].competency[
                              this.state.childIndex
                            ]
                          }
                          incrementIndex={this.incrementIndexHandler}
                          decrementIndex={this.decrementIndexHandler}
                          laztId={this.state.lastDataId}
                          scoreUpdate={this.scoreUpdate}
                          index={this.state.childIndex}
                          pIndex={this.state.index}
                        />
                      </div>
                    ) : !this.state.isAllSubmitted ? (
                      <Review
                        data={this.state.data}
                        reviewScoreUpdate={this.reviewScoreUpdate}
                        incrementIndex={this.incrementIndexHandler}
                      />
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
           <Modal
           show={this.state.showModal}
           onHide={this.hideModalHandler}
           animation={false}
         >
           <Modal.Body>You Must Give Rating To All Fields!</Modal.Body>
           <Modal.Footer>
             <Button variant="secondary" onClick={this.hideModalHandler}>
               Ok
             </Button>
           </Modal.Footer>
         </Modal>
        <Footer />
      </React.Fragment>
    );
  }
}

export default ViewFeeds;
