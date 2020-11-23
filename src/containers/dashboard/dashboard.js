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
      give_feeds: true,
      feeds_given_by: false,
      feeds_given_to: false,
    };
  }

  feedsGiveHandler = () => {
    this.setState({
      give_feeds: true,
      feeds_given_by: false,
      feeds_given_to: false,
    });
  };
  feedsGivenByHandler = () => {
    this.setState({
      give_feeds: false,
      feeds_given_by: true,
      feeds_given_to: false,
    });
  };
  feedsGivenToHandler = () => {
    this.setState({
      give_feeds: false,
      feeds_given_by: false,
      feeds_given_to: true,
    });
  };
  render() {
    let cards = this.state.info.map((info, index) => {
      return (
        <Col sm={2} md={2} lg={2} key={index}>
          <Card info={info} />
        </Col>
      );
    });
    let feedback_given_by = <FeedbackGivenBy info={this.state.info} />;
    return (
      <div>
        <Navigationbar />
        <Container fluid={false}>
          <br />
          <br />
          <br />
          <Tab
            give_feeds={this.state.give_feeds} feedsGive={this.feedsGiveHandler}
            feeds_given_by={this.state.feeds_given_by} feedsGiveBy ={this.feedsGivenByHandler}
            feeds_given_to={this.state.feeds_given_to} feedsGivenTo = {this.feedsGivenToHandler}
            feedsToggle={this.feedsToggleHandler}
          />
          <Row>
            <Col sm={12} md={12} lg={12} xs={12}>
              <Row>{this.state.give_feeds ? cards : feedback_given_by}</Row>
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
