import React from "react";
import "./tab.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleDown,
  faPen,
  faInfo,
} from "@fortawesome/free-solid-svg-icons";

const tab = (props) => {
  const {
    tabSwitcher,
    showDescription,
    giveFeeds,
    isThereFeedsGiver,
    feedsGiven,
  } = props;
  return (
    <div>
      <div className="d-flex tab">
        <span
          className={giveFeeds ? "active" : null}
          onClick={() => tabSwitcher("giveFeeds")}
          style={{
            background: "#8080805c",
            boxShadow: "3px 3px 15px #cececeb0, -3px -3px 15px",
          }}
          id="give-span"
        >
          Give Feedback &nbsp;
          <FontAwesomeIcon icon={faPen} />
        </span>
        &nbsp;
        {isThereFeedsGiver ? (
          <span
            className={feedsGiven ? "active" : null}
            onClick={() => tabSwitcher("feedsGiven")}
            style={{
              background: "#8080805c",
              boxShadow: "3px 3px 15px #cececeb0, -3px -3px 15px",
            }}
            id="view-span"
          >
            Feedback Given By &nbsp;
            <FontAwesomeIcon icon={faArrowAltCircleDown} />
            &nbsp;
          </span>
        ) : (
          ""
        )}
        <span
          className={showDescription ? "active" : null}
          onClick={() => tabSwitcher("showDescription")}
          style={{
            background: "#8080805c",
            boxShadow: "3px 3px 15px #cececeb0, -3px -3px 15px",
          }}
          id="give-span"
        >
          Descriptions &nbsp;
          <FontAwesomeIcon icon={faInfo} />
        </span>
      </div>
      <hr id="tab-hr" />
    </div>
  );
};

export default tab;
