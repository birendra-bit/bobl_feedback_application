import React, { Component, setState } from "react";
import Feeds from "../../components/feeds/feeds";
import { Container, Col, Row, Button, Jumbotron } from "react-bootstrap";
import Navigationbar from "../../components/navbar/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import "./viewfeedback.css";
import { $ } from "jquery";

class ViewFeedBack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      user_completed: true,
      data: [],
      userDeatil:{}
    };
  }

  getUserDetail = async () => {
    let url = `/api/method/erpnext.feedback_api.user_detail?user=`;
    try {
      let resp = await axios.get(url + sessionStorage.getItem("user"));
      console.log(resp);
      this.setState({
        userDeatil: resp.data.message[0],
      });
      console.log(this.state.userDeatil);
    } catch (err) {
      alert("something went wrong", err);
    }
  };
  getQuestions =async ()=>{
    try{
        let res = await axios.get("/api/method/erpnext.feedback_api.get_competency")
        this.setState({ data: res.data.message });
    }catch (err){
        alert('something went wrong',err)
    }
  }
  componentDidMount() {
   this.getQuestions()
   this.getUserDetail()
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
      //
      let data_to_be_posted = {
        feedback_give_to: this.props.match.params.employee,
        scores: {},
      };
      this.state.data.map((d) => {
        return d.competency.map((x) => {
          return x.detail.map((y) => {
            data_to_be_posted.scores[y.id] = y.score;
            // NEED TO SEND THE DATA TO POST API
          });
        });
      });
    } else {
      // TODO: NEED TO ACTUALLY MAKE IT A MODAL
      alert("please complete all the answer");
    }
  };

  render() {
    return (
      <div>
        <Navigationbar userDetail = {this.state.userDeatil}/>
        <Row className="show_alert">
          <Col md={12} lg={12} sm={12} xs={12}>
            <Jumbotron id="alert_jumbotron">
              <h1>
                Incomplete{" "}
                <FontAwesomeIcon
                  icon={faThumbsDown}
                  style={{ fontSize: "25px", color: "#007bff" }}
                />
              </h1>
              <hr />
              <h5 style={{ marginBottom: "50px" }}>
                Please answer all the questions!
              </h5>
              <p>
                <Button variant="primary" className="close_button">
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
              <span style={{ fontWeight: "bold", color: "#4d79ff" }}>
                Feedback given to:
              </span>
              &nbsp;&nbsp;
              <span style={{ fontWeight: "bold" }}>
                Pema Wangmo, HR, Bumthang Branch
              </span>
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
                          return (
                            <Feeds
                              key={i}
                              index={i}
                              data={c}
                              scoreUpdate={this.scoreUpdate}
                            />
                          );
                        })}
                      </Col>
                    </Row>
                    <hr />
                  </React.Fragment>
                );
              })}
              <Button
                style={{
                  background: "#2aa6de",
                  float: "right",
                  marginBottom: "50px",
                }}
                onClick={() => this.validateAndUpdate()}
              >
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
