import React, { Component } from "react";
import Navigationbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { Container, Col, Row } from "react-bootstrap";
import Card from "../../components/card/card";
import FeedbackGivenBy from "../../components/feedback_given_by/feedback_given";
import Tab from "../../components/tab/tab";
import { faLessThanEqual } from "@fortawesome/free-solid-svg-icons";

class Dashboard extends Component {
  constructor(props = []) {
    super(props);
    this.state = {
      info: [
        {
          id:"w121",
          name: "Tshering Dorji Wangchuk",
          designation: "Manager",
          branch: "Thimphu Main Branch",
          department: "HR",
          dzongkhag: "Thimphu",
          email: "example@bobl.bt",
          feedsGiven:true
        },
        {
          id:"opew",
          name: "abjdls",
          designation: "Manager",
          branch: "Thimphu Main Branch",
          department: "HR",
          dzongkhag: "Thimphu",
          email: "example@bobl.bt",
          feedsGiven:false
        },
        {
          id:"opew",
          name: "abjdls",
          designation: "Manager",
          branch: "Thimphu Main Branch",
          department: "HR",
          dzongkhag: "Thimphu",
          email: "example@bobl.bt",
          feedsGiven:true
        },
        {
          id:"opew",
          name: "abjdls",
          designation: "Manager",
          branch: "Thimphu Main Branch",
          department: "HR",
          dzongkhag: "Thimphu",
          email: "example@bobl.bt",
          feedsGiven:false
        },
        {
          id:"opew",
          name: "abjdls",
          designation: "Manager",
          branch: "Thimphu Main Branch",
          department: "HR",
          dzongkhag: "Thimphu",
          feedsGiven:true,
          email: "example@bobl.bt"
        },
        {
          id:"opew",
          name: "abjdls",
          designation: "Manager",
          branch: "Thimphu Main Branch",
          department: "HR",
          dzongkhag: "Thimphu",
          email: "example@bobl.bt",
          feedsGiven:false
        },
        {
          id:"opew",
          name: "abjdls",
          designation: "Manager",
          branch: "Thimphu Main Branch",
          department: "HR",
          dzongkhag: "Thimphu",
          email: "example@bobl.bt",
          feedsGiven:true
        },
        {
          id:"opew",
          name: "abjdls",
          designation: "Manager",
          branch: "Thimphu Main Branch",
          department: "HR",
          dzongkhag: "Thimphu",
          email: "example@bobl.bt",
          feedsGiven:false
        },
        {
          id:"opew",
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

  //handle toggle
  giveFeedsToggleHandler = () => {
    this.setState(preState=>({
      giveFeeds: true
      // feedsGiven: false
    }))
  };
  feedGivenToggle =()=>{
    this.setState(preState=>({
      giveFeeds: false
      // feedsGiven: true
    }))
  }
  render() {
    let cards = this.state.info.map((info, index) => {
      return (
        <Col sm={4} md={4} lg={2} key={index}>
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
            giveFeedsToggleHandler={this.giveFeedsToggleHandler}
            feedGivenToggle = {this.feedGivenToggle}
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
