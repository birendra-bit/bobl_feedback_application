import React from "react";
import {Row, Col } from "react-bootstrap";


const view = (props) => {
    let list = (
        <ul>
            {props.data.detail.map((x, i) => {
                return (
                    <li key={i}>
                        <Row style={{ margin: "3px 0" }}>
                            <Col lg={12}>
                                {x.content}
                                {x.score ? (
                                    <span className='badge badge-info' style={{ float: "right" }}>
                                        6
                                    </span>
                                ) : (
                                    <span style={{ float: "right" }}>No score
                                        {/* <ScoreBoard qid={x.id} class={(x.id, "score")} scoreUpdate={props.scoreUpdate} /> */}
                                    </span>
                                )}
                            </Col>
                        </Row>
                        <hr />
                    </li>
                );
            })}
        </ul>
    )
  return(
      <div>
          <div className='title'>
                {/* <strong>{props.index + 1}. </strong> */}
                <span>{props.data.title}</span>
            </div>
            {list}
      </div>
  )
};

export default view;
