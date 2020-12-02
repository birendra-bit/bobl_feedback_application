import { data } from "jquery";
import React, { Component } from "react";
import { Col } from "react-bootstrap";
import Table from "./table";
// import Pagination from '../pagination/pagination'

class FeedbackReceivedList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: props.info,
      initialIndex: 0,
      endIndex: props.info.length - 1 > 10 ? 10 : props.info.length - 1,
      data: props.info
    };
  }
  // increment index to display next page
  incrementIndexHandler = () => {
    this.setState((prevState) => ({
      initialIndex: prevState.endIndex,
      endIndex:
        prevState.endIndex + 10 < prevState.lastIndex
          ? prevState.endIndex + 10
          : prevState.lastIndex
    }));
  };

  // decrement index to display previous page
  decrementIndexHandler = () => {
    this.setState(prevState=>({
      initialIndex: prevState.initialIndex - 10,
      endIndex: prevState.endIndex - 10
    }))
  };

  // sort data based on status
  sortDataHandler = (key)=>{
    if(key === 'Status')
      return this.setState(prevState=>({
        data: prevState.info,
        initialIndex:0,
        endIndex: prevState.info.length - 1 > 10 ? 10 : prevState.info.length - 1
      }))
    this.setState(prevState=>({
      data: prevState.info.filter(o=> o.status === key ),
      initialIndex:0
    }))
  }
 
 
  render() {
   
    return (
      <Col className="overflow-auto">
        <Table
          info={this.state.data.slice(this.state.initialIndex, this.state.endIndex)}
          incrementIndex={this.incrementIndexHandler}
          decrementIndex={this.decrementIndexHandler}
          sortData={this.sortDataHandler}
          initialIndex={this.state.initialIndex}
          endIndex={ this.state.data.length - 1 }
          lastIndex={this.state.data.length - 1 }
        />
      </Col>
    );
  }
}

export default FeedbackReceivedList;
