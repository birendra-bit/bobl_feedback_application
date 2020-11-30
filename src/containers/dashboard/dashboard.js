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
      giveFeedsData:[],
      reciveFeedsData:[],
      giveFeeds: true,
      feedsGiven: false,
      userDeatil:{}
    };
  }

  //handle toggle
  giveFeedsToggleHandler = () => {
    this.setState(preState=>({
      giveFeeds: true
    }))
  };
  feedGivenToggle =()=>{
    this.setState(preState=>({
      giveFeeds: false
    }))
  }

//get give feedback data
getGiveFeedsData = async ()=>{
  let url = `/api/method/erpnext.feedback_api.get_feedback_provide?user=`
  try{
    let resp = await axios.get(url+sessionStorage.getItem('user'))
    this.setState({
      giveFeedsData:resp.data.message
    })
  }
  catch (err){
    alert('something went wrong',err)
  }
}

//get Receive feeds data
getReciveFeedsData =async ()=>{
  let url = `/api/method/erpnext.feedback_api.get_feedback_receive?user=`
  try{
    let resp = await axios.get(url+sessionStorage.getItem('user'))
    console.log(resp)
    this.setState({
      reciveFeedsData:resp.data.message
    })
  }
  catch (err){
    alert('something went wrong',err)
  }
}
//get user details
getUserDetail = async ()=>{
  let url = `/api/method/erpnext.feedback_api.user_detail?user=`;
  try{
    let resp = await axios.get(url+sessionStorage.getItem('user'))
    this.setState({
      userDeatil:resp.data.message[0]
    })
  }
  catch (err){
    alert('something went wrong',err)
  }
}
  componentDidMount(){
    this.getGiveFeedsData()
    this.getReciveFeedsData()
    this.getUserDetail()
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
      <div>
        <Navigationbar userDetail = {this.state.userDeatil}/>
        <Container fluid={false}>
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
