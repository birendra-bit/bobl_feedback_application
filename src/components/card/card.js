import React from "react";
import { Card, Button } from "react-bootstrap";
import UserImage from "../../assets/images/user-male-icon.png";
import "./card.css";
import { Link } from "react-router-dom";

const Cards = (props) => (
  <Card sm={12} md={12} lg={4} className="m-1 text-center pt-1 card">
    <Card.Img
      className="m-auto"
      style={{ width: "70px", height: "70px" }}
      src={ UserImage}
    ></Card.Img>
    <Card.Body>
      <Card.Title style={{ fontSize: "11px" }}>{props.info.employee_name} </Card.Title>
      <Card.Text style={{ fontSize: "10px" }}>
        Designation:{props.info.designation} <br />
        Department: {props.info.department} <br />
        Branch: {props.info.branch}
        Email: {props.info.email}
      </Card.Text>
      {props.info.feedsGiven ? (
        <Link to={`/feedback/${props.info.employee}`}>
          <Button
            className="btn-success btn-block"
            style={{ padding: "3px", fontSize: "11px", borderRadius: "40px" }}
          >
            View Feeds
          </Button>
        </Link>
      ) : (
        <Link to={`/view/${props.info.employee}`}>
          <Button
            className="btn-primary btn-block"
            style={{ padding: "3px", fontSize: "11px", borderRadius: "40px" }}
          >
            Give Feeds
          </Button>
        </Link>
      )}
    </Card.Body>
  </Card>
);

export default Cards;
