import React from "react";
import { Row, Col } from "react-bootstrap";
import "./feeds.css";
import ScoreBoard from "../score_board/score_board";
const feeds = (props) => {
    let ol = (
        <ol style={{ listStyleType: "none" }}>
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
                                    <span style={{ float: "right" }}>
                                        <ScoreBoard qid={x.id} class={(x.id, "score")} scoreUpdate={props.scoreUpdate} />
                                    </span>
                                )}
                            </Col>
                        </Row>
                        <hr />
                    </li>
                );
            })}
        </ol>
    );
    return (
        <div>
            <div className='title'>
                <strong>{props.index + 1}. </strong>
                <span>{props.data.title}</span>
            </div>
            {ol}
        </div>
    );
};

export default feeds;
