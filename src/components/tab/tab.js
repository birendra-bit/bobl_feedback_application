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
          Give Feeds
        </span>
        &nbsp;&nbsp; | &nbsp;&nbsp;
        <span
          className={props.giveFeeds ? null : "active"}
          onClick={props.feedGivenToggle}
        >
          Feeds Given By
        </span>
      </div>
      <hr />
    </div>
  );
};

export default tab;
