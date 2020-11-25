import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import "./score_board.css";
import $ from "jquery";

function Score(props) {
    function handleChange(id) {
        console.log(id);
        $("." + props.qid).css("background", "transparent");
        $("." + props.qid).css("color", "black");
        $("#" + id).css("background", "#28a745");
        $("#" + id).css("color", "white");
        $("#" + id).addClass("active");
    }
    let class_name = props.qid + " score";
    return (
        <React.Fragment>
            <p bool='false' className={class_name} id={props.qid + "one"} onClick={() => handleChange(props.qid + "one")}>
                1
            </p>
            <p className={class_name} id={props.qid + "two"} onClick={() => handleChange(props.qid + "two")}>
                2
            </p>
            <p className={class_name} id={props.qid + "three"} onClick={() => handleChange(props.qid + "three")}>
                3
            </p>
            <p className={class_name} id={props.qid + "four"} onClick={() => handleChange(props.qid + "four")}>
                4
            </p>
            <p className={class_name} id={props.qid + "five"} onClick={() => handleChange(props.qid + "five")}>
                5
            </p>
        </React.Fragment>
    );
}
export default Score;
