import React from "react";
import { Card, Button } from "react-bootstrap";
import "./card.css";
import { Link } from "react-router-dom";
import imgUrlMale from "../../assets/images/user-male-icon.png";
import imgUrlFemale from "../../assets/images/female-user.jpeg";
import Red from "../../assets/images/red.png";
import Green from "../../assets/images/green.png";
import Blue from "../../assets/images/blue.png";
import Brown from "../../assets/images/brown.png";

const Cards = (props) => (
    <Card sm={12} md={12} lg={4} className='m-1 text-center pt-1 card'>
        <Card.Img
            style={{
                width: "90px",
                height: "90px",
                borderRadius: "50%",
                margin: "15px auto 0px auto",
            }}
            src={props.info.image ? "http://192.168.70.38" + props.info.image : props.info.gender === "Male" ? imgUrlMale : imgUrlFemale}
        />
        <Card.Body>
            <Card.Title style={{ fontSize: "11px" }}>{props.info.employee_name} </Card.Title>
            <Card.Text style={{ fontSize: "10px" }}>
                <img src={Red} className='color-bio-info' alt='designation' />
                {props.info.designation} <br />
                <img src={Green} className='color-bio-info' alt='' />
                {props.info.department}
                <br />
                <img src={Blue} className='color-bio-info' alt='red-color' />
                {props.info.branch}
                <br />
                <img src={Brown} className='color-bio-info' alt='red-color' />
                {props.info.email}
            </Card.Text>
            {props.info.status === "Pending" ? (
                <Link to={`/feedback/${props.info.employee}`}>
                    <Button className='btn-primary btn-block' style={{ padding: "3px", fontSize: "11px", borderRadius: "40px" }}>
                        Give Feeds
                    </Button>
                </Link>
            ) : (
                <Link to={`/view/${props.info.employee}`}>
                    <Button className='btn-success btn-block' style={{ padding: "3px", fontSize: "11px", borderRadius: "40px" }}>
                        View Feeds
                    </Button>
                </Link>
            )}
        </Card.Body>
    </Card>
);

export default Cards;
