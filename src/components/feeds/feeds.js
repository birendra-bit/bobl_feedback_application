import React from "react";
import { Row, Col } from "react-bootstrap";
import UL from "./ul";

const feeds = (props) => {
  let ol = (<ol type="A">
              {props.data.detail.map((x,i)=>{
                return <li key={i}>
                  <Row>
                    <Col lg={8}>{x}</Col>
                    <Col><span className="badge badge-info">6</span></Col>
                  </Row>
                </li>
              })}
          </ol>)
  return (
    <div>
       <strong>{props.index+1}</strong> {props.data.title}
       {ol}
    </div>
  );
};

export default feeds;
