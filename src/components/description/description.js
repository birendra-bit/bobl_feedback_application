import React from "react";
import "./description.css";
import { Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Moment from "react-moment";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

const Description = (props) => {
  const { description, feedbackSetting } = props;
  let des = description.map((x, i) => {
    return (
      <div key={i}>
        <h3>{x.corporate_ds}</h3>
        {x.competency.map((c, i) => {
          return (
            <div key={i}>
              <h6>{i + 1 + ". " + c.title}</h6>
              <ul type="none">
                {c.explanation.split("<br/>").map((v, i) => {
                  return <li key={i}>{v}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>
    );
  });
  return (
    <Col>
      <div className="description">
        <h4 style={{ textAlign: "center" }}>
          Important &nbsp;
          <FontAwesomeIcon
            style={{ color: "#17a2b8" }}
            icon={faExclamationCircle}
          />
        </h4>
        <span
          className="d-flex"
          style={{ fontSize: "15px", fontWeight: "bolder", color: "#5600ff" }}
        >
          <p>Title: {feedbackSetting.title}. &nbsp;&nbsp;</p>
          <p>
            From:
            <Moment format="D MMMM YYYY">{feedbackSetting.start_date}</Moment>
          </p>
          &nbsp;&nbsp;
          <p>
            To:
            <Moment format="D MMMM YYYY">{feedbackSetting.end_date}</Moment>
          </p>
          &nbsp;&nbsp;
          <p>Status:{feedbackSetting.status}</p>
        </span>
        {des}
      </div>
    </Col>
  );
};

export default Description;
