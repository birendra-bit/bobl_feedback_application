import React, { useEffect } from "react";
import "./score_board.css";
import $ from "jquery";

function Score(props) {
    useEffect(() => {
        // the following has to be in a condition in order to check where it is being called from.
        // It can be called from view/give_feeds OR review/review
        props.review_or_feed ? $(".score").css("background", "transparent") : console.log();
        props.review_or_feed ? $(".score").css("color", "black") : console.log();

        props.data_info.detail.map((d) => {
            if (d.score !== "") {
                let id = d.id + d.score;
                $("#" + id).css("background", "#28a745 ");
                $("#" + id).css("color", "white");
            }
        });
    });

    function handleChange(id) {
        $("." + props.qid).css("background", "transparent");
        $("." + props.qid).css("color", "black");
        $("#" + id).css("background", "#28a745");
        $("#" + id).css("color", "white");
    }
    let class_name = props.qid + " score";
    return (
        <React.Fragment>
            <p
                className={class_name}
                id={props.qid + "1"}
                onClick={() => {
                    handleChange(props.qid + "1");
                    props.scoreUpdate(props.qid, 1);
                }}
            >
                1
            </p>
            <p
                className={class_name}
                id={props.qid + "2"}
                onClick={() => {
                    handleChange(props.qid + "2");
                    props.scoreUpdate(props.qid, 2);
                }}
            >
                2
            </p>
            <p
                className={class_name}
                id={props.qid + "3"}
                onClick={() => {
                    handleChange(props.qid + "3");
                    props.scoreUpdate(props.qid, 3);
                }}
            >
                3
            </p>
            <p
                className={class_name}
                id={props.qid + "4"}
                onClick={() => {
                    handleChange(props.qid + "4");
                    props.scoreUpdate(props.qid, 4);
                }}
            >
                4
            </p>
            <p
                className={class_name}
                id={props.qid + "5"}
                onClick={() => {
                    handleChange(props.qid + "5");
                    props.scoreUpdate(props.qid, 5);
                }}
            >
                5
            </p>
        </React.Fragment>
    );
}
export default Score;
