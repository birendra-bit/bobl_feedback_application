import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import UserImage from "../../assets/images/user-male-icon.png";
import "./card.css";

const Cards = (props) => (
  <Card sm={12} md={12} lg={4} className="m-1 text-center pt-1 card">
    <Card.Img
      className="m-auto"
      style={{ width: "70px", height: "70px" }}
      src={UserImage}
    ></Card.Img>
    <Card.Body>
      <Card.Title style={{ fontSize: "11px" }}>
        {props.info.name}{" "}
      </Card.Title>
      <Card.Text style={{ fontSize: "10px" }}>
        Designation:{props.info.designation} <br />
        Department: {props.info.department} <br />
        Email: {props.info.email}
      </Card.Text>
      <Button
        className="btn-primary btn-block"
        style={{ padding: "3px", fontSize: "11px", borderRadius: "40px" }}
      >
        {props.btnText}
      </Button>
    </Card.Body>
  </Card>
);

export default Cards;
