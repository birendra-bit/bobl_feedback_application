import React, { Component, useEffect } from "react";
import "./score_board.css";
import $ from "jquery";

function Score(props) {
    useEffect(() => {
        $("." + props.qid).css("background", "transparent");
        $("." + props.qid).css("color", "black");
    });

    function handleChange(id) {
        console.log(props);
        console.log("props qid ---->", id);
        $("." + props.qid).css("background", "transparent");
        $("." + props.qid).css("color", "black");
        $("#" + id).css("background", "#28a745");
        $("#" + id).css("color", "white");
    }
    let class_name = props.qid + " score";
    console.log("this is the class name: =>", class_name);
    return (
        <React.Fragment>
            <p
                className={class_name}
                id={props.qid + "one"}
                onClick={() => {
                    handleChange(props.qid + "one");
                    props.scoreUpdate(props.qid, 1);
                }}
            >
                1
            </p>
            <p
                className={class_name}
                id={props.qid + "two"}
                onClick={() => {
                    handleChange(props.qid + "two");
                    props.scoreUpdate(props.qid, 2);
                }}
            >
                2
            </p>
            <p
                className={class_name}
                id={props.qid + "three"}
                onClick={() => {
                    handleChange(props.qid + "three");
                    props.scoreUpdate(props.qid, 3);
                }}
            >
                3
            </p>
            <p
                className={class_name}
                id={props.qid + "four"}
                onClick={() => {
                    handleChange(props.qid + "four");
                    props.scoreUpdate(props.qid, 4);
                }}
            >
                4
            </p>
            <p
                className={class_name}
                id={props.qid + "five"}
                onClick={() => {
                    handleChange(props.qid + "five");
                    props.scoreUpdate(props.qid, 5);
                }}
            >
                5
            </p>
        </React.Fragment>
    );
}
export default Score;
