import React from "react";
import "./tab.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleDown, faPen , faInfo} from "@fortawesome/free-solid-svg-icons";

const tab = (props) => {
    const { tabSwitcher, showDescription,giveFeeds,feedsGiven} = props
    return (
        <div>
            <div className='d-flex tab'>
                <span className={showDescription ? "active" : null} onClick={()=> tabSwitcher('showDescription')} style={{ background: "#8080805c" }} id='give-span'>
                        Descriptions &nbsp;
                        <FontAwesomeIcon icon={faInfo} />
                </span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className={giveFeeds ? "active" : null} onClick={()=>tabSwitcher('giveFeeds')} style={{ background: "#8080805c" }} id='give-span'>
                    Give Feedback &nbsp;
                    <FontAwesomeIcon icon={faPen} />
                </span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className={feedsGiven ? "active" : null } onClick={()=>tabSwitcher('feedsGiven')} style={{ background: "#8080805c" }} id='view-span'>
                    Feedback Given By &nbsp;
                    <FontAwesomeIcon icon={faArrowAltCircleDown} />
                </span>
            </div>
            <hr id='tab-hr' />
        </div>
    );
};

export default tab;
