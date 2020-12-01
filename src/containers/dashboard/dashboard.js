import React, { Component } from "react";
import Navigationbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { Container, Col, Row } from "react-bootstrap";
import Card from "../../components/card/card";
import FeedbackGivenBy from "../../components/feedback_given_by/feedback_given";
import Tab from "../../components/tab/tab";
import axios from "axios";
import Red from "../../assets/images/red.png";
import Green from "../../assets/images/green.png";
import Blue from "../../assets/images/blue.png";
import Brown from "../../assets/images/brown.png";



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
        this.setState({
            giveFeeds: false,
        });
    };

    //get give feedback data
    getGiveFeedsUserData = async () => {
        let url = `/api/method/erpnext.feedback_api.get_feedback_provide?user=`;
        try {
            let resp = await axios.get(url + sessionStorage.getItem("user"));
            console.log(resp);
            this.setState({
                giveFeedsData: resp.data.message,
            });
        } catch (err) {
            console.error(err);
        }
    };

    //get Receive feeds data
    getReciveFeedsUserData = async () => {
        let url = `/api/method/erpnext.feedback_api.get_feedback_receive?user=`;
        try {
            let resp = await axios.get(url + sessionStorage.getItem("user"));
            this.setState({
                reciveFeedsData: resp.data.message,
            });
        } catch (err) {
            console.error(err);
        }
    };
    //get user details
    getUserDetail = async () => {
        let url = `/api/method/erpnext.feedback_api.user_detail?user=`;
        try {
            let resp = await axios.get(url + sessionStorage.getItem("user"));
            this.setState({
                userDeatil: resp.data.message[0],
            });
        } catch (err) {
            console.error(err);
        }
    };
    componentDidMount() {
        this.getGiveFeedsUserData();
        this.getReciveFeedsUserData();
        this.getUserDetail();
    }
    render() {
        let cards = this.state.giveFeedsData.map((info, index) => {
            return (
                <Col sm={4} md={4} lg={3} key={index}>
                    <Card info={info} btnText='Give Feeds' />
                </Col>
            );
        });
        let feedsGivenList = <FeedbackGivenBy info={this.state.reciveFeedsData} />;
        return (
            <div>
                <Navigationbar userDetail={this.state.userDeatil} />
                <Container fluid={false}>
                    <br />
                    <Tab giveFeeds={this.state.giveFeeds} giveFeedsToggleHandler={this.giveFeedsToggleHandler} feedGivenToggle={this.feedGivenToggle} />
                    <Row>
                        <Col sm={12} md={12} lg={12} xs={12}>
                            <Row>{this.state.giveFeeds ? cards : feedsGivenList}</Row>
                        </Col>
                        <Col sm={12} md={12} lg={4}></Col>
                    </Row>
                    <br />
                    <br />
                    <hr />
                    <Row>
                        <span style={{ color: "black", fontSize: "15px", margin: "0 20px" }}>
                            <img src={Red} alt='designation' style={{ width: "10px" }} />
                            &nbsp;&nbsp;Designation
                        </span>
                        <span style={{ color: "black", fontSize: "15px", margin: "0 20px" }}>
                            &nbsp;
                            <img src={Green} alt='designation' style={{ width: "10px" }} />
                            &nbsp;&nbsp;Department
                        </span>
                        <span style={{ color: "black", fontSize: "15px", margin: "0 20px" }}>
                            &nbsp;
                            <img src={Blue} alt='designation' style={{ width: "10px" }} />
                            &nbsp;&nbsp;Branch
                        </span>
                        <span style={{ color: "black", fontSize: "15px", margin: "0 20px" }}>
                            &nbsp;
                            <img src={Brown} alt='designation' style={{ width: "10px" }} />
                            &nbsp;&nbsp;Email
                        </span>
                    </Row>
                    <hr />
                </Container>
                <Footer />
            </div>
        );
    }
}

export default Dashboard;
