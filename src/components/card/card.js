import React from "react";
import { Card, Button } from "react-bootstrap";
import "./card.css";
import { Link } from "react-router-dom";
import imgUrlMale from "../../assets/images/user-male-icon.png";
import imgUrlFemale from "../../assets/images/female-user.jpeg";

const Cards = (props) => {
  const {info} = props
  if (!info)
    return <strong>No Data to Display</strong>
  return (
    <Card sm={12} md={12} lg={4} className="m-1 text-center pt-1 card">
      <Card.Img
        style={{
          width: "90px",
          height: "90px",
          borderRadius: "50%",
          margin: "15px auto 0px auto",
        }}
        src={
          info.image
            ? "http://192.168.70.38" + info.image
            : info.gender === "Male"
            ? imgUrlMale
            : imgUrlFemale
        }
      />
      <Card.Body>
        <Card.Title style={{ fontSize: "12px" }}>
          {info.employee_name}
        </Card.Title>
        <Card.Text style={{ fontSize: "12px" }}>
          Designation: {info.designation} <br />
          Department: {info.department}
          <br />
          Branch: {info.branch}
          <br />
          Email: {info.email}
        </Card.Text>
        {info.status === "Pending" ? (
          <Link to={`/feedback/${info.employee}`}>
            <Button
              className="btn-primary btn-block"
              style={{ padding: "3px", fontSize: "11px", borderRadius: "40px" }}
            >
              Give Feeds
            </Button>
          </Link>
        ) : (
          <Button
            className="btn-success btn-block"
            disabled={true}
            style={{ padding: "3px", fontSize: "11px", borderRadius: "40px" }}
          >
            Status: Feedback Given
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default Cards;
