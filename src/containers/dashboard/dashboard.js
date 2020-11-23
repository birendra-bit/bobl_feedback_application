import React, { Component } from "react";
import Navigationbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { Container, Col, Row } from "react-bootstrap";
import Card from "../../components/card/card";
import FeedbackGiven from "../../components/feedback_given/feedback_given";
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
      feeds_giver: false
    };
  }

  viewFeedsHandler = ()=>{
      this.setState({
          give_feeds: true,
          feeds_giver: false
      })
  }

  viewFeedsGiverHandler = ()=>{
    this.setState({
        give_feeds: false,
        feeds_giver: true
    })
  }
  render() {
    let cards = this.state.info.map((info, index) => {
      return (
        <Col sm={2} md={2} lg={2} key={index}>
          <Card info={info} />
        </Col>
      );
    });
    let feedback_given = <FeedbackGiven info={this.state.info} />;
    return (
      <div>
        <Navigationbar />
        <Container fluid={false}>
            <br/>
            <br/>
            <br/>
          <Tab give_feeds={this.state.give_feeds} 
                feeds_giver = {this.state.feeds_giver}
                viewFeeds = {this.viewFeedsHandler}
                viewFeedsGiver = { this.viewFeedsGiverHandler}
                />
          <Row>
            <Col sm={12} md={12} lg={12} xs={12}>
              <Row>{this.state.give_feeds ? cards : feedback_given}</Row>
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
