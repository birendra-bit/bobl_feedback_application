import React from "react";
import "./description.css";
import { Col} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamationCircle
} from "@fortawesome/free-solid-svg-icons";


const Description = (props) => {
  // console.log(props.description)
  const { description, toggleDescription } = props;
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
          {des}
        </div>
      </Col>
  );
};

export default Description;
