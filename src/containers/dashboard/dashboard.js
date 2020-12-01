import React, { Component } from "react";
import Navigationbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { Container, Col, Row } from "react-bootstrap";
import Card from "../../components/card/card";
import FeedbackGivenBy from "../../components/feedback_given_by/feedback_given";
import Tab from "../../components/tab/tab";
import axios from "axios";



class Dashboard extends Component {
  constructor(props = []) {
    super(props);
    this.state = {
      giveFeedsData: [],
      reciveFeedsData: [],
      giveFeeds: true,
      feedsGiven: false
    };
  }

  //handle toggle
  giveFeedsToggleHandler = () => {
    this.setState({
      giveFeeds: true,
    });
  };
  feedGivenToggle = () => {
    this.setState((preState) => ({
      giveFeeds: false,
    }));
  };

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

  //get give feedback data
  getGiveFeedsUserData = async () => {
    let url = `/api/method/erpnext.feedback_api.get_feedback_provide?user=`;
    try {
      let resp = await axios.get(url + sessionStorage.getItem("user"));
      if (resp.data.message !== "No Data") {
        this.setState({
          giveFeedsData: resp.data.message
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  //get Receive feeds data
  getReciveFeedsUserData = async () => {
    let url = `/api/method/erpnext.feedback_api.get_feedback_receive?user=`;
    try {
      let resp = await axios.get(url + sessionStorage.getItem("user"));
      if (resp.data.message !== "No Data") {
        this.setState({
          reciveFeedsData: resp.data.message
        });
      } 
    } catch (err) {
      console.error(err);
    }
  };
  componentDidMount() {
    this.getGiveFeedsUserData();
    this.getReciveFeedsUserData();
  }
  render() {
    let cards = this.state.giveFeedsData.map((info, index) => {
      return (
        <Col sm={4} md={4} lg={3} key={index}>
          <Card info={info} btnText="Give Feeds" />
        </Col>
      );
    });
    let feedsGivenList = <FeedbackGivenBy info={this.state.reciveFeedsData} />;

    return (
      <React.Fragment>
        <Navigationbar />
        <Container fluid={false}>
          <br />
          <React.Fragment>
            <Tab
              giveFeeds={this.state.giveFeeds}
              giveFeedsToggleHandler={this.giveFeedsToggleHandler}
              feedGivenToggle={this.feedGivenToggle}
            />
            <Row>
              <Col sm={12} md={12} lg={12} xs={12}>
                <Row>{this.state.giveFeeds ? cards : feedsGivenList}</Row>
              </Col>
              <Col sm={12} md={12} lg={4}></Col>
            </Row>
          </React.Fragment>
        </Container>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Dashboard;
