import React from "react";
import { Card, Button } from "react-bootstrap";
import "./card.css";
import { Link } from "react-router-dom";
import imgUrlMale from "../../assets/images/user-male-icon.png";
import imgUrlFemale from "../../assets/images/female-user.jpeg";

const Cards = (props) => (
  <Card sm={12} md={12} lg={4} className="m-1 text-center pt-1 card">
    <Card.Img
      style={{
        width: "90px",
        height: "90px",
        borderRadius: "50%",
        margin: "15px auto 0px auto",
      }}
      src={
        props.info.image
          ? "http://192.168.70.38" + props.info.image
          : props.info.gender === "Male"
          ? imgUrlMale
          : imgUrlFemale
      }
    />
    <Card.Body>
      <Card.Title style={{ fontSize: "11px" }}>
        {props.info.employee_name}{" "}
      </Card.Title>
      <Card.Text style={{ fontSize: "10px" }}>
        Designation:{props.info.designation} <br />
        Department:{ props.info.department}<br/>
        Branch: {props.info.branch}
        <br />
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
