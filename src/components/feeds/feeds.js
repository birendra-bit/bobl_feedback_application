import React from "react";
import { Row, Col } from "react-bootstrap";
import './feeds.css'


const feeds = (props) => {
  let ol = (<ol type="A">
              {props.data.detail.map((x,i)=>{
                return <li key={i}>
                  <Row>
                    <Col lg={10}>{x}</Col>
                    <Col lg={2}><span className="badge badge-info">6</span></Col>
                  </Row>
                </li>
              })}
          </ol>)
  return (
    <div>
       <div className="title"><strong>{props.index+1}. </strong><span >{props.data.title}</span></div>
       {ol}
    </div>
  );
};

export default feeds;
