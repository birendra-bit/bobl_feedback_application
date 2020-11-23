import React, { Component } from "react";
import Navigationbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { Container, Col, Row } from "react-bootstrap";
import Card from "../../components/card/card";
import FeedbackGivenBy from "../../components/feedback_given_by/feedback_given";
import Tab from "../../components/tab/tab";

class Dashboard extends Component {
  constructor(props = []) {
    super(props);
    this.state = {
      info: [
        {
          name: "Tshering Dorji Wangchuk",
          designation: "Manager",
          branch: "Thimphu Main Branch",
          department: "HR",
          dzongkhag: "Thimphu",
          email: "example@bobl.bt",
        },
        {
          name: "abjdls",
          designation: "Manager",
          branch: "Thimphu Main Branch",
          department: "HR",
          dzongkhag: "Thimphu",
          email: "example@bobl.bt",
        },
        {
          name: "abjdls",
          designation: "Manager",
          branch: "Thimphu Main Branch",
          department: "HR",
          dzongkhag: "Thimphu",
          email: "example@bobl.bt",
        },
        {
          name: "abjdls",
          designation: "Manager",
          branch: "Thimphu Main Branch",
          department: "HR",
          dzongkhag: "Thimphu",
          email: "example@bobl.bt",
        },
        {
          name: "abjdls",
          designation: "Manager",
          branch: "Thimphu Main Branch",
          department: "HR",
          dzongkhag: "Thimphu",
          email: "example@bobl.bt",
        },
        {
          name: "abjdls",
          designation: "Manager",
          branch: "Thimphu Main Branch",
          department: "HR",
          dzongkhag: "Thimphu",
          email: "example@bobl.bt",
        },
        {
          name: "abjdls",
          designation: "Manager",
          branch: "Thimphu Main Branch",
          department: "HR",
          dzongkhag: "Thimphu",
          email: "example@bobl.bt",
        },
        {
          name: "abjdls",
          designation: "Manager",
          branch: "Thimphu Main Branch",
          department: "HR",
          dzongkhag: "Thimphu",
          email: "example@bobl.bt",
        },
        {
          name: "abjdls",
          designation: "Manager",
          branch: "Thimphu Main Branch",
          department: "HR",
          dzongkhag: "Thimphu",
          email: "example@bobl.bt",
        },
      ],
      giveFeeds: true,
      feedsGivenBy: false,
      feedsGivenTo: false,
    };
  }

  feedsGiveHandler = (args) => {
    this.setState({
      giveFeeds: true,
      feedsGivenBy: false,
      feedsGivenTo: false,
    });
  };
  feedsGivenByHandler = () => {
    this.setState({
      giveFeeds: false,
      feedsGivenBy: true,
      feedsGivenTo: false,
    });
  };
  feedsGivenToHandler = () => {
    this.setState({
      giveFeeds: false,
      feedsGivenBy: false,
      feedsGivenTo: true,
    });
  };
  feedsToggleHandler = (args) => {
    switch (args) {
      case 1:
        this.setState({
          giveFeeds: true,
          feedsGivenBy: false,
          feedsGivenTo: false,
        });
      case 2:
        this.setState({
          giveFeeds: false,
          feedsGivenBy: true,
          feedsGivenTo: false,
        });
      default:
        this.setState({
          giveFeeds: false,
          feedsGivenBy: false,
          feedsGivenTo: true,
        });
    }
  };
  render() {
    let giveFeedsCards = this.state.info.map((info, index) => {
      return (
        <Col sm={2} md={2} lg={2} key={index}>
          <Card info={info} btnText="Give Feeds" />
        </Col>
      );
    });
    let feedsGivenCards = this.state.info.map((info, index) => {
      return (
        <Col sm={2} md={2} lg={2} key={index}>
          <Card info={info} btnText="View Feeds" />
        </Col>
      );
    });
    let feedGivenBy = <FeedbackGivenBy info={this.state.info} />;
    return (
      <div>
        <Navigationbar />
        <Container fluid={false}>
          <br />
          <br />
          <br />
          <Tab
            giveFeeds={this.state.giveFeeds}
            feedsGiveHanlder={this.feedsGiveHandler}
            feedsGivenBy={this.state.feedsGivenBy}
            feedsGivenByHandler={this.feedsGivenByHandler}
            feedsGivenTo={this.state.feedsGivenTo}
            feedsGivenToHandler={this.feedsGivenToHandler}
            // feedsToggle={this.feedsToggleHandler}
          />
          <Row>
            <Col sm={12} md={12} lg={12} xs={12}>
              <Row>
                { this.state.giveFeeds ? giveFeedsCards :'' }
                { this.state.feedsGivenBy ? feedGivenBy : '' }
                { this.state.feedsGivenTo ? feedsGivenCards : ''}
              </Row>
            </Col>
            <Col sm={12} md={12} lg={4}></Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default Dashboard;
