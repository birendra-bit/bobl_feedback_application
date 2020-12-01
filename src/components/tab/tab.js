import React from "react";
import "./tab.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleDown, faPen } from "@fortawesome/free-solid-svg-icons";

const tab = (props) => {
    return (
        <div>
            <div className='d-flex tab'>
                <span className={props.giveFeeds ? "active" : null} onClick={props.giveFeedsToggleHandler} style={{ background: "#8080805c" }} id='give-span'>
                    Give Feeds &nbsp;
                    <FontAwesomeIcon icon={faPen} />
                </span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className={props.giveFeeds ? null : "active"} onClick={props.feedGivenToggle} style={{ background: "#8080805c" }} id='view-span'>
                    Feeds Given By &nbsp;
                    <FontAwesomeIcon icon={faArrowAltCircleDown} />
                </span>
            </div>
            <hr id='tab-hr' />
        </div>
    );
};

export default tab;
