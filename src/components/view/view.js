import React from "react";
import { Row, Col, Button, Card } from "react-bootstrap";
import ScoreBoard from "../score_board/score_board";

const view = (props) => {
  let list = (
    <ul type="none" className="p-0">
      {props.data.detail.map((x, i) => {
        return (
          <li key={i}>
            <Row style={{ margin: "3px 0" }}>
              <Col lg={10}>{x.content}</Col>
              <Col lg={2}>
                <span style={{ float: "right" }}>
                  <ScoreBoard
                    qid={x.id}
                    className={(x.id, "score")}
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
    <React.Fragment>
      <Card border="secondary">
        <Card.Body>
          <Card.Title className="title">
            <strong>{props.index + 1}. </strong>
            <span>{props.data.title}</span>
          </Card.Title>
          {list}
          {(props.pIndex === 0) & (props.index === 0) ? (
            ""
          ) : (
            <Button
              className="btn-primary btn-sm"
              onClick={props.decrementIndex}
              style={{ float: "left" }}
            >
              Previous
            </Button>
          )}
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
      </Card><br/>
      <span>
        Satisfactory : <span className="badge badge-info">1</span>
        &nbsp;&nbsp; Good : <span className="badge badge-info">2</span>
        &nbsp;&nbsp; Very Good : <span className="badge badge-info">3</span>
        &nbsp;&nbsp; Excellent : <span className="badge badge-info">4</span>
        &nbsp;&nbsp; Outstanding : <span className="badge badge-info">5</span>
      </span>
    </React.Fragment>
  );
};

export default view;
