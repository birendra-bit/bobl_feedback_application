import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import View from "../../components/view/view";
import axios from "axios";
import Navigationbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import ViewContent from '../../components/view/viewcontent'


class ViewFeeds extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userDeatil: {},
      index: -1,
      data: [],
      childIndex:0
    };
  }
  //increment index to display next data
  incrementIndexHandler = () => {
    let pIndex = this.state.index
    let cIndex = this.state.childIndex
    let cLength = this.state.data[pIndex].competency.length
    // console.log(pIndex, cIndex)
    console.log(this.state.data)
    cIndex < cLength - 1 ? 
      this.setState((prevState) => ({
        childIndex : ++prevState.childIndex
      })) :
      this.setState((prevState) => ({
        index : prevState.index + 1,
        childIndex: 0
      }))
    console.log(this.state.index, this.state.childIndex)
    // console.log(this.state.index,this.state.childIndex,this.state.data[pIndex].competency[cIndex].length)

  };
  //decrement index to display previous data
  decrementIndexHandler = () => {
    this.setState((prevState) => ({
      childIndex: 0,
      index: prevState.index - 1
    }));
  };

  //submit data
  submitHandler = () => {};
  getQuestions = async () => {
    try {
      let res = await axios.get(
        "/api/method/erpnext.feedback_api.get_competency"
      );
      this.setState({ data: res.data.message, index: 0 });

      // console.log('state : ',this.state.data[0].corporate_ds)
    } catch (err) {
      alert("something went wrong", err);
    }
  };
  getUserDetail = async () => {
    let url = `/api/method/erpnext.feedback_api.user_detail?user=`;
    try {
      let resp = await axios.get(url + sessionStorage.getItem("user"));
      this.setState({
        userDeatil: resp.data.message[0],
      });
    } catch (err) {
      alert("something went wrong", err);
    }
  };
  componentDidMount() {
    this.getQuestions();
    this.getUserDetail();
  }
  render() {
    return (
      <React.Fragment>
        <Navigationbar userDetail={this.state.userDeatil} />
        <Container>
          {this.state.index >= 0 ? (
            <Row>
              <Col sm={12} md={12} lg={12} xs={12}>
                <Row>
                  <Col lg={12}>
                    <div>{this.state.data[this.state.index].corporate_ds}</div>
                    {
                      // this.state.index < this.state.data.length ?
                       <View data={this.state.data[this.state.index].competency[this.state.childIndex]} />
                      //  :<ViewContent/>
                    }
                  </Col>
                </Row>
                <Row>
                  <Col>
                    {this.state.index > 0 ? (
                      <Button
                        className="btn-primary"
                        onClick={this.decrementIndexHandler}
                      >
                        Previous
                      </Button>
                    ) : (
                      ""
                    )}
                    {  this.state.index < this.state.data.length ? (
                      <Button
                        className="btn-primary"
                        onClick={this.incrementIndexHandler}
                        style={{ float: "right" }}
                      >
                        Next
                      </Button>
                    ) : (
                      ""
                    )}
                    {/* {this.state.childIndex === this.state.data.length - 1 ? (
                      <Button
                        className="btn-primary"
                        onClick={this.submitHandler}
                        style={{ float: "right" }}
                      >
                        Submit
                      </Button>
                    ) : (
                      ""
                    )} */}
                  </Col>
                </Row>
              </Col>
            </Row>
          ) : (
            ""
          )}
        </Container>
        <Footer />
      </React.Fragment>
    );
  }
}

export default ViewFeeds;
