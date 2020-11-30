import React from "react";
import { Row, Col, Button, Card } from "react-bootstrap";
import ScoreBoard from "../score_board/score_board";

const view = (props) => {
  let list = (
    <ul type="none" className="p-0">
      {props.data.detail.map((x, i) => {
        return (
          <li key={i} >
            <Row style={{ margin: "3px 0" }}>
              <Col lg={10}>
                {x.content}
              </Col>
              <Col lg={2}>
              <span style={{ float: "right" }}>
                  <ScoreBoard
                    qid={x.id}
                    class={(x.id, "score")}
                    scoreUpdate={props.scoreUpdate}
                  />
                </span>
              </Col>
            </Row>
            <hr />
          </li>
        );
      })}
    </ul>
  );
  return (
    <Card>
      <Card.Body>
        <Card.Title className="title">
          <strong>{props.index + 1}. </strong>
          <span>{props.data.title}</span>
        </Card.Title>
        {list}
        {props.data.detail[0].id !== props.laztId ? (
          <Button
            className="btn-primary btn-sm"
            onClick={() => props.incrementIndex("next")}
            style={{ float: "right" }}
          >
            Next
          </Button>
        ) : (
          <Button
            className="btn-primary btn-sm"
            onClick={() => props.incrementIndex("submit")}
            style={{ float: "right" }}
          >
            Submit
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default view;
