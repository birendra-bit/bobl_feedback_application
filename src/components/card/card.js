import React from "react";
import { Card, Button } from "react-bootstrap";
import "./card.css";
import { Link } from "react-router-dom";
import imgUrlMale from "../../assets/images/user-male-icon.png";
import imgUrlFemale from "../../assets/images/female-user.jpeg";

const Cards = (props) => {
    const { info } = props;
    if (!info) return <strong>No Data to Display</strong>;

    return (
        <Card sm={12} md={12} lg={4} className='m-1 text-center pt-1 user-card'>
            <Card.Img
                style={{
                    width: "90px",
                    height: "90px",
                    borderRadius: "50%",
                    margin: "15px auto 0px auto",
                }}
                className='user-photo-on-card'
                src={info.image ? "http://192.168.70.38" + info.image : info.gender === "Male" ? imgUrlMale : imgUrlFemale}
            />
            <Card.Body id='card-body'>
                <Card.Title style={{ fontSize: "15px", marginTop: "10px" }}>{info.employee_name} </Card.Title>
                <Card.Text style={{ fontSize: "12px" }}>
                    <span className='card-bio-label'>{info.designation} </span>
                    <br />
                    <span className='card-bio-label'>{info.department}</span>
                    <br />
                    <span className='card-bio-label'>{info.branch}</span>
                    <br />
                    <span className='card-bio-label'>{info.email}</span>
                </Card.Text>
                {info.status === "Pending" ? (
                    <Link to={`/feedback/${info.employee}/${info.employee_name}/${info.designation}`}>
                        <Button className='btn-primary btn-block view-give-feed-btn' style={{ padding: "3px", fontSize: "11px", borderRadius: "40px" }}>
                            Give Feeds
                        </Button>
                    </Link>
                ) : (
                    // <Link to={`/view/${info.employee}`}>
                    <Button disabled={true} className='btn-success btn-block view-give-feed-btn' style={{ padding: "3px", fontSize: "11px", borderRadius: "40px" }}>
                        View Feeds
                    </Button>
                    // </Link>
                )}
            </Card.Body>
        </Card>
    );
};

export default Cards;
