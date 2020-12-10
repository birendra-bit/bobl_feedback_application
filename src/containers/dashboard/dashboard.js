import React, { Component } from "react";
import Navigationbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { Container, Col, Row } from "react-bootstrap";
import Card from "../../components/card/card";
import FeedbackReceiveList from "../../components/feedback_receive_list/feedbackReceiveList";
import Tab from "../../components/tab/tab";
import axios from "axios";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import Description from "../../components/description/description";

class Dashboard extends Component {
  constructor(props = []) {
    super(props);
    this.state = {
      giveFeedsData: [],
      reciveFeedsData: [],
      giveFeeds: true,
      feedsGiven: false,
      isThereFeedsGiver: false,
      loader: true,
      showDescription: false,
      description: [],
      feedbackSetting: {},
    };
  }

  //handle toggle
  giveFeedsToggleHandler = () => {
    this.setState({
      giveFeeds: true,
    });
  };
  feedGivenToggle = () => {
    this.setState({
      giveFeeds: false,
    });
  };

  //tab switcher
  tabSwitcherHandler = (args) => {
    let bool_arr = ["giveFeeds", "feedsGiven", "showDescription"];
    bool_arr.map((x) => {
      if (x === args) {
        this.setState({
          [x]: true,
        });
      } else {
        this.setState({
          [x]: false,
        });
      }
    });
  };
  //get details of feeds
  getDescription = async () => {
    try {
      let res = await axios.get(
        "/api/method/erpnext.feedback_api.get_competency"
      );
      let setting = await axios.get(
        '/api/resource/Feedback%20Setting?fields=["*"]&filters=[["status","=","Open"],["docstatus","=","1"]]'
      );
      this.setState({
        description: res.data.message,
        feedbackSetting: setting.data.data[0],
      });
    } catch (err) {
      console.error("err ", err);
    }
  };
  //get give feedback data
  getGiveFeedsUserData = async () => {
    let url = `/api/method/erpnext.feedback_api.get_feedback_provide?user=`;
    try {
      let resp = await axios.get(url + sessionStorage.getItem("user"));
      if (resp.data.message !== "No Data")
        this.setState({
          giveFeedsData: resp.data.message,
        });
      this.loaderHandler();
    } catch (err) {
      console.error(err);
    }
  };
  loaderHandler = () => {
    this.setState({
      loader: false,
    });
  };
  //get Receive feeds data
  getReciveFeedsUserData = async () => {
    let url = `/api/method/erpnext.feedback_api.get_feedback_receive?user=`;
    try {
      let resp = await axios.get(url + sessionStorage.getItem("user"));
      if (resp.data.message !== "No Data")
        this.setState({
          reciveFeedsData: resp.data.message,
          isThereFeedsGiver: true,
        });
    } catch (err) {
      console.error(err);
    }
  };

  componentDidMount() {
    this.getGiveFeedsUserData();
    this.getReciveFeedsUserData();
    this.getDescription();
  }

  render() {
    let cards = this.state.giveFeedsData.map((info, index) => {
      return (
        <Col sm={4} md={4} lg={3} key={index}>
          <Card info={info} btnText="Give Feeds" />
        </Col>
      );
    });

    let feedsGivenList = (
      <FeedbackReceiveList info={this.state.reciveFeedsData} />
    );
    return (
      <React.Fragment>
        <Navigationbar showDescription={this.state.showDescription} />
        <Container fluid={false}>
          <br />
          <Tab
            giveFeeds={this.state.giveFeeds}
            feedsGiven={this.state.feedsGiven}
            showDescription={this.state.showDescription}
            isThereFeedsGiver={this.state.isThereFeedsGiver}
            tabSwitcher={this.tabSwitcherHandler}
          />
          <Row>
            {this.state.loader ? (
              <Col>
                <div className="loader">
                  <Loader
                    type="Circles"
                    color="#00BFFF"
                    height={80}
                    width={80}
                  />
                </div>
              </Col>
            ) : (
              <React.Fragment>
                <Col sm={12} md={12} lg={12} xs={12}>
                  <Row>{this.state.giveFeeds ? cards : ""}</Row>
                  <Row>
                    {" "}
                    {this.state.feedsGiven & this.state.isThereFeedsGiver
                      ? feedsGivenList
                      : ""}
                  </Row>
                  <Row>
                    {" "}
                    {this.state.showDescription ? (
                      <Description
                        description={this.state.description}
                        feedbackSetting={this.state.feedbackSetting}
                      />
                    ) : (
                      ""
                    )}{" "}
                  </Row>
                </Col>
              </React.Fragment>
            )}
          </Row>
        </Container>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Dashboard;
