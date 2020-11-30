import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const viewContent = () => (
  <div className="mt-5">
    <Card className="m-auto" style={{ width: "50%" }}>
      <Card.Body>
        <Card.Title>Your FeedBack Subbmission is Successful</Card.Title>
      </Card.Body>
      <Link to="/dashboard">
        <Button className="btn-primary btn-block">OK</Button>
      </Link>
    </Card>
  </div>
);

export default viewContent;
