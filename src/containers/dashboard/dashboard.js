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
          feedsGiven:true
        },
        {
          name: "abjdls",
          designation: "Manager",
          branch: "Thimphu Main Branch",
          department: "HR",
          dzongkhag: "Thimphu",
          email: "example@bobl.bt",
          feedsGiven:false
        },
        {
          name: "abjdls",
          designation: "Manager",
          branch: "Thimphu Main Branch",
          department: "HR",
          dzongkhag: "Thimphu",
          email: "example@bobl.bt",
          feedsGiven:true
        },
        {
          name: "abjdls",
          designation: "Manager",
          branch: "Thimphu Main Branch",
          department: "HR",
          dzongkhag: "Thimphu",
          email: "example@bobl.bt",
          feedsGiven:false
        },
        {
          name: "abjdls",
          designation: "Manager",
          branch: "Thimphu Main Branch",
          department: "HR",
          dzongkhag: "Thimphu",
          feedsGiven:true,
          email: "example@bobl.bt"
        },
        {
          name: "abjdls",
          designation: "Manager",
          branch: "Thimphu Main Branch",
          department: "HR",
          dzongkhag: "Thimphu",
          email: "example@bobl.bt",
          feedsGiven:false
        },
        {
          name: "abjdls",
          designation: "Manager",
          branch: "Thimphu Main Branch",
          department: "HR",
          dzongkhag: "Thimphu",
          email: "example@bobl.bt",
          feedsGiven:true
        },
        {
          name: "abjdls",
          designation: "Manager",
          branch: "Thimphu Main Branch",
          department: "HR",
          dzongkhag: "Thimphu",
          email: "example@bobl.bt",
          feedsGiven:false
        },
        {
          name: "abjdls",
          designation: "Manager",
          branch: "Thimphu Main Branch",
          department: "HR",
          dzongkhag: "Thimphu",
          email: "example@bobl.bt",
          feedsGiven:true
        },
      ],
      giveFeeds: true,
      feedsGiven: false
    };
  }

  feedsToggleHandler = () => {
    this.setState(preState=>({
      giveFeeds: !preState.giveFeeds
    }))
  };
  render() {
    let cards = this.state.info.map((info, index) => {
      return (
        <Col sm={2} md={2} lg={2} key={index}>
          <Card info={info} btnText="Give Feeds" />
        </Col>
      );
    });
    let feedsGivenList = <FeedbackGivenBy info={this.state.info} />;
    return (
      <div>
        <Navigationbar />
        <Container fluid={false}>
          <br />
          <br />
          <br />
          <Tab
            giveFeeds={this.state.giveFeeds}
            feedsToggle={this.feedsToggleHandler}
          />
          <Row>
            <Col sm={12} md={12} lg={12} xs={12}>
              <Row>
                { this.state.giveFeeds ? cards : feedsGivenList }
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
