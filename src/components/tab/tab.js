import React from "react";
import "./tab.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const tab = (props) => {
  return (
    <div>
      <div className="d-flex tab">
        <span
          className={props.giveFeeds ? "active" : null}
          onClick={props.giveFeedsToggleHandler}
        >
          Give Feeds &#10146;
        </span>
        &nbsp;&nbsp; | &nbsp;&nbsp;
        <span
          className={props.giveFeeds ? null : "active"}
          onClick={props.feedGivenToggle}
        >
          Feeds Given By &#10146;
        </span>
      </div>
      <hr />
    </div>
  );
};

export default tab;
