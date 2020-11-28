import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import ScoreBoard from '../score_board/score_board'

const view = (props) => {
  let list = (
    <ul type="none">
      {props.data.detail.map((x, i) => {
        return (
          <li key={i}>
            <Row style={{ margin: "3px 0" }}>
              <Col lg={12}>
                {x.content}
                {/* {x.score ? (
                  <span className="badge badge-info" style={{ float: "right" }}>
                    6
                  </span>
                ) : ( */}
                  <span style={{ float: "right" }}>
                    <ScoreBoard qid={x.id} class={(x.id, "score")} scoreUpdate={props.scoreUpdate} />
                  </span>
                {/* )} */}
              </Col>
            </Row>
            <hr />
          </li>
        );
      })}
    </ul>
  );
  return (
    <div>
      <div className="title">
        {/* <strong>{props.index + 1}. </strong> */}
        <span>{props.data.title}</span>
      </div>
      {list}
      {props.data.detail[0].id !== props.laztId ? (
        <Button
          className="btn-primary"
          onClick={()=> props.incrementIndex('next')}
          style={{ float: "right" }}
        >
          Next
        </Button>
      ) : (
        <Button
          className="btn-primary"
          onClick={()=> props.incrementIndex('submit')}
          style={{ float: "right" }}
        >
          Submit
        </Button>
      )}
    </div>
  );
};

export default view;
